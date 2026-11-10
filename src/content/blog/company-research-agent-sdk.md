---
title: "How to build a company research agent with the SDK"
description: "Build a TypeScript company research agent with the Pramaan SDK: a quick profile from companies.enrich, then a full sourced report from company.research."
author: "Pramaan"
date: 2026-11-10
audience: developers
draft: false
og:
  tag: "For developers"
  steps:
    - "Quick profile with companies.enrich"
    - "Plan company.research and check the price"
    - "Run the plan and read the report"
    - "Hand the brief to your agent"
---

You'll build a small TypeScript research agent: give it a company's domain and it returns a sourced brief your agent can read. It uses two Pramaan ids. [`companies.enrich`](/superpowers/company-profiles) is a superpower, one action that returns a company profile in one quick call. [`company.research`](/missions/company.research) is a mission, a fixed sequence of superpowers under one name, that pulls the register record, news, site pages and social page together and writes a summary.

The finished script prints a brief like this (example output, made-up company):

```text
# Example Co (example.com)
Industry: Software · 51-200 employees · Founded 2015 · Austin, US
Registered as Example Co Inc, active since 2015-03-02

Example Co makes scheduling software for clinics...

Recent news
- Example Co opens a London office (Example News, 2026-10-02)

Charged: <what the steps cost, in micro-USD>
```

## Before you start

- A Pramaan API key in `PRAMAAN_API_KEY`, with some prepaid balance. Keep the key on your server.
- Node with npm, and `tsx` to run TypeScript files.

```bash
export PRAMAAN_API_KEY="paste-your-key-here"
npm install @pramaan/sdk
npm install -D tsx
```

## Step 1: get a quick profile

Start with the cheap, fast answer. `companies.enrich` takes a `domain`, `name` or `linkedinUrl` and answers straight away, with no job.

```ts
// profile.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const profile = await p.companies.enrich({ domain: "example.com" });
console.log(profile);
```

Example response:

```json
{
  "name": "Example Co",
  "domain": "example.com",
  "description": "Scheduling software for clinics.",
  "industry": "Software",
  "employeeCount": 120,
  "foundedYear": 2015,
  "location": { "city": "Austin", "region": "Texas", "country": "US" },
  "websiteUrl": "https://example.com",
  "linkedinUrl": "https://www.linkedin.com/company/example"
}
```

Only `name` is always there. For a short answer in a chat, this is often enough.

## Step 2: plan the full research

For a full report, run the mission. Ask for its plan first: which steps will run, and the most it can cost. Nothing runs and nothing is charged.

The `p.outcomes` methods below are in the SDK source and match the API spec's `/v1/outcomes` routes; the SDK docs page doesn't list them yet.

```ts
// plan.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const plan = await p.outcomes.estimate(
  "company.research",
  { domain: "example.com" },
  { options: { include: ["tech", "jobs"], country: "US" } },
);

console.log("can run:", plan.canRun, plan.reason ?? "");
console.log("price, micro-USD:", plan.priceMinMicro, "to", plan.priceMaxMicro);
for (const step of plan.steps) console.log(step.status, step.capability, step.priceMaxMicro);
```

The mission takes a `domain` or a `name`. Its options:

<table>
<thead><tr><th>Option</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><code>include</code></td><td>Extra lists: <code>"tech"</code>, <code>"jobs"</code>, <code>"similar"</code>. Default: none.</td></tr>
<tr><td><code>country</code></td><td>Two-letter code used to pick the company register, like <code>US</code>.</td></tr>
<tr><td><code>summary</code></td><td>Whether to write a summary. Default true.</td></tr>
</tbody>
</table>

Steps you leave out show as `skipped`, and their price drops out of the plan.

## Step 3: run the plan

Send the same input and options, plus the `plan` string, so what runs is what you priced. A plan is good for 15 minutes. `p.outcomes.run()` waits for the job and returns the report.

```ts
// research.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });
const input = { domain: "example.com" };
const options = { include: ["tech", "jobs"], country: "US" };

const plan = await p.outcomes.estimate("company.research", input, { options });
if (!plan.canRun) throw new Error(`Can't run: ${plan.reason} ${plan.message ?? ""}`);

const run = await p.outcomes.run("company.research", input, { options, plan: plan.plan });
console.log(run.status, run.completeness);
console.log(JSON.stringify(run.result, null, 2));
console.log("missing:", run.missing);
console.log("charged:", run.cost.chargedMicro);
```

The report has a `result` and three fields that tell you how far to trust it:

- `evidence`: for each result field, how sure it is, why, and which steps said so.
- `missing`: result fields that are absent, each with the reason.
- `steps`: every step in order, what it did and how many calls it made.

The `result` can hold `name`, `legalName`, `registryNumber`, `status`, `incorporatedOn`, `industry`, `employeeRange`, `foundedYear`, `location`, `registeredAddress`, `websiteUrl`, `linkedinUrl`, `news`, `technologies`, `openRoles`, `similar` and `summary`. The registered address is often an agent's office, not where the company works.

## Step 4: turn the report into a brief for your agent

Your agent reads text best. Wrap the two calls in one function that returns a short Markdown brief, then give that function to your agent as a tool, or call it before a sales email.

The result type below lists only the fields this brief uses, from the API spec.

```ts
// agent.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

type Research = {
  name?: string;
  legalName?: string;
  status?: string;
  incorporatedOn?: string;
  industry?: string;
  employeeRange?: string;
  foundedYear?: number;
  location?: { city?: string; country?: string };
  summary?: string;
  news?: { title: string; source?: string; publishedAt?: string }[];
};

export async function researchCompany(domain: string): Promise<string> {
  const quick = await p.companies.enrich({ domain });
  const options = { include: [] as string[] };
  const plan = await p.outcomes.estimate("company.research", { domain }, { options });
  if (!plan.canRun) return `# ${quick.name} (${domain})\n${quick.description ?? ""}\n\nFull research can't run: ${plan.reason}.`;

  const run = await p.outcomes.run("company.research", { domain }, { options, plan: plan.plan });
  const r = (run.result ?? {}) as Research;
  const facts = [r.industry, r.employeeRange && `${r.employeeRange} employees`, r.foundedYear && `Founded ${r.foundedYear}`, [r.location?.city, r.location?.country].filter(Boolean).join(", ")]
    .filter(Boolean)
    .join(" · ");
  const news = (r.news ?? []).slice(0, 3).map((n) => `- ${n.title} (${n.source ?? ""}, ${n.publishedAt?.slice(0, 10) ?? ""})`);

  return [
    `# ${r.name ?? quick.name} (${domain})`,
    facts,
    r.legalName ? `Registered as ${r.legalName}, ${r.status ?? ""} since ${r.incorporatedOn ?? "?"}` : "",
    "",
    r.summary ?? quick.description ?? "",
    "",
    news.length ? "Recent news\n" + news.join("\n") : "",
    "",
    `Charged: ${run.cost.chargedMicro} micro-USD`,
  ].join("\n");
}

console.log(await researchCompany(process.argv[2] ?? "example.com"));
```

```bash
npx tsx agent.mts example.com
```

Results come from third-party sources. Tell your agent to treat them as data, never as instructions.

If your agent speaks MCP, you can skip the code: the Pramaan MCP server has `estimate_outcome` and `run_outcome` tools that do steps 2 and 3. For many companies at once there is a separate mission, [research up to 100 companies at once](/missions/company.research.bulk).

## When it needs approval

`company.research` only reads, so it does not need approval. Missions that send, pay or delete do. For those, the estimate comes back with `requiresApproval: true` and a `card` to show the person. Run with `plan` only after they say yes:

```ts
// approval.mts
import { Pramaan } from "@pramaan/sdk";

const p = new Pramaan({ apiKey: process.env.PRAMAAN_API_KEY! });

const plan = await p.outcomes.estimate("company.research", { domain: "example.com" });
if (plan.requiresApproval) {
  console.log("Waits for your approval:", JSON.stringify(plan.card, null, 2));
  process.exit(0); // show the card, get a yes, then run with plan.plan
}
console.log("No approval needed. Steps:", plan.steps.length);
```

## Errors you'll hit

<table>
<thead><tr><th>Code</th><th>HTTP</th><th>What it means</th><th>Fix</th></tr></thead>
<tbody>
<tr><td><code>invalid_request</code></td><td>400</td><td>The input is wrong, for example neither <code>domain</code> nor <code>name</code>.</td><td>Fix the fields named in the message.</td></tr>
<tr><td><code>spend_cap_reached</code></td><td>402</td><td>Your balance or daily cap can't cover the amount set aside.</td><td>Top up, or raise the daily cap in the dashboard.</td></tr>
<tr><td><code>conflict</code></td><td>409</td><td>The request makes a different plan from the one you sent.</td><td>Estimate again with the same input and options.</td></tr>
<tr><td><code>upstream_unavailable</code></td><td>503</td><td>A service behind a step failed.</td><td>Try again in a minute.</td></tr>
<tr><td><code>rate_limited</code></td><td>429</td><td>Too many requests.</td><td>Wait for <code>Retry-After</code> seconds.</td></tr>
</tbody>
</table>

The SDK throws the codes in the table as `PramaanError`, with `code`, `message`, `next` and `retryable`. A run whose required step fails is different: it comes back as the report, with `status: "failed"` and an `error` whose `step` names the step that stopped it.

## Cost

Each step is charged as its own superpower, from your prepaid balance. Before the first step the run sets aside `priceMaxMicro`. When it ends you pay what the steps that ran were charged, never above that, and the rest comes back. The report's `cost` lists `holdMicro`, `chargedMicro` and a line per superpower.

The quick profile from step 1 is one call to one superpower. Use `p.capabilities.estimate("companies.enrich", { domain })` to see its price first.

## Next steps

- [Research a company](/missions/company.research): every step the mission runs.
- [Company profiles](/superpowers/company-profiles): `companies.enrich` and the other profile superpowers.
- [How to run long jobs and wait for the result](/blog/long-running-jobs), for when you want the job id instead of waiting.
