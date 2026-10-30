---
skill: company-deep-dive
author: uri-knorovich
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/uri-knorovich/company-deep-dive
pramaan_skills: [people-companies, web-search]
ids: [company.research, topic.research.deep, companies.enrich, companies.funding-history, companies.founders.list, companies.workforce, web.tech.detect, companies.news, competitor.discover, web.search, web.read, web.extract]
---

# Run "Company deep dive" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.research` is a mission (several steps, one result). Use it for quick mode. For the full dive, use the steps below. `topic.research.deep` writes a long cited report on one question.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Scope: lock the company | `web.search`, `companies.enrich` | Official site and overview. |
| 1. Funding and financials | `companies.funding-history` | Rounds, amounts, investors. |
| 1. Product and technology | `web.tech.detect`, `web.search` | Technologies on the site, then launches and the engineering blog. |
| 1. Leadership and team | `companies.founders.list`, `companies.workforce` | Founders with public profiles; headcount and its breakdowns. |
| 1. News and events | `companies.news` | News is dated by article: check the event date. |
| 1. Market position | `competitor.discover`, `web.search` | Competitors from several sources, then reviews and analyst coverage. |
| 2. Extract the pages that matter | `web.read`, `web.extract` | The 5 to 8 best URLs. Quick mode skips this. |

The agent does the synthesis, the memory file and the next-step offers itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
