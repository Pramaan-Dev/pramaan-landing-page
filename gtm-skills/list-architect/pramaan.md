---
skill: list-architect
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/list-architect
pramaan_skills: [people-companies, email]
ids: [lead.list.build, company.list.build, company.icp.score, lead.qualify, account.contacts.map, lead.list.clean, company.list.resolve]
---

# Run "List architect" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.list.build` then `lead.list.build` are missions (several steps, one result each). Build the company list first, then the people list.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Source companies | `company.list.build` | Counts first, fetches a bounded list after approval. |
| Qualify accounts | `company.icp.score`, `lead.qualify` | Fit scores, or one company against up to eight criteria. |
| Find contacts, persona mapping | `account.contacts.map`, `lead.list.build` | Contacts by role with checked work emails. |
| Deduplicate and validate | `company.list.resolve`, `lead.list.clean` | Match messy names to real companies. Check each row. |

The agent does the ICP definition and scoring weights itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything. `lead.list.build` exports paid records after a count, so the agent shows the count and price first.
