---
skill: renewal-save-motion
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/renewal-save-motion
pramaan_skills: [people-companies, apps-connections, email]
ids: [apps.action.execute, contacts.changes.watch, people.employment.check, companies.signals.get, company.news.digest, email.draft.create]
---

# Run "Renewal save motion" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| The renewal clock: renewal list and account history | `apps.action.execute` | Read actions only, on the connected CRM and support apps. |
| Risk triage: champion or sponsor left | `people.employment.check`, `contacts.changes.watch` | One-off check, or a standing paid watch on key contacts. |
| Risk triage: events at the customer | `companies.signals.get`, `company.news.digest` | Funding, layoffs, leadership changes. Check dates. |
| Outreach to the sponsor | `email.draft.create` | Draft only. |

The agent builds the T-120 runbook, the risk read and the save plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
