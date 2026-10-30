---
skill: tam-builder
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/tam-builder
pramaan_skills: [people-companies]
ids: [company.list.build, companies.search-suggest, companies.search, companies.search-bulk, companies.enrich, companies.lookalike.search]
---

# Run "TAM builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.list.build` is a mission (several steps, one result). It counts companies for your filters, then fetches a bounded list. Use it for a first pass. For the whole match set, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Companies first: pick filter values | `companies.search-suggest` | Exact values each filter accepts. |
| Retrieve, do not infer | `companies.search` | Real companies that match. |
| Build to saturation | `companies.search-bulk` | The full match set as a background job, up to 10000. |
| Widen from best customers | `companies.lookalike.search` | Seeds are domains. |
| Fill company details | `companies.enrich` | Domain, size, industry. |

The agent does the coverage report and the contacts-later plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.list.build` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything. `companies.search-bulk` reserves credit for its worst case before it starts, so check the quote first.
