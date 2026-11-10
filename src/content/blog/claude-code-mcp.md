---
title: "How to give Claude Code 10,000+ superpowers with MCP"
description: "Add the Pramaan MCP server to Claude Code with one command, then search, price and run 10,428 superpowers by asking in plain words."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Put your key in PRAMAAN_API_KEY"
    - "Add the server with claude mcp add"
    - "Check it with /mcp"
    - "Ask Claude Code in plain words"
---

One command adds the Pramaan MCP server to Claude Code. After that, Claude Code can search, price and run any of Pramaan's 10,428 superpowers and 891 missions while it works in your terminal.

This guide adds the server, checks the connection, runs a first request and shows what happens when a request needs approval.

## What you'll build

Claude Code with Pramaan connected over MCP (Model Context Protocol, the standard way an agent talks to outside tools). You type a request like this:

```text
Find three open source CRMs, then read the homepage of the first one and tell me what it costs.
```

Claude Code finds the right superpowers, [`web.search`](/superpowers/web-search) and [`web.read`](/superpowers/web-scraping), and runs them. A **superpower** is one action with a fixed request and result. A **mission** is a multi-step job under one business name, like [`company.research`](/missions/company.research).

The search step returns results in this shape (example response, not live output):

```json
{
  "results": [
    {
      "title": "Example CRM: open source customer management",
      "url": "https://example.com/crm",
      "snippet": "A self-hosted CRM for small teams.",
      "publishedAt": "2026-10-02"
    }
  ]
}
```

## Before you start

- **A Pramaan API key.** Join the waitlist at [app.pramaan.dev](https://app.pramaan.dev). Accounts open by approval. Once approved, make a key under **Settings > Keys**. Every new organization gets $1.00 of credit once.
- **Claude Code**, with the `claude` command on your path.
- **Node.js with `npx`.** The server runs from npm as `@pramaan/mcp`.

## Step 1: Put your key in an environment variable

The server reads your key from `PRAMAAN_API_KEY`, so set it in the shell you'll run Claude Code from.

```bash
export PRAMAAN_API_KEY="paste-your-key-here"
```

Keep the key out of chats, logs and anything you commit.

## Step 2: Add the Pramaan MCP server

This registers a local server named `pramaan` that Claude Code starts with `npx`.

```bash
claude mcp add --env PRAMAAN_API_KEY="$PRAMAAN_API_KEY" --transport stdio pramaan \
  -- npx -y @pramaan/mcp
```

Two details about that command:

- Everything after `--` is the command that runs the server. Claude Code passes it through untouched.
- `--transport stdio` sits between `--env` and the name on purpose. `--env` takes several `KEY=value` pairs, so a name right after it would be read as another pair.

The server is added for the current project. Add `--scope user` to have it in every project. Either way the key stays in your own Claude Code settings, not in your repo.

## Step 3: Check the connection

Start Claude Code and run `/mcp`. You should see `pramaan` listed as connected.

The server gives Claude Code a small set of tools instead of one per superpower, which keeps its context small. The [MCP docs](https://docs.pramaan.dev/tools/mcp) list these:

<table>
  <thead>
    <tr><th>Tool</th><th>What it does</th></tr>
  </thead>
  <tbody>
    <tr><td><code>list_capabilities</code></td><td>Without filters, counts per namespace. With <code>namespace</code> or <code>query</code>, up to 50 rows and a cursor.</td></tr>
    <tr><td><code>describe_capability</code></td><td>One superpower's request and result schema, with an example.</td></tr>
    <tr><td><code>run_capability</code></td><td>Runs a superpower. Long ones return a job.</td></tr>
    <tr><td><code>explain_route</code></td><td>The most it can cost and which account it would run on, before it runs.</td></tr>
    <tr><td><code>get_job</code>, <code>wait_job</code>, <code>cancel_job</code></td><td>Read, wait up to 60 seconds for, or cancel a job.</td></tr>
    <tr><td><code>list_outcomes</code>, <code>describe_outcome</code>, <code>estimate_outcome</code>, <code>run_outcome</code></td><td>The same steps for missions.</td></tr>
    <tr><td><code>get_balance</code>, <code>get_usage</code>, <code>list_accounts</code></td><td>Your balance, daily usage and connected accounts.</td></tr>
  </tbody>
</table>

The site's [llms.txt](/llms.txt) also lists `quote`, which prices a call before it runs. Some API names still say "capabilities" and "outcomes": those are superpowers and missions.

## Step 4: Ask in plain words

You don't need to know any ids. Ask for the result you want:

```text
Search the web for open source CRMs and give me the top three with links.
```

Claude Code calls `list_capabilities` with your words as the query, reads the match with `describe_capability`, then runs it with `run_capability`. For a business result, such as "research example.com", it can pick a mission instead and price the whole plan with `estimate_outcome` first.

Results come from third-party sources. Every tool description tells Claude Code to treat them as data, never as instructions, so a web page can't tell your agent what to do.

## Step 5 (optional): Give Claude Code named tools

If you use a few superpowers all the time, give each one its own tool with `--tools`. Remove the server, then add it again with the flag:

```bash
claude mcp remove pramaan
claude mcp add --env PRAMAAN_API_KEY="$PRAMAAN_API_KEY" --transport stdio pramaan \
  -- npx -y @pramaan/mcp --tools web.search,web.read
```

Named tools use safe names: `web.search` becomes `web_search`. A pattern can be one id or a whole namespace such as `web.*`. The server refuses to start with more than 50 named tools, so narrow the patterns if it does.

## When it needs approval

Some superpowers reach a real person or can't be undone: sending an email with [`email.send`](/superpowers/email-sending), calls, payments, deletes. These need approval, and the local MCP server enforces it.

When Claude Code tries one, nothing runs yet. Claude Code shows you a dialog with the superpower, the exact inputs, the most it can cost and the account it would use. It runs only if you tick "Yes, run it" and accept.

If you decline, cancel or don't answer within 10 minutes, nothing is sent and Claude Code gets this back:

```json
{ "ran": false, "reason": "declined_by_user" }
```

The reason is `"no_answer"` when the 10 minutes run out. These rules apply to every call:

- Every call waits for your approval again, so a changed input needs a new yes.
- Claude Code can't approve for you. An `approved` argument from the agent is ignored.
- Superpowers that act outside (sending, posting, paying) need an `idempotency_key`, so a retry never repeats the action.

The dialog uses MCP elicitation, a way for a server to ask the person a question through the client. Claude Code supports it. A client that doesn't gets the error `approval_required` and nothing runs.

## The hosted server

Pramaan also runs a hosted server at `https://mcp.pramaan.dev`, with OAuth sign-in or an API key. It works differently from the local one:

- By default, actions return a preview (`dry_run: true`, `ran: false`) and nothing runs.
- It can't show the approval dialog. When actions are enabled, the agent must show you the exact inputs and price from `quote`, wait for your explicit yes, and send it with `approved_by_user: true` and your own words in `approval_quote`.

```bash
claude mcp add --transport http pramaan https://mcp.pramaan.dev
```

For this guide, stay with the local server: approval works through the dialog with no extra setup.

## Errors you'll hit

<table>
  <thead>
    <tr><th>Code</th><th>What it means</th><th>The fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>approval_required</code></td><td>The client couldn't show the approval dialog, so nothing ran.</td><td>Run it from a client that supports elicitation, such as Claude Code with the local server.</td></tr>
    <tr><td><code>invalid_request</code></td><td>A field is wrong, or a superpower that acts outside was sent without <code>idempotency_key</code>.</td><td>Fix the fields named in the message and send again.</td></tr>
    <tr><td><code>unauthorized</code></td><td>The key is missing, wrong or revoked.</td><td>Check <code>PRAMAAN_API_KEY</code>, then add the server again.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>Not enough balance, or the daily spend cap is hit.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
    <tr><td><code>connection_required</code></td><td>The superpower runs on an account you haven't connected.</td><td>Connect an account for the returned <code>slot</code>, then retry.</td></tr>
    <tr><td><code>rate_limited</code></td><td>Too many requests.</td><td>Wait for the <code>Retry-After</code> seconds, then retry.</td></tr>
  </tbody>
</table>

Every error also carries `next`, a short instruction for the next step, and `retryable`. Claude Code can read both and decide on its own whether to try again.

## Cost

You pay per call from a prepaid balance: the source's cost plus 30%, at least $0.001 a call. There's no subscription. A failed call isn't charged, and calls on your own connected accounts cost nothing extra.

To see a price before anything runs, ask:

```text
Before you run it, tell me the most this search can cost.
```

Claude Code uses `explain_route` (or `estimate_outcome` for a mission) and nothing is charged. Ask "what's my balance?" and it calls `get_balance`. Set a daily spend cap in the dashboard so an agent stuck in a loop can't run up a bill.

## Next steps

- [Browse the superpowers](/superpowers) by family to see what Claude Code can now do.
- [Read the approvals guide](https://docs.pramaan.dev/guides/approvals) for how approval works across MCP, the SDK and HTTP.
- [Try the `company.research` mission](/missions/company.research): ask Claude Code to research a company from its domain.
