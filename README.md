# dimensionsevensystems.com

Sales site for the **CallCatcher Site**: a $500, one-time website for home-service businesses, built before the
owner pays. Astro 7 on a Cloudflare Worker (`dimensionsevensystems-site`).

## Pages

| Route | Purpose |
|---|---|
| `/` | The sales page: hero, problem, what's included, Recent Jobs, how it works, pricing, comparison, live example + founder, FAQ, "Build my site free" form (`#start`) |
| `/contact` | Phone, text, email, and the same form |
| `/privacy`, `/terms`, `/sms` | Legal. **Business details and opt-in wording must match the 10DLC brand/campaign registration.** Change them together |
| `/api/lead` | Form endpoint (server-rendered) |

Old URLs (`/services`, `/about`, `/conversion-*`, `/our-work`, `/v/*`, `/watch/*`) redirect to `/` (or `/contact`).

Content lives in `src/data/site.ts` (business details, demo URL, trades list) and at the top of `src/pages/index.astro`
(features, steps, comparison rows, FAQs). Hero and section screenshots in `public/demo/` are of the sweet-tea-demo site.

## Form → you

`POST /api/lead` validates, records SMS consent with a timestamp, then delivers to whichever is configured
(Worker secrets, `npx wrangler secret put NAME`):

- `RESEND_API_KEY` (+ `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`): email
- `LEAD_WEBHOOK_URL` (+ optional `LEAD_WEBHOOK_SECRET`, sent as `X-Webhook-Secret`): JSON POST, e.g. to n8n for a Telegram alert

With neither set it only logs (fine locally, **not** in production: leads would be lost).

## Develop / deploy

```bash
npm install
npm run dev        # astro dev
npm run preview    # build + wrangler dev
npm run deploy     # build + wrangler deploy
```
