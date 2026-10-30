---
skill: reddit-authority-commenting
author: vesselin-malev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/vesselin-malev/reddit-authority-commenting
pramaan_skills: [social-media]
ids: [reddit.posts.search-public, reddit.subreddit.posts, reddit.post.detail, reddit.post.comments, text.ai.detect]
---

# Run "Reddit authority commenting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pick the thread | `reddit.posts.search-public`, `reddit.subreddit.posts` | Early, and still read later. |
| Read it fully | `reddit.post.detail`, `reddit.post.comments` | Know what is already answered. |
| Write like a participant | `text.ai.detect` | Optional check on the draft. |

The agent does disclosure of the affiliation, the method and the comment itself. Posting is the user's call.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids post anything.
