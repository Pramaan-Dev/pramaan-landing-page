---
skill: account-tier-scoring
author: amos-bar-joseph
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amos-bar-joseph/account-tier-scoring
pramaan_skills: [people-companies, apps-connections]
ids: [company.icp.score, account.signals.review, companies.enrich, companies.headcount.get, companies.signals.get, company.visitors.identify, account.contacts.map, apps.catalog.search, apps.action.execute]
---

# Run "Account tier scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.signals.review` is a mission (several steps, one result). It reviews signal evidence and profiles for target companies. `company.icp.score` scores fit against the user's criteria.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Exclusion checks, 2. Prior-relationship floor | `apps.catalog.search`, `apps.action.execute` | Customers, open deals, closed lost and trial alumni from the connected CRM. |
| 1. ACV assessment | `companies.enrich`, `companies.headcount.get`, `company.icp.score` | Size, headcount by department, and fit against criteria as inputs. |
| 3. Route by lifecycle stage: intent signals | `companies.signals.get`, `company.visitors.identify` | Dated signals, and companies visiting the site. Product usage for trials and customers must come from the user's own data. |
| 5. Update account memory | `apps.action.execute` | Writes the tier to the CRM. |
| 6. Buying committee enrichment | `account.contacts.map` | Contacts by role with checked work emails. |
| 7. Alerts and routing | `apps.action.execute` | Posts to the user's connected chat or CRM. |

The agent does the self-serve gate, step 4 (the Bronze to Diamond ladder) and the rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
