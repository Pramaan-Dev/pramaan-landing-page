---
title: "How to see what a call costs before it runs"
description: "Ask the Pramaan REST API what a superpower or mission can cost at most, cap the price, and check your prepaid balance before anything runs."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Send the body to /estimate"
    - "Read price_max_micro and can_run"
    - "Cap it with Pramaan-Max-Price-Micro"
    - "Run it, then read the real price"
---

Every Pramaan superpower and mission has an `estimate` route. You send it the same body you would send to the real call. It tells you the most that call can cost and whether it can run now. Nothing runs and nothing is charged.

This guide uses the REST API with `curl`. By the end you can price a single superpower, price a whole mission step by step, cap what one request may cost, and read the real price after it runs.

Here is the answer you get back for a web crawl (example response from the docs):

```json
{ "price_max_micro": 65000, "balance_micro": 1000000, "can_run": true }
```

Prices are in micro-USD: 1,000,000 is one US dollar. So that crawl can cost at most $0.065, and you have $1.00 of prepaid balance.

## Before you start

- A Pramaan API key from the dashboard, in `PRAMAAN_API_KEY`. Keep it on your server.
- `curl`, and `jq` to pick fields out of the answers.
- Some prepaid balance. Estimates are free, but the real calls at the end are not.

```bash
export PRAMAAN_API_KEY="paste-your-key-here"
```

## Step 1: estimate one superpower

A superpower is one action, like [`web.crawl`](/superpowers/web-scraping). To price it, post the body you plan to send to `/v1/capabilities/<id>/estimate`.

```bash
curl https://api.pramaan.dev/v1/capabilities/web.crawl/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com", "limit": 50}'
```

You get back the answer shown at the top. These are the fields you will use most:

<table>
<thead><tr><th>Field</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><code>price_max_micro</code></td><td>The most this request can be charged. The real price is often lower.</td></tr>
<tr><td><code>price_typical_micro</code></td><td>The median charge across recent paid calls to this superpower. Missing when there isn't enough history. Guidance only.</td></tr>
<tr><td><code>balance_micro</code></td><td>Your prepaid balance now.</td></tr>
<tr><td><code>can_run</code></td><td>Whether it would run now.</td></tr>
<tr><td><code>reason</code></td><td>Only when <code>can_run</code> is false: <code>balance</code>, <code>daily_cap</code> or <code>price_ceiling</code>, among others.</td></tr>
<tr><td><code>next</code></td><td>What to do next when it can't run.</td></tr>
</tbody>
</table>

The estimate grows with what you ask for. A crawl prices each page on its own, so `limit: 50` is priced as 50 pages. For other superpowers the estimate is the price of one call, and the real price can be higher when more comes back.

## Step 2: cap the price of one request

Some superpowers have a price ceiling, the most one call is ever priced at. You can set your own for one request with the `Pramaan-Max-Price-Micro` header, a whole number of micro-USD above 0. It replaces the ceiling for that request, lower or higher.

Send the header to the estimate route first to see whether your limit works. This one prices [`web.search`](/superpowers/web-search):

```bash
curl https://api.pramaan.dev/v1/capabilities/web.search/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Pramaan-Max-Price-Micro: 20000" \
  -d '{"query": "open source CRM"}' | jq '{can_run, reason, price_max_micro}'
```

If no data source fits under your limit, `can_run` is false, `reason` is `price_ceiling`, and `price_max_micro` is the lowest limit that would work. The real call with the same header fails with `400 invalid_request`, and its message names that lowest limit.

The limit decides which data sources may answer. Where a source states its worst case up front, you are never charged more than the estimate.

## Step 3: estimate a whole mission

A mission is a multi-step job under one business name, like [`company.research`](/missions/company.research). Its estimate route is `/v1/outcomes/<id>/estimate` (the API calls missions "outcomes"). The body has your `input` and any `options`.

```bash
curl https://api.pramaan.dev/v1/outcomes/company.research/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"input": {"domain": "example.com"}, "options": {"include": ["tech"]}}' \
  | jq '{can_run, ready, requires_approval, price_min_micro, price_max_micro, steps: [.steps[] | {capability, status, price_max_micro}]}'
```

This is the plan for that one input. The fields to read:

<table>
<thead><tr><th>Field</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><code>price_min_micro</code></td><td>The least a run that finishes its required steps costs.</td></tr>
<tr><td><code>price_max_micro</code></td><td>What a run sets aside from your balance before the first step.</td></tr>
<tr><td><code>steps</code></td><td>Every step, with its superpower, its own <code>price_max_micro</code>, and <code>status</code>: <code>will_run</code> or <code>skipped</code>.</td></tr>
<tr><td><code>plan</code></td><td>A string that names this input, these options, these steps and their prices. Good for 15 minutes.</td></tr>
<tr><td><code>ready</code></td><td>False while an input or a connected account is still missing.</td></tr>
<tr><td><code>requires_approval</code></td><td>True when a step needs approval.</td></tr>
</tbody>
</table>

Steps you switch off with `options` show as `skipped`, so turning off extras is the easiest way to bring the price down.

## Step 4: run what you priced

Send the `plan` back in the `Pramaan-Plan` header so what runs is what you priced. `company.research` is a long mission, so the answer is a job.

```bash
PLAN=$(curl -s https://api.pramaan.dev/v1/outcomes/company.research/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"input": {"domain": "example.com"}, "options": {"include": ["tech"]}}' | jq -r .plan)

curl https://api.pramaan.dev/v1/outcomes/company.research \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Pramaan-Plan: $PLAN" \
  -H "Idempotency-Key: research-example-com-1" \
  -d '{"input": {"domain": "example.com"}, "options": {"include": ["tech"]}}'
```

The answer is `202 Accepted` with a `job_id`, `"status": "running"` and `held_micro`.

`held_micro` is the amount set aside while the job runs. It is not a price. When the job ends you pay the real price and the rest comes back. [Long jobs](/blog/long-running-jobs) covers waiting for the result.

## Step 5: read the real price

A single call tells you what it cost in the `X-Pramaan-Price-Micro` response header. Print the headers with `-D -`:

```bash
curl -s -D - -o /dev/null https://api.pramaan.dev/v1/capabilities/web.search \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "open source CRM", "limit": 3}' | grep -i x-pramaan-price-micro
```

For a job, `GET /v1/jobs/<id>` carries `charged_micro`: 0 while it runs, its price once it is settled. A mission run also reports its money in its result's `cost`, with `hold_micro`, `charged_micro` and a line per superpower it used.

To see the whole account, read your balance:

```bash
curl -s https://api.pramaan.dev/v1/balance \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  | jq '{balance_micro, held_micro, today_spend_micro, daily_cap_micro}'
```

`held_micro` is what is set aside for requests still running. It is already out of `balance_micro`. A `daily_cap_micro` of `null` means there is no daily cap.

## When it needs approval

Some superpowers reach a real person or can't be undone: sends, calls, payments, deletes. For those, the estimate also returns `card`, a review card with the exact input and the most it can cost. A mission's estimate returns `requires_approval` and a `card` for the plan.

Show that card to the person, wait for their yes, then send the same body with the `Pramaan-Plan` you showed them. A call made as a team member that needs approval and names no approver is refused with `403 forbidden` and `error.reason: "approval_required"`. Check `reason`, not the message.

```bash
curl -s https://api.pramaan.dev/v1/outcomes/company.research/estimate \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"input": {"domain": "example.com"}}' \
  | jq 'if .requires_approval then {needs_approval: true, card} else {needs_approval: false} end'
```

`company.research` only reads, so it does not need approval.

## Errors you'll hit

<table>
<thead><tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr></thead>
<tbody>
<tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your balance or daily cap can't cover the amount set aside. <code>reason</code> is <code>balance</code> or <code>daily_cap</code>; <code>required_micro</code> is what is needed.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
<tr><td><code>invalid_request</code></td><td>400</td><td>The body is wrong, or no source fits under <code>Pramaan-Max-Price-Micro</code>.</td><td>Fix the fields named in the message, or raise the limit to the one it names.</td></tr>
<tr><td><code>forbidden</code></td><td>403</td><td>With <code>reason: "approval_required"</code>, the call needs an approver.</td><td>Ask the person, then name them.</td></tr>
<tr><td><code>not_found</code></td><td>404</td><td>The id is wrong.</td><td>List the ids first and use a valid one.</td></tr>
<tr><td><code>unauthorized</code></td><td>401</td><td>The key is missing or revoked.</td><td>Send a valid key in the Authorization header.</td></tr>
</tbody>
</table>

Every error carries `next`, a short instruction for your next step, and `effect: "none"` when nothing ran or was charged.

## Cost

Estimates cost nothing. You pay from a prepaid balance, and only for calls that work: a failed call, a failed job and a job stopped at its time limit are free. So are calls on your own connected accounts and file uploads.

Before a job starts, and before any single call that could cost $0.50 or more, the estimate is set aside from your balance. When it ends you pay the real price and the rest comes back.

## Next steps

- [Prices and limits](https://docs.pramaan.dev/guides/pricing) in the docs, including the second-opinion header.
- [How to run long jobs and wait for the result](/blog/long-running-jobs).
- Browse [missions](/missions) and [superpowers](/superpowers) and price any of them the same way.
