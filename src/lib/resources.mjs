import { getCollection } from 'astro:content';
import { posts } from './blog.mjs';
import { events, isPast, FORMAT } from './events.mjs';

// Guides: ebooks, whitepapers, reports. Drafts never reach the build (SHOW_DRAFTS=1 is for checks only).
export const guides = async () => (await getCollection('guides', (g) => !g.data.draft || process.env.SHOW_DRAFTS === '1')).sort((a, b) => +b.data.date - +a.data.date);
export const TYPE = { blog: 'Blog post', event: 'Event', ebook: 'Ebook', whitepaper: 'Whitepaper', report: 'Report' };
export const AUDIENCE = { business: 'Business teams', developers: 'Developers', everyone: 'Everyone' };
export const fmtDay = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' });

// Every resource as one flat list, newest first, for the /resources hub. og: its share image, used as the card cover.
export const allResources = async () => {
  const b = (await posts()).map((p) => ({ id: p.id, type: 'blog', href: `/blog/${p.id}`, og: `/og/blog/${p.id}.png`, title: p.data.title, description: p.data.description, date: p.data.date, audience: p.data.audience, roles: p.data.roles, note: '' }));
  const e = (await events()).map((x) => ({ id: x.id, type: 'event', href: `/events/${x.id}`, og: `/og/events/${x.id}.png`, title: x.data.title, description: x.data.description, date: x.data.start, audience: x.data.audience, roles: x.data.roles, note: isPast(x) ? 'Past' : FORMAT[x.data.format] }));
  const g = (await guides()).map((x) => ({ id: x.id, type: x.data.type, href: `/guides/${x.id}`, og: `/og/guides/${x.id}.png`, title: x.data.title, description: x.data.description, date: x.data.date, audience: x.data.audience, roles: x.data.roles, note: '' }));
  return [...b, ...e, ...g].sort((a, z) => +z.date - +a.date);
};
