---
skill: customer-health-actions
author: omer-levy
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/omer-levy/customer-health-actions
pramaan_skills: [people-companies, email]
ids: [companies.signals.bulk, companies.news, people.employment.check, email.draft.create]
---

# Run "Customer health actions" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill names Lusha and Gmail. On Pramaan the same job runs on the company signal and email draft superpowers.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Scan expansion and risk signals | `companies.signals.bulk` | Verified signals for many company domains in one job: funding, hiring, leadership changes. |
| 2. News on each account | `companies.news` | Check the date of each article. |
| 2. Has the sponsor left | `people.employment.check` | Compares a profile's current employer with the account. |
| 4. Drafts for accounts that need action | `email.draft.create` | Drafts only, in the user's mailbox. |

The agent does the classification (READY, WARM, HIGH RISK, MIXED-STATE, STABLE) and the writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
