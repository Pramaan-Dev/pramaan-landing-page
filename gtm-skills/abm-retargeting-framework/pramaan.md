---
skill: abm-retargeting-framework
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/abm-retargeting-framework
pramaan_skills: [ads-marketing, people-companies]
ids: [company.visitors.identify, ads.audiences.report, ads.insights.get, ads.creative.fatigue]
---

# Run "ABM retargeting framework" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Audience segmentation: engaged accounts | `company.visitors.identify` | Companies behind site visits, kept if they fit the ideal customer. Names no people. |
| LinkedIn retargeting audiences | `ads.audiences.report` | Existing audiences and the sizes the platforms report. |
| Frequency management | `ads.insights.get` | Impressions and reach per campaign, by day. Frequency is impressions divided by reach. |
| Detecting ad fatigue | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |

Pramaan does not build retargeting audiences or install the Insight Tag. The agent does the segments, frequency targets, rotation and the plan across ads, email, BDR outreach and direct mail itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change an account.
