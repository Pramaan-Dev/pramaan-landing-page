---
skill: buying-signals-6
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/buying-signals-6
pramaan_skills: [people-companies, social-media]
ids: [contacts.changes.watch, lead.engagers.find, company.techstack, companies.funding.signals, company.hiring.signal, company.visitors.identify, company.signals.find]
---

# Run "6 buying signals" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.find` is a mission (several steps, one result). It finds companies with dated signals and checks their fit.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Former customers, alumni | `contacts.changes.watch` | Standing paid watch for job changes of known contacts. |
| 2. New leadership | `contacts.changes.watch` | Same watch, filtered to new senior titles. |
| 3. High-intent site and content | `company.visitors.identify`, `lead.engagers.find` | Companies on the site, and people who engaged with a post. |
| 4. Tech stack change | `company.techstack` | What a company runs now. Compare with a past read. |
| 5. Expansion, raise | `companies.funding.signals` | Recent rounds from the press. |
| 6. Hiring or downsizing | `company.hiring.signal` | Open roles and what they suggest. |

The agent does the ranking and the outreach choice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
