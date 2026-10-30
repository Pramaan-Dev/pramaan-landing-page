---
skill: post-conference-outreach
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/post-conference-outreach
pramaan_skills: [people-companies, email, social-media]
ids: [outreach.sequence.draft, outreach.linkedin.opener, people.enrich, people.email.verify, companies.enrich, companies.news, email.draft.create, email.draft.send, linkedin.invitation.send, linkedin.message.send, apps.connections.list, apps.catalog.search, apps.action.execute]
---

# Run "Post-conference outreach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission. It writes a three-step email sequence for one lead and leaves drafts. Nothing is sent. The skill's longer nurture needs the LinkedIn steps below as well.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Research every account | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute`, `companies.enrich`, `companies.news` | CRM first, with read actions. Do this for every scan. |
| Fill in the scanned contact | `people.enrich`, `people.email.verify` | Badge scans are often incomplete or wrong. |
| Write M1 and the nurture | `outreach.sequence.draft`, `email.draft.create` | Drafts only. |
| LinkedIn steps | `outreach.linkedin.opener`, `linkedin.invitation.send`, `linkedin.message.send` | The opener returns text only. The other two send. |
| Send after approval | `email.draft.send` | Sends. |
| Record the attendee line | `apps.action.execute` | Writes to the CRM or account notes. |

The agent does the temperature call, the sender choice, the booked-meeting gate and the copy rules itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.message.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `outreach.sequence.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
6. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
7. None of the other ids send or change anything.
