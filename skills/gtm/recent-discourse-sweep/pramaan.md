---
skill: recent-discourse-sweep
author: nadav-david
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nadav-david/recent-discourse-sweep
pramaan_skills: [web-search, social-media, people-companies]
ids: [web.search-options, reddit.posts.search-public, linkedin.search.posts, company.news.digest, companies.news, web.read, llm.complete]
---

# Run "Recent discourse sweep" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. News venue | `company.news.digest`, `companies.news` | The digest is a mission. Check dates against the window. |
| 3. Web venue | `web.search-options` | Set the date range and domains. |
| 3. Reddit venue | `reddit.posts.search-public` | |
| 3. LinkedIn venue | `linkedin.search.posts` | |
| 5. Read against the ranking | `web.read` | |
| 6. Synthesise | `llm.complete` | Optional. |

The agent fixes the window and venues (step 1), dates and drops items (step 4) and writes the coverage report (step 7) itself: which venues were read, which came back empty and which were not reached.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
