---
skill: crm-enrichment-sync
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/crm-enrichment-sync
pramaan_skills: [apps-connections, people-companies]
ids: [crm.record.enrich, crm.leads.push, crm.dedupe, apps.connections.list, apps.catalog.search, apps.action.execute, people.email.verify]
---

# Run "Sync enriched contacts into a CRM safely" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`crm.record.enrich` enriches one owned CRM record and fills only empty fields. It never overwrites a value. `crm.leads.push` proposes new accounts for found leads. `crm.dedupe` proposes merges for duplicate accounts. Each waits for approval. Use them for single records or small sets. For a bulk plan with a field map, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Confirm the boundary: the connection | `apps.connections.list` | If the CRM is not connected, stop and offer an import file. |
| Read the destination schema | `apps.catalog.search` | Find the action keys and their input fields. |
| Resolve identity before mutation | `apps.action.execute`, `people.email.verify` | Read actions only: match by email, profile URL, then name plus domain. Skip rows whose email fails. |
| Execute idempotently | `apps.action.execute` | One write per approved row. |

The agent does the field map, duplicate decisions, the write plan and the reconcile report itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.record.enrich` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `crm.dedupe` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
6. None of the other ids send or change anything.
