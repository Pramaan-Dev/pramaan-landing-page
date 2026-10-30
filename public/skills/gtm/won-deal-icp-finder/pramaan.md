---
skill: won-deal-icp-finder
author: erwann-lefevre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/erwann-lefevre/won-deal-icp-finder
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, companies.enrich]
---

# Run "Won-deal ICP finder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Select on money | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it to read deals and their values. An export works too. |
| Cluster on revenue | `companies.enrich` | Industry, size and location for deal companies the CRM leaves blank. |

The agent does the arithmetic (the skill's script), the archetypes and the source ranking itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
