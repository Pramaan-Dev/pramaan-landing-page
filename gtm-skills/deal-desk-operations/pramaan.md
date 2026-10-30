---
skill: deal-desk-operations
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/deal-desk-operations
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "Deal desk operations" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is process design: approval matrix, SLAs and override rules. No superpower is needed except to read your own deal history.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Discount tracking: past discounts and approval times | `apps.action.execute` | Optional. Read actions only, on deals in the connected CRM. |
| Approval matrix and SLAs: draft the rules | `llm.complete` | Optional drafting help. |

The agent designs the matrix, SLAs and escalation lane itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
