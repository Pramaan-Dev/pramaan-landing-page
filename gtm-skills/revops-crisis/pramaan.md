---
skill: revops-crisis
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-crisis
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "RevOps crisis" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is triage and planning. No superpower is needed except to read the numbers behind the crisis.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Week 1. Data audit: win rate, coverage, forecast history | `apps.action.execute` | Optional. Read actions only, on the connected CRM. |
| 30-60-90 response plan | `llm.complete` | Optional. |

The agent does the triage, sequencing and weekly review plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
