---
skill: reach-out
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/reach-out
pramaan_skills: [email, social-media, people-companies]
ids: [companies.signals.get, linkedin.user.posts, outreach.linkedin.opener, outreach.sequence.draft]
---

# Run "Reach out" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Anchor on the hook: trigger event | `companies.signals.get` | Newest dated signals at the contact's company. |
| Anchor on the hook: their own content | `linkedin.user.posts` | The contact's recent posts. |
| Draft: LinkedIn | `outreach.linkedin.opener` | A first LinkedIn message. The text is returned, never sent. |
| Stage | `outreach.sequence.draft` | A three-step email sequence left as drafts in the user's inbox, for manual approval as the skill says. |

The agent does the motion choice, the voice, the cadence and the final gate itself. Every message passes the gate before it is staged.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
