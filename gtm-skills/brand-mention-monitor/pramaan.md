---
skill: brand-mention-monitor
author: uri-knorovich
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/uri-knorovich/brand-mention-monitor
pramaan_skills: [web-search, social-media]
ids: [brand.monitor, brand.mentions.report, web.search, web.brand-mentions.search, google.serp.news, reddit.posts.search-public, linkedin.search.posts, text.sentiment.analyze, web.read]
---

# Run "Brand mention monitor" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`brand.monitor` is a mission (several steps, one result). It shows what is said about a brand across news and social right now, with volume per source and themes. `brand.mentions.report` adds monthly counts and tone from the news.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Resolve brand variants | `web.search` | Alternate spellings, handles, sub-brands. |
| Sweep: web and press | `web.brand-mentions.search`, `google.serp.news` | Pages that name the brand, and news. |
| Sweep: communities | `reddit.posts.search-public`, `linkedin.search.posts` | One query per variant. |
| Read the best hits | `web.read` | Full page only for high-impact candidates. |
| Score sentiment | `text.sentiment.analyze` | Per mention. |

The agent does the source profile, the four-dimension score, dedupe and tiering itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. Flagging the crisis owner is the agent's call.
