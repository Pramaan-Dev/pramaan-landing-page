---
skill: google-ads-ppc-math
author: john-williams
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/john-williams/google-ads-ppc-math
pramaan_skills: [ads-marketing]
ids: [ads.insights.get, ads.budget.estimate, google.keywords.volume]
---

# Run "Google Ads PPC math" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Get the real rates | `ads.insights.get` | Optional. Use the account's own CTR, CPC and conversion rate when connected. |
| 4. Missed clicks from impression share | `google.keywords.volume` | Optional. Search volume for the keywords. |
| Forecast a new budget | `ads.budget.estimate` | A mission. Traffic at a chosen bid, never a promise. |

This is arithmetic. The agent does steps 2, 3, 5 and 6 itself: the forecast chain, target gaps, the CPC sensitivity check and input sanity checks.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
