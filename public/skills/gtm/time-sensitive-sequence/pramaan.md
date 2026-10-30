---
skill: time-sensitive-sequence
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/time-sensitive-sequence
pramaan_skills: [email, social-media]
ids: [outreach.sequence.draft, outreach.sequence.start, linkedin.outreach.run, email.message.schedule.create, email.message.schedule.cancel, email.message.schedules.list]
---

# Run "Time-sensitive sequence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 5. Plan the cadence backwards from the cutoff | `outreach.sequence.draft` | A mission. Three email drafts in the user's inbox. The agent rewrites them with real dates. |
| 7. Build the email sequence | `outreach.sequence.start` | A mission. Checked, subscribed contacts only. Enrolling starts the sends. |
| 7. Run LinkedIn steps | `linkedin.outreach.run` | A mission. Needs a connected LinkedIn account. |
| 7. Or schedule single emails | `email.message.schedule.create` | Scheduled for a future UTC time. |
| 8. Arm the kill job | `email.message.schedules.list`, `email.message.schedule.cancel` | List pending sends, cancel at the cutoff. Cancellation can still lose a race with delivery. |

The agent does steps 1 to 4 (cutoff, platform check, feasibility, channels), step 6 (one group per event) and step 9 (the report) itself. A timer to run the kill job at the cutoff is outside Pramaan: use your own scheduler.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.sequence.start` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `linkedin.outreach.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `email.message.schedule.create` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
6. `email.message.schedule.cancel` cancels a scheduled send. The agent shows the exact inputs and waits for the user's yes.
7. None of the other ids send or change anything.
