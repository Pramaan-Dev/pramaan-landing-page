---
skill: event-radar
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/event-radar
pramaan_skills: [people-companies, email, apps-connections]
ids: [lead.enrich, company.icp.score, apps.catalog.search, apps.action.execute, outreach.draft]
---

# Run "Event radar" with Pramaan

This skill is built for the Swan workspace: an event webhook triggers it and it builds sequences and logs in Swan. Pramaan can still enrich, qualify and draft for each attendee.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Pull attendee detail | `lead.enrich` | Person and employer from a work email or profile link. |
| 3. Qualify to ICP | `company.icp.score` | Fit of each attendee's company. Drop non-ICP before drafting. |
| 4. CRM context per attendee | `apps.catalog.search`, `apps.action.execute` | Find the CRM's contact search action, then run it for each attendee. |
| 6. Draft the post-event message | `outreach.draft` | One draft per attendee, left in the user's mailbox. Nothing is sent. |

The attendee list comes from the user's event tool. The agent does step 1, the angle, and the bulk plan itself. Steps 7 and 9 use Swan's sequence and logging tools.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
