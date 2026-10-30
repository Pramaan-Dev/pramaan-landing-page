---
skill: event-lead-ingestion
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/event-lead-ingestion
pramaan_skills: [people-companies, email, apps-connections]
ids: [lead.enrich, people.linkedin.find, people.enrich, companies.domain.find, companies.enrich, company.icp.score, outreach.draft, email.draft.create, apps.catalog.search, apps.action.execute]
---

# Run "Event lead ingestion" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.enrich` is a mission. It gives a full contact record from a work email or profile. Use it for steps 1 to 4 when you have an email or LinkedIn URL.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Resolve the person | `people.linkedin.find`, `people.enrich` | Name plus company is enough to find the profile. |
| 2. Resolve the company | `companies.domain.find`, `companies.enrich` | Domain from the name, then the profile. |
| 3. Relationship history | `apps.catalog.search`, `apps.action.execute` | Check the CRM first. Stop on competitor, customer or live thread. |
| 4. Enrich and write the CRM, 7. Tag the event | `apps.action.execute` | Creates or updates the contact and company, and adds the event tag. |
| 5. Score | `company.icp.score` | Fit against the user's criteria. |
| 8. Branch on the preferred outcome | `outreach.draft`, `email.draft.create` | Saved as drafts in the user's inbox. Nothing is sent. |

The agent does the intake, hard gates, step 6 (account memory), the branch choice and the reply to the requester itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
