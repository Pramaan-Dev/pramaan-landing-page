// Fails the build if a hidden mission id appears anywhere in dist/.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const HIDDEN = ['candidate.background.check', 'candidate.employment.verify', 'worker.registration.verify', 'candidate.profile.authenticity', 'candidate.dev.profile'];
const dist = new URL('../dist', import.meta.url).pathname;
const hits = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (!/\.(png|jpe?g|webp|mp4|webm|ico)$/.test(name)) {
      const text = readFileSync(p, 'utf8');
      for (const id of HIDDEN) if (text.includes(id) || p.includes(id)) hits.push(`${p.slice(dist.length)}: ${id}`);
    }
  }
};
walk(dist);
if (hits.length) {
  console.error(`Hidden mission ids found in dist/:\n${hits.slice(0, 20).join('\n')}${hits.length > 20 ? `\n...and ${hits.length - 20} more` : ''}`);
  process.exit(1);
}
console.log('Hidden-id check passed.');
