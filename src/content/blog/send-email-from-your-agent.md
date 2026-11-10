---
title: "How to send email from your agent with your own inbox"
description: "Connect a Gmail inbox, then have your agent send email from it with email.send and the Pramaan TypeScript SDK, after your approval."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Connect Gmail with apps.connection.start"
    - "Check the connection is active"
    - "Get your approval, then call email.send"
---

By the end of this post your agent sends an email from your own Gmail inbox, using the Pramaan TypeScript SDK. The mail goes out from your address, and only after you approve it.

Here is what a sent email returns (example response):

```json
{
  "status": "sent",
  "trackable": true,
  "acceptance": "accepted",
  "rfcMessageId": "<CAexample123@mail.gmail.com>",
  "ref": "ref_example"
}
```

## What you'll build

A small Node script your agent can call. It connects a Gmail account once, then sends one email at a time with [`email.send`](/superpowers/email-sending). A superpower is one action with a fixed request and result; `email.send` is the one that sends a single email to up to 50 recipients.

`email.send` covers one person writing to another (a founder to a lead, a recruiter to a candidate). Its default sender is that person's own connected Gmail or Outlook. If nothing is connected, it does not fall back to another sender.

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Keep it on a server, never in a browser.
- Node 18 or later (the SDK uses the built-in `fetch`).
- The SDK: `npm install @pramaan/sdk`
- `tsx` to run TypeScript files: `npm install -D tsx`
- A Gmail account you can sign in to.

## Step 1: Connect your Gmail inbox

Your agent needs a link you open once to give Pramaan access to the inbox. [`apps.connection.start`](/superpowers/connected-apps) returns that link.

```ts
// connect.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const result = await p.run(
  "apps.connection.start",
  {
    endUserRef: "user_42",
    app: "gmail",
    redirectUrl: "http://localhost:8080/connected",
  },
  { idempotencyKey: "connect-user_42-gmail" },
);

console.log(result);
```

Run it with `npx tsx connect.mts`. You get a `connectUrl` and, usually, an `expiresAt` time. Open the link, sign in to Gmail and approve access. You land back on your `redirectUrl`.

Three details from the spec:

- `endUserRef` is your own id for the person, 1 to 128 letters, digits, `_`, `.` or `-`. Never an email address or a name.
- `redirectUrl` must be a public URL, or `http` on localhost for a local install.
- The call has an external effect, so it needs an `Idempotency-Key`. The SDK sends it from `idempotencyKey`.

## Step 2: Check the connection is active

Don't send until the connection says `active`. [`apps.connections.list`](/superpowers/connected-apps) reads it back.

```ts
// check.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const result = await p.run("apps.connections.list", {
  endUserRef: "user_42",
  app: "gmail",
});

console.log(result);
```

Example response:

```json
{
  "results": [
    { "app": "gmail", "status": "active", "access": "full", "connectedAt": "2026-11-10T09:12:00Z" }
  ]
}
```

Other states are `pending`, `failed`, `expired`, `disabled` and `revoked`. Anything but `active` means open a new link from step 1.

## Step 3: Send the email, after your approval

`email.send` needs approval: it reaches a real person and can't be undone. The API marks it that way, but a direct SDK call runs as soon as you make it. So your script must ask first. This one prints the email, waits for you to type `yes`, then sends.

Note: the spec has no field that names which connection to send from. `from` is "an address your connected Gmail or Outlook may send as". How the account is picked when several end users are connected is not shown in the spec.

```ts
// send.mts
import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const email = {
  from: "you@gmail.com",
  to: "priya@example.com",
  subject: "Intro from Sam",
  text: "Hi Priya, Sam suggested we talk. Do you have 20 minutes this week?",
};

// What it can cost at most. Nothing runs, nothing is charged.
const estimate = await p.capabilities.estimate("email.send", email);
console.log("Estimate:", estimate);

console.log("About to send:", email);
const rl = createInterface({ input: stdin, output: stdout });
const answer = await rl.question("Type yes to send: ");
rl.close();
if (answer.trim() !== "yes") {
  console.log("Not sent.");
  process.exit(0);
}

try {
  const sent = await p.run("email.send", email, {
    idempotencyKey: "intro-priya-2026-11-10",
  });
  console.log(sent);
} catch (error) {
  if (error instanceof PramaanError) {
    console.error(error.code, error.message, error.next, error.requestId);
    if (error.code === "connection_required") console.error("Connect:", error.slot);
  } else {
    throw error;
  }
}
```

You should see the email printed, then the response from the top of this post. `status` is `sent` or `queued`; neither proves the email was delivered. When `trackable` is `true`, pass the `ref` to [`email.status`](/superpowers/email-sending) to check delivery.

The SDK never retries a superpower that sends something, so if a call fails you decide whether to retry. Send the same key again and Pramaan returns the stored response instead of sending twice. The key is remembered for 24 hours.

## When it needs approval

In your own app, the yes prompt above is the approval. If your organization has team members, Pramaan can enforce it for you. Pass `member` (who the call acts as) and `approvedBy` (a member who may approve) in the call options:

Note: the option names come from the approvals guide; the member id format is not shown in the spec.

```ts
// send-as-member.mts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

try {
  const sent = await p.run(
    "email.send",
    { to: "priya@example.com", subject: "Intro from Sam", text: "Hi Priya, do you have 20 minutes this week?" },
    {
      idempotencyKey: "intro-priya-member-2026-11-10",
      member: process.env.PRAMAAN_MEMBER_ID!,
      approvedBy: process.env.PRAMAAN_APPROVER_ID!,
    },
  );
  console.log(sent);
} catch (error) {
  if (error instanceof PramaanError && error.code === "forbidden") {
    console.error("Waits for your approval:", error.next);
  } else {
    throw error;
  }
}
```

`approvedBy` tells Pramaan that this person said yes, so ask them first. Without an approver the call is refused with `403 forbidden`; over REST the error carries `reason: "approval_required"`. A call can also come back as `202` with an `approval_id` while it waits for a person to decide.

If your agent runs through the Pramaan MCP server instead, the server asks you itself before it sends. One yes covers one call.

## Errors you'll hit

<table>
  <thead>
    <tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>connection_required</code></td><td>409</td><td>No account is connected for the <code>slot</code> in the error.</td><td>Connect it (step 1), then retry.</td></tr>
    <tr><td><code>invalid_request</code></td><td>400</td><td>A field is wrong, or the <code>Idempotency-Key</code> is missing.</td><td>Fix the fields named in the message and send again.</td></tr>
    <tr><td><code>forbidden</code></td><td>403</td><td>The call needs a member's approval.</td><td>Get the approval named in the message.</td></tr>
    <tr><td><code>conflict</code></td><td>409</td><td>The same key was sent with a different body, or the first call is still running.</td><td>Use a new key only for a new email.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your prepaid balance or daily cap can't cover it.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
    <tr><td><code>rate_limited</code></td><td>429</td><td>Too many calls.</td><td>Wait for <code>Retry-After</code> seconds, then retry.</td></tr>
    <tr><td><code>upstream_unavailable</code></td><td>503</td><td>The service behind it failed.</td><td>Check whether it went out before retrying, with the same key.</td></tr>
  </tbody>
</table>

The `connection_required` error looks like this:

```json
{
  "error": {
    "code": "connection_required",
    "message": "An account connection is missing. Connect it with apps.connection.start, then retry.",
    "request_id": "req_01J...",
    "retryable": false,
    "slot": "email"
  }
}
```

When an error has `effect: "none"`, nothing was sent. When `effect` is missing, the email may have gone out, so check before you retry.

## Cost

Calls are paid from your prepaid balance. Prices are in micro-USD: 1,000,000 is one US dollar. Run the estimate in step 3 before you send; it returns the most the call can cost without running it. Every response also carries `X-Pramaan-Price-Micro`, what that call cost.

## Next steps

- [Connections guide](https://docs.pramaan.dev/guides/connections): connected accounts and the `connection_required` error.
- [Approvals guide](https://docs.pramaan.dev/guides/approvals): which superpowers need approval and how to show an approval inbox.
- [Email sending superpowers](/superpowers/email-sending): `email.send`, `email.status` and the rest of the family.
