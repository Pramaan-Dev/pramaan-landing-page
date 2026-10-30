---
skill: outreach-messaging
author: maja-voje
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/maja-voje/outreach-messaging
pramaan_skills: [email, people-companies]
ids: [outreach.sequence.draft, outreach.draft, companies.enrich, companies.news, people.enrich, email.draft.create]
---

# Run "Outreach messaging" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission. It writes a three-step email sequence for one lead from their company and news, and leaves drafts. Nothing is sent. Use `outreach.draft` for one email. The skill's value-first rule still applies: give the reader something useful in the email.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Confirm inputs: know the reader | `people.enrich` | Title, tenure, background. |
| Lead with value: a specific observation | `companies.news`, `companies.enrich` | Use a dated signal you can cite. |
| 2 and 3. Draft the stack and touch 1 | `outreach.sequence.draft`, `outreach.draft`, `email.draft.create` | Drafts only. Check each draft against R.E.P.L.Y. and the self-edit checklist. |

The agent does the offer, the ICP and the value-first angle itself. For a generic template with no named lead, it needs no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.sequence.draft`, `outreach.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
