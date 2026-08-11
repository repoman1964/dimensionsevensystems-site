# Dimension Seven Systems — Website

Marketing site for **Dimension Seven Systems** (conversion systems company).

Built with **Astro** for **Cloudflare Pages**.

## Stack

- Astro 7 + `@astrojs/cloudflare`
- `@astrojs/sitemap`
- Design tokens from the D7 palette (see `src/styles/global.css`)
- Content in `src/data/*` (swap placeholders without editing layouts)

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage (14 sections) |
| `/conversion-systems` | Systems deep-dive |
| `/our-work` | Work / proof (pre-revenue placeholders) |
| `/about` | Founder-led about |
| `/conversion-review` | Booking + qualification form |
| `/privacy` | Privacy policy scaffold |
| `/terms` | Terms scaffold |

Campaign mode: `/conversion-review?campaign=1` uses a minimal header.

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
# or
npx wrangler pages dev
```

## Deploy (Cloudflare Pages)

1. Connect this repo to Cloudflare Pages (or `wrangler pages deploy`).
2. Build command: `npm run build`
3. Output: Astro Cloudflare adapter handles the worker + assets (see `wrangler.jsonc`).
4. Set env vars if using email delivery (below).

## Configuration placeholders

Edit `src/data/site.ts`:

- `email`, `calendlyUrl`, social links, founder fields
- Domain defaults to `https://dimensionsevensystems.com`

Content copy lives under `src/data/` (`problems`, `systems`, `faqs`, `products`, etc.).

## Conversion Review form → email

`POST /api/conversion-review` accepts the qualification form.

Without secrets, submissions are accepted and **logged** (so local UX works).

To send real email via [Resend](https://resend.com):

```bash
# Cloudflare Pages → Settings → Environment variables
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=hello@yourdomain.com
CONTACT_FROM_EMAIL=D7 Website <onboarding@resend.dev>
```

See `.env.example`.

## Logo

Temporary **D7** gradient mark is used in the header/footer. Drop the official logo into `public/` and update `Header.astro` / `Footer.astro` when ready.

## Analytics

Event hooks push to `window.d7Analytics` / `dataLayer`. No provider installed yet.

Events: `header_cta_clicked`, `hero_primary_cta_clicked`, `hero_secondary_cta_clicked`, `system_card_opened`, `product_link_clicked`, `founder_video_started`, `case_study_opened`, `conversion_review_started`, `conversion_review_submitted`, `calendar_booking_started`, `faq_opened`.
