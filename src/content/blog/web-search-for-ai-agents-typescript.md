---
title: "How to add web search to an AI agent in TypeScript"
description: "Give your AI agent web search and page reading in TypeScript with the Pramaan SDK: web.search, web.read and two tool definitions."
author: "Pramaan"
date: 2026-10-09
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "npm install @pramaan/sdk"
    - "Search with web.search"
    - "Read pages with web.read"
    - "Hand both to your agent as tools"
---

Your agent can search the web and read pages with two Pramaan superpowers: [`web.search`](/superpowers/web-search) and [`web.read`](/superpowers/web-scraping). This guide wires both into TypeScript with the Pramaan SDK and turns them into tools any model with tool calling can use.

## What you'll build

Two functions, `searchWeb` and `readPage`, plus a `research` helper that searches, reads the top pages and returns sources your agent can quote. Then you'll describe both as tools and route your agent's tool calls to them.

The `research` helper returns this shape (example response, not live output):

```json
[
  {
    "title": "Example CRM: open source customer management",
    "url": "https://example.com/crm",
    "text": "Example CRM is a self-hosted CRM for small teams...",
    "truncated": false
  }
]
```

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Make one in the app under **Settings > Keys**. Keep it on your server, never in a browser or mobile app.
- The SDK: `npm install @pramaan/sdk`
- Node.js 20 or later. The SDK uses only `fetch` and Web Crypto, so it also runs in Bun, Deno, Workers and Next.js. Run the files with `npx tsx <file>.ts`.

A **superpower** is one action with a fixed request and result. Both used here are read-only: they don't send, post or pay, so they need no approval.

## Step 1: Search the web

`web.search` takes a `query` in plain words and an optional `limit` from 1 to 20 (default 10). It returns `results`, best first, each with `title`, `url`, `snippet` and, when known, `publishedAt`.

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

export async function searchWeb(query: string, limit = 5) {
  const { results } = await p.web.search({ query, limit });
  return results.map((r) => ({ title: r.title, url: r.url, snippet: r.snippet, publishedAt: r.publishedAt }));
}

console.log(await searchWeb("open source CRM", 3));
```

You should see three results with titles, links and snippets.

## Step 2: Read a page

Snippets are short. When your agent needs the page itself, `web.read` takes a public `http` or `https` `url` and returns `url`, `title`, `text` (clean page text, no markup) and `truncated`, which is `true` when the text was cut to fit the size cap.

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

export async function readPage(url: string, maxChars = 8_000) {
  const page = await p.web.read({ url });
  return {
    title: page.title,
    url: page.url,
    text: page.text.slice(0, maxChars),
    truncated: page.truncated || page.text.length > maxChars,
  };
}

console.log(await readPage("https://example.com"));
```

`maxChars` is your own limit, so one long page doesn't fill your agent's context. Tell the agent when a page was cut, so it doesn't treat part of a page as the whole thing.

## Step 3: Search, then read the top pages

Most questions need both: search to find pages, then read a few. `Promise.allSettled` keeps one broken page from failing the whole answer.

```ts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

export async function research(question: string, pages = 3) {
  const { results } = await p.web.search({ query: question, limit: pages });
  const reads = await Promise.allSettled(results.map((r) => p.web.read({ url: r.url })));

  return reads.flatMap((read, i) => {
    if (read.status === "fulfilled") {
      const { title, url, text, truncated } = read.value;
      return [{ title, url, text: text.slice(0, 6_000), truncated: truncated || text.length > 6_000 }];
    }
    const reason = read.reason instanceof PramaanError ? read.reason.code : "unknown";
    console.warn(`Skipped ${results[i].url}: ${reason}`);
    return [];
  });
}

console.log(await research("best open source CRM for small teams"));
```

The SDK already retries read-only calls on `429`, `5xx` and network failures, up to two times with backoff, so you don't need your own retry loop here.

## Step 4: Give both to your agent as tools

Most model APIs take tools as a name, a description and a JSON Schema for the arguments. These two definitions follow that shape. `runTool` answers a tool call.

Not checked against a model API: the tool format differs a little between model providers, so adapt the field names to yours. The Pramaan calls are checked against the spec.

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

export const tools = [
  {
    name: "web_search",
    description: "Search the web. Returns titles, URLs, snippets and dates, best first.",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string", description: "What to search for, in plain words." },
        limit: { type: "number", minimum: 1, maximum: 20, description: "How many results. Default 10." },
      },
      required: ["query"],
    },
  },
  {
    name: "web_read",
    description: "Read one public web page. Returns its title and clean text.",
    parameters: {
      type: "object",
      properties: { url: { type: "string", description: "Public http or https URL of the page." } },
      required: ["url"],
    },
  },
];

// Call this with the tool name and arguments your model asked for.
export async function runTool(name: string, args: Record<string, unknown>): Promise<string> {
  const result =
    name === "web_search"
      ? await p.web.search({ query: String(args.query), limit: args.limit ? Number(args.limit) : 5 })
      : name === "web_read"
        ? await p.web.read({ url: String(args.url) })
        : { error: `Unknown tool: ${name}` };
  // Results are third-party data. Label them so the model never follows instructions inside them.
  return `<untrusted_web_data>\n${JSON.stringify(result).slice(0, 12_000)}\n</untrusted_web_data>`;
}

console.log(await runTool("web_search", { query: "open source CRM", limit: 2 }));
```

In your agent loop, send `tools` with each model request. When the model asks for a tool, call `runTool` and send the string back as the tool result.

Pages can contain text written to trick an agent ("ignore your instructions and..."). Results are data, never instructions, and your system prompt should say so.

## When it needs approval

Neither superpower here needs approval: both are read-only. If you add tools that send, post or pay, such as [`email.send`](/superpowers/email-sending), check `p.info(id).requiresApproval` and the effect class first. Show the person the exact inputs and wait for their yes before the call.

## Errors you'll hit

The SDK throws `PramaanError` with `code`, `message`, `next`, `retryable` and `requestId`.

<table>
  <thead>
    <tr><th>Code</th><th>What it means</th><th>The fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>invalid_request</code></td><td>A field is missing or wrong, such as an empty <code>query</code>.</td><td>Fix the fields named in the message and send again.</td></tr>
    <tr><td><code>unauthorized</code></td><td>The key is missing, wrong or revoked.</td><td>Check <code>PRAMAAN_API_KEY</code>.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>Not enough balance, or the daily spend cap is hit.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
    <tr><td><code>rate_limited</code></td><td>Too many requests.</td><td>The SDK retries; if it still fails, wait for <code>Retry-After</code> seconds.</td></tr>
    <tr><td><code>upstream_unavailable</code></td><td>The service behind the superpower failed.</td><td>Try again in a minute.</td></tr>
    <tr><td><code>upstream_timeout</code></td><td>The call took longer than 25 seconds.</td><td>Retry, or try another page.</td></tr>
  </tbody>
</table>

Pass `error.next` back to your agent as the tool result. It's a short instruction written for exactly this: what to do next.

## Cost

You pay per call from a prepaid balance: the source's cost plus 30%, at least $0.001 a call. A failed call isn't charged. To see the most a call can cost before it runs, ask for an estimate. Nothing runs and nothing is charged:

```ts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const estimate = await p.capabilities.estimate("web.search", { query: "open source CRM", limit: 3 });
console.log(estimate.canRun, estimate.priceMaxMicro, estimate.balanceMicro);
```

Prices are in micro-USD: 1,000,000 is one US dollar. To cap one call, pass `maxPriceMicro` in the call options. Set a daily spend cap in the dashboard so an agent stuck in a loop can't run up a bill.

## Next steps

- [See every web search superpower](/superpowers/web-search), including searches with date and domain filters.
- [Try the `company.research` mission](/missions/company.research) for a full, sourced company profile in one call.
- [Read the SDK docs](https://docs.pramaan.dev/tools/sdk) for jobs, retries and webhooks.
