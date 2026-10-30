import { sk, skillMd, mdResponse } from '../../../lib/catalogue.mjs';

export const getStaticPaths = () => sk.skills.map((s) => ({ params: { skill: s.name }, props: { s } }));
export const GET = ({ props }) => mdResponse(skillMd(props.s));
