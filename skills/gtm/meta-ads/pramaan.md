---
skill: meta-ads
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-ads
pramaan_skills: [ads-marketing]
ids: [ads.account.connect, ads.performance.report, ads.waste.find, ads.creative.fatigue, ads.account.health, ads.review.check]
---

# Run "Meta ads management for B2B" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

The skill routes each request to a reference file. These are the routes Pramaan helps with.

| Skill step | Pramaan id | Notes |
|---|---|---|
| Before any route: connect the account | `ads.account.connect` | Sign-in link or dashboard key, proven by reading the ad accounts back. |
| Route: operating system decisions | `ads.performance.report`, `ads.waste.find` | Spend and results by campaign, and spend with no conversions. |
| Route: creative system, fatigue | `ads.creative.fatigue` | Ads whose clicks per impression fell while spend held. |
| Route: setup and tracking checks | `ads.account.health`, `ads.review.check` | Paused or rejected ads, empty ad sets, tiny audiences, and the platform's review reasons. |

Pramaan does not create or edit Meta campaigns, audiences or lead forms. The agent applies the methodology and the core rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything. Connecting an account needs the owner to sign in.
