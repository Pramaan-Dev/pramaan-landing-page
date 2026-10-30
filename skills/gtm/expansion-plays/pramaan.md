---
skill: expansion-plays
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/expansion-plays
pramaan_skills: [email, social-media, apps-connections]
ids: [outreach.sequence.draft, outreach.linkedin.opener, email.draft.create, email.draft.send, linkedin.invitation.send, linkedin.message.send, apps.connections.list, apps.catalog.search, apps.action.execute, llm.complete]
---

# Run "Expansion plays" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.sequence.draft` is a mission. It writes a three-step email sequence for one lead and leaves drafts in an inbox. Nothing is sent. Use it for the email steps, then add the LinkedIn steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read call notes and account history | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read actions on the connected CRM only. |
| Email steps | `outreach.sequence.draft`, `email.draft.create` | Drafts only. Write each from the customer's own usage or words. |
| LinkedIn connection and message | `outreach.linkedin.opener`, `linkedin.invitation.send`, `linkedin.message.send` | The opener returns text only. The other two send. |
| Reply on the thread | `email.draft.create`, `email.draft.send` | Send only after the owner approves. |
| Tidy the wording | `llm.complete` | Optional. |

The agent does the play choice, the usage math and the internal alert after the no-reply window itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.message.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `outreach.sequence.draft` and `email.draft.create` save drafts. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
6. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
7. None of the other ids send or change anything.
