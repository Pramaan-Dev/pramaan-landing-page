---
skill: bridgebound-in-market-20
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/bridgebound-in-market-20
pramaan_skills: [people-companies, ads-marketing]
ids: [lead.techstack.find, company.techstack, ads.competitor.footprint, competitor.discover, company.signals.find]
---

# Run "Bridgebound in-market triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Adjacent vendors: who uses a tool | `lead.techstack.find`, `company.techstack` | Companies using a named technology, and what one company runs. |
| Competitors: who they are | `competitor.discover` | Who competes with a company. |
| Competitors: who is advertising | `ads.competitor.footprint` | Library ads on several networks. |
| Find companies with dated signals | `company.signals.find` | Includes an ideal-customer fit check. |

The agent does the seasonal timing, displacement angle and message writing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
