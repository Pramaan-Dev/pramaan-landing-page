---
skill: linkedin-ads-35-point-audit
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-ads-35-point-audit
pramaan_skills: [ads-marketing]
ids: [ads.account.health, ads.waste.find, ads.creative.fatigue, ads.destination.check, ads.performance.report, ads.audiences.list, ads.tracking-tag.status]
---

# Run "LinkedIn Ads 35-point audit" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`ads.account.health` is a mission. It finds paused or rejected ads, empty ad sets, tiny audiences and campaigns with no budget. Use it only when the LinkedIn ads account is connected. Otherwise run the skill on the user's exports.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| II. Architecture and V. Delivery | `ads.account.health`, `ads.performance.report` | Read-only. |
| V. Spend control | `ads.waste.find` | Spend with no conversions. |
| III. Audience coverage (17, 18) | `ads.audiences.list` | List and audience sizes. |
| IV. Creative wear | `ads.creative.fatigue` | Click rate drift over time. |
| VI. Landing pages | `ads.destination.check` | |
| I.1 Tag firing | `ads.tracking-tag.status` | Only for a tag installed on a connected store or site. |

The agent does the 35-point scoring and the change list itself. CRM and creative points use what the user uploads.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
