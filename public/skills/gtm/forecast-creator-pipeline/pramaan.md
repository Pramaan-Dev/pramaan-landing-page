---
skill: forecast-creator-pipeline
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/forecast-creator-pipeline
pramaan_skills: [apps-connections]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Forecast creator pipeline" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is arithmetic. No superpower is needed except an optional read of the user's CRM for win rate and ACV.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs: win rate, ACV | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Only if a CRM is connected. Read actions only. Otherwise ask the user. |

The agent does the model, the sensitivity check and the write-up itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
