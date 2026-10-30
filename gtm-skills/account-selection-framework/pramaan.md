---
skill: account-selection-framework
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/account-selection-framework
pramaan_skills: [people-companies, apps-connections]
ids: [market.size, apps.catalog.search, apps.action.execute, companies.search, companies.lookalike.search, companies.enrich, company.techstack, company.icp.score, crm.leads.push]
---

# Run "Account selection framework" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| How many accounts do you need | `market.size` | Company counts for the ICP, to check the market is big enough. |
| 1. Define ICP criteria from win-loss | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it for won and lost deals. |
| 2. Build initial account list | `companies.search` | By filters or a plain description. |
| Layer 4: lookalike modeling | `companies.lookalike.search` | Companies like the best customers, seeded with their domains. |
| 3. Enrich accounts: firmographic | `companies.enrich` | Size, industry, location and stage. |
| 3. Enrich accounts: technographic | `company.techstack` | Technologies on the site and in open roles. |
| 4. Score and tier | `company.icp.score` | Fit against the criteria. The agent sets the tiers. |
| 5. Import to CRM | `crm.leads.push` | Compares with CRM records, then creates accounts one by one. |

Step 6, the LinkedIn sync, happens in the user's ad and CRM tools. The agent does the revenue maths, the scoring weights and the list hygiene rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
