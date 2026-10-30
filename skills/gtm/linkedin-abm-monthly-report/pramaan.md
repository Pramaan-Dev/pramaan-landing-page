---
skill: linkedin-abm-monthly-report
author: emilia-korczynska
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/emilia-korczynska/linkedin-abm-monthly-report
pramaan_skills: [ads-marketing]
ids: [ads.performance.report, ads.ads.list, ads.insights.get]
---

# Run "Monthly LinkedIn ABM report" with Pramaan

This skill is built for the ZenABM connector. Pramaan can still pull last month's LinkedIn ad numbers from a connected ads account. It has nothing for ZenABM's engaged companies, ABM stages or influenced pipeline.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull the data: campaigns | `ads.performance.report` | Spend and results by campaign. Run it for the report month and the month before. |
| 1. Pull the data: ads | `ads.ads.list`, `ads.insights.get` | Every ad, then its numbers for the month. Gives top ads and spend by format. |

The agent does steps 2 and 3 itself: the month-over-month maths, the grades and the HTML and PDF report. The revenue and top-companies sections need ZenABM and the CRM.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
