---
skill: creator-programme-qbr
author: maxwell-nimmo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maxwell-nimmo/creator-programme-qbr
pramaan_skills: [social-media, ai-models]
ids: [creator.profile, linkedin.user.posts, linkedin.post.detail, llm.complete]
---

# Run "Creator programme QBR" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull the quarter's data: post results | `linkedin.user.posts`, `linkedin.post.detail` | Public engagement on each campaign post. |
| 1. Creator audience and activity | `creator.profile` | A mission across platforms. |
| 3 and 4. Recommendations and the six sections | `llm.complete` | Optional. |

Campaign spend and pipeline come from the user's own records. The agent does the pattern finding (step 2) and the Scale, Adjust or Stop calls itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
