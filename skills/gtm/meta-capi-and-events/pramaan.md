---
skill: meta-capi-and-events
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-capi-and-events
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.tracking-tag.status, apps.catalog.search, apps.action.execute, ads.conversions.send]
---

# Run "Meta Conversions API & events" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pixel plus CAPI: is the pixel there | `ads.tracking-tag.status` | Tag status on a connected store or site. |
| Event hierarchy: one event per lifecycle stage | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for contacts that reached MQL, SQL or won. |
| Send events, with email and phone for match quality | `ads.conversions.send` | One event per stage per person. Use stable event ids so Meta can deduplicate. |

The skill prefers HubSpot's native Meta link or n8n. Pramaan is another way to send the events. The agent designs the hierarchy and the priorities itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `ads.conversions.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
