---
skill: icp-lookalike-expansion
author: amir-baldiga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amir-baldiga/icp-lookalike-expansion
pramaan_skills: [people-companies]
ids: [company.lookalikes.find, lead.lookalikes.find, companies.lookalike.search, people.lookalike.search, people.profile.details, companies.enrich]
---

# Run "ICP lookalike expansion" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.lookalikes.find` is a mission (several steps, one result). It finds companies like the user's best customers. `company.lookalikes.find` does it from one seed company.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Read the seed | `people.profile.details`, `companies.enrich` | Current title and employer for a person seed, or the profile of an account seed. |
| 2 to 4. Search on the signature | `people.lookalike.search`, `companies.lookalike.search` | Pass short core titles. Each depth-2 branch is another paid call, so cap it. |

The agent does the rest itself: deciding what "similar" means, de-duplicating by handle, dropping the seed and returning a clean list.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
