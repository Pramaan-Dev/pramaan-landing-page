---
skill: linkedin-campaign-complete
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/linkedin-campaign-complete
pramaan_skills: [social-media]
ids: [linkedin.outreach.run, lead.engagers.find, linkedin.account.get, linkedin.invitation.send, linkedin.message.send]
---

# Run "LinkedIn campaign" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`linkedin.outreach.run` is a mission (several steps, one result). It moves a list of people one step through outreach on the user's connected account: invite, first message, or leave alone, with the state of every row.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Pick high-converting targets (post engagers) | `lead.engagers.find` | People who reacted to or commented on a post. |
| Check the account is live | `linkedin.account.get` | Needs a connected LinkedIn account. |
| Send a connection request | `linkedin.invitation.send` | Note up to 300 characters. |
| Send the follow-up message | `linkedin.message.send` | Into an existing chat. |

The agent does the copywriting, sequence timing and schedule itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.outreach.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.message.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
