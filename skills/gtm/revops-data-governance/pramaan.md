---
skill: revops-data-governance
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/revops-data-governance
pramaan_skills: [apps-connections, people-companies]
ids: [crm.dedupe, apps.connections.list, apps.catalog.search, apps.action.execute, apps.action.run, companies.enrich]
---

# Run "Revenue data governance" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`crm.dedupe` is a mission (several steps, one result). It finds duplicate accounts in your connected CRM, confirms them by domain and name, and proposes merges. Conflicts are left for review. Use it for the deduplication part only.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find the connected CRM | `apps.connections.list` | If none, ask the user to connect one. |
| 2-3. Audit fields and score data quality | `apps.catalog.search`, `apps.action.execute` | Read actions only. Find the action key first. |
| 4. Deduplicate accounts | `crm.dedupe` | Proposes merges confirmed by domain and name. Conflicts are left for review. |
| 6. Enrich missing company data | `companies.enrich` | By domain. |
| Apply approved field or merge changes | `apps.action.run` | Only the changes the user approved. |

The agent does the data model, naming rules, field governance, integration flows, definitions and the operating model itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.dedupe` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
