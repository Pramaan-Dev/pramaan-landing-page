---
skill: reddit-account-warmup
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-account-warmup
pramaan_skills: [social-media]
ids: [reddit.user.profile, reddit.user.comments, reddit.subreddit.posts, reddit.subreddit.profile]
---

# Run "Reddit account warm-up" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Where does the account stand | `reddit.user.profile`, `reddit.user.comments` | Karma, age and the promotional ratio so far. |
| Pick places to join in | `reddit.subreddit.profile`, `reddit.subreddit.posts` | Active, welcoming communities. |

The agent does the ratio ladder and the daily plan itself. Posting is the user's call.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids post anything.
