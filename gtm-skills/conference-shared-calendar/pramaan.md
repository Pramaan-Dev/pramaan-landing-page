---
skill: conference-shared-calendar
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/conference-shared-calendar
pramaan_skills: [apps-connections, web-search]
ids: [web.read, calendar.calendar.create, calendar.event.create, calendar.event.update, calendar.events.list]
---

# Run "Shared conference calendar" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read the official agenda | `web.read` | One page per call. |
| Create the reference calendar | `calendar.calendar.create` | Set the venue timezone. |
| Write sessions as Free events | `calendar.event.create` | No attendees. Keep source links in the description. |
| Update without duplicates | `calendar.events.list`, `calendar.event.update` | List first, then update by saved id. |

The agent does the agenda cleanup, the source-ID mapping and the sharing permissions check itself. Sharing settings are not exposed as an id here, so set them in the calendar app.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `calendar.calendar.create` creates a calendar in the connected mailbox. The agent shows the exact inputs and waits for the user's yes.
3. `calendar.event.create` creates a calendar event and can email invitations. The agent shows the exact inputs and waits for the user's yes.
4. `calendar.event.update` changes a calendar event and can email attendees. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
