---
skill: linkedin-limits-and-safety
author: thomas-maitre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-maitre/linkedin-limits-and-safety
pramaan_skills: [social-media]
ids: [linkedin.account.get, linkedin.invitations.list]
---

# Run "LinkedIn limits and safety" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is rules and judgment. No superpower is needed except two optional reads for the Monday check.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 3. Warning signs | `linkedin.account.get` | Is the connection live and usable. |
| 4. Monday check | `linkedin.invitations.list` | Pending invitations sent, to count against the cap. |

The agent does steps 1 and 2 itself: setting caps and applying the rules.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
