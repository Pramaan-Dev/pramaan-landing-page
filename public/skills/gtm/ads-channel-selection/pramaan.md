---
skill: ads-channel-selection
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-channel-selection
pramaan_skills: [ads-marketing]
ids: [ads.budget.estimate, google.keywords.ad-traffic, bing.audience.estimate]
---

# Run "Channel selection guide" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.budget.estimate` is a mission (several steps, one result). It returns Google and Bing keyword traffic and cost at a chosen bid, never a promise.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pro tip: real CPC before you commit | `google.keywords.ad-traffic` | Estimated clicks and cost for Google search ads at a bid. |
| Pro tip: real CPC before you commit | `bing.audience.estimate` | Audience size on Bing for a targeting, bid and daily budget. |

Pramaan has no CPC or audience estimate for Meta, LinkedIn or programmatic. The skill's $100 test campaign is still the way to get those. The agent does the criteria and the channel sequence itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or spend ad budget.
