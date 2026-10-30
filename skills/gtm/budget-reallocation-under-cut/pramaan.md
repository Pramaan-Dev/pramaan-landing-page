---
skill: budget-reallocation-under-cut
author: gaetano-romeo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gaetano-romeo/budget-reallocation-under-cut
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.waste.find]
---

# Run "Budget reallocation under cut" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs to load: paid spend | `ads.performance.report` | Spend and results by campaign on connected ad accounts. Paid channels only. |
| Apply the cut: trim inside healthy channels | `ads.waste.find` | Campaigns, ad sets and ads that spent and produced no conversions. |

Pipeline, revenue and other channel costs come from the user's CRM and finance data. The agent does the scoring, the capture and creation split, the cover plan, the three scenarios and the board summary itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change a budget.
