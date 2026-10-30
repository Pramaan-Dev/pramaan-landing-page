---
skill: personalized-outbound-ab-test
author: amir-baldiga
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/amir-baldiga/personalized-outbound-ab-test
pramaan_skills: [social-media, apps-connections, ai-models]
ids: [apps.catalog.search, apps.action.execute, linkedin.chats.list, people.profile.details, linkedin.user.posts, llm.complete, text.ai.detect, linkedin.outreach.run, linkedin.chat.messages.list]
---

# Run "Personalized outbound A/B test" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Do-not-contact list | `apps.catalog.search`, `apps.action.execute`, `linkedin.chats.list` | Open deals from the connected CRM, and open LinkedIn threads. |
| 3. Enrich the personalized arm only | `people.profile.details`, `linkedin.user.posts` | Role, employer and recent activity. |
| 4. Write one message per lead | `llm.complete` | Optional. The agent can write them directly. |
| 5. Re-verify | `text.ai.detect` | A probability from 0 to 1. The agent recomputes length, dashes, CTA position and banned phrases itself. |
| 6. Ship with a fallback | `linkedin.outreach.run` | On the user's connected LinkedIn account. The agent swaps in the generic message where a field is missing. |
| 7. Read replies | `linkedin.chats.list`, `linkedin.chat.messages.list` | The inbox and each chat's messages. |

The agent does step 1 (the three-way split), the six-check gate and the reply-rate comparison itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `linkedin.outreach.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
