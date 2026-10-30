---
skill: account-health-audit
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/account-health-audit
pramaan_skills: [apps-connections, people-companies, ai-models]
ids: [account.health, apps.connections.list, apps.catalog.search, apps.action.execute, companies.enrich, companies.news, llm.complete]
---

# Run "Account health audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.health` is a mission (several steps, one result). It reads customer usage and feedback from a connected app and billing records, and returns cited observations and named gaps. It covers part of step 1 only. Lead scoring, alerting, messaging and adoption still follow the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Gather CRM activity, deals, notes | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Find the connected CRM and its read actions. Use read actions only. |
| 1. Company context | `companies.enrich`, `companies.news` | Check the news is dated before calling it recent. |
| Sections 1 to 6. Write the audit | `llm.complete` | Optional drafting help. Cite the data for every claim. |

Usage data, call transcripts and workflow settings come from the builder's own product, so no Pramaan id covers them. The agent reads them and does the scoring and the summary itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `account.health` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
