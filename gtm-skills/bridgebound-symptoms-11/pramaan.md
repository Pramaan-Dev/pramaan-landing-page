---
skill: bridgebound-symptoms-11
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/bridgebound-symptoms-11
pramaan_skills: [people-companies, social-media]
ids: [company.reputation.report, companies.employee-reviews.list, linkedin.search.posts, web.search]
---

# Run "Bridgebound symptoms triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Find an overt negative (bad reviews) | `company.reputation.report`, `companies.employee-reviews.list` | Review samples with repeated pros and cons. |
| Influencer posts that name a pain | `linkedin.search.posts` | Search posts by keyword or author. |
| Gaps and missing positives | `web.search` | Search for the missing proof. |

The agent does the pain framework and message writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
