---
skill: qbr-ebr-builder
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/qbr-ebr-builder
pramaan_skills: [apps-connections, people-companies, ai-models]
ids: [apps.action.execute, company.news.digest, companies.news, llm.complete]
---

# Run "QBR and EBR builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Review architecture: value recap in the customer's own numbers | `apps.action.execute` | Read actions only: usage, tickets and outcomes in connected apps. |
| EBR: the customer's business context | `company.news.digest`, `companies.news` | Recent news that shapes the executive agenda. |
| Draft the deck text | `llm.complete` | Optional. |

The agent designs the QBR and EBR structure and the value recap itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
