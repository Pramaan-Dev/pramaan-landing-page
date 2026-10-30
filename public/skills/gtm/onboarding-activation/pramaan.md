---
skill: onboarding-activation
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/onboarding-activation
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "Onboarding activation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is program design. No superpower is needed except to read the sales evidence being handed over.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Carry the evidence across the signature | `apps.action.execute` | Optional. Read actions only: deal notes and threads in connected apps. |
| The activation arc: draft plans and checklists | `llm.complete` | Optional. |

The agent designs the activation event, stall detection and graduation itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
