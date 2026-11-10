---
title: "How to retry API calls safely with idempotency keys"
description: "Retry Pramaan REST API calls without sending twice: one Idempotency-Key per action, what a replay returns, and a retry loop in TypeScript."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Pick one key per action"
    - "Send it as Idempotency-Key"
    - "Retry with the same key"
    - "Use a new key only for a new action"
---

A network blip in the middle of a send leaves you guessing: did the email go out? Send an `Idempotency-Key` header with the call, and you can retry with the same key. Pramaan never runs that call twice.

This guide covers when the key is required, what a repeat returns, and a retry loop you can drop into your code.

## What you'll build

A TypeScript function that calls any Pramaan superpower over the REST API and retries it safely. A **superpower** is one action with a fixed request and result, like [`email.send`](/superpowers/email-sending) or [`web.search`](/superpowers/web-search).

When a retry finds the first call already finished, you get the stored response back, with no new charge:

```text
HTTP 200
Idempotent-Replayed: true
```

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Make one in the app under **Settings > Keys**.
- `curl` for the first step.
- Node.js 20 or later for the retry loop (it uses the built-in `fetch`). Run it with `npx tsx <file>.ts`.

## Step 1: Send an Idempotency-Key

The key is any string of 1 to 255 characters, for example a UUID. Pramaan remembers it for 24 hours.

```bash
curl https://api.pramaan.dev/v1/capabilities/email.send \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Idempotency-Key: order-1042-receipt" \
  -H "Content-Type: application/json" \
  -d '{"from": "shop@example.com", "to": "buyer@example.com", "subject": "Your receipt", "text": "Thanks!"}'
```

Run the same command twice. The second answer is the first one, replayed. This sends a real email, so it needs approval first: see [When it needs approval](#when-it-needs-approval) below.

## Step 2: Know when the key is required

Every superpower has an effect class. Superpowers with an external effect need the header:

- `external_reversible`
- `external_irreversible`
- `external_unknown_effect`

That's sending, posting, paying and deleting. A call to one of these without the header fails with `400 invalid_request`. For every other superpower, the key is optional, and a repeat with the same key returns the stored result without a new charge.

Each superpower's reference page in the [docs](https://docs.pramaan.dev) shows its effect class.

## Step 3: Know what a repeat returns

<table>
  <thead>
    <tr><th>Situation</th><th>Response</th></tr>
  </thead>
  <tbody>
    <tr><td>Same key, same body, first call finished</td><td>The stored response, with header <code>Idempotent-Replayed: true</code>. No new charge.</td></tr>
    <tr><td>Same key, first call still running</td><td><code>409 conflict</code> with <code>retryable: true</code>. Retry shortly.</td></tr>
    <tr><td>Same key, different body</td><td><code>409 conflict</code>. Use a new key for a new request.</td></tr>
    <tr><td>Same key on a superpower that runs as a job</td><td>The same <code>job_id</code> again, with <code>202</code>.</td></tr>
  </tbody>
</table>

A replay returns the stored response exactly, including its `ref` when the call created something.

## Step 4: Pick one key per action

The rule: one key per thing you mean to do, reused only to retry that thing.

Build the key from your own ids, so the same action always gets the same key, even after your process restarts:

```ts
const receiptKey = (orderId: string) => `order-${orderId}-receipt`;
const welcomeKey = (userId: string) => `user-${userId}-welcome`;

console.log(receiptKey("1042")); // order-1042-receipt
console.log(welcomeKey("u_77")); // user-u_77-welcome
```

A random UUID works too, as long as you store it with the action before the first try. A fresh key on every try defeats the point: each one is a new action.

## Step 5: Write the retry loop

Every Pramaan error has the same shape: `code`, `message`, `next`, `request_id`, `retryable` and sometimes `effect`. The loop uses two of them:

- `retryable: true` means the same request may succeed later.
- `effect: "none"` means nothing was sent, charged or created. When `effect` is absent, a send or payment may have happened.

```ts
const base = "https://api.pramaan.dev";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function callOnce(id: string, input: unknown, idempotencyKey: string, maxTries = 4) {
  for (let attempt = 1; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${base}/v1/capabilities/${encodeURIComponent(id)}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PRAMAAN_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
        body: JSON.stringify(input),
      });
    } catch (networkError) {
      // We don't know if it ran. The same key makes the retry safe.
      if (attempt >= maxTries) throw networkError;
      await sleep(1_000 * 2 ** attempt);
      continue;
    }

    const body = await res.json();
    if (res.ok) {
      return { status: res.status, replayed: res.headers.get("Idempotent-Replayed") === "true", body };
    }

    const error = body.error ?? {};
    if (error.retryable === true && attempt < maxTries) {
      const retryAfter = Number(res.headers.get("Retry-After"));
      await sleep(retryAfter > 0 ? retryAfter * 1_000 : 1_000 * 2 ** attempt);
      continue; // same key, same body
    }

    const happened = error.effect === "none" ? "nothing happened" : "it may have happened: check before sending again";
    throw new Error(`${error.code}: ${error.message} (${happened}). ${error.next ?? ""} request_id=${error.request_id}`);
  }
}

const result = await callOnce("web.search", { query: "open source CRM", limit: 3 }, "search-open-source-crm-2026-11-10");
console.log(result.status, result.replayed, result.body);
```

Run it twice in a row. The second run prints `true` for `replayed`, and you aren't charged again. The demo uses `web.search` because it's read-only and needs no approval.

The loop never changes the body or the key between tries. If it did, a retry would be a different request, and Pramaan would answer `409 conflict`.

## In the TypeScript SDK

With [`@pramaan/sdk`](https://docs.pramaan.dev/tools/sdk), pass the key in the call options:

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });
const order = { id: "1042" };

await p.run(
  "email.send",
  { from: "shop@example.com", to: "buyer@example.com", subject: "Your receipt", text: "Thanks!" },
  { idempotencyKey: `order-${order.id}-receipt` },
);
```

How the SDK handles keys:

- Without `idempotencyKey`, the SDK makes a random key for each `run`. Calling `run` again is then a new action. Pass your own key whenever you might retry.
- The SDK retries read-only superpowers on `429`, `5xx` and network failures, up to two times by default (`maxRetries`), with the same key each time. It never retries superpowers with an external effect. You decide when to retry those.

## When it needs approval

Idempotency and approval are separate. `email.send` acts outside, so it needs the key, and it also needs a person's approval before your agent sends it. Ask first, then send once with one key, and reuse that key on any retry. The approval is for those exact inputs, so a changed body is a new action that needs a new key and a new approval.

## Errors you'll hit

<table>
  <thead>
    <tr><th>Code</th><th>What it means</th><th>The fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>invalid_request</code> (400)</td><td>The <code>Idempotency-Key</code> is missing on a superpower that acts outside, or a field is wrong.</td><td>Add the header, or fix the fields named in the message.</td></tr>
    <tr><td><code>conflict</code> (409)</td><td>The first call is still running (<code>retryable: true</code>), or the key was reused with a different body.</td><td>Retry shortly with the same key, or use a new key for a new request.</td></tr>
    <tr><td><code>rate_limited</code> (429)</td><td>Too many requests.</td><td>Wait for <code>Retry-After</code> seconds, then retry with the same key.</td></tr>
    <tr><td><code>upstream_unavailable</code> (503)</td><td>The service behind the superpower failed.</td><td>Check whether an action happened, then retry with backoff and the same key.</td></tr>
    <tr><td><code>upstream_timeout</code> (503)</td><td>The call took longer than 25 seconds.</td><td>Check whether an action happened; retry with the same key if needed.</td></tr>
    <tr><td><code>internal</code> (500)</td><td>Something went wrong on Pramaan's side.</td><td>Retry later; quote the <code>request_id</code> if it keeps failing.</td></tr>
  </tbody>
</table>

## Cost

A replay is never charged again, and a call that fails isn't charged at all. You pay per call from a prepaid balance. To see the most a call can cost before you send it, post the same body to its estimate route. Nothing runs and no key is used:

```bash
curl https://api.pramaan.dev/v1/capabilities/web.search/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "open source CRM", "limit": 3}'
```

The answer has `price_max_micro` (micro-USD, where 1,000,000 is one US dollar), `balance_micro` and `can_run`.

## Next steps

- [Read the idempotency guide](https://docs.pramaan.dev/guides/idempotency).
- [Read the errors guide](https://docs.pramaan.dev/guides/errors) for every code and its `next` step.
- [Handle approvals](https://docs.pramaan.dev/guides/approvals) for superpowers that send or pay.
