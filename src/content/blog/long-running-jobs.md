---
title: "How to run long jobs and wait for the result"
description: "Start a long-running Pramaan superpower as a job with the TypeScript SDK, wait for the result, cancel it, and handle failures."
author: "Pramaan"
date: 2026-10-19
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Start it with p.run()"
    - "Wait with p.jobs.wait()"
    - "Read result or error"
    - "Cancel if you change your mind"
---

Some superpowers take minutes, not seconds. Calling one starts a job: you get a job id straight away, and the result arrives when the work is done. This guide shows how to start a job with the TypeScript SDK, wait for it, read the result, cancel it and handle the ways it can fail.

The example uses [`web.research`](/superpowers/web-answers), which answers a research question from the live web with a summary and cited sources. The same code works for any long superpower, like [`web.crawl`](/superpowers/web-scraping).

What you'll have at the end:

```text
job_01J... running
job_01J... done
{ ...the research result... }
```

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Keep it on your server.
- Node with npm. The SDK uses only `fetch`, so it also runs in Bun, Deno and Workers.
- `tsx` to run the TypeScript files below.

```bash
export PRAMAAN_API_KEY="paste-your-key-here"
npm install @pramaan/sdk
npm install -D tsx
```

## Which superpowers run as jobs

A superpower that runs as a job says **Mode: async** on its reference page. `p.info()` tells you the same thing offline, with no request:

```ts
// info.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });
console.log(p.info("web.research")); // effect class, mode, whether it needs a connection
```

```bash
npx tsx info.mts
```

## Step 1: start the job

`p.run()` returns the result for quick superpowers and a `Job` for long ones. Give it an idempotency key so a retry returns the same job instead of starting a second one.

```ts
// start.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const job = await p.run(
  "web.research",
  { query: "How do open source CRMs make money?" },
  { idempotencyKey: "crm-research-2026-11-10" },
);
console.log(job);
```

Over HTTP the same call answers `202 Accepted` with a `job_id`, `"status": "running"` and `held_micro`, the amount set aside from your prepaid balance while the job runs.

## Step 2: wait for the result

`p.jobs.wait()` polls for you. It starts at 2 seconds and backs off to 30. Pass `timeoutMs` for how long you are willing to wait.

`chargedMicro` below is the SDK name for the job's `charged_micro`; it comes from the SDK source, not the SDK docs page.

```ts
// wait.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const job = await p.run("web.research", { query: "How do open source CRMs make money?" });
if (!("id" in job)) throw new Error("Expected a job for an async superpower.");
console.log(job.id, job.status);

const done = await p.jobs.wait(job.id, { timeoutMs: 600_000 });
console.log(done.id, done.status);

if (done.status === "done") {
  console.log(JSON.stringify(done.result, null, 2));
  console.log("charged (micro-USD):", done.chargedMicro);
} else if (done.status === "failed") {
  console.error(done.error?.code, done.error?.message);
}
```

A job is in one of four states:

<table>
<thead><tr><th>Status</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><code>running</code></td><td>Still working.</td></tr>
<tr><td><code>done</code></td><td>Finished. <code>result</code> holds the result.</td></tr>
<tr><td><code>failed</code></td><td>Stopped with <code>error</code> (<code>code</code>, <code>message</code>).</td></tr>
<tr><td><code>cancelled</code></td><td>You cancelled it.</td></tr>
</tbody>
</table>

Results are kept for 7 days. You can read a job again later with `p.jobs.get(id)`, or over HTTP with `GET /v1/jobs/<id>`.

## Step 3: do it in one line with p.call()

If you want only the result, `p.call()` starts the job, waits, and throws if the job fails.

```ts
// call.mts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

try {
  const result = await p.call("web.research", { query: "How do open source CRMs make money?" });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  if (error instanceof PramaanError) {
    console.error(error.code, error.message, error.next, error.retryable);
  } else {
    throw error;
  }
}
```

Use `p.run()` plus `p.jobs.wait()` when you need the job id, for example to store it, show progress or cancel. Use `p.call()` for scripts.

## Step 4: cancel a job

```ts
// cancel.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const job = await p.run("web.research", { query: "How do open source CRMs make money?" });
if ("id" in job) {
  await p.jobs.cancel(job.id);
  console.log((await p.jobs.get(job.id)).status);
}
```

Cancelling before any work was done is free. Otherwise you pay for the work already done, never more than what was set aside.

## Step 5: skip polling with a webhook

Polling is fine for scripts. In a server, subscribe to the `job.completed` webhook in the dashboard instead. It fires when a job ends as `done`, `failed` or `cancelled`. Then fetch the job with `p.jobs.get()`. [How to verify webhook signatures in TypeScript](/blog/verify-webhook-signatures-typescript) shows the handler.

## Bulk runs

A superpower whose id ends in `-bulk` runs one lookup for many rows as one job. Give every row your own `id`. While it runs, the job may carry `progress: { total, done }`. Rows that could not be answered are free, and if you cancel, you keep and pay for the rows already answered. The [jobs guide](https://docs.pramaan.dev/guides/jobs) has the full result shape.

## When it needs approval

`web.research` only reads, so it never needs approval. A superpower that sends, pays or deletes does. If your key acts as a team member and the call needs an approver, the API refuses it with `403 forbidden` and nothing runs. Catch it and show the person what will happen:

```ts
// approval.mts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

try {
  await p.call("web.research", { query: "How do open source CRMs make money?" });
} catch (error) {
  if (error instanceof PramaanError && error.code === "forbidden") {
    console.log("Waits for your approval:", error.next);
  } else {
    throw error;
  }
}
```

The [approvals guide](https://docs.pramaan.dev/guides/approvals) covers naming the approver.

## Errors you'll hit

<table>
<thead><tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr></thead>
<tbody>
<tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your balance or daily cap can't cover the amount set aside. Nothing ran.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
<tr><td><code>upstream_timeout</code></td><td>503</td><td>The job ran longer than its limit (30 minutes for most).</td><td>Retry with a smaller request.</td></tr>
<tr><td><code>job_not_found</code></td><td>404</td><td>The job id is wrong, belongs to another account, or is older than 7 days.</td><td>Use the id returned when you started the job.</td></tr>
<tr><td><code>conflict</code></td><td>409</td><td>The idempotency key was reused with a different body, or the first request is still running.</td><td>Use a new key only for a new request.</td></tr>
<tr><td><code>rate_limited</code></td><td>429</td><td>Too many requests.</td><td>Wait for <code>Retry-After</code> seconds, then retry.</td></tr>
</tbody>
</table>

The SDK retries `429` and `5xx` answers up to two times for read-only superpowers like `web.research`. It never retries superpowers with an external effect; you decide when to retry those.

## Cost

A failed job is free, and so is a job stopped at its time limit. A job that finishes is charged its real price, and the amount set aside comes back. To see the most a job can cost before you start it, ask for an estimate:

```ts
// estimate.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const input = { query: "How do open source CRMs make money?" };
const estimate = await p.capabilities.estimate("web.research", input);
console.log(estimate.priceMaxMicro, estimate.canRun, estimate.reason);
```

Prices are in micro-USD: 1,000,000 is one US dollar. [How to see what a call costs before it runs](/blog/see-cost-before-a-call-runs) goes deeper.

## Next steps

- The [jobs guide](https://docs.pramaan.dev/guides/jobs) in the docs.
- [Research a company](/missions/company.research), a mission that runs as a job.
- Browse long superpowers in [web answers](/superpowers/web-answers) and [web scraping](/superpowers/web-scraping).
