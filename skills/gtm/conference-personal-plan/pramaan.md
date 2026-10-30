---
skill: conference-personal-plan
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/conference-personal-plan
pramaan_skills: [apps-connections, web-search]
ids: [calendar.events.list, calendar.agenda.get, calendar.free-busy.get, calendar.event.create, web.read]
---

# Run "Conference personal plan" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Gather the shared agenda | `web.read` | Use it when the agenda is a web page. |
| Gather existing commitments | `calendar.events.list`, `calendar.agenda.get` | Protect these first. |
| Check for clashes | `calendar.free-busy.get` | Busy intervals only. |
| Put chosen commitments on the personal calendar | `calendar.event.create` | Busy blocks for the relevant person only. No guests. |

The agent does the planning itself: choosing between sessions, travel and meal allowances, team duty mapping and the final check.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `calendar.event.create` creates a calendar event and can email invitations. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
