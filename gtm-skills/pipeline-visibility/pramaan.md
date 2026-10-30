---
skill: pipeline-visibility
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/pipeline-visibility
pramaan_skills: [apps-connections, ai-models]
ids: [apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "Pipeline visibility" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is reporting design. Pramaan only reads the data.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Layers 1 and 2. Pull pipeline, stages and movement | `apps.catalog.search`, `apps.action.execute` | Find the CRM's read actions, then run them. Read actions only. |
| Forecast accuracy reporting: write the narrative | `llm.complete` | Optional. |

The agent designs dashboards, hygiene rules and the forecast report itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
