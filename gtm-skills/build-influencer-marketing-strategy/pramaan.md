---
skill: build-influencer-marketing-strategy
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/build-influencer-marketing-strategy
pramaan_skills: [social-media, ai-models]
ids: [linkedin.search.posts, linkedin.post.comments, linkedin.user.profile, linkedin.user.posts, campaign.posts.report, llm.complete]
---

# Run "Build influencer marketing strategy" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Map the audience | `linkedin.search.posts`, `linkedin.post.comments` | Find posts on the ICP's problems, then read who comments and what they ask. |
| 2. Build the portfolio | `linkedin.search.posts`, `linkedin.user.profile` | Note who posts on the topic often, then read each profile. |
| 3. Score: ICP density and engagement | `linkedin.user.posts`, `linkedin.post.comments` | Sample about 30 recent commenters and count ICP titles. Look for real questions, not pods. |
| 3. Score: expertise | `linkedin.user.profile` | Current and past roles. |
| 6. Measure, cut, scale | `campaign.posts.report` | Views, likes and comments per post link. Qualified conversations come from the user's own tracking. |
| Draft the brief | `llm.complete` | Optional. The agent can write it itself. |

Pramaan's creator missions cover Instagram, TikTok, X and YouTube, not LinkedIn, so they are not used here. Creator marketplaces such as the one the skill names are outside Pramaan. The agent does step 0 (the brief), step 4 (flat-fee pricing) and step 5 (the creator brief) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. Contacting a creator is the user's call.
