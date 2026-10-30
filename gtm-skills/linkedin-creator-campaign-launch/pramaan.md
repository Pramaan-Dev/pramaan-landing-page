---
skill: linkedin-creator-campaign-launch
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/linkedin-creator-campaign-launch
pramaan_skills: [social-media]
ids: [linkedin.search.posts, linkedin.user.profile, linkedin.post.comments, campaign.posts.report]
---

# Run "LinkedIn creator campaign launch" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Week 2: find creators | `linkedin.search.posts`, `linkedin.user.profile` | Who posts on the exact problem. Audience fit over follower count. |
| Week 2: read the comments | `linkedin.post.comments` | Are the right job titles responding? |
| Week 4: measure | `campaign.posts.report` | Views, likes and comments per post link. Clicks, trials and conversions come from the user's own tracking. |

No Pramaan id sends the brief or messages a creator; the user does that. The agent does week 1 (ICP and one conversion event), the brief and the pricing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
