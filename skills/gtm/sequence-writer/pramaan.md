---
skill: sequence-writer
author: gal-tamir
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gal-tamir/sequence-writer
pramaan_skills: [email, people-companies]
ids: [people.email.find, people.email.verify, companies.signals.get, outreach.sequence.draft]
---

# Run "Sequence writer" with Pramaan

The skill checks contacts through the Lusha connector. The Pramaan ids below do the same checks.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Contact verification | `people.email.find`, `people.email.verify` | Find the work email, then check the mailbox. |
| 2. Account signal confirmation | `companies.signals.get` | Newest dated signals for the account, to confirm the trigger. |
| 4. Write the sequence | `outreach.sequence.draft` | Optional. A three-step email draft for the contact. The skill's own architecture may need more steps; the agent writes those. |

The agent does step 3, the sequence architecture, and the privacy rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.sequence.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
