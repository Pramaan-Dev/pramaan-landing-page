---
skill: audience-icp-filter
author: erwann-lefevre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/erwann-lefevre/audience-icp-filter
pramaan_skills: [people-companies]
ids: [lead.enrich, companies.enrich, lead.qualify, competitor.discover]
---

# Run "Audience ICP filter" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check the data: enrich blocked fields | `lead.enrich`, `companies.enrich` | Only when the coverage check shows a criterion is blocked. Quote the cost and get a yes first, as the skill says. |
| Pass 2: work the review queue | `lead.qualify` | One queued company against the written ICP criteria, each met, not met or unknown. |
| Exclusion leaks: competitors | `competitor.discover` | Competitors nobody listed, to add to the exclusion list. |

The agent does the coverage check, pass 1 (the skill's script), the four buckets and the count check itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
