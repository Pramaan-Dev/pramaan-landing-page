---
skill: weekly-performance-advisor
author: erwann-lefevre
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/erwann-lefevre/weekly-performance-advisor
pramaan_skills: [email]
ids: [outreach.replies.triage, outreach.reply.draft]
---

# Run "Weekly performance advisor" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Sort the replies by what they cost to ignore | `outreach.replies.triage` | Sorts replies into interested, not now, wrong person, out of office and unsubscribe. |
| Who is waiting on me | `outreach.reply.draft` | Optional. A drafted answer to one waiting reply. Drafts only. |

Campaign numbers come from the user's sending tool. The agent does the ten-send floor, the weighted rates, the funnel diagnosis and the two baselines itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.reply.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
