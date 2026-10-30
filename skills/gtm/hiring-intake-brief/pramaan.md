---
skill: hiring-intake-brief
author: justin-blij
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-blij/hiring-intake-brief
pramaan_skills: [web-search, people-companies]
ids: [web.search, linkedin.jobs.search, companies.enrich, companies.jobs.search, llm.complete]
---

# Run "Hiring intake brief" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull before asking | `companies.enrich`, `companies.jobs.search` | The company and its open roles. |
| 6. Hireability check: pay, profile, speed | `linkedin.jobs.search`, `web.search` | Similar posted roles and pay ranges. Name the source of every pay figure. |
| 7 and 8. Pitch, process contract and brief | `llm.complete` | Optional. |

The intake is a conversation. The agent does the questions, the substitution test on must-haves and the brief itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
