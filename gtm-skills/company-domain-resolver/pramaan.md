---
skill: company-domain-resolver
author: boaz-descalo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/boaz-descalo/company-domain-resolver
pramaan_skills: [people-companies, documents-files]
ids: [csv.prepare, companies.domain.find, companies.domain.find-bulk, companies.name.normalize, companies.name.match]
---

# Run "Company domain resolver" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Load the list and confirm the column | `csv.prepare` | Mission. Cleans the CSV into rows. |
| 2 to 3. Resolve one or two names | `companies.domain.find` | Replaces the Clearbit autocomplete call. |
| 4. Resolve a batch | `companies.domain.find-bulk` | Up to 1000 names as one job. |
| 5. Score confidence | `companies.name.normalize`, `companies.name.match` | Compare the input name with the returned company name. |

The agent does the confidence labels, the counts per level and the hand-off note (step 6 to 7) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval. Nothing sends or changes anything.
