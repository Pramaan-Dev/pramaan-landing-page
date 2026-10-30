---
skill: expansion-opportunity-analysis
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/expansion-opportunity-analysis
pramaan_skills: [people-companies, apps-connections, payments-money, ai-models]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, companies.enrich, companies.news, companies.funding-history, companies.headcount.get, billing.subscriptions.list, billing.transactions.list, people.company.search, llm.complete]
---

# Run "Expansion opportunity analysis" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Part 1 and 2.1. Deal notes and deal history | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions on the connected CRM only. |
| 2.2 to 2.5. Plan, seats and top-ups | `billing.subscriptions.list`, `billing.transactions.list` | Only if the builder bills through a connected billing account. Read-only. |
| 3.2 Map the buying committee | `people.company.search` | Who works there now, by role. |
| Part 3. Growth signals | `companies.enrich`, `companies.headcount.get`, `companies.funding-history` | Headcount and funding show room to grow. |
| Part 3. Recent events | `companies.news` | Check the date before calling it recent. |
| Part 3. Write the play | `llm.complete` | Optional drafting help. |

Usage and consumption numbers come from the builder's own product. The agent does the health read, the price options math and the play itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
