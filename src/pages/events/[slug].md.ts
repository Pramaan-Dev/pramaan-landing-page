import { events, eventMd } from '../../lib/events.mjs';

export async function getStaticPaths() {
  return (await events()).map((e) => ({ params: { slug: e.id }, props: { e } }));
}
export const GET = ({ props: { e } }) => new Response(eventMd(e), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
