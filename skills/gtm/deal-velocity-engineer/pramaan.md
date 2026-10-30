---
skill: deal-velocity-engineer
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/deal-velocity-engineer
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "Deal velocity engineer" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is analysis and stage design. No superpower is needed except to read your own pipeline.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Diagnostic step 1. Measure current state | `apps.action.execute` | Read actions only: deals and stage history in the connected CRM. |
| Stage exit criteria: draft the wording | `llm.complete` | Optional. |

The agent finds the binding constraint, sets gates and deflates the pipeline itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
