---
skill: conference-recommendation
author: dave-engel
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/dave-engel/conference-recommendation
pramaan_skills: [web-search, ai-models]
ids: [web.search, web.read, web.answers, llm.complete]
---

# Run "Conference recommendation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Discover events with breadth | `web.search`, `web.answers` | Run many queries across regions and formats. |
| 3. Famous-event audit | `web.search` | Check big names did not drop out. |
| 4 to 5. Read each event's page for dates, audience, cost | `web.read` | One page per call. |
| 7 to 8. Write the list and the description column | `llm.complete` | Optional. |

The agent does the classification, the scoring frame, the matchmaking bonus and the cross-client check itself. No superpower is needed for those.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval.
