---
skill: icp-to-linkedin-search
author: thomas-maitre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-maitre/icp-to-linkedin-search
pramaan_skills: [people-companies]
ids: [market.size, people.search-suggest, people.search-count, people.search-preview, companies.discovery-count, job.title.enrich]
---

# Run "ICP to LinkedIn search" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`market.size` is a mission (several steps, one result). It returns company and people counts without fetching contacts. Use it for step 4.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Normalize titles into families | `job.title.enrich` | Standard form of each title. |
| 2. Valid filter values | `people.search-suggest` | Exact values a filter accepts. |
| 4. Size it in companies | `companies.discovery-count` | Counts only. No records fetched. |
| 4. Size it in people | `people.search-count`, `people.search-preview` | Preview shows a masked sample. |

The agent does steps 1, 3 and 5 itself: the seven facets, the boolean string and the hand-over card.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
