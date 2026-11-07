// Makes the share images, public/og/<kind>/<slug>.png at 1200x630, for every blog post, event and guide (drafts too,
// so the test site has them). Renders src/pages/og/[kind]/[slug].astro on a local dev server and screenshots it with
// headless Playwright. Run it after adding or changing a post; scripts/check-og.mjs fails the build if one is missing.
//   npm run og            every entry
//   npm run og -- <slug>  only these
import { spawn } from 'node:child_process';
import { mkdirSync, readdirSync } from 'node:fs';
import { chromium } from 'playwright';

const root = new URL('..', import.meta.url).pathname;
const PORT = 4336;
const only = process.argv.slice(2);
const jobs = ['blog', 'events', 'guides']
  .flatMap((kind) => readdirSync(`${root}src/content/${kind}`).filter((f) => f.endsWith('.md')).map((f) => [kind, f.slice(0, -3)]))
  .filter(([, slug]) => !only.length || only.includes(slug));

const dev = spawn(`${root}node_modules/.bin/astro`, ['dev', '--port', String(PORT), '--host', '127.0.0.1', '--ignore-lock'], {
  cwd: root, env: { ...process.env, OG_PAGES: '1', SHOW_DRAFTS: '1' }, stdio: ['ignore', 'pipe', 'inherit'],
});
try {
  await new Promise((ok, fail) => {
    dev.stdout.on('data', (d) => /ready in|Local/.test(d) && ok());
    dev.on('exit', () => fail(new Error('astro dev exited before it was ready')));
  });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [kind, slug] of jobs) {
    const res = await page.goto(`http://127.0.0.1:${PORT}/og/${kind}/${slug}`, { waitUntil: 'networkidle' });
    if (!res.ok()) throw new Error(`/og/${kind}/${slug} returned ${res.status()}`);
    await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });
    await page.evaluate(() => document.fonts.ready);
    mkdirSync(`${root}public/og/${kind}`, { recursive: true });
    await page.locator('.og').screenshot({ path: `${root}public/og/${kind}/${slug}.png` });
    console.log(`public/og/${kind}/${slug}.png`);
  }
  await browser.close();
} finally {
  dev.kill();
}
