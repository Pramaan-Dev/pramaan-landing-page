---
skill: multi-thread-deals
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/multi-thread-deals
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, account.contacts.map, companies.signals.get]
---

# Run "Multi-thread deals" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Find under-threaded deals | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it for open mid to late stage deals and their contacts. |
| 3. Find the right contact per missing persona | `account.contacts.map` | People at the account by role. Ask for the missing persona's titles. |
| 5. Pull a fresh signal per deal | `companies.signals.get` | Newest dated signals for the deal's company, as the angle. |

Step 2 loads the buying committee from Swan's memory; without Swan, the user gives the personas. The agent does steps 4, 6 and 7 itself: the motion, the review and the tracking.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
