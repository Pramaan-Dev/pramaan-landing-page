---
skill: handle-demo-request
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/handle-demo-request
pramaan_skills: [people-companies, email, apps-connections]
ids: [people.email.verify, people.email.disposable, lead.enrich, companies.enrich, company.icp.score, calendar.free-busy.get, email.draft.create, email.draft.send, apps.catalog.search, apps.action.execute]
---

# Run "Handle a demo request" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Gate the email | `people.email.verify`, `people.email.disposable` | Do this before any paid enrichment. |
| 2. Enrich, then write to CRM | `lead.enrich`, `companies.enrich`, `apps.catalog.search`, `apps.action.execute` | `lead.enrich` is a mission. |
| 4. Score the account | `company.icp.score` | Mission. |
| 5A. Booking email | `calendar.free-busy.get`, `email.draft.create`, `email.draft.send` | Draft first, then send that same draft. Free-busy shows slots to offer. |
| 5C. Free-trial email | `email.draft.create`, `email.draft.send` | No calendar link. |
| 5. Alert the channel | `apps.action.execute` | Posts to a connected chat app. |

The agent does step 3 (persona before score), the branch choice (A, B or C) and the alert wording itself. Branch B sends nothing.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
