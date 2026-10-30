---
skill: bridgebound-firmographic-15
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/bridgebound-firmographic-15
pramaan_skills: [people-companies, web-search]
ids: [companies.funding.signals, companies.acquisitions.signals, companies.funding-history, companies.news, company.signals.find, news.signals.search]
---

# Run "Bridgebound firmographic triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.find` is a mission (several steps, one result). It finds companies with dated buying signals and checks their fit. Use it to find companies for these triggers.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Financial events, funding | `companies.funding.signals`, `companies.funding-history` | Recent rounds, and one company's round history. |
| M&A activity | `companies.acquisitions.signals` | Recent acquisitions from the press. |
| Growth and product news | `companies.news`, `news.signals.search` | News is dated by event: check the date before calling it recent. |

The agent does the rest itself: picking the trigger, timing and writing the message.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
