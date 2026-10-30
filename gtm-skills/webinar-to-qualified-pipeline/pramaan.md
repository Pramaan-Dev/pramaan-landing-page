---
skill: webinar-to-qualified-pipeline
author: gerrit-kesten
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gerrit-kesten/webinar-to-qualified-pipeline
pramaan_skills: [people-companies, email]
ids: [lead.list.clean, lead.enrich, company.icp.score, outreach.draft]
---

# Run "Webinar to qualified pipeline" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Reconcile identities and states | `lead.list.clean` | Marks duplicates, malformed and undeliverable addresses row by row. |
| Reconcile identities: company and role | `lead.enrich` | Person and employer from a work email. |
| Score fit and intent separately: fit | `company.icp.score` | Company fit against the user's criteria. Intent comes from attendance and questions. |
| Route the next action | `outreach.draft` | Optional. A first email draft for one priority record. Drafts only. |

The agent does the commercial job, the question reading, the routing rules and the funnel report itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
