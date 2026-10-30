import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, no adapter. `file` + `never` give the same URLs as Vercel cleanUrls: /skills, /legal/terms.
export default defineConfig({
  site: 'https://www.pramaan.dev',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // legal text must stay as written: no curly quotes, no auto-linked emails
  markdown: { gfm: false, smartypants: false },
  integrations: [
    sitemap({
      // legal drafts and the UI builder are noindex; /simple repeats the home page and was never listed
      filter: (url) => !/\/(legal|ui-builder|simple)(\/|$)/.test(url),
    }),
  ],
});
