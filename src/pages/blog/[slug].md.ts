import { posts, fmtDate } from '../../lib/blog.mjs';

export async function getStaticPaths() {
  return (await posts()).map((p) => ({ params: { slug: p.id }, props: { p } }));
}
export const GET = ({ props: { p } }) =>
  new Response(`# ${p.data.title}\n\n${p.data.author}, ${fmtDate(p.data.date)}\n\n${p.body}\n`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
