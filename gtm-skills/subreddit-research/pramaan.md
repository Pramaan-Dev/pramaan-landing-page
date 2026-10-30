---
skill: subreddit-research
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/subreddit-research
pramaan_skills: [social-media, web-search]
ids: [subreddit.digest, reddit.search.subreddits, social.post.validate.subreddit, reddit.subreddit.profile, reddit.subreddit.posts, reddit.posts.search-public, web.read]
---

# Run "Subreddit research" with Pramaan

This skill is built for ReddGrow's commands. Pramaan can do the search, inspection and fit check without it. It has no traffic trend data.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`subreddit.digest` is a mission (several steps, one result). It reads the recent posts of one community and writes what they discuss. Use it for step 3 on each candidate.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Search wide | `reddit.search.subreddits`, `reddit.posts.search-public` | Topic, problem language and adjacent niches. |
| 2. Inspect each: size and type | `social.post.validate.subreddit`, `reddit.subreddit.profile` | Members, public or restricted, and the description. Drop restricted and private ones. |
| 3. Judge fit from content | `reddit.subreddit.posts`, `subreddit.digest` | Is anyone asking the questions the product answers? |
| 4. Wiki and rules | `web.read` | The wiki index and rules pages. |

The agent vets five at a time and writes the shortlist with a sample thread and the binding rule for each. The user chooses what to track.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or post anything.
