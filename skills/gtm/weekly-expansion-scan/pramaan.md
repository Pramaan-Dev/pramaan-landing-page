---
skill: weekly-expansion-scan
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/weekly-expansion-scan
pramaan_skills: [people-companies, web-search, apps-connections]
ids: [account.health, account.signals.review, company.icp.score, companies.headcount.get, company.news.digest, apps.catalog.search, apps.action.execute]
---

# Run "Weekly expansion scan" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Build the working universe | `apps.catalog.search`, `apps.action.execute` | Read closed-won accounts from the CRM. |
| 2. Score each account | `account.health`, `company.icp.score` | Both are missions. Usage depth comes from `account.health`. |
| 3. Expansion context | `account.signals.review`, `companies.headcount.get`, `company.news.digest` | Headcount growth, signals and news. |
| 5. Post the digest | `apps.action.execute` | Posts to a connected chat app. |

The agent does the urgency classes, the top 5 lists, ARR upside maths and error handling (step 6) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `account.health` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
