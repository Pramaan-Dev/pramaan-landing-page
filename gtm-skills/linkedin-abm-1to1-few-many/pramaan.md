---
skill: linkedin-abm-1to1-few-many
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/linkedin-abm-1to1-few-many
pramaan_skills: [people-companies]
ids: [companies.search, people.search-count, companies.enrich]
---

# Run "LinkedIn ABM: 1:1, 1:few, 1:many" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Lists: company lists for 1:few and 1:many | `companies.search` | Companies by filters or a description, to export as a list. |
| Core principle: reach, not just targeting | `people.search-count` | People at an account matching the buyer titles, counted. A cross-check, not LinkedIn's number. |
| 1:1 accounts: whale deals | `companies.enrich` | Profile of the one account, for the personal creative. |

The agent picks the level and the structure. The lists are uploaded and the per-company report is read in Campaign Manager.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
