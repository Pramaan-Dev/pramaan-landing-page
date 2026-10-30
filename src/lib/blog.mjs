import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts never reach the build (SHOW_DRAFTS=1 is for local layout checks only).
export const posts = async () => (await getCollection('blog', (p) => !p.data.draft || process.env.SHOW_DRAFTS === '1')).sort((a, b) => +b.data.date - +a.data.date);
// One of four cover gradients, picked from the slug so a post always gets the same one
export const coverOf = (slug) => [...slug].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 4, 0);
export const metaLine = (p) => `${p.data.author} | ${p.data.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}`;
export const fmtDate = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
