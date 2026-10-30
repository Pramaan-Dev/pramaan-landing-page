---
skill: revops-forecasting
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-forecasting
pramaan_skills: [apps-connections, ai-models]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "RevOps forecasting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly thinking and arithmetic. A superpower helps only to pull deals from a connected CRM.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pull open deals, stages, history | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Only if a CRM is connected. Otherwise ask for an export. |
| Draft the forecast commentary | `llm.complete` | Optional. |

The agent does the method choice, coverage maths, weighting and variance review itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
