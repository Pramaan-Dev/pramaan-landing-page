---
skill: ads-optimization-signals
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-optimization-signals
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.waste.find]
---

# Run "Optimization signals" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find your breakeven costs | `ads.performance.report` | Spend and results by campaign, for actual CPL against breakeven CPL. |
| Testing rules: non-performer rule | `ads.waste.find` | Campaigns, ad sets and ads that spent and produced no conversions. |

Lagging signals such as pipeline come from the user's CRM. The agent picks the leading signals, applies the testing rules and keeps the experiment log itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. They need a connected ads account.
