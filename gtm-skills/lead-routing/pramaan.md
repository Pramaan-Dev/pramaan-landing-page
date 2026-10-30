---
skill: lead-routing
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/lead-routing
pramaan_skills: [people-companies, apps-connections]
ids: [lead.inbound.route, companies.enrich, apps.action.execute]
---

# Run "Lead routing" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Known account: who just wrote in | `lead.inbound.route` | Mission. Finds the company behind an address in your inbox. |
| 2 and 3. ICP match and territory | `companies.enrich` | Employee band, industry, location. |
| 1, 4 and 5. Account match, owners, availability | `apps.action.execute` | Read actions on the connected CRM. |
| Assign the lead, alert the rep | `apps.action.execute` | Writes to the CRM or chat app. |

The agent designs the assignment logic, SLAs and fallbacks itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
