---
skill: investor-update
author: jason-mesiarik
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jason-mesiarik/investor-update
pramaan_skills: [email]
ids: [email.send]
---

# Run "Investor update" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 8. Send on rhythm | `email.send` | Optional. Sends the finished update from the user's connected Gmail or Outlook, up to 50 recipients per call. |

The numbers, commitments and asks come from the founder. The agent does steps 1 to 7 itself: audience, say-do ledger, metrics, headline, body, asks and the honesty pass.

## Before running

1. Quote `email.send` first (`quote`) if you use it. Nothing runs during a quote, and it returns the maximum price.
2. `email.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
