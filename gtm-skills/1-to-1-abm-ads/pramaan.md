---
skill: 1-to-1-abm-ads
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/1-to-1-abm-ads
pramaan_skills: [people-companies, web-search, media]
ids: [people.search-count, web.read, image.generate]
---

# Run "1:1 ABM ads" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1 and 2. Size and narrow each audience | `people.search-count` | Optional cross-check. People at one company matching job filters, counted without pulling them. It is not LinkedIn's audience size. |
| 3. Write the copy | `web.read` | Read each account's landing page, so every word traces back to it. |
| 4. Generate personalized creatives | `image.generate` | One to four images per prompt. Links are kept for 7 days. |

Pramaan does not resolve LinkedIn company URNs or build LinkedIn campaigns. Steps 1, 2, 5 and 6 run with the skill's own scripts and the user's LinkedIn token. The agent writes the copy itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything, create a campaign or spend ad budget.
