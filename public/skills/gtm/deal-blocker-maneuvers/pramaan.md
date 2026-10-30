---
skill: deal-blocker-maneuvers
author: nikhil-mirza
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nikhil-mirza/deal-blocker-maneuvers
pramaan_skills: [apps-connections, ai-models]
ids: [meeting.summarize, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "Deal blocker maneuvers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is mostly judgement. Pramaan only fetches the evidence.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Primary evidence | `meeting.summarize`, `apps.catalog.search`, `apps.action.execute` | Summary of a call recording, and read actions on email threads in a connected mailbox. The deal record comes from the user's CRM. Score only from what the buyer said. |
| 5. Draft the maneuver | `llm.complete` | Optional. Drafting help only. |

The agent does steps 1, 3, 4, 6 and 7 itself: the segmentation gate, stage-band reading, picking the blocker, lanes and the delta. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
