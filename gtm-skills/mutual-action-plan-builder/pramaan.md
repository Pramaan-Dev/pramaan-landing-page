---
skill: mutual-action-plan-builder
author: gal-aga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-aga/mutual-action-plan-builder
pramaan_skills: [people-companies, email]
ids: [account.contacts.map, meeting.find-slot]
---

# Run "Mutual action plan builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Map the full buying committee | `account.contacts.map` | Optional. People at the buyer's company by role, to spot who is missing. |
| 5. Owners and target dates | `meeting.find-slot` | Optional. Earliest slot free on every supplied calendar, for milestones that need a meeting. |

This is a planning skill. The agent does the value summary, the buyer-evidence milestones, the backward timeline and the review cadence itself.

## Before running

1. Quote each id first (`quote`) if you use them. Nothing runs during a quote, and it returns the maximum price.
2. Nothing here sends anything or books a meeting.
