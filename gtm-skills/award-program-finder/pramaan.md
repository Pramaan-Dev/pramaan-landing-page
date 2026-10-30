---
skill: award-program-finder
author: osnat-lidor
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/osnat-lidor/award-program-finder
pramaan_skills: [web-search]
ids: [web.search, web.read, companies.news]
---

# Run "Award program finder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Discover programs, general search | `web.search` | Award dates and fees change each year. Search the live web, not memory. |
| 2. Who else won | `companies.news`, `web.search` | Competitors' award announcements. |
| 2. Open each program's own site | `web.read` | Read fees, deadlines, eligibility and the submit link. |

The agent does steps 1, 3, 4 and 5 itself: budget, screening, ranking, the entry plan and the submit links it read. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
