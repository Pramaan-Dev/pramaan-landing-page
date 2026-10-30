---
skill: outbound-triggers-6
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/outbound-triggers-6
pramaan_skills: [people-companies]
ids: [account.contacts.map, lead.find, companies.news]
---

# Run "6 outbound triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find the right people (CXO, managers, multi-persona) | `account.contacts.map` | Contacts at a company by role, with checked work email. |
| Find target accounts | `lead.find` | Companies that fit, each with a named contact. |
| Add a line of context | `companies.news` | Dated news. Check the date. |

The agent does the premise choice and the writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
