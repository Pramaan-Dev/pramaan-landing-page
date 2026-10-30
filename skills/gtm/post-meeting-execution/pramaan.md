---
skill: post-meeting-execution
author: jeremy-hurst
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/jeremy-hurst/post-meeting-execution
pramaan_skills: [people-companies, email, apps-connections, social-media]
ids: [meeting.followup, meeting.summarize, audio.transcription.create, companies.enrich, people.enrich, apps.connections.list, apps.catalog.search, apps.action.execute, email.draft.create, email.draft.send, linkedin.invitation.send, llm.complete]
---

# Run "Post-meeting execution" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`meeting.followup` is a mission. It checks a transcript summary, stores it as a draft, creates the tasks you confirm and notes any next meeting. It needs approval. It covers steps 1, 9 and part of 10. For summary only, use `meeting.summarize`.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Pull meeting context | `audio.transcription.create`, `meeting.summarize` | Only if you hold the recording. A call tool's own transcript works too. |
| 2. Enrich the account | `companies.enrich` | |
| 8. Contacts and stakeholders | `people.enrich` | Attendees from the invite. |
| 3 to 8 and 11. CRM work | `apps.connections.list`, `apps.catalog.search`, `apps.action.execute` | Read history, then write notes, contacts and deal only after the owner confirms. |
| 9. Draft the follow-up | `llm.complete`, `email.draft.create` | Draft in the owner's voice. |
| 10. Send after review | `email.draft.send` | Sends. |
| 12. LinkedIn connection requests | `linkedin.invitation.send` | Sends an invite from the owner's connected account. |

The agent does the classification, rescoring, BANT scoring and funnel stage recommendation itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `meeting.followup` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. `linkedin.invitation.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
5. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
6. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
7. None of the other ids send or change anything.
