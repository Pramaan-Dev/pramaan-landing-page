---
skill: linkedin-7-day-warmup
author: imad-badreddine
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/imad-badreddine/linkedin-7-day-warmup
pramaan_skills: [social-media]
ids: [linkedin.account.connect, linkedin.search.posts, linkedin.post.react, linkedin.invitation.send, linkedin.invitations.list, linkedin.message.send]
---

# Run "7-day LinkedIn warm-up" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Confirm the starting state | `linkedin.account.connect` | A sign-in link for the account owner. Nothing is sent. |
| 2 to 5. Find posts to engage with | `linkedin.search.posts` | By keyword or author. |
| 2 to 5. Likes | `linkedin.post.react` | One call per reaction. |
| 2 to 5. Connection requests | `linkedin.invitation.send` | Optional note up to 300 characters. Keep to the day's cap. |
| 2 to 5. Count requests sent | `linkedin.invitations.list` | Sent and pending requests. |
| 4. Light conversations | `linkedin.message.send` | Only into an existing chat with an accepted connection. No links, as the skill says. |

Pramaan has no id for writing a comment, so comments are done by hand. The agent plans each day, counts what was sent and runs the pause after a warning itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.post.react` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.message.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. None of the other ids send or change anything.
