---
skill: bridgebound-history-16
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/bridgebound-history-16
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, contacts.changes.watch, people.employment.check, companies.news, llm.complete]
---

# Run "Bridgebound history triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find closed-lost deals and demo pipeline | `apps.catalog.search`, `apps.action.execute` | Read from the user's connected CRM. |
| Spot executive churn | `people.employment.check`, `contacts.changes.watch` | Check where a contact works now. The watch is a standing paid monitor. |
| Add a reason to reach out | `companies.news` | Recent company news. |
| Draft the re-engagement message | `llm.complete` | Optional. |

The agent does the trigger choice, timing and writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
