---
skill: cs-operations
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/cs-operations
pramaan_skills: [apps-connections, people-companies, email]
ids: [account.health, apps.action.execute, companies.signals.bulk, company.news.digest, people.employment.check, email.draft.create]
---

# Run "CS operations" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.health` is a mission (several steps, one result). For one customer it reads usage and feedback from a connected app and billing records, and returns cited observations and named gaps. Use it as input to the health score.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Health score: usage, tickets, contract data | `apps.action.execute` | Read actions only, on connected product, support and billing apps. |
| Expansion signals and event-based playbooks | `companies.signals.bulk`, `company.news.digest` | Funding, layoffs, leadership changes, news. |
| Event-based playbooks: did the sponsor leave | `people.employment.check` | Compares a profile's employer with the account. |
| Recovery or outreach note | `email.draft.create` | Draft only. |

The agent designs the five-dimension score, weights, thresholds and the recovery plays itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `account.health` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
