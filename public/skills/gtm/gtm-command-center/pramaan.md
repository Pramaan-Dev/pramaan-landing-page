---
skill: gtm-command-center
author: gali-firon
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gali-firon/gtm-command-center
pramaan_skills: [apps-connections, email]
ids: [apps.catalog.search, apps.action.execute, daily.agenda]
---

# Run "GTM command center" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Build it: one source of truth per lane | `apps.catalog.search`, `apps.action.execute` | Find each lane's read action (task board, queue, CRM), then run it through the connected app. |
| Run it daily | `daily.agenda` | A mission: today's meetings, urgent mail and open tasks in one view. |

The agent does the lane choice, the layout and the ranked morning read itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `daily.agenda` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
