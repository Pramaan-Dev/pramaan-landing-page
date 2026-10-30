---
skill: inbox-warm-up-ramp
author: lucas-godtfredsen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/lucas-godtfredsen/inbox-warm-up-ramp
pramaan_skills: [email]
ids: [email.inboxes.list, email.domain.get, security.domain.email-auth, email.events.list]
---

# Run "Inbox warm-up ramp" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1 and 2. Which inboxes exist | `email.inboxes.list` | Inbox age comes from when each was created. |
| 4. Keep the first touch plain: is the domain ready | `email.domain.get`, `security.domain.email-auth` | SPF, DKIM and DMARC before any volume. |
| 5. Watch the three numbers | `email.events.list` | Bounces and complaints, only for mail sent through Pramaan. |

The agent does the ramp schedule, working-hours timing (step 3), the choice of which account to warm (step 6) and the plain explanation of today's limit (step 7) itself. Pramaan's own daily send limit is a hard cap on top of it.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
