---
skill: meeting-prep
author: alon-goldenberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alon-goldenberg/meeting-prep
pramaan_skills: [people-companies, web-search, email]
ids: [meeting.brief, person.public.brief, people.enrich, people.profile.details, people.social-profiles.find, companies.enrich, companies.news, companies.funding-history, web.search, calendar.events.list]
---

# Run "Meeting prep" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`meeting.brief` is a mission (several steps, one result). It returns company and person profiles, recent news and posts, and a brief where every statement names its source. Use it when there is one attendee and one company. For more attendees, or to follow the skill exactly, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pin down the meeting | `calendar.events.list` | Only if a calendar is connected. Otherwise ask. |
| 3. Research each attendee | `people.enrich`, `people.profile.details`, `people.social-profiles.find` | `person.public.brief` does all three plus a sourced brief. Run one per attendee, in parallel. |
| 4. Gap check | `web.search` | Name plus company, or name plus email domain. |
| 5. Company context | `companies.enrich`, `companies.news`, `companies.funding-history` | News is dated by event: check the date before calling it recent. |
| 7. Deep-read top sources | `web.search` | Fetch the 3 to 5 best URLs. |

The agent does steps 2, 6, 8 and 9 itself: workspace files, value positioning, writing and saving. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. Sharing the briefing is the agent's call, and it waits for the user's yes, as the skill says.
