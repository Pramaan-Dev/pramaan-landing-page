---
skill: meeting-slot-picker
author: nicolas-fry
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nicolas-fry/meeting-slot-picker
pramaan_skills: [email, apps-connections]
ids: [calendar.agenda.get, calendar.events.list, calendar.free-busy.get, email.draft.create]
---

# Run "Meeting slot picker" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Read the calendar | `calendar.agenda.get`, `calendar.events.list` | Needs a connected calendar. Otherwise ask the user to paste the day's commitments. |
| 3. Count busy time | `calendar.free-busy.get` | Busy intervals only. Good for the longest free block. |
| 6. Confirmation draft | `email.draft.create` | Saves a draft for the thread. Nothing is sent. |

The agent does steps 1, 2, 4, 5 and the booking itself: classifying the meeting, pinning timezones, reading the other side's booking page, scoring slots and clicking book. Pramaan has no tool for a third party's booking page.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
