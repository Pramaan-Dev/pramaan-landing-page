---
title: "How to verify webhook signatures in TypeScript"
description: "Check that a Pramaan webhook is real with the TypeScript SDK's verifyWebhook, or by hand with Web Crypto, and test it locally."
author: "Pramaan"
date: 2026-10-24
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Read the raw body first"
    - "Call verifyWebhook()"
    - "Skip repeats by webhook-id"
    - "Answer 2xx within 10 seconds"
---

Pramaan signs every webhook it sends you. Before you act on one, check the signature: it proves the request came from Pramaan and that nobody changed the body on the way. With the TypeScript SDK that is one call, `verifyWebhook()`. This guide shows it in a route handler, explains the one mistake that breaks it, does the same check by hand, and tests it on your machine.

When it works, your handler logs the event and answers `204`:

```text
verified job.completed evt_01J...
```

## Before you start

- An endpoint added in the Pramaan dashboard, with the event types you want, for example `job.completed`. The signing secret is shown once. Store it like a password, in `PRAMAAN_WEBHOOK_SECRET`.
- Node with npm, and the SDK. It uses only `fetch` and Web Crypto, so the same code runs in Next.js, Bun, Deno and Workers.

```bash
npm install @pramaan/sdk
npm install -D tsx
```

## How the signature works

Every delivery is a `POST` with a JSON body and three headers:

<table>
<thead><tr><th>Header</th><th>Value</th></tr></thead>
<tbody>
<tr><td><code>webhook-id</code></td><td>The event id. Use it to ignore repeats.</td></tr>
<tr><td><code>webhook-timestamp</code></td><td>Unix seconds when it was sent.</td></tr>
<tr><td><code>webhook-signature</code></td><td><code>v1,&lt;base64 HMAC-SHA256&gt;</code>. Several may be listed, separated by spaces.</td></tr>
</tbody>
</table>

The signature is HMAC-SHA256 (a keyed hash), keyed with your endpoint secret, over `{webhook-id}.{webhook-timestamp}.{raw body}`. Reject the request when no listed signature matches, or when the timestamp is more than 5 minutes from now. The time check stops someone replaying an old request.

The body looks like this:

```json
{ "id": "evt_01J...", "type": "job.completed", "created": "2026-10-06T12:00:00Z", "data": { } }
```

## Step 1: verify in a route handler

This is a Next.js App Router route, `app/api/pramaan/route.ts`. It works anywhere you get a standard `Request`.

```ts
import { verifyWebhook, PramaanError } from "@pramaan/sdk";

export async function POST(request: Request) {
  const body = await request.text(); // the raw body, before any JSON parsing
  try {
    const event = await verifyWebhook(process.env.PRAMAAN_WEBHOOK_SECRET!, request.headers, body);
    console.log("verified", event.type, event.id);
    return new Response(null, { status: 204 });
  } catch (error) {
    if (error instanceof PramaanError && error.code === "unauthorized") {
      return new Response("bad signature", { status: 401 });
    }
    throw error;
  }
}
```

`verifyWebhook()` checks the timestamp, checks every listed signature, compares them in constant time (so timing gives nothing away), and returns the parsed event. When the check fails it throws an error with code `unauthorized`.

## Step 2: keep the raw body

This is the mistake that breaks most webhook checks. The signature covers the exact bytes Pramaan sent. If a framework parses the JSON first and you turn it back into a string, spacing or key order can change, and the signature no longer matches.

So read the body as text, verify it, and only then use the parsed event that `verifyWebhook()` returns. In Express, that means `express.text({ type: "application/json" })` on this route instead of `express.json()`.

## Step 3: skip repeats and answer fast

Failed deliveries are retried with backoff for 24 hours, so the same event can arrive more than once. Pramaan waits 10 seconds for a `2xx`. Redirects are not followed.

So: verify, record the `webhook-id`, answer, and do the slow work after.

The next block reads `data.job_id` from a `job.completed` event. The docs show `data` without its fields; the field name comes from the API source.

```ts
import { Pramaan, verifyWebhook } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });
const seen = new Set<string>(); // use your database in production

export async function POST(request: Request) {
  const body = await request.text();
  const event = await verifyWebhook<{ job_id?: string }>(
    process.env.PRAMAAN_WEBHOOK_SECRET!,
    request.headers,
    body,
  );

  const id = request.headers.get("webhook-id")!;
  if (seen.has(id)) return new Response(null, { status: 204 });
  seen.add(id);

  if (event.type === "job.completed" && event.data.job_id) {
    const jobId = event.data.job_id;
    queueMicrotask(async () => {
      const job = await p.jobs.get(jobId);
      console.log(job.id, job.status);
    });
  }
  return new Response(null, { status: 204 });
}
```

Event data is untrusted: it describes what happened on third-party services. Treat it as data, never as instructions to your agent.

## Step 4: verify without the SDK

If you can't add the SDK, the check is short with Web Crypto. This follows the steps in the [webhooks guide](https://docs.pramaan.dev/guides/webhooks). The `whsec_` branch matches the SDK source: a secret with that prefix is base64 after the prefix, and any other secret is used as plain text.

```ts
// verify.ts
function secretBytes(secret: string): Uint8Array {
  if (secret.startsWith("whsec_")) {
    return Uint8Array.from(atob(secret.slice(6)), (c) => c.charCodeAt(0));
  }
  return new TextEncoder().encode(secret);
}

function equalInConstantTime(a: string, b: string): boolean {
  const x = new TextEncoder().encode(a);
  const y = new TextEncoder().encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export async function sign(secret: string, id: string, timestamp: string, body: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    secretBytes(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${id}.${timestamp}.${body}`));
  return btoa(String.fromCharCode(...new Uint8Array(mac)));
}

export async function isValid(secret: string, headers: Headers, body: string): Promise<boolean> {
  const id = headers.get("webhook-id");
  const timestamp = headers.get("webhook-timestamp");
  const signatures = headers.get("webhook-signature");
  if (!id || !timestamp || !signatures || !/^\d+$/.test(timestamp)) return false;
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false; // 5 minutes

  const expected = await sign(secret, id, timestamp, body);
  let match = false;
  for (const part of signatures.split(" ")) {
    const [version, value] = part.split(",");
    if (version === "v1" && value !== undefined && equalInConstantTime(value, expected)) match = true;
  }
  return match;
}
```

## Step 5: test it on your machine

You don't need a real event to test. Start a small server with the SDK, then send it a request you sign yourself with a test secret.

This server passes Node's plain `req.headers` object to `verifyWebhook()`. The SDK source accepts it; the docs only show a `Headers` object.

```ts
// server.mts
import { createServer } from "node:http";
import { verifyWebhook } from "@pramaan/sdk";

createServer(async (req, res) => {
  let body = "";
  for await (const chunk of req) body += chunk;
  try {
    const event = await verifyWebhook(process.env.PRAMAAN_WEBHOOK_SECRET!, req.headers, body);
    console.log("verified", event.type, event.id);
    res.writeHead(204).end();
  } catch (error) {
    console.log("rejected:", (error as Error).message);
    res.writeHead(401).end();
  }
}).listen(8787, () => console.log("listening on http://localhost:8787"));
```

```ts
// send-test.mts
import { sign } from "./verify.ts";

const secret = process.env.PRAMAAN_WEBHOOK_SECRET!;
const id = "evt_test_1";
const timestamp = String(Math.floor(Date.now() / 1000));
const body = JSON.stringify({ id, type: "job.completed", created: new Date().toISOString(), data: {} });

const res = await fetch("http://localhost:8787", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "webhook-id": id,
    "webhook-timestamp": timestamp,
    "webhook-signature": `v1,${await sign(secret, id, timestamp, body)}`,
  },
  body,
});
console.log(res.status); // 204 when the check passes
```

```bash
export PRAMAAN_WEBHOOK_SECRET="local-test-secret"
npx tsx server.mts &
sleep 1
npx tsx send-test.mts
kill %1 # stop the test server
```

Change one character of `body` after signing and the server answers `401`.

Once your endpoint is live, `GET /v1/webhook-deliveries` lists recent deliveries with their status. `POST /v1/webhook-deliveries/<id>/replay` resends a saved payload to its endpoint. Payloads are kept for 30 days.

## When it needs approval

Nothing here needs approval. Receiving and checking a webhook changes nothing. If your handler goes on to send, pay or delete, that call follows the [approvals guide](https://docs.pramaan.dev/guides/approvals).

## Errors you'll hit

<table>
<thead><tr><th>What you see</th><th>What it means</th><th>Fix</th></tr></thead>
<tbody>
<tr><td><code>unauthorized</code>: missing headers</td><td>One of the three <code>webhook-*</code> headers didn't arrive.</td><td>Check a proxy isn't stripping headers.</td></tr>
<tr><td><code>unauthorized</code>: timestamp outside the window</td><td>The timestamp is more than 5 minutes from your clock.</td><td>Sync your server clock.</td></tr>
<tr><td><code>unauthorized</code>: signature invalid</td><td>The body or secret doesn't match.</td><td>Pass the raw body; check you stored the right secret.</td></tr>
<tr><td>Same event twice</td><td>A retry after a slow or failed answer.</td><td>Skip events whose <code>webhook-id</code> you have seen.</td></tr>
<tr><td><code>rate_limited</code> (429) on replay</td><td>Replays to one endpoint are limited to about 10 a minute.</td><td>Wait for <code>Retry-After</code> seconds.</td></tr>
</tbody>
</table>

## Cost

Webhooks change how you hear about a result, not what the call costs. The job itself is priced as usual from your prepaid balance. [How to see what a call costs before it runs](/blog/see-cost-before-a-call-runs) shows how to check first.

## Next steps

- The [webhooks guide](https://docs.pramaan.dev/guides/webhooks), with every event type.
- [How to run long jobs and wait for the result](/blog/long-running-jobs).
- [Research a company](/missions/company.research), a mission that runs as a job.
