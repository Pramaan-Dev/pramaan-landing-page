---
skill: crm-health-scoring
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/crm-health-scoring
pramaan_skills: [apps-connections, ai-models]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "CRM health scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find the connected CRM | `apps.connections.list` | If none, ask the user to connect one. |
| Snapshot accounts, contacts, deals, activities | `apps.catalog.search`, `apps.action.execute` | Read actions only. Record counts and time. |
| Explain the movement | `llm.complete` | Optional. |

The agent does the rules, scoring maths, snapshot comparison and remediation queue itself. It applies no fixes.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
