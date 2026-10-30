---
skill: lookalike-candidate-sourcing
author: amir-baldiga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amir-baldiga/lookalike-candidate-sourcing
pramaan_skills: [people-companies, social-media]
ids: [candidate.lookalikes.find, people.lookalike.search, people.search-filtered, people.profile.details, linkedin.user.profile]
---

# Run "Lookalike candidate sourcing" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`candidate.lookalikes.find` is a mission (several steps, one result). It returns similar professional profiles from job facts, with profile links only.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Take one exemplar | `linkedin.user.profile`, `people.profile.details` | Current title, skills and location. |
| 2 and 3. Search with filters, broad first | `people.search-filtered`, `people.lookalike.search` | Put role, country, city and current-role-only in the query. |
| 4. Enrich the first 20 | `people.profile.details` | Skills, education and geography, one paid call per candidate. |

The agent does steps 5 to 7 itself: the score out of 100, dropping the exemplar, and the table.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. Contacting a candidate is a separate step the user approves.
