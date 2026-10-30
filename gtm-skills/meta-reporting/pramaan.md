---
skill: meta-reporting
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-reporting
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.campaigns.list, ads.insights.get]
---

# Run "Meta ads reporting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.performance.report` is a mission (several steps, one result). It returns spend and results by campaign with observations. Money is never added across currencies.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Performance analysis: account and campaign | `ads.campaigns.list` | Status, budget, spend, clicks and conversions per campaign. |
| 1 and 2. Ad set and ad level, period over period | `ads.insights.get` | Spend, reach, clicks and conversions per campaign or ad, per day. |

The agent does the analysis rules and the HTML dashboard itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. They need a connected ads account.
