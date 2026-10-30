---
skill: governed-crm-cleanup
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/governed-crm-cleanup
pramaan_skills: [apps-connections, people-companies]
ids: [crm.dedupe, crm.record.enrich, apps.connections.list, apps.catalog.search, apps.action.execute, apps.action.run]
---

# Run "Governed CRM cleanup" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`crm.dedupe` is a mission (several steps, one result). It proposes merges for duplicate accounts, confirmed by domain and name. Conflicts stay for review. `crm.record.enrich` fills only empty fields on a record and never overwrites a value.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Snapshot the CRM | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions only. Record counts and time first. |
| Find duplicates | `crm.dedupe` | Proposals only until approved. |
| Fill missing fields | `crm.record.enrich` | Empty fields only. |
| Apply approved operations | `apps.action.run` | Re-read each record first. Stop if it changed. |

The agent does the audit rules, the change plan, sampling, the post-run re-audit and the prevention backlog itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.dedupe` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `crm.record.enrich` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
6. None of the other ids send or change anything.
