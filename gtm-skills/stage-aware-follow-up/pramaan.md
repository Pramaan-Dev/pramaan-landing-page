---
skill: stage-aware-follow-up
author: tanyo-gochev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/tanyo-gochev/stage-aware-follow-up
pramaan_skills: [email, apps-connections]
ids: [apps.catalog.search, apps.action.execute, email.threads.list, email.thread.get, email.draft.create, email.message.reply]
---

# Run "Stage-aware follow-up" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Name the stage | `apps.catalog.search`, `apps.action.execute` | Deal stage and last touch from the connected CRM. |
| Find the thread | `email.threads.list`, `email.thread.get` | Read what was last said, in order. |
| Draft the follow-up | `email.draft.create` | Nothing is sent. |
| Send in the same thread | `email.message.reply` | Only after review. |

The agent does the stage call, the "every touch earns its send" check and the decision never to break up itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.message.reply` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
