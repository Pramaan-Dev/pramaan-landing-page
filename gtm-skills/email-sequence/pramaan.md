---
skill: email-sequence
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/email-sequence
pramaan_skills: [email, ai-models]
ids: [email.draft.create, email.message.schedule.create, email.marketing.send, llm.complete]
---

# Run "Email sequence" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Write each email (one email, one job) | `llm.complete` | Optional. The agent can write them itself. |
| Save each as a draft for review | `email.draft.create` | Saves the draft in the user's connected Gmail or Outlook, or in a Pramaan agent inbox. Nothing is sent. The scheduled send below is a separate message, so the draft is for review only. |
| Send on a time delay | `email.message.schedule.create` | One scheduled send per email, per recipient. |
| Send a newsletter-style email | `email.marketing.send` | Up to 100 people, from a verified domain, with unsubscribe. |

Pramaan has no behaviour-triggered sequence engine. The agent does the trigger logic and exits itself, or the user runs the sequence in their own email tool.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.message.schedule.create` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.marketing.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
5. None of the other ids send or change anything.
