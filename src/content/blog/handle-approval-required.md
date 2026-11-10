---
title: "How to handle approval_required in your agent"
description: "Handle approval_required with the Pramaan TypeScript SDK and REST API: check which superpowers need approval, ask first, and handle 403 and 202."
author: "Pramaan"
date: 2026-09-29
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Check if the superpower needs approval"
    - "Show the exact inputs and price"
    - "Send it with one idempotency key"
    - "Handle 403 and 202 waiting"
---

Some Pramaan superpowers send email, place calls, move money or delete things. They need a person's approval before they run. This guide shows how your agent tells which ones those are, how it asks first, and how to handle the two answers the API gives while a call waits for your approval.

## What you'll build

A small TypeScript script that sends an email with [`email.send`](/superpowers/email-sending) only after a person approves it. It shows the exact inputs and the most the call can cost, waits for a yes in the terminal, then sends it. It also handles `403 forbidden` with `reason: "approval_required"` and the `202` answer that means a call is waiting for approval.

What the person sees before anything is sent (example output):

```text
email.send needs approval.
Inputs: {"to":"user@example.org","subject":"Welcome","text":"Thanks for signing up."}
Costs at most $0.001000
Send it? (yes/no)
```

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Make one in the app under **Settings > Keys**.
- The SDK: `npm install @pramaan/sdk`
- Node.js 20 or later. The SDK uses only `fetch` and Web Crypto. Run the `.ts` files with `npx tsx <file>.ts`.

A **superpower** is one action with a fixed request and result, like `email.send`. A **mission** is a multi-step job under one business name.

## Step 1: Know which superpowers need approval

A superpower needs approval when it's flagged `requiresApproval`, or when its effect class is `external_irreversible` or `external_unknown_effect`. `p.info(id)` reads those traits from the catalog bundled with the SDK, so it needs no request.

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

export function needsApproval(id: string): boolean {
  const info = p.info(id);
  if (!info) return true; // unknown id: treat it as needing approval
  return (
    info.requiresApproval === true ||
    info.effectClass === "external_irreversible" ||
    info.effectClass === "external_unknown_effect"
  );
}

console.log("email.send", needsApproval("email.send"));
console.log("web.search", needsApproval("web.search"));
```

You should see `email.send true` and `web.search false`. Read-only superpowers like [`web.search`](/superpowers/web-search) run without asking.

## Step 2: Ask before you call

With a plain organization key, the API doesn't stop the call for you. It only declares which superpowers need approval. If your own app calls them, your app asks the person first.

This script prices the call with an estimate (nothing runs, nothing is charged), shows the exact inputs, and sends only on "yes".

```ts
import { Pramaan, PramaanError } from "@pramaan/sdk";
import { randomUUID } from "node:crypto";
import { createInterface } from "node:readline/promises";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const input = {
  to: "user@example.org",
  subject: "Welcome",
  text: "Thanks for signing up.",
};

// One key per intended action. Reuse it only to retry this same send.
const idempotencyKey = randomUUID();

const estimate = await p.capabilities.estimate("email.send", input);
if (!estimate.canRun) {
  console.log("Can't run now:", estimate.reason, estimate.next ?? "");
  process.exit(1);
}

console.log("email.send needs approval.");
console.log("Inputs:", JSON.stringify(input));
console.log(`Costs at most $${(estimate.priceMaxMicro / 1_000_000).toFixed(6)}`);

const rl = createInterface({ input: process.stdin, output: process.stdout });
const answer = (await rl.question("Send it? (yes/no) ")).trim().toLowerCase();
rl.close();

if (answer !== "yes") {
  console.log("Not sent.");
  process.exit(0);
}

try {
  const result = await p.run("email.send", input, { idempotencyKey });
  console.log("Sent:", result);
} catch (error) {
  if (error instanceof PramaanError) {
    console.log(error.code, error.reason ?? "", error.next ?? "", error.requestId);
  } else {
    throw error;
  }
}
```

Prices are in micro-USD: 1,000,000 is one US dollar. Without `sender`, `email.send` sends from your connected Gmail or Outlook. With none connected, the estimate says it can't run and `next` tells you what to connect.

When the person changes the inputs, ask again. One approval covers one call with those exact inputs.

## Step 3: Handle 403 approval_required for team members

If your organization has team members, a call made as a member can need an approval that the API itself enforces. You act as a member with the `Pramaan-Member` header, or `{ member }` in the SDK options.

A call made as a member needs an approver when the superpower needs approval, or when its price is over your organization's approval threshold. Without one, the API refuses it with `403 forbidden` and `error.reason: "approval_required"`. Nothing ran and nothing was charged (`effect: "none"`).

Check the `reason`, not the message:

```ts
import { Pramaan, PramaanError } from "@pramaan/sdk";
import { randomUUID } from "node:crypto";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });
const member = process.env.PRAMAAN_MEMBER_ID!;

try {
  await p.run(
    "email.send",
    { to: "user@example.org", subject: "Welcome", text: "Thanks for signing up." },
    { idempotencyKey: randomUUID(), member },
  );
} catch (error) {
  if (
    error instanceof PramaanError &&
    error.code === "forbidden" &&
    error.reason === "approval_required"
  ) {
    // Nothing was sent. Tell the person a member who may approve has to decide it.
    console.log("Needs approval:", error.next ?? error.message);
  } else {
    throw error;
  }
}
```

`GET /v1/members` shows `may_approve` for each member, so you can tell the person who can approve.

## Step 4: Handle 202 when a call waits for approval

A call can also wait for approval instead of failing. Then the API answers `202` with an approval id that starts with `apr_` and a job id. A person decides it; a key, an app or an agent on its own can't.

The SDK turns a `202` into a job but doesn't keep the approval id, so this step uses plain HTTP to show both fields.

```ts
import { randomUUID } from "node:crypto";

const base = "https://api.pramaan.dev";
const auth = `Bearer ${process.env.PRAMAAN_API_KEY}`;

const res = await fetch(`${base}/v1/capabilities/email.send`, {
  method: "POST",
  headers: {
    Authorization: auth,
    "Content-Type": "application/json",
    "Idempotency-Key": randomUUID(),
    "Pramaan-Member": process.env.PRAMAAN_MEMBER_ID!,
  },
  body: JSON.stringify({ to: "user@example.org", subject: "Welcome", text: "Thanks for signing up." }),
});
const body = await res.json();

if (res.status === 202 && body.approval_id) {
  console.log("Waiting for approval:", body.approval_id, body.approval?.next ?? "");
  // Poll the job until a person decides it.
  for (;;) {
    await new Promise((r) => setTimeout(r, 5_000));
    const job = await (await fetch(`${base}/v1/jobs/${body.job_id}`, { headers: { Authorization: auth } })).json();
    if (job.status !== "running") {
      console.log(job.status, job.result ?? job.error);
      break;
    }
  }
} else {
  console.log(res.status, body);
}
```

The waiting answer looks like this (example response):

```json
{
  "job_id": "job_01J...",
  "status": "running",
  "approval_id": "apr_01J...",
  "approval": { "status": "pending", "next": "A member who may approve has to decide this call." },
  "held_micro": 0
}
```

The job ends as `done` when the call ran, or `failed` or `cancelled` when it didn't.

## Step 5: Build an approval inbox in your app

To let people approve inside your own app, get a member token when they sign in to Pramaan: send them to `https://api.pramaan.dev/oauth/authorize` with `resource=https://api.pramaan.dev/v1/approvals` and `scope=pramaan:approve` (OAuth code flow with PKCE), and exchange the code at `/oauth/token`. Then:

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_MEMBER_TOKEN! });

const me = await p.members.me();
if (!me.canDecide) {
  console.log("This member can't approve calls.");
} else {
  const waiting = await p.approvals.list();
  for (const a of waiting) console.log(a.approvalId, a.capability, a.priceMicro, JSON.stringify(a.input));
  if (waiting[0]) {
    const decision = await p.approvals.decide(waiting[0].approvalId, "approve", { note: "Checked with Dana." });
    console.log(decision.status, decision.job.status);
  }
}
```

The token reaches only the approvals routes and `GET /v1/members/me`. For tests, `fakeApprovals()` from `@pramaan/sdk/testing` has the same shapes and rules.

## In an MCP agent

Over the local MCP server, Pramaan shows the person a dialog with the exact inputs before each call, through MCP elicitation. Your agent gets one of two answers when the call doesn't run:

- `{ "ran": false, "reason": "declined_by_user" }`, or `"no_answer"` after 10 minutes. Don't retry unless the person asks.
- The error `approval_required` when the client can't show the dialog. Tell the person and stop.

## Errors you'll hit

<table>
  <thead>
    <tr><th>Code</th><th>What it means</th><th>The fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>forbidden</code> with <code>reason: "approval_required"</code></td><td>A call made as a member needs a member's approval. Nothing ran.</td><td>Ask a member who may approve, or use the approval inbox.</td></tr>
    <tr><td><code>forbidden</code></td><td>A member who may not approve tried to list or decide approvals.</td><td>Ask an account owner for access.</td></tr>
    <tr><td><code>conflict</code></td><td>The approval was already decided or has expired.</td><td>Read its current state; send a new call for a new action.</td></tr>
    <tr><td><code>invalid_request</code></td><td>The <code>Idempotency-Key</code> is missing on a superpower that acts outside, or a field is wrong.</td><td>Add the header, or fix the fields named in the message.</td></tr>
    <tr><td><code>connection_required</code></td><td>No account is connected for this superpower.</td><td>Connect one for the returned <code>slot</code>, then retry.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>Not enough balance, the daily cap, or the member's spending limit.</td><td>Top up or raise the limit named in <code>reason</code>.</td></tr>
  </tbody>
</table>

## Cost

A call refused before anything ran isn't charged. You pay per call from a prepaid balance, and an estimate (`POST /v1/capabilities/{id}/estimate`, or `p.capabilities.estimate`) shows the most a call can cost before it runs. Show that number in the approval prompt, as in Step 2.

## Next steps

- [Read the approvals guide](https://docs.pramaan.dev/guides/approvals) for the full rules.
- [Retry safely with idempotency keys](https://docs.pramaan.dev/guides/idempotency), so an approved send happens once.
- [Browse the superpowers](/superpowers); each one shows whether it needs approval.
