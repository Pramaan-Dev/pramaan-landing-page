---
skill: expansion-revenue-architect
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/expansion-revenue-architect
pramaan_skills: [people-companies, apps-connections]
ids: [apps.action.execute, companies.signals.bulk, companies.workforce, companies.jobs.search, company.news.digest]
---

# Run "Expansion revenue architect" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| GRR diagnostic | `apps.action.execute` | Read actions only, on revenue and usage data in connected apps. |
| Expansion scoring: signal triggers | `companies.signals.bulk` | Funding, hiring and leadership events across the customer base. |
| Whitespace analysis: growth at the account | `companies.workforce`, `companies.jobs.search` | Headcount trend and open roles in the function you serve. |
| Account news | `company.news.digest` | What happened lately. |

The agent designs the expansion motion, handback rules, renewal pricing and the 90-day program itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
