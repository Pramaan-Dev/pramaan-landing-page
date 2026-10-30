---
skill: competitor-connection-displacement
author: peter-cools
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-cools/competitor-connection-displacement
pramaan_skills: [people-companies, ai-models]
ids: [people.enrich, companies.enrich, company.icp.score, llm.complete]
---

# Run "Competitor connection displacement" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Pramaan does not list a competitor's new connections. The user or another tool supplies that list. Pramaan helps qualify it.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Qualify against the ICP | `people.enrich`, `companies.enrich` | Role and firmographics for each connection. |
| 1. Fit score for the company | `company.icp.score` | Fit probability against written criteria. |
| 4. Angle per prospect | `llm.complete` | Optional drafting help. |

The agent does steps 2 and 3 itself: dropping noise and ranking by net-new, decision power and freshness.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
