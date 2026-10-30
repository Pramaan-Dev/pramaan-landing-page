---
skill: b2b-cold-email-copywriting
author: tim-yakubson
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tim-yakubson/b2b-cold-email-copywriting
pramaan_skills: [email, people-companies]
ids: [outreach.draft, outreach.sequence.draft, email.domain.check, lead.list.clean, companies.news, text.readability.check]
---

# Run "B2B cold email copywriting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission (several steps, one result). It writes a three-step sequence for one lead from their company and its news, and leaves drafts. `outreach.draft` does one first email.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 0. Fix the list first | `lead.list.clean` | Marks duplicates, malformed and undeliverable rows. |
| 1. Deliverability | `email.domain.check` | Mail servers and SPF. DMARC and DKIM are not checked. |
| 3. Write the email | `outreach.draft`, `outreach.sequence.draft` | Drafts only. They never send. |
| 4. Trigger-event opener | `companies.news` | Funding, hires and launches tie "why now" to "why you". |
| Reading level | `text.readability.check` | Check the 5th-grade target. |

The agent does the offer, the frameworks and the word-count rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` and `outreach.sequence.draft` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
