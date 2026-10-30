---
skill: clay-expert
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/clay-expert
pramaan_skills: [people-companies, email]
ids: [table.enrich, lead.enrich, companies.enrich, people.enrich, people.email.find, people.email.verify, people.phone.find, company.icp.score, web.extract]
---

# Run "Clay expert" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`table.enrich` is a mission (several steps, one result). It fills rows of a table in the user's own database with company data. `lead.enrich` does the same for one contact.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Company enrichment | `companies.enrich` | From a domain, name or LinkedIn page. |
| People enrichment | `people.enrich` | From a profile, email or name. |
| Email waterfall | `people.email.find`, `people.email.verify` | Find, then check the mailbox. |
| Phone enrichment | `people.phone.find` | From a LinkedIn page. |
| Scoring | `company.icp.score` | Fit against criteria. |
| Claygent-style web research | `web.extract` | Pull structured fields from one page. |

The agent does the table setup, conditional logic, formulas and debugging itself. Pramaan has no Clay credits or Clayscript.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. `table.enrich` writes into a table in the user's own database. The agent shows the exact table and rows first and waits for the user's yes.
