---
skill: customer-health-tiers
author: amos-bar-joseph
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amos-bar-joseph/customer-health-tiers
pramaan_skills: [apps-connections, people-companies]
ids: [account.health, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Customer health tiers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`account.health` is a mission (several steps, one result). It checks one customer's usage and feedback, linked billing records and named tickets. The skill's nightly run over every customer is the agent's loop around it.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull the data (read-only) | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute`, `account.health` | Connected apps, then billing status, plan, renewal and seats, or one customer's usage, feedback, billing and tickets. |
| 5. Write to the CRM and alert on changes | `apps.action.execute` | Lifecycle phase, risk tier and expansion tier, and the alert post. |

The agent does steps 2 to 4 (the three separate tier rules) and step 6 (the weekly digest) itself. Product usage must come from the user's own database or warehouse.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `account.health` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
