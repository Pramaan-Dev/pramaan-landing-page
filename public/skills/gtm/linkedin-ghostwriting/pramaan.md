---
skill: linkedin-ghostwriting
author: gali-firon
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gali-firon/linkedin-ghostwriting
pramaan_skills: [social-media, web-search]
ids: [linkedin.user.posts, linkedin.search.posts, news.headlines.search]
---

# Run "LinkedIn ghostwriting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Read the history: last live posts | `linkedin.user.posts` | The exec's recent posts with text, date and engagement. The ledger comes from the user. |
| 2. Mine the signal | `news.headlines.search` | Recent headlines for the news share. |
| 2. Mine the signal | `linkedin.search.posts` | Posts on the topic, for the repost and for angles. |

The agent does steps 3 to 8 itself: the anti-repeat gate, the three types, the fit check, drafting in voice, scoring and the ledger. No id here publishes a post.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or post anything.
