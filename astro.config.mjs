import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, no adapter. `file` + `never` give the same URLs as Vercel cleanUrls: /skills, /legal/terms.
export default defineConfig({
  site: 'https://www.pramaan.dev',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  // /resources was the old all-in-one list; the blog hub now holds every type
  // the UI builder and UI inspiration were renamed on 2026-11-16; old links and shared designs keep working
  redirects: { '/resources': '/blog', '/ui-builder': '/design-system-builder', '/ui-inspiration': '/design-inspiration' },
  // legal text must stay as written: no curly quotes, no auto-linked emails
  markdown: { gfm: false, smartypants: false },
  integrations: [
    sitemap({
      // legal drafts and the design system builder are noindex; /simple repeats the home page and was never listed;
      // /ui-builder and /ui-inspiration are redirects
      filter: (url) => !/\/(legal|design-system-builder|ui-builder|ui-inspiration|simple)(\/|$)/.test(url),
    }),
  ],
});
