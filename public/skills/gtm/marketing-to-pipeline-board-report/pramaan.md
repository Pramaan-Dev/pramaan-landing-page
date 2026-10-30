---
skill: marketing-to-pipeline-board-report
author: gaetano-romeo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gaetano-romeo/marketing-to-pipeline-board-report
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.performance.report, apps.catalog.search, apps.action.execute]
---

# Run "Marketing to pipeline board report" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs to load: paid channel spend | `ads.performance.report` | Spend and results by campaign. |
| Inputs to load: pipeline and revenue | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it to read opportunities and won deals. An export works too. |

Plan figures and attribution come from the user. The agent does the five report sections, the leading and lagging split and the translation into business terms itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
