---
skill: linkedin-abm-audit
author: emilia-korczynska
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/emilia-korczynska/linkedin-abm-audit
pramaan_skills: [ads-marketing]
ids: [ads.account.connect, ads.performance.report, ads.ads.list, ads.insights.get, ads.creative.fatigue, ads.account.health, ads.waste.find]
---

# Run "LinkedIn ads & ABM audit" with Pramaan

This skill is built for the ZenABM connector. Pramaan can still pull the LinkedIn ad numbers from a connected ads account. It has nothing for ZenABM's ABM stages, company engagement or deal influence by format.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Confirm the connection | `ads.account.connect` | Sign-in link for the account owner, then it reads the ad accounts back to prove the link works. |
| 2. Pull the data: totals and campaigns | `ads.performance.report` | Spend and results by campaign. Run it for this window and the previous 30 days. |
| 2. Pull the data: per-ad numbers | `ads.ads.list`, `ads.insights.get` | Every ad with its status, then daily numbers per ad. Gives the ad count and best and worst ads. |
| 3. Ad insights: decaying ads | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |
| 3. Red flags | `ads.account.health`, `ads.waste.find` | Rejected ads, empty ad sets, tiny audiences, and spend with no conversions. |

The agent does the rest itself: the ad-count model, format grading against the benchmarks, the budget moves and the HTML and PDF report. Deal influence, ABM stages and engaged companies need ZenABM or the CRM.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change the ads account.
