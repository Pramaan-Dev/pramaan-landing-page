---
title: "Your agent can now run 418 go-to-market skills"
description: "418 GTM skills from 84 authors, each mapped to the Pramaan superpowers and missions that do the work. Install one line, then ask your agent to run it."
author: "Pramaan"
date: 2026-11-06
audience: developers
draft: true
og:
  tag: "Agent skills"
  code: "npx skills add Pramaan-OSS/skills --skill cold-email-strategist"
  note: "418 skills · 84 authors"
---

The [go-to-market skills library](/skills) now has 418 skills from 84 authors, and every one comes with a map of the Pramaan superpowers and missions that run it. Add a skill to your agent with one line. When you ask the agent to run it, the agent uses Pramaan for the data, drafts and sends, and does the thinking itself.

## What is a go-to-market skill?

A skill is a set of instructions your agent reads before it starts a job: how a senior sales rep writes a cold email, how a media buyer audits a Google Ads account, how a RevOps lead cleans a CRM. The skills in the library were written by the people who do that work.

On its own, a skill tells the agent what to do. It can't look up a company, find an email or pull your ad spend. That is the part Pramaan adds.

## What does the Pramaan map add?

Each skill page lists, step by step, which Pramaan ids do the work and what the agent should handle itself. Two terms first:

- A **superpower** is one action with a fixed request and result, like `email.send`.
- A **mission** is a multi-step job under one business name, like `outreach.sequence.draft`, that returns one result.

Here is the map for [The cold email strategist](/skills/gtm/cold-email-strategist):

1. **Write first touch and follow-ups** with `outreach.draft` and `outreach.sequence.draft`. Saved as drafts in the user's connected inbox. Nothing is sent.
2. **Deliverability: domain setup** with `email.domain.check`. Mail servers, SPF and reputation. DMARC and DKIM are not checked.
3. **Deliverability: list quality** with `people.email.verify` and `email.list.hygiene`. Verify one address, or clean a whole list.
4. **Send** with `email.send` or `email.send-bulk`. One email, or up to 100 separate emails as a job.

The map also says what Pramaan doesn't do. That skill notes that DMARC and DKIM aren't checked, and that subject lines, copy review and warmup advice are the agent's own job.

## How do I add a skill to my agent?

First, set up Pramaan once. Tell your agent:

```text
Set up https://www.pramaan.dev/skill.md
```

That file walks the agent through getting a key and connecting by MCP, SDK, CLI or HTTP.

Then add the skill you want:

```bash
npx skills add Pramaan-OSS/skills --skill cold-email-strategist
```

And ask for it:

```text
Run the cold-email-strategist skill with Pramaan.
```

Every skill page has the same two lines with its own name filled in, and a copy button.

## Which skills are in the library?

The 418 skills are sorted into go-to-market categories. The largest:

- **RevOps (61):** CRM hygiene, forecasting, pipeline reviews and the systems behind them.
- **Outreach (53):** cold email, LinkedIn and calls: sequences, copy and personalization.
- **Ads (49):** audit and run Google, Meta and LinkedIn ads.
- **Signals (38):** spot buying signals and act on them while they are fresh.
- **Prospecting (30):** build lists of the right companies and people.

A few to start with:

- [`google-ads-audit`](/skills/gtm/google-ads-audit) audits an account at senior-media-buyer depth. It runs `ads.account.health`, `ads.performance.report` and `ads.waste.find`, among others.
- [`icp-lookalike-expansion`](/skills/gtm/icp-lookalike-expansion) takes a handful of accounts that converted and finds more like them with `company.lookalikes.find` and `lead.lookalikes.find`.
- [`lead-sources-guide`](/skills/gtm/lead-sources-guide) picks a lead source for the job and builds the list with `lead.list.build` or `company.list.build`.

## What happens when a skill wants to send something?

It waits for your approval. 68 of the 418 skills include a step that sends, posts or spends, such as `email.send` or `linkedin.invitation.send`. Each skill page lists those steps under "Needs approval".

When the agent reaches one of those steps, Pramaan returns `approval_required` instead of running it. The agent has to show you the exact inputs and the price, and get your approval before it can try again. One approval covers one call.

## What does it cost?

The skills are free to add. The Pramaan calls they make are paid per use from a prepaid balance. Your agent can quote any call before running it, so it can tell you the price up front. The [docs](https://docs.pramaan.dev) explain how quotes and the balance work.

## Next steps

- [Browse all 418 skills](/skills) by category.
- [Read the agent skill](/skill.md) your agent uses to set up Pramaan.
- [Browse the missions](/missions) the skills run.
