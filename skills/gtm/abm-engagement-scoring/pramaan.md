---
skill: abm-engagement-scoring
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/abm-engagement-scoring
pramaan_skills: [people-companies, apps-connections]
ids: [company.visitors.identify, companies.signals.bulk, company.icp.score, people.company.search, apps.action.execute]
---

# Run "ABM engagement scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Signal types: first-party engagement | `apps.action.execute` | Read actions only, on the connected CRM or marketing tool. Pramaan does not hold your own engagement data. |
| Signal types: anonymous site visitors | `company.visitors.identify` | Company behind the visit. Keep confirmed identities only. |
| Signal types: third-party intent | `companies.signals.bulk` | Dated funding, hiring and leadership events for many domains. |
| Account fit | `company.icp.score` | Fit against written criteria. |
| Buying group mapping: who holds each role | `people.company.search` | Fill gaps in the tracker. Engagement still comes from your own data. |

The agent designs the weights, decay, stages, handover triggers and dashboard itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
