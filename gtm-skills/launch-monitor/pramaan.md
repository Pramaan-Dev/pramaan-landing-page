---
skill: launch-monitor
author: uri-knorovich
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/uri-knorovich/launch-monitor
pramaan_skills: [web-search, social-media]
ids: [brand.monitor, news.digest, web.search, web.read, reddit.posts.search-public, linkedin.search.posts, text.sentiment.analyze]
---

# Run "Launch monitor" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`brand.monitor` is a mission (several steps, one result). Name the product and it returns the posts that name it and the volume per source. `news.digest` covers press inside the window.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Alternate names, launch date | `web.search` | Codenames, version names, repo names. |
| Sweep: press | `news.digest` | Articles inside the lookback window. |
| Sweep: community, social | `reddit.posts.search-public`, `linkedin.search.posts` | Includes the mischaracterization queries. |
| Competitors | `web.search` | Launches near the date. |
| Quotes and reach | `web.read` | Only for signals that survive triage. |
| Sentiment velocity | `text.sentiment.analyze` | Per mention, then compare across days. |

The agent does triage, memory between runs and the report itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
