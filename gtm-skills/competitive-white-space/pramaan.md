---
skill: competitive-white-space
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/competitive-white-space
pramaan_skills: [people-companies, web-search, ads-marketing]
ids: [competitor.discover, company.compare, ads.competitor.footprint, ads.library.search, web.read, web.crawl, web.search, llm.complete]
---

# Run "Competitive white space" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.compare` is a mission. It puts two to five companies side by side on profile, tech and a written comparison. Use it for the first pass. The messaging read still needs the page text below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Identify competitors | `competitor.discover`, `web.search` | Skip if URLs are given. Pick 3 to 5. |
| 2. Research each | `web.read`, `web.crawl` | Homepage, about, products, pricing, case studies. |
| 2. What they say in ads | `ads.competitor.footprint`, `ads.library.search` | Public ad libraries. Optional. |
| 3. Synthesize: comparison matrix | `company.compare`, `llm.complete` | |

The agent does the saturation map, the white space, the positioning direction and the document itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
