---
skill: vc-portfolio-research
author: brad-smith
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/brad-smith/vc-portfolio-research
pramaan_skills: [people-companies, web-search, apps-connections]
ids: [investor.brief, investors.search, companies.portfolio.list, web.read, companies.domain.find, companies.enrich, apps.catalog.search, apps.action.execute]
---

# Run "VC portfolio research" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`investor.brief` is a mission. It gives stage focus, deals, portfolio and named partners for one investor. Use it for the firm profile, then match accounts using the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Extract the portfolio | `investors.search`, `companies.portfolio.list`, `web.read` | Use the list first. Read the firm's portfolio page when it is missing companies. |
| 2. Match each company to an account | `companies.domain.find`, `companies.enrich` | Resolve the email domain. |
| 2. Paying status and usage | `apps.catalog.search`, `apps.action.execute` | Only works if the user's product tool is a connected app. Pramaan has no data warehouse reader. |
| 3. Pull open pipeline | `apps.action.execute` | Open CRM deals by company domain. |

The agent does step 4 (the two-artifact output and the portfolio registry) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
