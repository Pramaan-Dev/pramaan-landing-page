---
skill: abm-account-engagement-report
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/abm-account-engagement-report
pramaan_skills: [people-companies, apps-connections, ai-models]
ids: [companies.enrich, apps.connections.list, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "ABM account engagement report" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Gather pipeline data | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Only if the user has no pipeline export. Read actions on the connected CRM only. |
| 2. Cross-reference: fill in account details | `companies.enrich` | Industry and size where the export lacks them. |
| 3. Action plan text | `llm.complete` | Optional. |

The account data comes from the user's LinkedIn export. The agent does the parsing, scoring, funnel, heatmap and HTML page itself (steps 1, 3 and 4).

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
