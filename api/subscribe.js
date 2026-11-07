// Newsletter sign-up: adds the address to Resend as a contact (and to RESEND_SEGMENT_ID when set).
// Env, set in the Vercel project: RESEND_API_KEY (required), RESEND_SEGMENT_ID (optional).
// Without the key it answers 503 "not_ready" and stores nothing.
// ponytail: no rate limit beyond the honeypot; add one (Vercel Firewall rule) if bots find it.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const reply = (status, code, message) => Response.json({ code, message }, { status });

export default {
  async fetch(request) {
    if (request.method !== 'POST') return reply(405, 'method_not_allowed', 'Send a POST with an email address.');
    const body = await request.json().catch(() => ({}));
    if (body.website) return reply(200, 'ok', 'Thanks, you are on the list.'); // honeypot: bots fill the hidden field
    const email = String(body.email || '').trim().toLowerCase();
    if (email.length > 254 || !EMAIL.test(email)) return reply(400, 'invalid_email', 'That email address doesn\'t look right. Check it and try again.');

    const key = process.env.RESEND_API_KEY;
    if (!key) return reply(503, 'not_ready', 'Sign-ups open soon. Try again in a few days.');
    const segment = process.env.RESEND_SEGMENT_ID;
    const res = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false, ...(segment && { segments: [{ id: segment }] }) }),
    });
    // Already on the list counts as success; the person sees the same thanks.
    if (res.ok || res.status === 409) return reply(200, 'ok', 'Thanks, you are on the list.');
    console.error('resend contacts', res.status, (await res.text()).slice(0, 300));
    return reply(502, 'upstream_error', 'We couldn\'t add you just now. Try again in a minute.');
  },
};
