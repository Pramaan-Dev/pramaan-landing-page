---
skill: linkedin-success-factors
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/linkedin-success-factors
pramaan_skills: [social-media]
ids: [linkedin.account.get, linkedin.invitations.list, linkedin.chats.list]
---

# Run "LinkedIn success factors" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check the account before launch | `linkedin.account.get` | Whether the connection is live. |
| Audit what was sent and accepted | `linkedin.invitations.list`, `linkedin.chats.list` | Pending invitations and the inbox, to compare with the benchmarks. |

This is a checklist. The agent runs the review and the benchmarks itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
