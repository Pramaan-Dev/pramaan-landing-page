---
skill: multi-sender-rotation
author: imad-badreddine
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/imad-badreddine/multi-sender-rotation
pramaan_skills: [social-media]
ids: [linkedin.account.connect, linkedin.invitation.send, linkedin.invitations.list, linkedin.connections.list, linkedin.chat.messages.list, linkedin.message.send]
---

# Run "Multi-sender rotation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Only rotate warmed accounts | `linkedin.account.connect` | A sign-in link per account. Connect it after its warm-up. |
| 3. Split the lead list by account | `linkedin.invitation.send` | Each prospect goes through its one sender only. |
| 6. Conversations wait for their owner | `linkedin.chat.messages.list`, `linkedin.message.send` | Read the thread, then reply from the same account. |
| 7. Review the pool weekly | `linkedin.invitations.list`, `linkedin.connections.list` | Pending and accepted requests per account, for acceptance rates. |

The agent does the pool sizing, the bench, list splitting, caps, send windows and the warning plan itself. Pramaan calls act on one account at a time. They do not rotate senders or enforce caps.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.message.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
