import rss from '@astrojs/rss';
import { posts } from '../../lib/blog.mjs';

export async function GET(context) {
  return rss({
    title: 'Pramaan blog',
    description: 'Notes from the Pramaan team.',
    site: context.site,
    items: (await posts()).map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/blog/${p.id}` })),
  });
}
