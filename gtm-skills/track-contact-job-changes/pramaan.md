---
skill: track-contact-job-changes
author: jorge-macias
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jorge-macias/track-contact-job-changes
pramaan_skills: [people-companies, apps-connections]
ids: [people.linkedin.find, people.social-profiles.find, people.profile.details, people.employment.check, people.employment.check-bulk, people.changes.monitor.create, companies.enrich, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Track contact job changes" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Read the contact in the CRM | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions first. |
| 2. Find a LinkedIn URL | `people.linkedin.find`, `people.social-profiles.find` | The first works from name and company. The second works from an email address. Check the name and company on the profile found. |
| 3. Current and past roles | `people.profile.details` | Check the returned name matches. |
| 4. Compare with the CRM company | `people.employment.check`, `people.employment.check-bulk` | The bulk id takes up to 100 rows as one job. |
| 5. Is the new company in the CRM | `companies.enrich`, `apps.action.execute` | Match the same way as step 4. |
| Ongoing watch | `people.changes.monitor.create` | Optional. Rented monthly, so it has a standing cost. |
| 6. Apply | `apps.action.execute` | Writes to the CRM. |

The agent does the matching rules and the one-table summary itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price. Quote `people.changes.monitor.create` especially, as it bills every month.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. `people.changes.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
