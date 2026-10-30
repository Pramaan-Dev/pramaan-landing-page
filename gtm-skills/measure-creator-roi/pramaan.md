---
skill: measure-creator-roi
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/measure-creator-roi
pramaan_skills: [social-media, apps-connections]
ids: [campaign.posts.report, post.analyze, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Measure creator ROI" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Week-one indicators: posts | `campaign.posts.report` | Views, likes, comments and engagement per post. Not clicks: CTR, bounce and on-site time come from the user's analytics. |
| One post in depth | `post.analyze` | Engagement and what the comments say. |
| Measure the funnel: MQL, SQL, pipeline, closed-won | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read from the user's CRM or analytics, if connected. Read actions only. |

The agent does the attribution rules, the five-row CFO view and the leading indicators itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
