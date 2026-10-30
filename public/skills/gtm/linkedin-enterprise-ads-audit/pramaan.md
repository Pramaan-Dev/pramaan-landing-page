---
skill: linkedin-enterprise-ads-audit
author: gaetano-romeo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gaetano-romeo/linkedin-enterprise-ads-audit
pramaan_skills: [ads-marketing]
ids: [ads.insights.get, ads.creative.fatigue, ads.leads.list, ads.performance.report]
---

# Run "LinkedIn enterprise ads audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Test 2: saturation and frequency | `ads.insights.get` | Impressions and reach per campaign, by day. Frequency is impressions divided by reach. |
| Test 2: engagement falling | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |
| Stage 2 and test 3: lead form quality | `ads.leads.list` | Leads from native lead forms, to match against CRM opportunities. Contains personal data. |
| Test 4: CAC against contract value | `ads.performance.report` | Media spend by campaign. |

Stage 1 and test 1 need impressions per target account. Pramaan has no per-company impression report, so that comes from LinkedIn's company demographics export. Opportunities and deal size come from the CRM. The agent does the four tests and the verdict itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change the ads account.
