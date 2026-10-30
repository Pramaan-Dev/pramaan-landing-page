---
skill: handle-linkedin-connection-request-signal
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/handle-linkedin-connection-request-signal
pramaan_skills: [people-companies, social-media, apps-connections]
ids: [linkedin.user.profile, people.enrich, companies.domain.find, companies.enrich, company.icp.score, apps.catalog.search, apps.action.execute]
---

# Run "Handle LinkedIn connection request signal" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve who sent the request | `linkedin.user.profile`, `people.enrich` | Check the live headline against enrichment. |
| 2. Resolve the company | `companies.domain.find`, `companies.enrich` | Use if enrichment gives no confident company. |
| 4. CRM relationship check | `apps.catalog.search`, `apps.action.execute` | Read the CRM before any write. |
| 6. Log the signal, create or update company and contact | `apps.action.execute` | Writes to the CRM. |
| 7. Score the signal | `company.icp.score` | Fit against the user's criteria. The agent applies the active-signal rules. |
| 8. Visibility post | `apps.action.execute` | Posts to a connected chat app. |

The agent does the dedup, the internal check, the ICP gate and the tier rules itself. This skill scores and alerts only. It sends nothing.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
