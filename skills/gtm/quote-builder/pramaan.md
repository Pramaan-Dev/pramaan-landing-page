---
skill: quote-builder
author: nicolas-fry
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nicolas-fry/quote-builder
pramaan_skills: [apps-connections, email]
ids: [apps.connections.list, apps.catalog.search, apps.action.execute, email.draft.create]
---

# Run "Customer-ready quote builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Check the catalog | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Works if the user's quoting tool or CRM is connected through apps. Use read actions to see the catalog before building. |
| 3-4. Find or create customer and SKUs | `apps.action.execute` | Search first by email domain and SKU code, with read actions. Create only if absent. |
| 5-6. Build the quote, lines, discounts | `apps.action.execute` | One action per change. |
| 8. Cover note for the buyer | `email.draft.create` | Draft only. Sending is a separate decision. |

The agent does steps 1 and 7 itself: pinning requirements and reconciling the rendered quote against the request.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything. Never send the quote without an explicit instruction.
