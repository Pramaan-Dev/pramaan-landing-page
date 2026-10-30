import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, no adapter. `file` + `never` give the same URLs as Vercel cleanUrls: /skills, /legal/terms.
export default defineConfig({
  site: 'https://www.pramaan.dev',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      // legal drafts and the UI builder are noindex
      filter: (url) => !/\/(legal|ui-builder)(\/|$)/.test(url),
    }),
  ],
});
