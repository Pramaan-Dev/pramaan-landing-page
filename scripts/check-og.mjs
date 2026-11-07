// Fails the build if a blog post, event or guide has no 1200x630 share image in public/og/ (make them with `npm run og`).
import { existsSync, readdirSync, readFileSync } from 'node:fs';

const root = new URL('..', import.meta.url).pathname;
const errors = [];
for (const kind of ['blog', 'events', 'guides']) {
  for (const f of readdirSync(`${root}src/content/${kind}`).filter((n) => n.endsWith('.md'))) {
    const png = `public/og/${kind}/${f.slice(0, -3)}.png`;
    if (!existsSync(`${root}${png}`)) { errors.push(`missing ${png}`); continue; }
    const b = readFileSync(`${root}${png}`); // PNG header: width and height at bytes 16 and 20
    if (b.readUInt32BE(16) !== 1200 || b.readUInt32BE(20) !== 630) errors.push(`${png} is ${b.readUInt32BE(16)}x${b.readUInt32BE(20)}, expected 1200x630`);
  }
}
if (errors.length) {
  console.error(`Share images:\n${errors.join('\n')}\nRun \`npm run og\` and commit public/og/.`);
  process.exit(1);
}
console.log('Share images: all present.');
