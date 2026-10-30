---
skill: roi-business-case
author: gal-aga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-aga/roi-business-case
pramaan_skills: [people-companies]
ids: [companies.enrich, companies.headcount.get]
---

# Run "ROI business case" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Establish the baseline: sanity check | `companies.enrich`, `companies.headcount.get` | Optional. Company size and team split, to check the buyer's numbers. Never a substitute for them. |

The baseline comes from the buyer's own data, as the skill says. The agent does the root cause, the three scenarios, the maths and the one-pager itself.

## Before running

1. Quote each id first (`quote`) if you use them. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything.
