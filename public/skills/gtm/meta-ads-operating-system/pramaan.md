---
skill: meta-ads-operating-system
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-ads-operating-system
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.budget.pacing, ads.insights.get, ads.waste.find, ads.creative.fatigue]
---

# Run "Meta Ads operating system" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Set the target: trailing CPL | `ads.performance.report` | 30 days of spend and results by campaign. Qualified leads come from the CRM. |
| 2. Campaign structure: budget split | `ads.budget.pacing` | Daily spend against daily budget for the scaling and testing campaigns. |
| 3. The decision tree | `ads.insights.get` | Spend and results per ad, in total and per day. |
| 3. The decision tree: pause candidates | `ads.waste.find` | Ads that spent with no conversions. |
| 4. Swap rules | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |

Pramaan has no id to pause ads or change budgets. The agent applies the formulas and the user makes the change in Ads Manager.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. They need a connected ads account.
