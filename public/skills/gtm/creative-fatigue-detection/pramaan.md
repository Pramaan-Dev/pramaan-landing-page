---
skill: creative-fatigue-detection
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/creative-fatigue-detection
pramaan_skills: [ads-marketing]
ids: [ads.creative.fatigue, ads.ads.list, ads.insights.get]
---

# Run "Creative fatigue detection" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.creative.fatigue` is a mission (several steps, one result). It lists ads whose clicks per impression fell over recent days while spend held, with the daily numbers.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Detection workflow: live ads | `ads.ads.list` | Ads with delivery and review status. |
| Steps 1 to 3: frequency, CTR and CPM trends | `ads.insights.get` | Daily impressions, reach, clicks and spend per ad. Frequency, CTR and CPM follow from these. |

Pramaan does not read Meta's ad relevance diagnostics (step 4). The agent classifies each ad and applies the rotation rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. They need a connected ads account.
