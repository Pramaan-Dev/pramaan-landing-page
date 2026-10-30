---
skill: warm-intro-intelligence
author: din-arbel
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/din-arbel/warm-intro-intelligence
pramaan_skills: [people-companies, social-media, web-search]
ids: [companies.intro-paths.find, companies.intro-paths.check, linkedin.connections.list, people.search, linkedin.user.posts, web.search, llm.complete]
---

# Run "Warm intro intelligence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Resolve the input | `companies.intro-paths.check` | Is there any path into this company? |
| 3a. Find target contacts | `people.search` | By company domain and title. |
| 4. Query the network and compute edges | `companies.intro-paths.find`, `linkedin.connections.list` | Needs a connected LinkedIn account. |
| 7. Enrich the top 2 paths | `web.search`, `linkedin.user.posts` | Press and posts where the bridge and the target appear together. |
| 7. Write the path summary | `llm.complete` | Optional. |

The agent does the ICP classification, the edge confidence and the ranking (steps 2, 5, 6) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval. Reading only.
