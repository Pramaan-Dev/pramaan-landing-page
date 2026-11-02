import { events, eventIcs } from '../../lib/events.mjs';

export async function getStaticPaths() {
  return (await events()).map((e) => ({ params: { slug: e.id }, props: { e } }));
}
export const GET = ({ props: { e } }) => new Response(eventIcs(e), { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
