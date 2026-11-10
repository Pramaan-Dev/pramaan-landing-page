---
title: "How to read Pramaan errors and fix each one"
description: "Every Pramaan REST API error code, what it means and the fix, plus a fetch helper that retries only when it is safe."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Read code, next and retryable"
    - "Check effect before retrying an action"
    - "Retry with the same Idempotency-Key"
---

Every Pramaan error has the same shape, and three fields tell you what to do: `code` says what went wrong, `next` says what to do about it, and `retryable` says whether the same request may work later. This post lists all 13 REST error codes and gives you a small helper that retries only when it is safe.

Here is a typical error (example response):

```json
{
  "error": {
    "code": "invalid_request",
    "message": "query is missing or invalid.",
    "request_id": "req_01J...",
    "next": "Fix the fields named in the message and send again.",
    "retryable": false,
    "effect": "none"
  }
}
```

## What you'll build

A `callPramaan()` function for the REST API that returns the result, or throws an error you can act on. It retries rate limits and outages for reads, and refuses to blindly resend an action that may already have happened.

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`.
- Node 18 or later (for the built-in `fetch`).
- The [errors guide](https://docs.pramaan.dev/guides/errors) open in a tab, if you like the source.

## The fields in every error

<table>
  <thead>
    <tr><th>Field</th><th>What it tells you</th></tr>
  </thead>
  <tbody>
    <tr><td><code>code</code></td><td>What went wrong. Branch on this, never on <code>message</code>.</td></tr>
    <tr><td><code>message</code></td><td>Plain words, at most 200 characters. It never echoes your input.</td></tr>
    <tr><td><code>next</code></td><td>A short instruction for your next step, at most 200 characters. Good to show your agent as is.</td></tr>
    <tr><td><code>retryable</code></td><td><code>true</code> means the same request may succeed later.</td></tr>
    <tr><td><code>effect</code></td><td><code>"none"</code> means nothing was sent, charged or created. Absent means something may have happened.</td></tr>
    <tr><td><code>request_id</code></td><td>Quote it to support if an error keeps happening.</td></tr>
  </tbody>
</table>

Some codes add more: `slot` with `connection_required`, `reason` with `spend_cap_reached` and `forbidden`, and `required_micro` and `top_up` when your balance is short.

## Why `effect` matters most

`effect: "none"` means every source refused before acting, or the request was refused before anything ran (validation, approval, balance, limits). You can change the request and try again.

When `effect` is missing, a send, payment or purchase may have happened. Check whether it happened first. If you do retry, send the same `Idempotency-Key` so Pramaan returns the stored result instead of acting twice. Pramaan remembers a key for 24 hours.

## Every error code

<table>
  <thead>
    <tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>invalid_request</code></td><td>400</td><td>The body is wrong, or a required header like <code>Idempotency-Key</code> is missing.</td><td>Fix the fields named in the message; the superpower's reference page shows the schema.</td></tr>
    <tr><td><code>unauthorized</code></td><td>401</td><td>The API key is wrong or revoked.</td><td>Send a valid key in the Authorization header.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your prepaid balance or daily spend cap can't cover the request. <code>reason</code> says which.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
    <tr><td><code>forbidden</code></td><td>403</td><td>You lack access, or the call needs a member's approval (<code>reason: "approval_required"</code>).</td><td>Ask an account owner for access or the approval named in the message.</td></tr>
    <tr><td><code>addendum_required</code></td><td>403</td><td>A hiring or court-record superpower needs the background-checks addendum. Nothing ran or was charged.</td><td>An owner or admin accepts it in Settings, or with <code>POST /v1/workspace/addenda</code>.</td></tr>
    <tr><td><code>not_found</code></td><td>404</td><td>The id is wrong. With <code>reason</code> <code>not_available</code>, it is listed but not served yet.</td><td>Check the id, or use a similar superpower.</td></tr>
    <tr><td><code>job_not_found</code></td><td>404</td><td>The job id is wrong, belongs to another account, or is older than 7 days.</td><td>Use the id returned when you started the job.</td></tr>
    <tr><td><code>conflict</code></td><td>409</td><td>An <code>Idempotency-Key</code> was reused with a different body, or the first request is still running (<code>retryable: true</code>).</td><td>Retry with the same key; use a new key only for a new request.</td></tr>
    <tr><td><code>connection_required</code></td><td>409</td><td>No account is connected for the returned <code>slot</code>.</td><td>Connect the account with <code>apps.connection.start</code>, then retry.</td></tr>
    <tr><td><code>rate_limited</code></td><td>429</td><td>Too many requests.</td><td>Wait for the <code>Retry-After</code> seconds, then retry; if absent, wait a minute.</td></tr>
    <tr><td><code>internal</code></td><td>500</td><td>Something broke on Pramaan's side.</td><td>Retry later; if it keeps failing, email support@pramaan.dev with the <code>request_id</code>.</td></tr>
    <tr><td><code>upstream_unavailable</code></td><td>503</td><td>The service behind the superpower failed.</td><td>Retry with backoff; check whether an action happened first.</td></tr>
    <tr><td><code>upstream_timeout</code></td><td>503</td><td>The call took longer than 25 seconds.</td><td>Retry, or use a smaller request; for actions, check first and reuse the same key.</td></tr>
  </tbody>
</table>

One more code, `approval_required`, only reaches agents on the MCP server, when their client can't show you the approval question. Over REST and the SDK the same situation is `forbidden` with `reason: "approval_required"`.

## When `retryable` is false

Five codes can come back with `retryable: false`. Then `next` never asks for a retry:

<table>
  <thead>
    <tr><th>Code</th><th>What to do instead</th></tr>
  </thead>
  <tbody>
    <tr><td><code>conflict</code></td><td>Check the current state named in the message; use a new key only for a new request.</td></tr>
    <tr><td><code>rate_limited</code></td><td>Wait for the limit named in the message to reset before sending more.</td></tr>
    <tr><td><code>internal</code></td><td>Contact support@pramaan.dev with the <code>request_id</code>; the same request will not help.</td></tr>
    <tr><td><code>upstream_unavailable</code></td><td>Don't resend it as is. Check whether an action happened, then use a similar superpower or contact support.</td></tr>
    <tr><td><code>upstream_timeout</code></td><td>Check whether an action happened before sending anything again.</td></tr>
  </tbody>
</table>

## Step 1: Write a helper that reads the error

This helper sends one request, retries up to two times when it is safe, and throws the error object otherwise. Pass an idempotency key for actions; it is required for anything that sends, posts, pays or deletes.

```js
// pramaan.mjs
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function callPramaan(id, body, { idempotencyKey, isAction = false } = {}) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`https://api.pramaan.dev/v1/capabilities/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PRAMAAN_API_KEY}`,
        "Content-Type": "application/json",
        ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
      },
      body: JSON.stringify(body),
    });

    // 200 is a result; 202 is a job or an approval that is waiting.
    if (res.ok) return res.json();

    const { error } = await res.json();
    const nothingHappened = error.effect === "none";
    const safeToRetry = error.retryable && (!isAction || nothingHappened);

    if (!safeToRetry || attempt >= 2) {
      throw Object.assign(new Error(error.message), { status: res.status, ...error });
    }

    const retryAfter = Number(res.headers.get("retry-after"));
    await sleep(retryAfter > 0 ? retryAfter * 1000 : 2 ** attempt * 1000);
  }
}
```

Reads retry on any `retryable` error. Actions retry only when `effect` is `"none"`, and always with the same key, so a retry can never send twice.

## Step 2: Act on each code

Catch the error and branch on `code`. Here [`web.search`](/superpowers/web-search) is sent with an empty query, which fails validation.

```js
// main.mjs
import { callPramaan } from "./pramaan.mjs";

try {
  const result = await callPramaan("web.search", { query: "" });
  console.log(result);
} catch (error) {
  switch (error.code) {
    case "invalid_request":
      console.error("Fix the request:", error.message);
      break;
    case "connection_required":
      console.error("Connect an account for slot:", error.slot);
      break;
    case "spend_cap_reached":
      console.error("Not enough balance:", error.reason, error.required_micro);
      break;
    default:
      console.error(error.code, error.next, error.request_id);
  }
}
```

Run it with `node main.mjs`. You should see `Fix the request:` followed by the message.

## Errors in the SDK

The TypeScript SDK throws `PramaanError` with `code`, `message`, `next`, `retryable`, `requestId`, `status`, `effect` and, for `connection_required`, `slot`. It retries `429`, `5xx` and network failures for read-only superpowers, up to two times with the same `Idempotency-Key`. It never retries a superpower that sends or pays; you decide.

```ts
// sdk-errors.mts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

try {
  await p.web.search({ query: "" });
} catch (error) {
  if (error instanceof PramaanError && error.code === "invalid_request") {
    console.log(error.message, error.requestId);
  }
}
```

## Cost

A call that fails is free. A failed job and a job stopped at its time limit are free too. To avoid `spend_cap_reached` before it happens, send the same body to the superpower's estimate route; nothing runs and nothing is charged:

```bash
curl https://api.pramaan.dev/v1/capabilities/web.search/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "open source CRM"}'
```

It returns `price_max_micro` (in micro-USD, where 1,000,000 is one US dollar), your `balance_micro` and `can_run`.

## Next steps

- [Errors guide](https://docs.pramaan.dev/guides/errors): the source for every code here.
- [Idempotency guide](https://docs.pramaan.dev/guides/idempotency): how keys make retries safe.
- [Prices and limits](https://docs.pramaan.dev/guides/pricing): estimates, holds and the daily cap.
