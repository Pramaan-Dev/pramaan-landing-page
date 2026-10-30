---
skill: estimate-creator-rate
author: maxwell-nimmo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maxwell-nimmo/estimate-creator-rate
pramaan_skills: [social-media]
ids: [linkedin.user.profile, linkedin.user.posts, creators.performance.get]
---

# Run "Estimate creator rate" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Gather inputs: followers | `linkedin.user.profile` | |
| 1. Weighted-engagement model | `linkedin.user.posts` | Reactions, comments and reposts per post. |
| 2. CPM anchor: views | `creators.performance.get` | Optional. Public follower and view counts only. |

The agent does the weighted-engagement math, the CPM cross-check and the three-rate band itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
