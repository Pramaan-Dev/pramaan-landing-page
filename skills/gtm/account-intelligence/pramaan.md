---
skill: account-intelligence
author: yoni-tserruya
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yoni-tserruya/account-intelligence
pramaan_skills: [people-companies, web-search, email]
ids: [company.research, companies.identify, companies.enrich, web.tech.detect, companies.signals.get, account.contacts.map, people.phone.find, companies.news, companies.similar, companies.registry.network.get, companies.funding-history]
---

# Run "Account intelligence" with Pramaan

This skill is built for Lusha. Pramaan can build the same brief from its own sources. It has no Lusha company ID and no Lusha intent score, so the score-60 filter does not apply.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.research` is a mission (several steps, one result). It returns one sourced profile of the company with news, site pages, technologies and open jobs. It does not find contacts. Use the steps below for the full brief.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve the account | `companies.identify` | Ranked matches. If none is confident, ask before going on. |
| 3. Firmographics and tech stack | `companies.enrich`, `web.tech.detect` | Size, industry, HQ; technologies seen on the website. |
| 3. Buying signals | `companies.signals.get` | Dated events with a source URL. |
| 3. Key contacts (4 to 6) | `account.contacts.map` | Contacts by role, with public profile and checked work email. Pick the function that fits the brief purpose. |
| 3. Direct dials | `people.phone.find` | Only for the contacts you keep. |
| 3. Recent news | `companies.news` | Last 90 days. Check each event date. |
| 3. Similar companies | `companies.similar` | For the competitive peers table. |
| Corporate structure and funding | `companies.registry.network.get`, `companies.funding-history` | Parents from official records; rounds and investors. |

The agent anchors on the purpose (step 1), triages (step 4), flags past dates, masks contact details and writes the TL;DR last (step 5) itself. Tenure shows only when the profile carries dates.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
