import { sp, slug, familyMd, mdResponse } from '../../lib/catalogue.mjs';

export const getStaticPaths = () => sp.families.map((f) => ({ params: { family: slug(f.name) }, props: { f } }));
export const GET = ({ props }) => mdResponse(familyMd(props.f));
