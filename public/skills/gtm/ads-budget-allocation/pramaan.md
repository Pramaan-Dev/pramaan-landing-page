---
skill: ads-budget-allocation
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-budget-allocation
pramaan_skills: [ads-marketing]
ids: [ads.performance.report]
---

# Run "Budget allocation by stage" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Stage investment: today's split | `ads.performance.report` | Optional. Current spend by campaign on connected ad accounts. Group it by stage if campaign names carry the stage. |

This is a planning framework. The agent does the stage split and how it shifts as spend grows itself.

## Before running

1. Quote `ads.performance.report` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything or changes a budget.
