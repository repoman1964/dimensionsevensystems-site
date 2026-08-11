import type { APIRoute } from "astro";
import { site } from "../../data/site";

export const prerender = false;

type Body = {
  name?: string;
  email?: string;
  company?: string;
  source?: string;
  volume?: string;
  leak?: string;
  phone?: string;
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
    source: String(form.get("source") || "").trim(),
    volume: String(form.get("volume") || "").trim(),
    leak: String(form.get("leak") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
  };
}

export const POST: APIRoute = async ({ request, locals }) => {
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
  const volume = fields.volume?.trim() || "";

  if (!name || !email || !company || !volume) {
    return json(
      { ok: false, message: "Name, email, company, and volume are required." },
      400,
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, message: "A valid email is required." }, 400);
  }

  const to = site.email;
  const subject = `Conversion Review request, ${company}`;
  const text = [
    `New Conversion Review request`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Source: ${fields.source || "-"}`,
    `Volume: ${volume}`,
    `Phone: ${fields.phone || "-"}`,
    ``,
    `Suspected leak:`,
    fields.leak || "-",
  ].join("\n");

  /**
   * Email delivery:
   * - Set RESEND_API_KEY in Cloudflare Pages env to send via Resend.
   * - CONTACT_TO_EMAIL optional override for destination.
   * Without a provider key, we accept the lead and log it (dev / pre-wiring).
   */
  const env = (locals as { runtime?: { env?: Record<string, string> } })?.runtime
    ?.env;
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
    console.info("[conversion-review]", { to: toEmail, subject, text });
  }

  return json({
    ok: true,
    message:
      "Request received. We will follow up by email shortly." +
      (!apiKey
        ? " (Email provider not configured yet, submission logged.)"
        : ""),
  });
};
