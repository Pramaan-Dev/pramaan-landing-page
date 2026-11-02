import { guides, TYPE, fmtDay } from '../../lib/resources.mjs';

export async function getStaticPaths() {
  return (await guides()).map((g) => ({ params: { slug: g.id }, props: { g } }));
}
export const GET = ({ props: { g } }) =>
  new Response(`# ${g.data.title}\n\n${TYPE[g.data.type]}, ${fmtDay(g.data.date)}${g.data.file ? `\nDownload: ${new URL(g.data.file, 'https://www.pramaan.dev')}` : ''}\n\n${g.body}\n`, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
