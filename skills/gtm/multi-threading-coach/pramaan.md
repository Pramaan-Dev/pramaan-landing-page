---
skill: multi-threading-coach
author: gal-aga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-aga/multi-threading-coach
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [apps.catalog.search, apps.action.execute, account.contacts.map, linkedin.company.employees]
---

# Run "Multi-threading coach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Map the full buying committee: who is in the deal | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it to read the contacts and activity on the deal. |
| 1. Map the full buying committee: who is missing | `account.contacts.map`, `linkedin.company.employees` | People at the account by role, with public profiles. |

The agent does steps 2 to 5 itself: access and influence scores, the 2x2, the coalition plan and the re-check cadence.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
