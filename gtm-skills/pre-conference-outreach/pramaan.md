---
skill: pre-conference-outreach
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/pre-conference-outreach
pramaan_skills: [people-companies, email, social-media]
ids: [outreach.sequence.draft, outreach.linkedin.opener, people.enrich, people.email.verify, companies.enrich, companies.news, companies.funding-history, linkedin.user.posts, email.draft.create, email.draft.send, linkedin.invitation.send, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Pre-conference outreach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission. It writes a three-step email sequence for one lead and leaves drafts. Nothing is sent. The skill's four-step shape adds LinkedIn steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Research every account | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute`, `companies.enrich` | CRM first, with read actions. No row is skipped. |
| Fill in the attendee | `people.enrich`, `people.email.verify` | Check the employer before using a profile. |
| M1 third-party angle | `companies.news`, `companies.funding-history`, `linkedin.user.posts` | Use one verified, dated signal. Else attendance only. |
| Write the sequence | `outreach.sequence.draft`, `email.draft.create`, `outreach.linkedin.opener` | Drafts and text only. |
| Connect and send | `linkedin.invitation.send`, `email.draft.send` | Both send. |
| Record the attendee line | `apps.action.execute` | Writes to the CRM or account notes. |

The agent does the sender routing, the scenario choice and the copy rules itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `outreach.sequence.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
5. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
6. None of the other ids send or change anything.
