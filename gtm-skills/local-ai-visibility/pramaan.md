---
skill: local-ai-visibility
author: huxley-peckham
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/huxley-peckham/local-ai-visibility
pramaan_skills: [web-search]
ids: [brand.visibility, seo.local.rank.compare, local.seo.audit]
---

# Run "Local AI visibility" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Build the town matrix | `brand.visibility` | Run once per town, with the town in each prompt and buyer phrasing. |
| Record the local pack separately | `seo.local.rank.compare` | The same local search run in each town, with who is listed and where. |
| Record the local pack separately | `local.seo.audit` | Optional. The business's own local positions and neighbouring listings. Needs the business connected. |

The agent does the gap map and the ranking of gaps itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
