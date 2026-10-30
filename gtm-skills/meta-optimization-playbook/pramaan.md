---
skill: meta-optimization-playbook
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-optimization-playbook
pramaan_skills: [ads-marketing, people-companies]
ids: [ads.performance.report, ads.insights.get, ads.destination.check, ads.creative.fatigue, lead.ads.capture, ads.waste.find]
---

# Run "Meta Ads optimization playbook" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| B2B benchmarks: where the account stands | `ads.performance.report` | Spend and results by campaign. |
| Decision tree 1: CPA increasing | `ads.insights.get` | Daily numbers, to check the rise held for 2 or more days. |
| Decision tree 1: CPA increasing | `ads.destination.check` | Whether each live ad's page loads and matches the ad. |
| Decision tree 2: CTR dropping | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |
| Decision tree 3: lead quality bad | `lead.ads.capture` | New form leads with email checked, title read and employer looked up. |
| Decision tree 4: kill | `ads.waste.find` | Ads that spent with no conversions. |

Pramaan has no id to pause ads or change budgets. The agent follows the trees and the scaling protocol, and the user makes the change in Ads Manager.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. They need a connected ads account.
