---
skill: linkedin-audience-segment-diagnostic
author: justin-rowe
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/justin-rowe/linkedin-audience-segment-diagnostic
pramaan_skills: [ads-marketing]
ids: [ads.audiences.report, ads.insights.get, ads.targeting.search]
---

# Run "LinkedIn audience segment diagnostic" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2.5 Reach and frequency per campaign | `ads.insights.get` | Read-only. Reach and impressions give frequency. |
| 6. Recommendations: audience sizes | `ads.audiences.report` | A mission. Custom and lookalike audiences and their sizes. |
| 6. Recommendations: targeting options | `ads.targeting.search` | Find the exact option names. |

The demographic rate data comes from the user's export. The agent does steps 1 to 5 (dimensions, verdicts, findings, personas, efficiency matrix) and the HTML and docx files itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids change anything.
