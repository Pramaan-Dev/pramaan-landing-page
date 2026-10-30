---
skill: handle-linkedin-profile-view-signal
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/handle-linkedin-profile-view-signal
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [linkedin.user.profile, people.enrich, companies.domain.find, companies.enrich, company.icp.score, apps.catalog.search, apps.action.execute]
---

# Run "Handle LinkedIn profile view signal" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve the viewer | `linkedin.user.profile`, `people.enrich` | Needs a confident name, title and company. |
| 2. Resolve the company | `companies.domain.find`, `companies.enrich` | Fallback when enrichment has no company. |
| 4. CRM relationship check | `apps.catalog.search`, `apps.action.execute` | Read the CRM before any write. |
| 6. Log the signal, create or update company and contact | `apps.action.execute` | Writes to the CRM. |
| 7. Classify intent and route | `company.icp.score` | Fit against the user's criteria. The agent classifies intent itself. |
| 8. Outcome post | `apps.action.execute` | Posts to a connected chat app. |

The agent does the webhook parse, idempotency check, internal check and intent routing itself. The webhook itself comes from your profile-view tool, not from Pramaan.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
