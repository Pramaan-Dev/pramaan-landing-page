---
skill: google-ads-budget-portfolio-reallocation
author: john-williams
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/john-williams/google-ads-budget-portfolio-reallocation
pramaan_skills: [ads-marketing]
ids: [ads.budget.pacing, ads.accounts.list, ads.campaigns.list, ads.insights.get]
---

# Run "Google Ads budget portfolio reallocation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.budget.pacing` is a mission. It compares daily spend with each campaign's budget. Use it for the first read, then do the reallocation math yourself.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Model the account as one envelope | `ads.accounts.list`, `ads.campaigns.list` | Read-only. Budget and spend per campaign. |
| 2. Read results per campaign | `ads.insights.get` | Spend, impressions, clicks and conversions. It does not return impression share lost to budget, so the user exports that from Google Ads. |

The agent does steps 3 to 6 itself: move caps, protected minimums, spike handling and consolidation. Pramaan has no id that changes a Google campaign budget, so the agent proposes the moves and the user makes them.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
