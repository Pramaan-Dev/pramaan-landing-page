---
skill: ads-measurement-scorecard
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-measurement-scorecard
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.tracking-tag.status, ads.insights.get, apps.catalog.search, apps.action.execute]
---

# Run "Ads measurement scorecard" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Q3. Conversion tracking | `ads.tracking-tag.status` | Whether the tracking tag is installed on a connected store or site. |
| Dashboard: ad spend data per channel | `ads.insights.get` | Spend, impressions, clicks and conversions per campaign, per day. |
| Dashboard: CRM data | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for leads, SQOs, pipeline and won deals. |
| Build the dashboard in Google Sheets | `apps.action.execute` | Optional. Writes the rows into the user's connected sheet. |

The agent scores the five questions and sets up the formulas itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
