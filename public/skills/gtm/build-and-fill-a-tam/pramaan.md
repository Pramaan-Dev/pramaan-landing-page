---
skill: build-and-fill-a-tam
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/build-and-fill-a-tam
pramaan_skills: [people-companies, apps-connections]
ids: [company.list.build, companies.search-suggest, companies.search, companies.search-bulk, companies.enrich, people.search-count, apps.catalog.search, apps.action.execute, crm.leads.push]
---

# Run "Build and fill a TAM" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.list.build` is a mission (several steps, one result). It counts companies for your filters, then fetches a bounded list. Use it for the account count and first batch. `crm.leads.push` then proposes them for your CRM.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Freeze the ICP filters | `companies.search-suggest` | Exact values each filter accepts. |
| Estimate the account universe | `companies.search`, `companies.search-bulk` | A provider cap is a floor, not the market. |
| Size the contact target | `people.search-count` | Counts people without returning them. |
| Measure CRM coverage | `apps.catalog.search`, `apps.action.execute` | Classify records against the same ICP. |
| Fill the gap in batches | `companies.enrich`, `crm.leads.push` | Small batches, resolved identities, approval before creating. |

The agent does the revenue model, burn-up tracking and snapshots itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
