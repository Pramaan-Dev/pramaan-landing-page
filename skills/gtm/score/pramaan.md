---
skill: score
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/score
pramaan_skills: [people-companies, apps-connections]
ids: [company.icp.score, lead.qualify, companies.signals.get, apps.action.execute]
---

# Run "Score" with Pramaan

This skill is built for the Swan workspace: it keeps tiers and history in Swan's account memory. Pramaan can still check ICP fit, read business events and write the tier to the CRM.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Pre-scoring checks: ICP field | `company.icp.score` | Fit of the company against the target markets. |
| 0. Pre-scoring checks: ICP field | `lead.qualify` | Or one company against up to eight written criteria. |
| Signal hierarchy: business events | `companies.signals.get` | Newest dated funding, hiring and launch signals for the domain. |
| 3. Sync to CRM | `apps.action.execute` | Writes the tier and the note to the connected CRM. |

The other signals (inbound, meetings, product use, visits) come from the user's own systems. The agent does the routing, the tier, the decay check, the alert and the next play itself. Step 4 writes to Swan's account memory.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
