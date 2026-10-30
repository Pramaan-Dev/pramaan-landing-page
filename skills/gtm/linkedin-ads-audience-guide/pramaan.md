---
skill: linkedin-ads-audience-guide
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/linkedin-ads-audience-guide
pramaan_skills: [people-companies, ads-marketing]
ids: [people.search-count, ads.targeting.search, companies.search]
---

# Run "LinkedIn ads audience strategy" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Audience size estimation | `people.search-count` | People matching titles, seniority and company filters, counted. A cross-check, not LinkedIn's estimate. |
| Job function vs job title targeting | `ads.targeting.search` | The targeting options a platform offers for a function or title. |
| ABM company-list targeting | `companies.search` | Companies by filters or a description, for the list upload. |

The weekly demographics report and the exclusions live in Campaign Manager. The agent does the sweet spots, exclusions and retargeting setup itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
