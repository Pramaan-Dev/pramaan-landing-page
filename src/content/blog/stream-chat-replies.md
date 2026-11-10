---
title: "How to stream chat replies with one API"
description: "Show a chat reply word by word as it is written: stream llm.chat with the Pramaan TypeScript SDK, then keep the checked final result."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Call llm.chat with p.stream"
    - "Print each text_delta as it arrives"
    - "Keep done.result as the reply"
---

By the end of this post your app shows a chat reply as it is written, piece by piece, instead of waiting for the whole answer. You use [`llm.chat`](/superpowers/language-models) and the Pramaan TypeScript SDK, and you get the same checked result at the end that a normal call returns.

This is what arrives on the wire (example response):

```text
event: text_delta
data: {"text":"Hel"}

event: text_delta
data: {"text":"lo."}

event: usage
data: {"inputTokens":12,"outputTokens":3}

event: done
data: {"finishReason":"stop","result":{"text":"Hello.","toolCalls":[],"finishReason":"stop","usage":{"inputTokens":12,"outputTokens":3}},"price_micro":1000}
```

## What you'll build

A Node script that sends one message to `llm.chat` and prints the reply as it streams. `llm.chat` generates one conversation turn, with text, tool calls or both. It is stateless: you send the whole conversation each time.

The stream uses server-sent events: a plain HTTP response that stays open and sends one small `event:` and `data:` pair at a time.

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`. Keep it on a server.
- Node 18 or later.
- The SDK: `npm install @pramaan/sdk`
- `tsx` to run TypeScript: `npm install -D tsx`

## Step 1: Try it with curl

One header turns a normal call into a stream: `Accept: text/event-stream`. The body does not change. `-N` stops curl from buffering, so you see each piece as it lands.

```bash
curl -N https://api.pramaan.dev/v1/capabilities/llm.chat \
  -H "Authorization: Bearer $PRAMAAN_API_KEY" \
  -H "Accept: text/event-stream" \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "Say hello."}], "model": "fast", "maxTokens": 64}'
```

You should see the events from the top of this post.

Send that type alone. If your `Accept` lists `application/json` beside it without ranking it lower, you get the plain JSON reply. So always read the response's `Content-Type` before you parse: `text/event-stream` is a stream, `application/json` is the whole answer.

## Step 2: Stream with the SDK

`p.stream()` handles the connection and parsing, and skips the keep-alive lines for you.

Note: `event.price_micro` follows the `done` event's data in the docs; the SDK snippet in the docs only reads `event.result`.

```ts
// stream.mts
import { Pramaan, PramaanError } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

let reply: unknown;

try {
  for await (const event of p.stream("llm.chat", {
    messages: [
      { role: "system", content: "You answer in two short sentences." },
      { role: "user", content: "Why do chat apps stream replies?" },
    ],
    model: "fast",
    maxTokens: 256,
  })) {
    if (event.type === "text_delta") process.stdout.write(event.text);
    if (event.type === "done") {
      reply = event.result; // the whole reply, as p.run returns it
      console.log(`\nprice_micro: ${event.price_micro}`);
    }
  }
} catch (error) {
  if (error instanceof PramaanError) {
    console.error(error.code, error.next, error.requestId);
  } else {
    throw error;
  }
}

console.log(reply);
```

Run it with `npx tsx stream.mts`. The text appears a few words at a time, then the final result prints.

Nothing is sent until the first piece is ready, which can take several seconds. Show a typing indicator in that gap.

## Step 3: Keep `done.result`, not the pieces

The pieces are for display. `done.result` is the checked reply: `text`, `toolCalls`, `finishReason` and `usage`, the same shape as a plain call. Save that, not the string you built from pieces.

`finishReason` tells you why the turn ended: `stop`, `tool_calls`, `length` (it hit `maxTokens`) or `other`.

## Every stream event

<table>
  <thead>
    <tr><th>Event</th><th>Data</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td><code>text_delta</code></td><td><code>{ text }</code></td><td>The next piece of text.</td></tr>
    <tr><td><code>tool_call_start</code></td><td><code>{ index, id, name }</code></td><td>A tool call begins. <code>index</code> is its place in <code>result.toolCalls</code>.</td></tr>
    <tr><td><code>tool_call_delta</code></td><td><code>{ index, arguments }</code></td><td>The next piece of that call's JSON arguments.</td></tr>
    <tr><td><code>tool_call_end</code></td><td><code>{ index }</code></td><td>That call's arguments are complete.</td></tr>
    <tr><td><code>usage</code></td><td><code>{ inputTokens, outputTokens }</code></td><td>Tokens for the turn.</td></tr>
    <tr><td><code>done</code></td><td><code>{ finishReason, result, price_micro }</code></td><td>The end. <code>result</code> is the same result the plain call returns.</td></tr>
    <tr><td><code>error</code></td><td><code>{ error, price_micro }</code></td><td>The reply failed. <code>error</code> is the usual error object.</td></tr>
  </tbody>
</table>

The stream ends after `done` or `error`. A line that starts with `:` (`: ping`) is a keep-alive sent every 15 seconds. Skip it if you parse the stream yourself.

## Tools and JSON output

Streaming works with `tools` and `jsonSchema` too. Tool arguments and JSON output are checked when the reply is complete. If the check fails (the JSON doesn't match, or the reply was cut off at `maxTokens`), you get an `error` event after the pieces, and the reply is charged because you received it. The plain call makes the same failure free because it returns nothing.

`llm.chat` never runs your tools. It asks for them in `toolCalls`; your app runs them and sends the results on the next call.

## Errors you'll hit

Errors before the first piece are plain JSON with the usual status, not a stream. Check the status before you read events. The SDK throws a `PramaanError` before or during the stream.

<table>
  <thead>
    <tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr><td><code>invalid_request</code></td><td>400</td><td>A field is wrong, for example an empty <code>messages</code> list.</td><td>Fix the fields named in the message.</td></tr>
    <tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your prepaid balance or daily cap can't cover the estimate.</td><td>Top up, or raise the daily cap.</td></tr>
    <tr><td><code>rate_limited</code></td><td>429</td><td>Too many calls, or your organization already has 20 streams open.</td><td>Wait for <code>Retry-After</code> seconds, or close a stream.</td></tr>
    <tr><td><code>conflict</code></td><td>409</td><td>A repeated <code>Idempotency-Key</code> while the first call is still running.</td><td>Wait, then retry with the same key.</td></tr>
  </tbody>
</table>

## Limits

- A stream stops after 120 seconds, or after 50 seconds when the call carries an `Idempotency-Key`.
- An organization may have 20 streams open at once; one more answers `429`.
- A repeated `Idempotency-Key` returns the stored reply as plain JSON, not a stream. A reply that broke is not stored, so the same key runs, and is charged, again.
- Disconnecting stops the reply. In the SDK, leaving the loop early stops the call.
- The MCP server returns the whole reply; it does not stream.

## Cost

Prices are in micro-USD: 1,000,000 is one US dollar. A finished reply costs what the plain call costs. On a stream the price is `price_micro` in the `done` event, since there is no price header. The estimate is held from your prepaid balance while the stream is open.

If the reply breaks after pieces were sent, or you disconnect, you pay for what was generated, never more than the estimate. When the break leaves no token count, the charge is a ceiling, which can be more than the finished reply would have cost. So let a reply finish when you can. A call that sent nothing costs nothing.

Check the most a call can cost before you send it. Nothing runs and nothing is charged:

```ts
// estimate.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const estimate = await p.capabilities.estimate("llm.chat", {
  messages: [{ role: "user", content: "Why do chat apps stream replies?" }],
  model: "fast",
  maxTokens: 256,
});

console.log(estimate);
```

Set `maxTokens` to what you need: it caps the reply, and the estimate grows with it (the default is 4096).

## Next steps

- [Streaming guide](https://docs.pramaan.dev/guides/streaming): the full rules for streamed replies.
- [Language model superpowers](/superpowers/language-models): `llm.chat` and its relatives.
- [Errors guide](https://docs.pramaan.dev/guides/errors): every error code and its fix.
