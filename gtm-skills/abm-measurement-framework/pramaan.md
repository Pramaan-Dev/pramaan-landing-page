---
skill: abm-measurement-framework
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/abm-measurement-framework
pramaan_skills: [ads-marketing, apps-connections]
ids: [ads.performance.report, ads.insights.get, apps.catalog.search, apps.action.execute]
---

# Run "ABM measurement framework" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| ROI formulas: total ABM spend | `ads.performance.report` | Ad spend and results by campaign on connected ad accounts. |
| Awareness and engagement metrics | `ads.insights.get` | Impressions, reach and clicks per campaign, by day. Campaign level, not per account. |
| Pipeline and revenue metrics | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for opportunities and won deals at the target accounts. |

This is a measurement framework. Account-level coverage and engagement need the ad platform's company reports or an ABM tool. The agent does the stage funnel, the attribution model and the ROI maths itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
