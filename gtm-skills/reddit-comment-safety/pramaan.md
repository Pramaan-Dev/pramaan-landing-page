---
skill: reddit-comment-safety
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-comment-safety
pramaan_skills: [social-media, web-search, ai-models]
ids: [reddit.subreddit.profile, web.read, reddit.post.detail, text.judge, text.rewrite, text.ai.detect]
---

# Run "Reddit comment safety" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1-2. Subreddit rules and self-promotion policy | `reddit.subreddit.profile`, `web.read` | Description from the profile, then read the rules page itself. |
| 3. Relevance | `reddit.post.detail` | Read what the post actually says. |
| 2 to 6. Check the draft | `text.judge` | A yes/no question with a probability, for each of the six points. |
| Write like a person | `text.rewrite`, `text.ai.detect` | Rewrite, then check for robotic signals. |

The agent does the two-strikes rule and natural-mention mode itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids post anything.
