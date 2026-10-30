---
skill: ad-personas
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ad-personas
pramaan_skills: [ads-marketing, web-search, social-media]
ids: [ads.targeting.search, keyword.research, communities.discover]
---

# Run "Ad persona framework" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| How to build an ad persona: map to real targeting | `ads.targeting.search` | The targeting options a platform offers for an interest, title or topic. |
| Intent: ideal keywords | `keyword.research` | Keywords for the persona's problem, with search volume. |
| Consumption: groups they belong to | `communities.discover` | Online communities on the topic. |

The agent does the demographic, firmographic and psychographic parts and writes the persona itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
