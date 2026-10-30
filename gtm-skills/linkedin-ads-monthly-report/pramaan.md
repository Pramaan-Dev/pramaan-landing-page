---
skill: linkedin-ads-monthly-report
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-ads-monthly-report
pramaan_skills: [ads-marketing, ai-models]
ids: [ads.performance.report, ads.accounts.list, ads.campaigns.list, ads.insights.get, llm.complete]
---

# Run "LinkedIn Ads monthly report" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.performance.report` is a mission. It gives spend and results by campaign, with money kept apart by currency. Use it when the account is connected. Otherwise use the user's CSV.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pull the month's numbers | `ads.accounts.list`, `ads.campaigns.list`, `ads.insights.get` | Read-only. Set the date range to the month. |
| Write the sections | `llm.complete` | Optional. |

Demographic splits come from the CSV. The agent does the 12 sections and the HTML file itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
