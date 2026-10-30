---
skill: outreach-execution
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/outreach-execution
pramaan_skills: [people-companies, email, social-media]
ids: [outreach.sequence.draft, outreach.draft, outreach.linkedin.opener, people.find, people.enrich, people.social-profiles.find, people.email.find, people.email.verify, companies.enrich, companies.news, email.draft.create, email.draft.send, linkedin.invitation.send, linkedin.chat.start, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Outreach execution" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission. It builds a three-step email sequence for one lead from their company and news, and leaves drafts. Nothing is sent. Use `outreach.draft` for a single first email.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 8.2 Research the account | `companies.enrich`, `companies.news`, `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Check the CRM first, with read actions. |
| 8.3 Find the contact | `people.find`, `people.enrich`, `people.social-profiles.find` | Match the persona. Get a LinkedIn URL for LinkedIn steps. |
| 8.3 Email address | `people.email.find`, `people.email.verify` | Never use an unverified address. |
| 8.5 Draft the sequence | `outreach.sequence.draft`, `outreach.draft`, `email.draft.create` | Drafts only. |
| LinkedIn opener | `outreach.linkedin.opener` | Returns text. Does not send. |
| After approval, send | `email.draft.send`, `linkedin.invitation.send`, `linkedin.chat.start` | Each one sends. |

The agent does steps 1 to 7 itself: voice, path, sender, approval policy, prior-relationship check, hook and cadence. It also does the duplicate check and the rationale. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.chat.start` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `outreach.sequence.draft`, `outreach.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
6. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
7. None of the other ids send or change anything.
