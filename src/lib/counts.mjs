// Catalogue totals for page copy and the footer, read from the built data so no page types a number by hand.
import { readFileSync } from 'node:fs';

const total = (kind) => JSON.parse(readFileSync(`${process.cwd()}/public/data/${kind}.json`, 'utf8')).total;
export const COUNTS = { superpowers: total('superpowers'), missions: total('missions') };
export const fmt = (n) => n.toLocaleString('en-GB');
