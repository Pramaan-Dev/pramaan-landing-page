---
skill: meta-campaign-structure
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-campaign-structure
pramaan_skills: [ads-marketing]
ids: [ads.campaigns.list, ads.ad-sets.list]
---

# Run "Meta campaign structure" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Recommended account architecture: today's layout | `ads.campaigns.list` | Optional. Campaigns with status, budget and results. Needs a connected ads account. |
| What to avoid: mixed ad sets | `ads.ad-sets.list` | Optional. Ad sets with status and budget, per campaign. |

This is design work. The agent does the phases, the architecture, the build order and the settings itself. Changes are made in Ads Manager.

## Before running

1. Quote each id first (`quote`) if you use them. Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
