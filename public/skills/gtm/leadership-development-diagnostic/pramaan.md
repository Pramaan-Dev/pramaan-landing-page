---
skill: leadership-development-diagnostic
author: jason-mesiarik
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jason-mesiarik/leadership-development-diagnostic
pramaan_skills: [ai-models, web-search]
ids: [llm.complete, web.search, calendar.events.list]
---

# Run "Leadership development diagnostic" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. Time allocation | `calendar.events.list` | Only if the leader's calendar is connected. Pull 4 to 6 weeks. |
| 5. Analyze | `llm.complete` | Optional. Helps sort 360 comments into situation, behavior, impact. |
| Background | `web.search` | Optional. Public context on the role or company. |

This is mostly interviews and judgment. The agent does steps 1 to 3 and 6 to 9 itself: the conversation, the diagnosis, the delivery and the sprint plan. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
