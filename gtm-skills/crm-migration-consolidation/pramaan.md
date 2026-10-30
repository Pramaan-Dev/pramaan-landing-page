---
skill: crm-migration-consolidation
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/crm-migration-consolidation
pramaan_skills: [apps-connections, people-companies]
ids: [crm.dedupe, crm.record.enrich, apps.connections.list, apps.catalog.search, apps.action.execute, companies.name.normalize, companies.domain.find]
---

# Run "CRM migration and consolidation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`crm.dedupe` proposes merges for duplicate live accounts, confirmed by domain and name. Conflicts are left for review. Use it for the dedupe step before cutover.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read both systems | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions only. Needs each CRM connected through apps. |
| Harmonisation: company names and domains | `companies.name.normalize`, `companies.domain.find` | Strip legal suffixes. Find the domain for rows that lack one. |
| Fill gaps in records | `crm.record.enrich` | Fills empty fields only. Never overwrites. |
| Cutover: write to the target CRM | `apps.action.execute` | One approved batch at a time. |

The agent does the system-of-record design, identity rules, history strategy and adoption plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.dedupe` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `crm.record.enrich` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
