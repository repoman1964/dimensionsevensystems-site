import type { APIRoute } from "astro";
import { env as cfEnv } from "cloudflare:workers";
import { site } from "../../data/site";

export const prerender = false;

type Body = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  topic?: string;
  message?: string;
  sms_consent?: string;
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function readFields(form: FormData): Body {
  return {
    name: String(form.get("name") || "").trim(),
    email: String(form.get("email") || "").trim(),
    company: String(form.get("company") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    topic: String(form.get("topic") || "").trim(),
    message: String(form.get("message") || "").trim(),
    sms_consent: String(form.get("sms_consent") || "").trim(),
  };
}

export const POST: APIRoute = async ({ request }) => {
  let fields: Body;

  const contentType = request.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      fields = (await request.json()) as Body;
    } else {
      fields = readFields(await request.formData());
    }
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const name = fields.name?.trim() || "";
  const email = fields.email?.trim() || "";
  const company = fields.company?.trim() || "";
  const topic = fields.topic?.trim() || "";
  const phone = fields.phone?.trim() || "";
  const smsConsent = fields.sms_consent === "yes";

  if (!name || !email || !company || !topic) {
    return json(
      { ok: false, message: "Name, email, business name, and topic are required." },
      400,
    );
  }

  if (smsConsent && !phone) {
    return json(
      { ok: false, message: "Enter a phone number to receive text messages." },
      400,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, message: "A valid email is required." }, 400);
  }

  const to = site.email;
  const subject = `Website inquiry, ${company}`;
  // SMS consent is recorded with a timestamp so the opt-in can be shown later if asked.
  const consentLine = smsConsent
    ? `YES, checked on web form at ${new Date().toISOString()} for ${phone}`
    : "No";
  const text = [
    `New website inquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${company}`,
    `Phone: ${phone || "-"}`,
    `Help with: ${topic}`,
    `SMS consent: ${consentLine}`,
    ``,
    `Message:`,
    fields.message || "-",
  ].join("\n");

  /**
   * Email delivery:
   * - Set RESEND_API_KEY in Cloudflare Pages env to send via Resend.
   * - CONTACT_TO_EMAIL optional override for destination.
   * Without a provider key, we accept the lead and log it (dev / pre-wiring).
   */
  const env = cfEnv as unknown as Record<string, string | undefined>;
  const apiKey = env?.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
  const toEmail =
    env?.CONTACT_TO_EMAIL || import.meta.env.CONTACT_TO_EMAIL || to;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env?.CONTACT_FROM_EMAIL || "D7 Website <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend error:", errText);
        return json(
          {
            ok: false,
            message:
              "Could not deliver email. Please try again or email us directly.",
          },
          502,
        );
      }
    } catch (err) {
      console.error("Email send failed:", err);
      return json(
        {
          ok: false,
          message:
            "Could not deliver email. Please try again or email us directly.",
        },
        502,
      );
    }
  } else {
    // No provider configured yet, accept submission so UX works in v1
    console.info("[contact]", { to: toEmail, subject, text });
  }

  return json({
    ok: true,
    message:
      "Message received. We'll be in touch within one business day.",
  });
};
