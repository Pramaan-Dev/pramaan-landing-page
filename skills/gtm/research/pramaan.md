---
skill: research
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/research
pramaan_skills: [people-companies, web-search]
ids: [company.research, person.public.brief, company.news.digest, company.techstack, account.contacts.map, seo.competitor.profile, company.funding.brief, company.hiring.signal, web.search]
---

# Run "Research" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

Step 1 picks one sub-page. Each sub-page maps to one Pramaan id.

| Skill step | Pramaan id | Notes |
|---|---|---|
| Sub-page: Company | `company.research` | One sourced profile: register record, news, site pages and a summary. |
| Sub-page: Person | `person.public.brief` | Public professional facts and a short sourced brief. |
| Sub-page: News | `company.news.digest` | Recent news on the company. Check each date. |
| Sub-page: TechStack | `company.techstack` | Technologies on the site and in open roles. |
| Sub-page: AccountTeam | `account.contacts.map` | People at the account by role. |
| Sub-page: Domain | `seo.competitor.profile` | The domain's search footprint: keywords, pages and paid search. |
| Sub-page: Financial | `company.funding.brief` | Funding rounds and investors. |
| Sub-page: GTMmotion | `company.hiring.signal` | Open roles and recent company posts, as clues to how it sells. |
| Sub-page: CompetitorMentions | `web.search` | Public mentions of the competitor, for pain and switching language. |

The agent does the depth choice and the composed output itself. Saving to Swan's company record is not part of Pramaan.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
