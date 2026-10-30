---
skill: ads-campaign-planning
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-campaign-planning
pramaan_skills: [ads-marketing]
ids: [ads.budget.estimate, ads.targeting.search, ads.library.search]
---

# Run "Campaign planning and execution" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Channels and budget | `ads.budget.estimate` | Optional. Google and Bing keyword traffic and cost at a chosen bid. Search only. |
| 3. Locations and targeting | `ads.targeting.search` | The targeting options a platform offers. |
| 4. Creative and copy | `ads.library.search` | Optional. Competitors' ads from public ad libraries. |

The agent does the naming convention, objectives and the written plan itself. Pramaan does not launch campaigns.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
