---
skill: cold-email-preflight
author: imad-badreddine
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/imad-badreddine/cold-email-preflight
pramaan_skills: [email, people-companies]
ids: [security.domain.email-auth, email.domain.check, people.email.verify-bulk, people.email.toxicity.check-bulk, email.events.list]
---

# Run "Cold email pre-flight check" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Authentication | `security.domain.email-auth`, `email.domain.check` | SPF, DKIM, DMARC, MX and blocklist status. Any failure is a hold. |
| 2. List quality | `people.email.verify-bulk` | 100 rows per call. Drop anything not clearly deliverable. |
| 2. List quality: risk | `people.email.toxicity.check-bulk` | Mailbox signals that can hurt sender reputation. |
| 6. First-week watch | `email.events.list` | Only if the campaign sends through Pramaan. Delivery and bounce events per email. |

The agent does steps 3, 4 and 5 itself: the copy risk pass, the volume check and the kill-switch thresholds. Placement tests run in the user's sending tool.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
