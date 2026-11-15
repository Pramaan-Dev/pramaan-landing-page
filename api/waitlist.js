// UI builder waitlist: adds the address to the Clerk waitlist (the same one app.pramaan.dev uses; you approve people there)
// and to a Mailmodo list for marketing email. Either one succeeding counts as success.
// Env, set in the Vercel project: CLERK_SECRET_KEY, MAILMODO_API_KEY, MAILMODO_LIST (the Mailmodo list name),
// PRAMAAN_API_KEY (a staff-org key; checks the inbox exists with people.email.verify before anything is saved).
// The check only ever blocks a clear "invalid"; if Pramaan is unset, slow or down, the person gets through.
// Only an address Pramaan calls "valid" is saved (Clerk waitlist with its notice, Mailmodo list). accept_all, unknown
// or unchecked addresses get the code but are saved nowhere and emailed nothing (no bounces); the page asks again next visit.
// With none set it answers 503 "not_ready" and stores nothing.
// ponytail: no rate limit beyond the honeypot; add a Vercel Firewall rule if bots find it.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const reply = (status, code, message) => Response.json({ code, message }, { status });

const toClerk = (key, email) => fetch('https://api.clerk.com/v1/waitlist_entries', {
  method: 'POST',
  headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ email_address: email, notify: true }),   // Clerk returns the existing entry if they are already on it
});
const toMailmodo = (key, list, email) => fetch('https://api.mailmodo.com/api/v1/addToList', {
  method: 'POST',
  headers: { mmApiKey: key, 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({ email, listName: list }),
});

// Returns valid | invalid | accept_all | unknown, or 'unchecked' when Pramaan is unset, slow or down.
const checkInbox = async (key, email) => {
  if (!key) return 'unchecked';
  try {
    const res = await fetch(`${process.env.PRAMAAN_API_URL || 'https://api.pramaan.dev'}/v1/capabilities/people.email.verify`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ email }),
      signal: AbortSignal.timeout(15000),   // a new address takes 5-8 s (the mail server is asked); repeats are cached and fast
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) { console.error('waitlist verify', res.status, JSON.stringify(body).slice(0, 300)); return 'unchecked'; }
    return (body.result ?? body).status || 'unchecked';
  } catch (e) { console.error('waitlist verify', String(e)); return 'unchecked'; }
};

export default {
  async fetch(request) {
    if (request.method !== 'POST') return reply(405, 'method_not_allowed', 'Send a POST with an email address.');
    const body = await request.json().catch(() => ({}));
    if (body.website) return reply(200, 'ok', 'You are on the waitlist.'); // honeypot: bots fill the hidden field
    const email = String(body.email || '').trim().toLowerCase();
    if (email.length > 254 || !EMAIL.test(email)) return reply(400, 'invalid_email', 'That email address doesn\'t look right. Check it and try again.');

    const { CLERK_SECRET_KEY: clerk, MAILMODO_API_KEY: mm, MAILMODO_LIST: list, PRAMAAN_API_KEY: pramaan } = process.env;
    const inbox = await checkInbox(pramaan, email);
    if (inbox === 'invalid') return reply(400, 'inbox_not_found', 'We couldn\'t find that inbox. Check the spelling and try again.');
    if (inbox !== 'valid') return reply(200, 'unconfirmed', 'Your code is unlocked. We couldn\'t confirm that inbox, so you\'re not on the waitlist yet.');
    const jobs = [clerk && ['clerk', toClerk(clerk, email)], mm && list && ['mailmodo', toMailmodo(mm, list, email)]].filter(Boolean);
    if (!jobs.length) return reply(503, 'not_ready', 'The waitlist opens soon. Try again in a few days.');

    const results = await Promise.allSettled(jobs.map(([, p]) => p));
    let ok = false;
    for (const [i, r] of results.entries()) {
      if (r.status === 'fulfilled' && r.value.ok) { ok = true; continue; }
      const detail = r.status === 'fulfilled' ? `${r.value.status} ${(await r.value.text()).slice(0, 300)}` : String(r.reason);
      console.error('waitlist', jobs[i][0], detail);
    }
    return ok ? reply(200, 'ok', 'You are on the waitlist.')
      : reply(502, 'upstream_error', 'We couldn\'t add you just now. Try again in a minute.');
  },
};
