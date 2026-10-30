---
skill: customer-health
author: yoni-tserruya
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yoni-tserruya/customer-health
pramaan_skills: [people-companies, apps-connections]
ids: [company.list.resolve, companies.signals.get, companies.news, companies.jobs.search, people.employment.check, people.role.find, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Customer health" with Pramaan

This skill is built for Lusha. Pramaan can resolve the accounts, pull signals, news and open roles, and check contacts are still in seat, from its own sources. There is no Lusha intent score.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve accounts | `company.list.resolve` | Unresolved names come back apart. List them at the end. |
| 3. Buying signals | `companies.signals.get` | Dated events with a source URL. Keep the lookback window. |
| 3. News | `companies.news` | Leadership moves, funding, layoffs. Check each event date. |
| 3. Hiring signals | `companies.jobs.search` | Open roles by function. |
| 3. Contact verification | `people.employment.check` | Same employer, different employer or not listed. |
| 3. Most senior contact, if none given | `people.role.find` | The person in a named role, with their profile. |
| 4. Engagement gap (60+ days) | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Last activity from the CRM, if connected. Read actions only. |

The agent classifies each signal as expansion or churn risk (step 4), scores and ranks (step 5) and writes the brief (step 6) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
