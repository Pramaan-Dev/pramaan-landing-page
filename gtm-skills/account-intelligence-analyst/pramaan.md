---
skill: account-intelligence-analyst
author: katya-tarapovskaia
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/katya-tarapovskaia/account-intelligence-analyst
pramaan_skills: [people-companies, web-search, social-media]
ids: [company.research, meeting.brief, company.news.digest, company.hiring.signal, company.techstack, companies.funding-history, linkedin.company.employees, people.find, people.enrich, web.search]
---

# Run "Account intelligence analyst" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

The skill names Clay, HubSpot and Humantic AI as its tools. Pramaan covers the public company and people research. CRM records and Humantic reports come from the user.

## Fastest path

`company.research` is a mission. It gives one sourced company profile with news and a summary. Add `meeting.brief` when a call is coming.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Sections 1 and 2. Profile, news, priorities | `company.research`, `company.news.digest` | Check dates. |
| Section 2. Money and growth | `companies.funding-history`, `company.hiring.signal` | Hiring shows where they invest. |
| Section 3. Tactical openings: tools they run | `company.techstack` | |
| Section 5. Buying committee | `linkedin.company.employees`, `people.find`, `people.enrich` | Match titles to roles. Say when a role is a guess. |
| Section 6. Industry trends and gaps | `web.search` | |
| Call preparation mode | `meeting.brief` | One company and one person. |

The agent does the committee map, the stance notes and the executive briefing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
