---
skill: inbox-zero
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/inbox-zero
pramaan_skills: [email, social-media, apps-connections]
ids: [inbox.triage, apps.action.read, linkedin.inbox.digest, inbox.cleanup, reply.draft, email.reply.send]
---

# Run "Inbox zero" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Sweep: email | `inbox.triage` | Newest mail sorted by kind and urgency. Also covers step 2 for email. |
| 1. Sweep: Slack DMs | `apps.action.read` | Reads messages through the connected Slack app, read-only. |
| 1. Sweep: LinkedIn DMs | `linkedin.inbox.digest` | Recent LinkedIn conversations, unread first. |
| 3. Execute autonomous actions | `inbox.cleanup` | Labels newsletters and bulk mail. It does not archive. |
| 4. Draft replies for bucket 3 | `reply.draft` | One draft per email, saved in the inbox. |
| 6. Execute the user's decisions | `email.reply.send` | Sends one approved reply. |

The agent does the four buckets and the single batched output itself. The Swan inbox needs Swan's own tools.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.reply.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `reply.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `inbox.cleanup` relabels mail in the inbox. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
