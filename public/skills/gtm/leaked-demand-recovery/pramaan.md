---
skill: leaked-demand-recovery
author: eliezer-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/eliezer-cohen/leaked-demand-recovery
pramaan_skills: [email, people-companies, apps-connections]
ids: [email.messages.search, lead.inbound.route, lead.record.verify, people.email.verify, companies.enrich, email.draft.create, apps.catalog.search, apps.action.read, apps.action.execute]
---

# Run "Leaked demand recovery" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Build candidates from the capture systems | `email.messages.search`, `apps.action.read`, `apps.catalog.search`, `apps.action.execute` | Inbox, forms and chat tools. Not the CRM. `apps.action.read` reads Slack and Teams messages only. Forms need read actions through `apps.action.execute`. |
| 3. Verify against two independent systems | `lead.inbound.route`, `lead.record.verify`, `people.email.verify` | Hard gate. |
| 4 and 5. History, then disqualifiers | `apps.action.execute`, `companies.enrich` | CRM history, then region and segment. |
| 6. Draft one message per confirmed drop | `email.draft.create` | The agent writes each message on what the person asked about, then saves it as a draft. |

The agent does the scope, the voice choice and the approval table (step 7) itself. Nothing is sent until the user approves.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
