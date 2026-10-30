---
skill: reddit-attribution-tracking
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/reddit-attribution-tracking
pramaan_skills: [apps-connections, social-media]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, db.rows.select, reddit.posts.search-public]
---

# Run "Reddit attribution tracking" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read it in analytics | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | From the user's analytics tool, if connected. Read only. |
| Connect to pipeline | `db.rows.select` | Signups or deals from the user's own database. |
| Where measurement ends, correlate | `reddit.posts.search-public` | Dates of Reddit mentions, to line up with signup spikes. |

The agent does the UTM tagging and the correlation reasoning itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
