---
skill: gtm-plays-11
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/gtm-plays-11
pramaan_skills: [people-companies]
ids: [lead.find, company.reputation.report, contacts.changes.watch, companies.jobs.search]
---

# Run "11 GTM plays" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| New team members, leaving employees | `contacts.changes.watch` | Standing paid watch for job changes. |
| Role and skills targeting | `companies.jobs.search`, `lead.find` | Open roles at a company, and leads at companies that fit. |
| Bad reviews targeting | `company.reputation.report` | Review sample with repeated pros and cons. |

The agent does the play choice, resource ideas and message writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
