---
skill: gtm-planning
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/gtm-planning
pramaan_skills: [people-companies, web-search]
ids: [companies.discovery-count, people.search-count, web.search, llm.complete]
---

# Run "GTM planning" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly planning and org design. Pramaan helps size the market.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Territory sizing: addressable accounts | `companies.discovery-count` | Counts companies matching filters, without fetching them. |
| Market segmentation: size the buyer pool | `people.search-count` | Counts people matching a filter set. |
| Market context | `web.search` | Optional. |
| Draft plan text | `llm.complete` | Optional. |

The agent does the motion choice, org design, territory design and capacity math itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
