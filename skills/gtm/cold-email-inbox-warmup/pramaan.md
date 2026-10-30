---
skill: cold-email-inbox-warmup
author: imad-badreddine
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/imad-badreddine/cold-email-inbox-warmup
pramaan_skills: [email]
ids: [security.domain.email-auth, email.domain.check]
---

# Run "Cold email inbox warm-up" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Authentication configured on the new domain | `security.domain.email-auth` | SPF, DKIM, DMARC, MX and blocklist status, with a grade. |
| 1 and 2. Check the secondary domain | `email.domain.check` | Mail servers, SPF and the reputation of addresses the site lists. |

Pramaan does not warm mailboxes, send warm-up mail or test inbox placement. The agent writes the ramp schedule, tracks the daily counts and makes the go/no-go and mid-campaign calls itself. Warm-up and placement tests run in the user's sending tool.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change a domain.
