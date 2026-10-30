---
skill: linkedin-inmail
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/linkedin-inmail
pramaan_skills: [social-media, people-companies]
ids: [linkedin.account.get, linkedin.user.profile, linkedin.relation.get, linkedin.invitation.send, linkedin.inmail.send, linkedin.outreach.run]
---

# Run "LinkedIn InMail" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`linkedin.outreach.run` is a mission (several steps, one result). It moves a list of people one step through outreach on the user's connected account: invite, first message, or leave alone. It reports the state of every row. Use it for batches.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Check the account is connected | `linkedin.account.get` | If not, connect it first. |
| Read the person's profile | `linkedin.user.profile` | For relevance in the draft. |
| Pick the vehicle | `linkedin.relation.get` | Connected, invited or none decides invite, message or InMail. |
| Connection request with a note | `linkedin.invitation.send` | Note up to 300 characters. |
| InMail to someone not connected | `linkedin.inmail.send` | Needs a premium account with InMail credits. |
| Run a batch | `linkedin.outreach.run` | One step per person per run. |

The agent does the four draft rules, the sequence plan and the follow-up timing itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.inmail.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.outreach.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
