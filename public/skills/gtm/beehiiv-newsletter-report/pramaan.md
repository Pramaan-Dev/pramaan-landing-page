---
skill: beehiiv-newsletter-report
author: ryan-estes
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-estes/beehiiv-newsletter-report
pramaan_skills: [apps-connections, ai-models]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "Beehiiv newsletter report" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is built for Beehiiv. No Pramaan id is made for Beehiiv. If the user has a Beehiiv connection, Pramaan can read posts and subscribers through it. Otherwise the agent calls the Beehiiv API with the user's own key, as the skill describes.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check for a Beehiiv connection | `apps.connections.list` | If missing, use the user's Beehiiv API key directly. |
| Find post and subscriber actions | `apps.catalog.search` | Look for Beehiiv in the results. |
| 2. Fetch confirmed posts with stats | `apps.action.execute` | Read actions only. |
| 5. Fetch the subscriber list with stats | `apps.action.execute` | Page through to the end. |
| 6. Write the open, click and month narratives | `llm.complete` | Optional. Short and tied to the numbers. |

The agent does the per-issue formulas, monthly rollups, growth series, segmentation, charts and report layout itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
