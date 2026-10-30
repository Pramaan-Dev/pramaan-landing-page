---
skill: account-progression-staging
author: steve-armenti
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/steve-armenti/account-progression-staging
pramaan_skills: [apps-connections, people-companies, ai-models]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, apps.action.run, companies.signals.get, companies.enrich, people.search, llm.complete]
---

# Run "Account progression staging" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Resolve identity and gather the signal stack | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute`, `companies.enrich` | CRM activity, deals and contacts, plus the company profile. |
| 0. Outside signals | `companies.signals.get` | Dated, typed events. |
| 1. Buying-group features | `people.search` | Roles in the company. |
| 2. Evaluate stage criteria | `llm.complete` | Optional. The agent can judge this itself. |
| 3. Apply the stage | `apps.action.run` | Writes the stage field. Only after approval. Re-read to verify. |

The agent does steps 4 to 6 itself: stage history, account memory, and transition routing.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
