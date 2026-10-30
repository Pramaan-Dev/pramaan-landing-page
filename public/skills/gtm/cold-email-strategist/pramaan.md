---
skill: cold-email-strategist
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/cold-email-strategist
pramaan_skills: [email, people-companies]
ids: [outreach.sequence.draft, outreach.draft, email.domain.check, people.email.verify, email.list.hygiene, email.send, email.send-bulk]
---

# Run "Cold email strategist" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission (several steps, one result). It drafts a three-step sequence for one lead. `outreach.draft` drafts a single first email.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Write first touch and follow-ups | `outreach.draft`, `outreach.sequence.draft` | Saved as drafts in the user's connected inbox. Nothing is sent. |
| Deliverability: domain setup | `email.domain.check` | Mail servers, SPF and reputation. DMARC and DKIM are not checked. |
| Deliverability: list quality | `people.email.verify`, `email.list.hygiene` | Verify one address, or clean a whole list. |
| Send | `email.send`, `email.send-bulk` | One email, or up to 100 separate emails as a job. |

The agent does the subject lines, frameworks, copy review and warmup advice itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.send-bulk` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `outreach.sequence.draft` and `outreach.draft` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
5. `email.list.hygiene` records suppressions in your sending account. The agent shows the exact inputs and waits for the user's yes.
6. None of the other ids send or change anything.
