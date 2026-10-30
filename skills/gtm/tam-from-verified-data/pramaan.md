---
skill: tam-from-verified-data
author: yoni-tserruya
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yoni-tserruya/tam-from-verified-data
pramaan_skills: [people-companies]
ids: [market.size, companies.search-suggest, companies.discovery-count, people.search-count, companies.signals.search]
---

# Run "TAM from verified data" with Pramaan

This skill is built for Lusha's database. Pramaan can count companies and contacts per segment from its own sources, without fetching records. It cannot count signals per segment, so signal density and SOM are rough.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`market.size` is a mission (several steps, one result). It returns company, people and known-mailbox estimates without fetching contact records. Use it for the top-line TAM.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Translate the ICP into filters | `companies.search-suggest` | Exact values each filter accepts. Free. |
| 2. Company count per segment | `companies.discovery-count` | One count per segment. No records are fetched. |
| 3. Contact coverage by seniority | `people.search-count` | One count per seniority level and segment. Some counts are floors; say so. |
| 4 and 6. Signal density and SOM (sample) | `companies.signals.search` | Up to 100 companies per signal question. A sample, not a count. |

The agent applies exclusions, works out SAM (step 5), ranks segments (step 7) and writes the coverage notes itself. Never fill a gap with an estimate.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
