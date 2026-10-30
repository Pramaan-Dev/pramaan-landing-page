---
skill: hiring-signal-prospecting
author: thomas-maitre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-maitre/hiring-signal-prospecting
pramaan_skills: [people-companies, web-search, email]
ids: [lead.hiring.find, company.hiring.signal, linkedin.jobs.search, google.jobs.search, companies.jobs.search, linkedin.job.detail, people.role.find, people.company.search, people.email.find, people.email.verify, outreach.draft]
---

# Run "Hiring signal prospecting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.hiring.find` is a mission (several steps, one result). It finds companies that match a description and are hiring for a role, with the matching open roles. `company.hiring.signal` reads what one company's hiring suggests.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pick the roles | `linkedin.jobs.search`, `google.jobs.search` | Search the role titles that mean "about to buy". |
| 2. Read the posting | `linkedin.job.detail`, `companies.jobs.search` | Pull the pain sentence and the tools named. |
| 3. Find the buyer | `people.role.find`, `people.company.search` | Never the recruiter. |
| 3. Work email | `people.email.find`, `people.email.verify` | Check before you keep it. |
| 4. Open on the hire | `outreach.draft` | A draft only. It never sends. |

The agent does step 5 (logging the signal) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
