import { getCollection } from 'astro:content';

// Published posts, newest first. Drafts never reach the build.
export const posts = async () => (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
export const fmtDate = (d) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
