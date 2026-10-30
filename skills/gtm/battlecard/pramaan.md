---
skill: battlecard
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/battlecard
pramaan_skills: [people-companies, web-search]
ids: [competitor.snapshot, web.read, competitor.pricing.read, company.reputation.report]
---

# Run "Battlecard" with Pramaan

This skill is built for the Swan workspace: it reads and saves the battlecard in Swan's org knowledge. Pramaan can still gather the fresh signals in step 3.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Gather fresh signals: positioning | `competitor.snapshot` | The competitor's profile next to the user's company. Ask for news and pricing pages too. |
| 3. Gather fresh signals: their pages | `web.read` | The competitor's homepage, product and customer pages. |
| 3. Gather fresh signals: pricing | `competitor.pricing.read` | What they charge, from their own site. |
| 3. Gather fresh signals: where they lose | `company.reputation.report` | Public reviews and complaints, to cite real weaknesses. |

Steps 2 and 5 use Swan's memory, and Pramaan has no id for them. Without Swan, the user supplies prior notes and keeps the result. The agent writes the six sections itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
