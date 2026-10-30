---
skill: account-research-brief
author: amir-baldiga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amir-baldiga/account-research-brief
pramaan_skills: [people-companies, web-search]
ids: [company.research, companies.enrich, companies.workforce, companies.news, web.search, linkedin.company.employees, account.contacts.map, company.hiring.signal]
---

# Run "Account research brief" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.research` is a mission (several steps, one result). It returns one sourced profile from a domain or name: register record, news, site pages and socials. Use it as the base of the brief.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Resolve the company | `companies.enrich` | Pass the company's LinkedIn page or domain, not just the name. |
| 2. Pull firmographics | `companies.enrich` | Size, industry, headquarters, founding year, description, specialities. |
| 3. Read composition | `companies.workforce` | Employee totals with role and region breakdowns. |
| 5. SWOT evidence | `companies.news`, `web.search` | News is dated by event: check the date. |
| 6. Named exec list, after the user confirms titles and count | `linkedin.company.employees`, `account.contacts.map` | Current staff with titles, or contacts by role with checked work emails. |
| 7. Hiring as a live signal | `company.hiring.signal` | Open roles and what they suggest. |

The agent does steps 4 and 8 itself: the positioning pillars, the SWOT tags (evidence or inference) and both output shapes.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
