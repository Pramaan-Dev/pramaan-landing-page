---
skill: icp
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/icp
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, companies.enrich, company.icp.score]
---

# Run "ICP" with Pramaan

This skill is built for the Swan workspace: it loads and saves segments and personas in Swan's knowledge. Pramaan can still pull the deals, fill in firmographics and test a proposed change.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Pull recent closed deals | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it for won and lost deals from the last 6 months. |
| 3. Pull firmographics | `companies.enrich` | Size, industry and stage where the records are blank. |
| 5. Propose refinements | `company.icp.score` | Optional. Score recent wins and losses against the proposed criteria, to show the change holds. |

The agent does step 4, the patterns, itself. Steps 1 and 6 read and save Swan's knowledge, which Pramaan does not touch.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
