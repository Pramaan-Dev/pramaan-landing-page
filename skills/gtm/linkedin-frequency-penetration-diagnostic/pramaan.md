---
skill: linkedin-frequency-penetration-diagnostic
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-frequency-penetration-diagnostic
pramaan_skills: [ads-marketing]
ids: [ads.audiences.list, ads.insights.get, ads.creative.fatigue]
---

# Run "LinkedIn frequency and penetration diagnostic" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| The read: reach and impressions | `ads.insights.get` | Frequency is impressions divided by reach. |
| Pool-width check: audience size | `ads.audiences.list` | The pool size to measure reach against. |
| Turn verdicts into actions: wear | `ads.creative.fatigue` | A mission. Ads whose click rate fell while spend held. |

The 90-day reach and frequency data usually comes from the user's export. The agent does the band analysis and the saturated or narrow call itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
