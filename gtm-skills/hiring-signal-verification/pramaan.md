---
skill: hiring-signal-verification
author: peter-borkovich
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/peter-borkovich/hiring-signal-verification
pramaan_skills: [people-companies, web-search, social-media]
ids: [company.hiring.signal, companies.jobs.search, linkedin.jobs.search, companies.enrich, web.read]
---

# Run "Hiring signal verification" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pin the company identity | `companies.enrich` | Confirm name and domain. Match listings on both. |
| Check the company's own listings | `companies.jobs.search` | Send name and domain. A listing that matches only by name does not count. |
| Cross-check on a second source | `linkedin.jobs.search` | Match the employer, not just the title. |
| Read the company's careers page | `web.read` | The target's own source is the proof. |
| Summary of what they hire for | `company.hiring.signal` | Mission. Use as a lead, then verify at the own source. |

The agent decides pass or fail for each claim and applies the gate to scores and messages itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
