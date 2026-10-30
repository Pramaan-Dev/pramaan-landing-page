---
skill: pavilion-event-concierge
author: sam-jacobs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-jacobs/pavilion-event-concierge
pramaan_skills: [email, ai-models]
ids: [calendar.events.list, calendar.event.create, llm.complete]
---

# Run "Pavilion event concierge" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is built for Pavilion's GTM2026 event and its session database. Pramaan cannot read that database or build the agenda app. It can only help with the calendar sync step.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Calendar sync: check for clashes | `calendar.events.list` | Only if a calendar is connected. |
| Calendar sync: add chosen sessions | `calendar.event.create` | One event per session. Leave out attendees so no invitations go out. |
| Stages 1 to 3: explain picks | `llm.complete` | Optional. |

The agent does the stages (hello, picks, agenda build, refine), the refresh and the HTML build itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `calendar.event.create` creates a calendar event and can email invitations. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
