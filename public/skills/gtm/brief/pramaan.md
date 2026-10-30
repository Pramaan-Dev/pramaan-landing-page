---
skill: brief
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/brief
pramaan_skills: [people-companies, apps-connections]
ids: [deal.brief, account.contacts.map, companies.news]
---

# Run "Brief" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`deal.brief` is a mission (several steps, one result). It returns a checked CRM deal, its linked notes and optional company news as a cited brief. Unread emails and calls are named as gaps.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull the canonical state | `deal.brief` | Needs a connected CRM. |
| 1. Pull the canonical state: recent events | `companies.news` | News is dated by event: check the date. |
| 2. Map the buying committee | `account.contacts.map` | Optional. People at the account by role, to compare with the contacts on the deal. |

The agent does steps 3 to 5 itself: the risks, the one-page brief and the pressure test.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `deal.brief` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
