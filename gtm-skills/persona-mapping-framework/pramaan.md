---
skill: persona-mapping-framework
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/persona-mapping-framework
pramaan_skills: [people-companies, apps-connections]
ids: [apps.catalog.search, apps.action.execute, account.contacts.map, people.profile.details]
---

# Run "Persona mapping framework" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Step 1: analyze closed-won deals | `apps.catalog.search`, `apps.action.execute` | Find the CRM's deal search action, then run it for won deals and the contacts on them. |
| Step 2: map the buying committee | `account.contacts.map` | People at a target account by role. |
| Persona enrichment | `people.profile.details` | Public employment, education and skills, for the custom persona fields. |

The skill enriches in Clay; these ids do the same reads. The agent does the persona attributes, the assignment rules and the messaging matrix itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
