---
skill: google-ads-quality-score-diagnosis
author: john-williams
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/john-williams/google-ads-quality-score-diagnosis
pramaan_skills: [ads-marketing, web-search]
ids: [ads.destination.check, ads.ads.list, ads.ad-sets.list, ads.insights.get, web.read]
---

# Run "Google Ads Quality Score diagnosis" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Weight by spend | `ads.insights.get` | Read-only. Spend per ad group. |
| 4. Ad relevance and ad group breadth | `ads.ad-sets.list`, `ads.ads.list` | See how many themes each ad group holds. |
| 5. Landing page experience | `ads.destination.check`, `web.read` | The mission checks where ads send people. Read the page text too. |

Quality Score components are not in the catalogue, so the user pastes them. The agent does steps 1, 3 and 6 itself: the framing, routing each component to a fix and the weekly re-check.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
