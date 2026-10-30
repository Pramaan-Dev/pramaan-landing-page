---
skill: outbound-performance-diagnosis
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/outbound-performance-diagnosis
pramaan_skills: [email]
ids: [email.domain.check, people.email.verify, outreach.replies.triage, email.messages.list]
---

# Run "Outbound performance diagnosis" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Mostly reasoning on the user's campaign numbers. Superpowers help check delivery and sort replies.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Layer 1: delivery | `email.domain.check`, `people.email.verify` | The sending domain's mail servers and SPF (not DMARC or DKIM), and bad addresses on the list. Inbox placement and spam complaints come from the user's sending tool. |
| Layer 4: reply quality | `outreach.replies.triage` | Sorts replies into interested, not now, wrong person, out of office and unsubscribe. Only for inboxes Pramaan can read. |
| Replies but no meetings: response time | `email.messages.list` | Only if the sending inbox is connected. |

No superpower reads open or reply rates (layers 2 and 3); ask for the campaign report. The agent works the layers in order, stops at the first break and plans the one change to test.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
