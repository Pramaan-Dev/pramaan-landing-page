---
skill: linkedin-limits-warmup
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/linkedin-limits-warmup
pramaan_skills: [social-media]
ids: [linkedin.account.get, linkedin.invitations.list]
---

# Run "LinkedIn limits and warm-up" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check account health before a campaign | `linkedin.account.get` | Whether the connection is live and usable. |
| Count pending invitations | `linkedin.invitations.list` | Sent or received, to stay under the limits. |

This is a rules sheet. The agent applies the limits and the warm-up plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
