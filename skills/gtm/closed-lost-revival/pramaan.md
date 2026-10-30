---
skill: closed-lost-revival
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/closed-lost-revival
pramaan_skills: [people-companies, apps-connections, email]
ids: [apps.action.execute, contacts.changes.watch, people.employment.check, companies.signals.bulk, company.news.digest, email.draft.create]
---

# Run "Closed-lost revival" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Lanes A and C. Closed-lost deals, quiet proposals and quiet threads | `apps.action.execute` | Read actions only, on the connected CRM. |
| Lane B. Champions who changed jobs | `people.employment.check` | Is the contact still at the account. |
| Lane B. Keep watching for job changes | `contacts.changes.watch` | A standing paid watch. Use for the sweep list between quarters. |
| Compression 5. Dated evidence for the premise | `companies.signals.bulk`, `company.news.digest` | Funding, hiring, leadership, news. Check dates. |
| Revival note | `email.draft.create` | Draft only. |

The agent does the hard gates, the loss-pattern match, de-duplication, ranking and the 5 to 15 cap itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. `contacts.changes.watch` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
