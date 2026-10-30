---
skill: data-quality
author: udi-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/udi-cohen/data-quality
pramaan_skills: [people-companies, email]
ids: [lead.list.clean, people.email.verify-bulk, people.employment.check, people.enrich, people.phone.find, company.list.resolve, companies.enrich]
---

# Run "Data quality" with Pramaan

This skill is built for Lusha and its verified database. Pramaan can run the same checks from its own sources: duplicates, email verification, role refresh, direct dials and company fields. Results say which source answered, not "verified via Lusha".

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.list.clean` is a mission (several steps, one result). Every row comes back by index with a status and a reason, with duplicates, malformed and undeliverable emails marked. Use it for step 2 and the email part of step 3.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Parse and deduplicate | `lead.list.clean` | Duplicates are marked, not enriched. |
| 3. Email verification | `people.email.verify-bulk` | Up to 100 rows per job. Valid, invalid, or not found. |
| 3. Title and role refresh | `people.employment.check`, `people.enrich` | Same employer, different employer or not listed. Enrich for the current title. |
| 3. Direct dial | `people.phone.find` | Best from a LinkedIn URL. Says mobile or landline when known. |
| 3. Account firmographics | `company.list.resolve`, `companies.enrich` | Match names to real companies, then fill industry, size and HQ. |

The agent does step 1 (list context), step 4 (classify each record), step 5 (the summary) and the privacy masking itself. When an email bounces, finding a replacement is a separate lookup the agent runs only for those rows.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
