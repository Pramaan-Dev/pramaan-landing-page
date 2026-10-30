import { ms, missionMd, mdResponse } from '../../lib/catalogue.mjs';

export const getStaticPaths = () => ms.missions.map((m) => ({ params: { id: m.id }, props: { m } }));
export const GET = ({ props }) => mdResponse(missionMd(props.m));
