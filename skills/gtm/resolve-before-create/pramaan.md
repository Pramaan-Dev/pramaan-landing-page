---
skill: resolve-before-create
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/resolve-before-create
pramaan_skills: [apps-connections, people-companies]
ids: [company.list.resolve, companies.enrich, people.enrich, apps.connections.list, apps.catalog.search, apps.action.execute, crm.leads.push, apps.action.run]
---

# Run "Resolve before create" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`crm.leads.push` is a mission (several steps, one result). It identity-checks found companies, compares them with CRM domain records, then proposes account creation. Use it for companies. Use the steps below for contacts.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Resolve the name to a real entity | `company.list.resolve`, `companies.enrich` | Domain, parent and subsidiaries. |
| Resolve a person | `people.enrich` | Confirm current employer. |
| Search the CRM first, archived included | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Match on domain, not name. |
| Create only if nothing matches | `crm.leads.push`, `apps.action.run` | Only after approval. |

The agent does the match rules and the decision to link, merge or review ambiguous cases itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
