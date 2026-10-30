---
skill: conference-booking-links
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/conference-booking-links
pramaan_skills: [apps-connections, email]
ids: [apps.catalog.search, apps.action.execute, apps.connection.start, calendar.calendars.list, calendar.events.list, calendar.free-busy.get]
---

# Run "Conference booking links" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Connect each host's calendar and Cal.com | `apps.connection.start` | Returns a sign-in link. The host signs in. |
| 2 to 4. Create the schedule, event type and hosts in Cal.com | `apps.catalog.search`, `apps.action.execute` | Find the action key, then run it. Cal.com settings beyond what its actions expose stay manual. |
| 5. Check Busy conflicts | `calendar.calendars.list`, `calendar.events.list`, `calendar.free-busy.get` | `calendar.free-busy.get` shows only busy intervals. |
| 6. Test every public link | `apps.action.execute` | Only for what Cal.com actions can read. Otherwise open the link yourself. |

The agent does the rollback record, the timezone choices and the test report itself.

This skill is mostly Cal.com configuration, so Pramaan covers only part of it.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
