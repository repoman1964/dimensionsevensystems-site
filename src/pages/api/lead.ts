import type { APIRoute } from "astro";
import { env as cfEnv } from "cloudflare:workers";
import { site } from "../../data/site";

export const prerender = false;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const FIELDS = ["business", "name", "phone", "trade", "city", "email", "sms_consent", "website"] as const;
type Fields = Record<(typeof FIELDS)[number], string>;

export const POST: APIRoute = async ({ request }) => {
  let f: Fields;
  try {
    const form = await request.formData();
    f = Object.fromEntries(FIELDS.map((k) => [k, String(form.get(k) || "").trim()])) as Fields;
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  // Honeypot: bots fill the hidden "website" field. Pretend it worked.
  if (f.website) return json({ ok: true });

  if (!f.business || !f.name || !f.phone || !f.trade || !f.city) {
    return json({ ok: false, message: "Please fill in every field marked *." }, 400);
  }
  if (f.phone.replace(/\D/g, "").length < 10) {
    return json({ ok: false, message: "Please enter a 10-digit mobile number." }, 400);
  }
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    return json({ ok: false, message: "That email doesn't look right." }, 400);
  }

  const smsConsent = f.sms_consent === "yes";
  const receivedAt = new Date().toISOString();
  // SMS consent is recorded with a timestamp so the opt-in can be shown later if asked.
  const consentLine = smsConsent ? `YES, checked on web form at ${receivedAt} for ${f.phone}` : "No";
  const lead = {
    business: f.business,
    name: f.name,
    phone: f.phone,
    trade: f.trade,
    city: f.city,
    email: f.email || null,
    sms_consent: smsConsent,
    received_at: receivedAt,
    source: "dimensionsevensystems.com",
  };
  const subject = `Build request: ${f.business} (${f.trade}, ${f.city})`;
  const text = [
    `New "Build mine free" request`,
    ``,
    `Business: ${f.business}`,
    `Name: ${f.name}`,
    `Mobile: ${f.phone}`,
    `Trade: ${f.trade}`,
    `City: ${f.city}`,
    `Email: ${f.email || "-"}`,
    `SMS consent: ${consentLine}`,
  ].join("\n");

  const env = cfEnv as unknown as Record<string, string | undefined>;
  const apiKey = env?.RESEND_API_KEY;
  const webhook = env?.LEAD_WEBHOOK_URL;
  let delivered = false;

  // Optional: forward to n8n (Telegram alert, CRM) when LEAD_WEBHOOK_URL is set.
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(env?.LEAD_WEBHOOK_SECRET ? { "X-Webhook-Secret": env.LEAD_WEBHOOK_SECRET } : {}),
        },
        body: JSON.stringify(lead),
      });
      delivered ||= res.ok;
      if (!res.ok) console.error("Lead webhook error:", res.status, await res.text());
    } catch (err) {
      console.error("Lead webhook failed:", err);
    }
  }

  // Optional: email via Resend when RESEND_API_KEY is set.
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: env?.CONTACT_FROM_EMAIL || "D7 Website <onboarding@resend.dev>",
          to: [env?.CONTACT_TO_EMAIL || site.email],
          ...(f.email ? { reply_to: f.email } : {}),
          subject,
          text,
        }),
      });
      delivered ||= res.ok;
      if (!res.ok) console.error("Resend error:", await res.text());
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  if (!webhook && !apiKey) {
    // Nothing configured (local dev): accept and log so the form still works.
    console.info("[lead]", text);
    delivered = true;
  }

  if (!delivered) {
    return json({ ok: false, message: "We couldn't send that just now." }, 502);
  }
  return json({ ok: true });
};
