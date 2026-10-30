---
skill: clay-buying-signals-5
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/clay-buying-signals-5
pramaan_skills: [people-companies]
ids: [contacts.changes.watch, companies.jobs.search, company.visitors.identify, companies.funding.signals, company.techstack, company.signals.find]
---

# Run "5 buying signals for Clay" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.find` is a mission (several steps, one result). It finds companies with dated signals and checks their fit.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Recent job changes | `contacts.changes.watch` | Standing paid watch for job and title changes. |
| 2. Hiring for specific roles | `companies.jobs.search` | Open listings at a company. |
| 3. Website visitors | `company.visitors.identify` | Companies visiting the site. |
| 4. Funding announcements | `companies.funding.signals` | Recent rounds from the press. |
| 5. Technology changes | `company.techstack` | What a company runs now. |

The agent does the heat scoring and the outreach itself. Pramaan replaces the Clay tables, not the thinking.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
