---
skill: pipeline-review
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/pipeline-review
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, companies.signals.get]
---

# Run "Pipeline review" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Pull the deal slice | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it for open deals by owner and window, 20 at a time. |
| 4. Pull fresh signals for at-risk deals only | `companies.signals.get` | Newest dated signals for the flagged deal's company. |

The agent does steps 1, 3, 5 and 6 itself: the scope, the anomaly flags, one action per flag and the report.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
