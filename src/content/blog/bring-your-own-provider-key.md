---
title: "How to use your own provider key and pay Pramaan nothing"
description: "Save your own provider key in Pramaan and calls to that service carry no Pramaan fee. Check it over the REST API with X-Pramaan-Price-Micro."
author: "Pramaan"
date: 2026-11-08
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Ask Pramaan to turn on own keys"
    - "Save your key under Connections"
    - "Call as usual: X-Pramaan-Price-Micro is 0"
---

If you already pay a search, scraping, data or AI service, you can save your key for it in Pramaan. Calls to that service then run on your key, Pramaan charges nothing for them, and the service bills you directly.

By the end of this post you will have a key saved and a REST call that proves it ran on your key. The proof is one response header (example response):

```text
HTTP/2 200
content-type: application/json
x-pramaan-price-micro: 0
```

## What "pay nothing" covers

A call that ran on your key has no Pramaan fee and no provider cost on your Pramaan bill. Nothing is held from your prepaid balance and nothing is charged. You still pay the service itself, on your own account with it.

Two things stay the same, because they are Pramaan's own resources:

- **Stored files.** Results saved to Pramaan's file storage (audio, images, exports) are kept and limited like any other file. Storage has no separate charge today.
- **Rentals.** Numbers, inboxes, domains, monitors and anything else billed by the month are billed as before.

This is different from [connections](https://docs.pramaan.dev/guides/connections). Connections cover services that only ever run on your account, like your email sender or payments account. Own keys cover services that normally run on Pramaan's key.

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`.
- `curl` (any recent version) and Node 18 or later for the script in step 5.
- An account and API key with a service Pramaan routes to.
- Own keys turned on for your Pramaan account (step 1).

## Step 1: Ask Pramaan to turn it on

Own keys are off for every account until Pramaan turns them on for yours. Until then, the **Your own provider keys** section in the dashboard says "Using your own provider keys is not enabled for your account", saving a key is refused, and every call runs on Pramaan's key.

Pramaan can allow every covered service or a chosen list, and can limit it to chosen superpowers. You only see, and can save keys for, the services allowed for your account.

## Step 2: Save your key

There is no REST route for this; it is a dashboard step.

1. Open **Connections** in the dashboard and scroll to **Your own provider keys**.
2. Pick the service and open **Use your own key**.
3. Paste the fields it asks for. Most ask for one API key; a few also take an account, workspace or project id.
4. Save.

The key is encrypted at rest and never shown again. Pramaan does not test it when you save it, so a wrong key fails on its first call.

The **Your own provider keys** list is the full, current list of covered services: search, scraping and enrichment sources, language and embedding models, speech and translation, maps, weather, security and company data.

## Step 3: Make a call and read the price header

Once a key is saved, every superpower that service can serve runs on your key. You change nothing in your request. Here [`web.search`](/superpowers/web-search) stands in for any superpower; use one that the service you saved a key for can serve.

Note: the header name comes from the pricing guide; the OpenAPI spec does not list response headers.

```bash
curl -sS -D - -o result.json \
  https://api.pramaan.dev/v1/capabilities/web.search \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "open source CRM"}' \
  | grep -i x-pramaan-price-micro
```

You should see `x-pramaan-price-micro: 0`. Prices are in micro-USD (1,000,000 is one US dollar), and that header is what the call cost you. The result itself is in `result.json`.

If you see a number above 0, the call ran on Pramaan's key. Either the service is not one you saved a key for, or it is outside what Pramaan allowed for your account. Those calls are charged as usual.

## Step 4: Decide on the fallback switch

Each saved key has a **fall back to Pramaan's key** switch. It is off unless you turn it on, or Pramaan set your account so new keys start with it on.

<table>
  <thead>
    <tr><th>Switch</th><th>When your key fails on a read</th><th>Cost</th></tr>
  </thead>
  <tbody>
    <tr><td>Off</td><td>The call fails with an error. It never runs on Pramaan's key.</td><td>Nothing charged.</td></tr>
    <tr><td>On</td><td>Retried once on Pramaan's key, for the same service.</td><td>That retry is charged like any Pramaan call.</td></tr>
  </tbody>
</table>

With the switch on, each call is checked against your balance and its estimate is set aside while it runs. When your key answered, the amount is given back and nothing is charged.

Actions (anything that sends, posts, buys or changes something) are never retried on another key once the request has reached the service, whatever the switch says. Retry those yourself with the same `Idempotency-Key`.

## Step 5: Handle a failed key

If the service refuses your key, your account there is out of credit, or it rate limits you, the call fails with the usual error plus a note. The error looks like this:

```json
{
  "error": {
    "code": "upstream_unavailable",
    "message": "The data source is unavailable. It ran on your own key. Turn on \"fall back to Pramaan's key\" for this connection to retry there.",
    "request_id": "req_01J...",
    "retryable": false,
    "effect": "none",
    "reason": "own_key"
  }
}
```

`reason: "own_key"` says it ran on your key. For a read, `effect: "none"` means nothing happened on Pramaan's side and nothing was charged. This script reads both:

Note: `reason: "own_key"` comes from the own-keys guide; the spec's list of `reason` values does not include it yet.

```js
// own-key-call.mjs
const res = await fetch("https://api.pramaan.dev/v1/capabilities/web.search", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.PRAMAAN_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: "open source CRM" }),
});

console.log("Price (micro-USD):", res.headers.get("x-pramaan-price-micro"));

const body = await res.json();
if (res.ok) {
  console.log(body);
} else if (body.error.reason === "own_key") {
  console.error("Your key failed:", body.error.message);
  console.error("Check the key and your credit with the service, or turn on fallback.");
} else {
  console.error(body.error.code, body.error.next, body.error.request_id);
}
```

Run it with `node own-key-call.mjs`.

## Which calls use your key

- **Every superpower the service can serve** runs on your key, and only there. It does not quietly move to another service on Pramaan's key, even when yours is slow or down.
- **Jobs** (long-running calls) keep the key that was in place when you started them. Change or remove the key mid-job and the job fails with a clear error. Start it again.
- **Things you created** on your key (anything a call returned a `ref` for) are followed up on that key only.
- **Bulk runs** use the key in place when the run was requested, for every row.

To rotate, save the new key over the old one. To stop, remove it: the next call is back on Pramaan's key and charged as usual.

## What is not covered

Some services need setup that a key alone does not carry, so own keys don't apply to them:

- Texting, calls, two-way email and social, which run on an account Pramaan opens for your organization.
- Services that call Pramaan back (webhooks and job callbacks).
- Services that rent standing things through Pramaan (monitors, indexes, inboxes).
- App integrations (`apps.*`), where your users' connected accounts live.
- Services that are already yours to connect under connections.

## Errors you'll hit

<table>
  <thead>
    <tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>upstream_unavailable</code> with <code>reason: "own_key"</code></td><td>503</td><td>The service refused your key, you're out of credit there, or it rate limited you.</td><td>Fix the key or your account with the service, or turn on fallback.</td></tr>
    <tr><td><code>unauthorized</code></td><td>401</td><td>Your Pramaan API key is wrong or revoked.</td><td>Send a valid key in the Authorization header.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>402</td><td>With fallback on, your balance or daily cap can't cover the estimate.</td><td>Top up, or raise the daily cap.</td></tr>
  </tbody>
</table>

## Cost

Calls on your key cost 0 on Pramaan. Calls on Pramaan's key, including fallback retries, are paid from your prepaid balance. To see what a call could cost before it runs, send the same body to its estimate route. Nothing runs and nothing is charged.

```bash
curl https://api.pramaan.dev/v1/capabilities/web.search/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "open source CRM"}'
```

The answer includes `price_max_micro`, the most the request can be charged, and `can_run`.

## Next steps

- [Own keys guide](https://docs.pramaan.dev/guides/own-keys): every rule for saved keys and the fallback switch.
- [Prices and limits](https://docs.pramaan.dev/guides/pricing): estimates, holds and price caps.
- [Browse superpowers](/superpowers) to find ones the service you use can serve.
