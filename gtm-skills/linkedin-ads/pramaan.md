---
skill: linkedin-ads
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/linkedin-ads
pramaan_skills: [ads-marketing]
ids: [ads.account.health, ads.performance.report, ads.library.search, ads.social.snapshot, ads.destination.check]
---

# Run "LinkedIn Ads for B2B" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

The skill routes each request to a sub-skill. These are the routes Pramaan helps with.

| Skill step | Pramaan id | Notes |
|---|---|---|
| Route: audit | `ads.account.health` | Rejected ads, empty ad sets, tiny audiences, campaigns with no budget. |
| Route: audit and benchmarks | `ads.performance.report` | Spend and results by campaign on a connected LinkedIn account. |
| Route: creative strategy and copy audit | `ads.library.search`, `ads.social.snapshot` | Competitors' LinkedIn ads, then a sourced reading of each ad's message. |
| Route: landing pages | `ads.destination.check` | Whether each live ad's page loads, is safe and matches the ad's promise. |

Pramaan cannot read Audience Expansion settings, budget penetration or the demographics report, and it does not build campaigns. The agent applies the methodology and the core rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
