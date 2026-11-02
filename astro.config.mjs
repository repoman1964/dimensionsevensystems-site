// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dimensionsevensystems.com',
  adapter: cloudflare(),
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  prefetch: true,
  // Pages from the previous site.
  redirects: {
    '/services': '/',
    '/about': '/',
    '/conversion-systems': '/',
    '/conversion-review': '/contact',
    '/our-work': '/',
  },
});
