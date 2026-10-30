---
skill: google-ads-pmax-asset-groups
author: john-williams
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/john-williams/google-ads-pmax-asset-groups
pramaan_skills: [ads-marketing]
ids: [ads.accounts.list, ads.campaigns.list, ads.ads.list, ads.ad.review.get, ads.insights.get]
---

# Run "Google Ads Performance Max asset groups" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. See the current structure | `ads.accounts.list`, `ads.campaigns.list`, `ads.ads.list` | Read-only. Check how far asset-level detail goes before relying on it. |
| 4. Judge a changed group | `ads.insights.get`, `ads.ad.review.get` | Look at results and the review verdict. |

The agent does steps 2, 3, 5 and 6 itself: filling slots, video, brand cannibalization and search term reading. The catalogue lists no id that edits a Performance Max asset group, so the agent proposes the changes.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
