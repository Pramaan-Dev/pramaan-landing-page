---
skill: meta-ads-audit
author: aditya-sriram
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/aditya-sriram/meta-ads-audit
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.account.health, ads.account.connect.start, ads.accounts.list, ads.campaigns.list, ads.ad-sets.list, ads.ads.list, ads.insights.get, ads.performance.report, ads.waste.find, ads.budget.pacing, ads.creative.fatigue, ads.audiences.report, ads.review.check]
---

# Run "Meta Ads audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.account.health` is a mission (several steps, one result). Use it for a first check of a Meta account. For the full audit, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Data inventory | `ads.account.connect.start`, `ads.accounts.list` | Connect the Meta ads account, then list its accounts. Exported CSVs also work. |
| Initial health check | `ads.account.health`, `ads.review.check` | Paused or rejected ads, empty ad sets, tiny audiences, and the platform's reasons for rejections. Pixel and Events Manager checks stay manual. |
| Campaign structure analysis | `ads.campaigns.list`, `ads.ad-sets.list` | Campaigns and ad sets with status, budget and spend. |
| Ad set analysis | `ads.audiences.report`, `ads.budget.pacing` | Audience sizes, and daily spend against budget. Full targeting needs the user's export or description. |
| Performance analysis | `ads.performance.report`, `ads.ads.list`, `ads.waste.find` | Results per campaign and per ad, and ads that spent with no conversions. |
| Creative analysis | `ads.creative.fatigue`, `ads.insights.get` | Ads whose clicks per impression fell, with daily numbers. Hook and hold rates need video play counts from the user's export. |

The agent does the rest itself: metric choice, top performer protection, structure advice and the written recommendations.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change the account. Any change the skill recommends is for the user to approve and make.
