---
skill: multichannel-campaign-builder
author: erwann-lefevre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/erwann-lefevre/multichannel-campaign-builder
pramaan_skills: [email, people-companies]
ids: [company.research, outreach.sequence.draft]
---

# Run "Multichannel campaign builder" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Get the brief | `company.research` | Optional. What the user's own company sells, from its domain, when the brief is thin. |
| Write the sequence | `outreach.sequence.draft` | Optional. A three-step email sequence for one named lead. Drafts only. |

The agent does the three angles, the CTAs, the LinkedIn touches and the quality check itself. The skill's five-touch multichannel sequence is the agent's writing.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
