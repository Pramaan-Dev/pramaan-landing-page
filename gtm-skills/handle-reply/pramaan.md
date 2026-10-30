---
skill: handle-reply
author: ido-goldberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ido-goldberg/handle-reply
pramaan_skills: [email, apps-connections]
ids: [outreach.replies.triage, outreach.reply.draft, apps.action.execute]
---

# Run "Handle reply" with Pramaan

This skill is built for the Swan workspace: it loads the sequence, sender voice and examples from Swan. Pramaan can still classify the reply, draft the answer and update the CRM.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Classify intent | `outreach.replies.triage` | Interested, not now, wrong person, out of office or unsubscribe. |
| 3. Draft the response | `outreach.reply.draft` | Saved as a draft in the same inbox. Never sent, as the skill says. |
| 4. Update CRM state | `apps.action.execute` | Writes the new status to the connected CRM. |

Step 1 loads Swan's sequence context, and step 4's Swan update uses Swan's tools.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.reply.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
