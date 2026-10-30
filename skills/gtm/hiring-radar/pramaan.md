---
skill: hiring-radar
author: dusan-vystrcil
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/dusan-vystrcil/hiring-radar
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [lead.hiring.find, job.postings.search, linkedin.jobs.search, companies.jobs.search, companies.jobs.monitor.create, companies.enrich, account.contacts.map, apps.catalog.search, apps.action.execute]
---

# Run "Hiring radar" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.hiring.find` is a mission. It finds companies that match a description and are hiring. Use it for a one-off sweep. Use the monitor in step 1 for a daily radar.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull fresh postings, two scans | `job.postings.search`, `linkedin.jobs.search` | Keep the two sources apart. |
| 1. Standing scan | `companies.jobs.monitor.create` | Each run returns only newly posted jobs. |
| 3. Resolve and gate the company | `companies.enrich`, `companies.jobs.search` | Company profile and its other open roles. |
| 5. Read, log, alert | `account.contacts.map`, `apps.catalog.search`, `apps.action.execute` | Find the buyer, then write to the CRM and post to chat. |

The agent does step 2 (the GTM-relevance threshold), step 4 (the dedup and suppression ledger) and step 6 (the digest) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. `companies.jobs.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
