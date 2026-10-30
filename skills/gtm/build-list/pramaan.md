---
skill: build-list
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/build-list
pramaan_skills: [people-companies, email, apps-connections]
ids: [company.list.build, apps.catalog.search, apps.action.execute, lead.qualify, account.contacts.map, lead.emails.find-bulk, people.email.verify-bulk]
---

# Run "Build list" with Pramaan

This skill is built for the Swan workspace and its sourcing, code and sub-agent tools. Pramaan can still do the sizing, sourcing, research and email steps.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Size the audience first, 3. Execute the ladder | `company.list.build` | Counts the filters first, then fetches a bounded list after approval. Companies first, as the skill says. |
| 4. Free elimination: CRM cross-check | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it to read open opportunities and active sequences. |
| 5. AI research columns | `lead.qualify` | One company against up to eight written criteria. One narrow question per criterion. |
| 6. Tier, then discover contacts | `account.contacts.map` | Contacts by role at A and B tier companies only. |
| 7. Email waterfall | `lead.emails.find-bulk`, `people.email.verify-bulk` | Find work emails for the list, then check them. |

The agent does the brief, the column plan, the free elimination code, tiering and the final dedupe itself. Activation in a sequence tool is the user's call.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
