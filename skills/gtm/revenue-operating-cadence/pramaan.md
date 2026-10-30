---
skill: revenue-operating-cadence
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revenue-operating-cadence
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "Revenue operating cadence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill designs meetings, a data pyramid and board reporting. No superpower is needed except to read the numbers that feed it.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| The data inputs that matter | `apps.action.execute` | Optional. Read actions only: pipeline and forecast numbers in the connected CRM. |
| The core ceremonies: agendas and board narrative | `llm.complete` | Optional. |

The agent designs the cadence itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
