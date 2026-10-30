---
skill: account-org-mapping
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/account-org-mapping
pramaan_skills: [people-companies, social-media]
ids: [companies.enrich, companies.headcount.get, companies.founders.list, linkedin.company.employees, people.profile.search, people.profile.details, people.enrich]
---

# Run "Map an account's organization" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Frame the map: company baseline | `companies.enrich`, `companies.headcount.get` | Confirm by domain. Size and stage decide how to read titles. |
| Build the evidence set: top layer | `companies.founders.list` | Founders and executives. |
| Build the evidence set | `linkedin.company.employees`, `people.profile.search` | Search in passes: executives, then VPs and Directors, then managers. Filter by company domain. |
| Infer hierarchy: tenure and history | `people.profile.details` | Employment history, tenure, location. |
| Rank the people who matter: enrich them | `people.enrich` | Smallest useful set only, after approval. |

The agent does the hierarchy inference, structural observations, ranking and the diagram itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. Get the user's yes before any paid lookup in `people.enrich`, as the skill says.
