---
skill: customer-expansion-scoring
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/customer-expansion-scoring
pramaan_skills: [people-companies, apps-connections]
ids: [account.health, company.icp.score, companies.enrich, companies.headcount.get, people.enrich, apps.catalog.search, apps.action.execute]
---

# Run "Customer expansion scoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.health` is a mission. It checks customer usage and feedback. Use it for the product depth and support signals, then add the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Signal stack: meetings, product depth, support, site visits | `apps.catalog.search`, `apps.action.execute` | Read from the user's CRM, product or support tool. |
| Persona quality | `people.enrich` | One call per champion or user. |
| Expansion headroom | `companies.enrich`, `companies.headcount.get`, `company.icp.score` | Size now against the plan they are on, and fit against criteria. |
| Output: write the tier back, only if asked | `apps.action.execute` | One CRM field per call. |

The agent does the weighting, hard caps, tier definitions and the written reasons itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `account.health` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
