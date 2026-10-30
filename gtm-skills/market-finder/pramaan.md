---
skill: market-finder
author: uri-knorovich
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/uri-knorovich/market-finder
pramaan_skills: [people-companies, web-search]
ids: [market.map, market.size, company.funding.brief, google.serp.maps, google.serp.local, companies.search, companies.enrich, web.search]
---

# Run "Market finder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`market.map` is a mission (several steps, one result). It maps the companies in a segment, profiles each and groups them. Good for the SaaS mode. `market.size` gives counts first, with no records fetched.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 4. Size the work | `market.size` | Counts before a large run. |
| 5. Discover, local business | `google.serp.maps`, `google.serp.local` | One query set per metro. |
| 5. Discover, SaaS | `companies.search`, `web.search` | Players, then funding news. |
| 6. Enrich | `companies.enrich` | Highest source count first. |
| 6. Funding check | `company.funding.brief` | Sourced rounds. If none, report "Undisclosed". |

The agent does the mode, vertical preset, geography tiling, dedupe, scoring and report itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. Get the user's go-ahead on a large run from the quote totals.
