---
skill: google-ads-audit
author: aditya-sriram
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/aditya-sriram/google-ads-audit
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.account.health, ads.account.connect.start, ads.accounts.list, ads.campaigns.list, ads.performance.report, ads.waste.find, ads.budget.pacing, ads.review.check, keyword.research, ads.budget.estimate]
---

# Run "Google Ads audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.account.health` is a mission (several steps, one result). It flags paused or rejected ads, empty ad sets and tiny audiences. Use it for a first check. For the full audit, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Data inventory | `ads.account.connect.start`, `ads.accounts.list` | Connect the Google Ads account, then list its accounts and currency. Exported CSVs also work. |
| Search optimization | `ads.campaigns.list`, `ads.performance.report`, `ads.waste.find`, `ads.budget.pacing`, `ads.review.check` | Campaign spend and results, spend with no conversions, daily spend against budget, rejected ads. Search terms, impression share and Quality Score are not returned: use the user's export. |
| Shopping optimization | None | No Pramaan id reads Merchant Center or the Shopping products report. Use the user's export. |
| Performance Max optimization | `ads.campaigns.list`, `ads.performance.report` | Campaign-level numbers only. Asset labels and search term insights need the user's export. |
| Keyword research | `keyword.research`, `ads.budget.estimate` | Volume, cost, and a budget estimate at a chosen bid. |

The agent does the rest itself: search term tiers, Shopping and Performance Max judgment, guardrails and the written recommendations.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change the account. Any change the skill recommends is for the user to approve and make.
