import { getCollection } from 'astro:content';

// Published events. Drafts never reach the build (SHOW_DRAFTS=1 is for local and test-site checks only).
export const events = async () => getCollection('events', (e) => !e.data.draft || process.env.SHOW_DRAFTS === '1');
// ponytail: "upcoming" is decided at build time; an event moves to Past on the next deploy after it ends
export const isPast = (e) => +(e.data.end || e.data.start) < Date.now();
export const split = (all) => ({
  upcoming: all.filter((e) => !isPast(e)).sort((a, b) => +a.data.start - +b.data.start),
  past: all.filter(isPast).sort((a, b) => +b.data.start - +a.data.start),
});
const TZ = { timeZone: 'Europe/London' };
export const fmtWhen = (e) => {
  const day = e.data.start.toLocaleDateString('en-GB', { ...TZ, weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
  const t = (d) => d.toLocaleTimeString('en-GB', { ...TZ, hour: '2-digit', minute: '2-digit' });
  return `${day}, ${t(e.data.start)}${e.data.end ? `-${t(e.data.end)}` : ''} London time`;
};
export const FORMAT = { online: 'Online', 'in-person': 'In person', hybrid: 'Online and in person' };
export const eventMd = (e) =>
  `# ${e.data.title}\n\nWhen: ${fmtWhen(e)}\nWhere: ${FORMAT[e.data.format]}, ${e.data.location}\nHost: ${e.data.host}\n${e.data.registerUrl ? `Register: ${e.data.registerUrl}\n` : ''}\n${e.body}\n`;
