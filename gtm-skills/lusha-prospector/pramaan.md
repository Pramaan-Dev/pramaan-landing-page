---
skill: lusha-prospector
author: omer-levy
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/omer-levy/lusha-prospector
pramaan_skills: [people-companies, email]
ids: [lead.list.build, companies.filters.resolve, people.search-suggest, people.search-preview, people.profile.search, people.search-export, people.email.verify, people.lookalike.search, companies.lookalike.search, companies.signals.search]
---

# Run "Lusha prospector" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill names Lusha. On Pramaan the same job runs on the people and company search superpowers.

## Fastest path

`lead.list.build` sizes a people search, reads a masked sample, then fetches a bounded list after approval. It matches the skill's goal of a verified, callable list.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve filter values | `companies.filters.resolve`, `people.search-suggest` | Map plain words to accepted values first. |
| 3. Search | `people.search-preview`, `people.profile.search` | Preview first. Default to Director, VP and C-suite. |
| 4. Contact details | `people.search-export` | After approval, and ask before more than 10. |
| Output rule: valid emails only | `people.email.verify` | Keep only verified addresses. |
| Signal requests | `companies.signals.search` | Funding, hiring surges, news. |
| Lookalikes | `people.lookalike.search`, `companies.lookalike.search` | Apply a size and geography filter after. |

The agent does the request parsing and the results table itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. `people.search-export` spends money: confirm before exporting more than 10 contacts.
