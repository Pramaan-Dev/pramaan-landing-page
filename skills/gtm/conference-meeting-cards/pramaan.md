---
skill: conference-meeting-cards
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/conference-meeting-cards
pramaan_skills: [people-companies, apps-connections, web-search]
ids: [meeting.brief, apps.connections.list, apps.catalog.search, apps.action.execute, people.enrich, people.profile.details, companies.enrich, companies.news, llm.complete]
---

# Run "Conference meeting cards" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`meeting.brief` is a mission (several steps, one result). It gives company and person facts for one call. Run it once per meeting, then cut the result down to the card bullets.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Deal amount, stage, next step | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions on the connected CRM only. |
| 2. What the company does | `companies.enrich`, `companies.news` | One plain sentence. |
| 3. Attendee photo, title, LinkedIn | `people.enrich`, `people.profile.details` | Check the employer matches before using the profile. |
| 5. Write the bullets | `llm.complete` | Optional. Keep to the character cap. |

The agent does steps 1, 4, 6, 7 and 8 itself: the meeting list, the next-step fallback, the HTML card, saving and the share link. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
