---
skill: hygiene-gated-outbound
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/hygiene-gated-outbound
pramaan_skills: [apps-connections, email]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, people.email.verify, crm.dedupe]
---

# Run "Hygiene-gated outbound" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pull the exact campaign slice | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Accounts and contacts, owners, customers, open deals. |
| Check the contacts are reachable | `people.email.verify` | Per address, or bulk for lists. |
| Fix duplicates in the slice | `crm.dedupe` | Proposals only until approved. |

The agent does the five launch gates, the go or stop call and the remediation plan itself. Sending is a separate step after the gate passes.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.dedupe` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
