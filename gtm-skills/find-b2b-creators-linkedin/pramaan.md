---
skill: find-b2b-creators-linkedin
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/find-b2b-creators-linkedin
pramaan_skills: [social-media, ads-marketing]
ids: [linkedin.search.posts, linkedin.post.comments, linkedin.user.profile, linkedin.user.posts, ads.library.search]
---

# Run "Find B2B creators on LinkedIn" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Mine engaged audiences | `linkedin.search.posts`, `linkedin.post.comments` | Find the last 20 relevant posts, then list their commenters. |
| 2. Targeted topic search | `linkedin.search.posts` | Narrow problem language. Note who posts on it often. |
| 3. Second-degree analysis | `linkedin.user.posts`, `linkedin.user.profile` | See who strong creators engage with. |
| 4. Competitor sponsorships | `linkedin.search.posts`, `ads.library.search` | Search posts that name the competitor. The ad library shows only the competitor's own paid ads. |
| Vet: audience fit | `linkedin.post.comments` | Share of commenters with buyer job titles. |
| Vet: engagement and consistency | `linkedin.user.posts` | Posting rhythm over six months and the replies each post gets. |

No Pramaan id covers method 5 (creator marketplaces). Pramaan's creator missions cover Instagram, TikTok, X and YouTube, not LinkedIn. The agent does the on-ICP count and the voice test itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
