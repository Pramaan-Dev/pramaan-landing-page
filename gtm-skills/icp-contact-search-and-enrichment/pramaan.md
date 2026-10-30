---
skill: icp-contact-search-and-enrichment
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/icp-contact-search-and-enrichment
pramaan_skills: [people-companies]
ids: [lead.list.build, companies.filters.resolve, people.search-suggest, people.search-preview, people.search-count, people.profile.search, people.search-export, people.enrich, people.email.verify]
---

# Run "Turn an ICP request into an enriched contact shortlist" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.list.build` sizes a people search, reads a masked sample for a flat fee, then fetches a bounded list after approval. It fits the skill's size-then-enrich flow. Use the steps below to control each filter.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Valid filter values | `companies.filters.resolve`, `people.search-suggest` | Turn plain words into accepted values. Never guess industry or seniority values. |
| Size before enrichment | `people.search-count`, `people.search-preview` | Total audience and a sample. Check the sample matches the persona. |
| Run the approved search | `people.profile.search` | Typed filters, 50 per page. |
| Fetch the agreed slice | `people.search-export` | Rows with details, up to the agreed count. |
| Enrich the slice | `people.enrich` | Only the approved contacts. |
| Check emails | `people.email.verify` | Drop failures. |

The agent does the search contract, title family model and relaxation choices itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything. `people.search-export` and `people.enrich` spend money: get the user's yes on the final search and the exact count first.
