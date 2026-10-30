---
skill: people-lookalike-ranking
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/people-lookalike-ranking
pramaan_skills: [people-companies]
ids: [people.profile.details, people.lookalike.search, people.profile.search, people.enrich, companies.lookalike.search]
---

# Run "Rank people who resemble a proven profile" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read the seed as evidence | `people.profile.details` | Current role, employer, tenure, history. |
| Search broadly enough to learn | `people.lookalike.search` | Matches role, seniority and employer to examples. Add seeds if you have them. |
| Search: hard constraints | `people.profile.search` | Use for the hard constraints. |
| Search: adjacent employers | `companies.lookalike.search` | When the signature is mostly about company type. |
| Review before enrichment | `people.enrich` | Top ranked only, after approval. |

The agent does the similarity signature, scoring, thresholds and widening plan itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. Get the user's yes before paid enrichment.
