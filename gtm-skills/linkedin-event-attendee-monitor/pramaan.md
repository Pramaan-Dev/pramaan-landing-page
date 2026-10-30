---
skill: linkedin-event-attendee-monitor
author: brianne-thomas
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/brianne-thomas/linkedin-event-attendee-monitor
pramaan_skills: [social-media, people-companies]
ids: [linkedin.search.posts, linkedin.posts.monitor.create, linkedin.user.profile, companies.enrich, llm.complete, linkedin.invitation.send]
---

# Run "LinkedIn event attendee monitor" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Search for new posts about the event | `linkedin.search.posts` | Search by event name or hashtag, newest first. |
| 1. Or watch on a schedule | `linkedin.posts.monitor.create` | Each run returns only new posts. |
| 3. Classify the author | `linkedin.user.profile`, `companies.enrich` | ICP fit decides who gets copy. |
| 4. Draft the comment and the connection note | `llm.complete` | Rotate the variants. |
| 4. Send the connection request | `linkedin.invitation.send` | Optional. The skill asks a human to act on the alert. |

The agent does the dedupe, the watchlist and the human alert itself. Posting the comment is done by the human: Pramaan has no id for commenting.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.posts.monitor.create` starts a paid standing watch. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
