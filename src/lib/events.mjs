import { getCollection } from 'astro:content';

// Published events. Drafts never reach the build (SHOW_DRAFTS=1 is for local and test-site checks only).
export const events = async () => getCollection('events', (e) => !e.data.draft || process.env.SHOW_DRAFTS === '1');
// ponytail: "upcoming" is decided at build time; an event moves to Past on the next deploy after it ends
export const isPast = (e) => +(e.data.end || e.data.start) < Date.now();
export const split = (all) => ({
  upcoming: all.filter((e) => !isPast(e)).sort((a, b) => +a.data.start - +b.data.start),
  past: all.filter(isPast).sort((a, b) => +b.data.start - +a.data.start),
});
const TZ = { timeZone: 'Europe/London' };
export const fmtWhen = (e) => {
  const day = e.data.start.toLocaleDateString('en-GB', { ...TZ, weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
  const t = (d) => d.toLocaleTimeString('en-GB', { ...TZ, hour: '2-digit', minute: '2-digit' });
  return `${day}, ${t(e.data.start)}${e.data.end ? `-${t(e.data.end)}` : ''} London time`;
};
// "Add to calendar" file; an event without an end time gets one hour
const icsDate = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const icsText = (s) => s.replace(/[\\;,]/g, (c) => '\\' + c).replace(/\n/g, '\\n');
export const eventIcs = (e) => [
  'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Pramaan//Events//EN', 'BEGIN:VEVENT',
  `UID:${e.id}@pramaan.dev`, `DTSTAMP:${icsDate(e.data.start)}`, `DTSTART:${icsDate(e.data.start)}`,
  `DTEND:${icsDate(e.data.end || new Date(+e.data.start + 3600e3))}`,
  `SUMMARY:${icsText(e.data.title)}`, `DESCRIPTION:${icsText(e.data.description)}`, `LOCATION:${icsText(e.data.location)}`,
  `URL:https://www.pramaan.dev/events/${e.id}`, 'END:VEVENT', 'END:VCALENDAR', '',
].join('\r\n');
export const FORMAT = { online: 'Online', 'in-person': 'In person', hybrid: 'Online and in person' };
export const eventMd = (e) =>
  `# ${e.data.title}\n\nWhen: ${fmtWhen(e)}\nWhere: ${FORMAT[e.data.format]}, ${e.data.location}\nHost: ${e.data.host}\n${e.data.registerUrl ? `Register: ${e.data.registerUrl}\n` : ''}\n${e.body}\n`;
