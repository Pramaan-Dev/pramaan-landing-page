---
skill: event-room-intelligence
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/event-room-intelligence
pramaan_skills: [people-companies, documents-files, apps-connections]
ids: [csv.prepare, companies.domain.find-bulk, companies.enrich-bulk, companies.funding-history-bulk, people.enrich-bulk, apps.catalog.search, apps.action.execute]
---

# Run "Event room intelligence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Inputs: load the registration export | `csv.prepare` | A mission. Cleans the CSV into rows. |
| Phase 1. Map every registrant to a company | `companies.domain.find-bulk` | Business email domains first, company name second. |
| Phase 2. Join against the live CRM | `apps.catalog.search`, `apps.action.execute` | Read actions only. |
| Phase 3. Verify every person | `people.enrich-bulk` | Current title and employer. Trust this over a stale CRM title. |
| Phase 4. Size and fund every company | `companies.enrich-bulk`, `companies.funding-history-bulk` | Domain or profile URL per row. |

The agent does Phase 5 (the buying committee, written by hand as the skill says) and Phase 6 (the HTML and the printed PDF) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything. The bulk ids are jobs priced per row, so check the quote against the list size.
