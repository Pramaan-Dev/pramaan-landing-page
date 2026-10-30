---
skill: subreddit-pre-post-check
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/subreddit-pre-post-check
pramaan_skills: [social-media, web-search]
ids: [social.post.validate.subreddit, reddit.subreddit.profile, reddit.subreddit.flairs, reddit.posts.search-public, web.read, subreddit.post.prepare]
---

# Run "Subreddit pre-post check" with Pramaan

This skill is built for ReddGrow's commands. Pramaan can run all four checks without it.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`subreddit.post.prepare` is a mission (several steps, one result). It checks a draft against one subreddit's limits and flairs and compares it with recent top posts. Nothing is posted.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1 and 2. Rules, community type | `social.post.validate.subreddit`, `reddit.subreddit.profile` | If restricted or private, stop. |
| 3. Duplicate URL | `reddit.posts.search-public` | Search for the link. |
| 4. Wiki norms | `web.read` | Read the wiki index page: flair rules, self-promo windows, karma minimums. |
| 4. Required flairs | `reddit.subreddit.flairs` | Labels the subreddit offers. |

The agent gives the go or no-go verdict with the exact rule. When it is borderline, the answer is no. Posting is the user's call.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids post anything.
