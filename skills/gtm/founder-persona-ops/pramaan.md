---
skill: founder-persona-ops
author: vesselin-malev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/vesselin-malev/founder-persona-ops
pramaan_skills: [social-media, ai-models]
ids: [linkedin.user.posts, linkedin.post.comments, social.post.draft, text.social-post.generate]
---

# Run "Founder persona ops" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Run intake | `linkedin.user.posts` | Read the founder's past posts for voice and topics. |
| Build a rhythm: drafts | `social.post.draft`, `text.social-post.generate` | Drafts only. Nothing is published. |
| Engagement layer | `linkedin.post.comments` | Read comments to answer. |

The agent does the boundaries, story mining and persona rules itself. It never invents stories.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids publish anything. Posting is the founder's call.
