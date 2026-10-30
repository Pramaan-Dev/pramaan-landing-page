---
skill: company-recon
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/company-recon
pramaan_skills: [people-companies, web-search]
ids: [company.research, companies.enrich, companies.news, web.read, web.tech.detect, competitor.discover, llm.complete]
---

# Run "Company recon" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.research` is a mission. From a domain it returns the register record, news, site pages, social page, tech and a written summary. It fits this skill well.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Gather source material | `web.read` | Homepage plus 2 to 4 key pages: product, pricing, about, case studies. |
| 1. Company profile and news | `companies.enrich`, `companies.news` | Check the news date. |
| Section 5. Active marketing channels | `web.tech.detect` | Ad pixels and marketing tools on the site. |
| Section 7. Competitive landscape | `competitor.discover` | Pick 3 to 5 names. |
| 3. Synthesize | `llm.complete` | Optional. |

The agent does step 2 (reading for signal), the senior-marketer view and step 4 (the document) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
