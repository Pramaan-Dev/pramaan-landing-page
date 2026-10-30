---
skill: audit-the-base-not-the-rate
author: roman-palii
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/roman-palii/audit-the-base-not-the-rate
pramaan_skills: [apps-connections, ai-models]
ids: [apps.action.execute, llm.complete]
---

# Run "Audit the base, not the rate" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is a reasoning check. No superpower is needed except to read the real numbers.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find the multiplicand with real data | `apps.action.execute` | Optional. Use read actions only, on deal or payout records in a connected CRM or billing app. |
| Quantify at the condition | `llm.complete` | Optional. The agent can do the arithmetic itself. |

The agent finds the base, the condition where it matters, the gap and the clause to revisit itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
