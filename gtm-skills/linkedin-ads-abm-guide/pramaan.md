---
skill: linkedin-ads-abm-guide
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/linkedin-ads-abm-guide
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.library.search]
---

# Run "LinkedIn ads for ABM" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| The budget math: average CPC | `ads.performance.report` | Optional. Spend and clicks by campaign on a connected LinkedIn account give the real CPC. |
| Formats by funnel stage | `ads.library.search` | Optional. What competitors run in LinkedIn's public ad library. |

This is a planning guide. The agent does the format choice, the budget formula, the structure and the benchmarks itself. Pramaan does not build LinkedIn campaigns.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
