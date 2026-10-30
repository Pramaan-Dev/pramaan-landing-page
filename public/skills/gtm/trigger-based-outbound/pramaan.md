---
skill: trigger-based-outbound
author: ryan-iyengar
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ryan-iyengar/trigger-based-outbound
pramaan_skills: [people-companies, email]
ids: [company.signals.find, companies.signals.get, companies.news, people.search, people.enrich, people.email.find, people.email.verify, email.draft.create, email.draft.send]
---

# Run "Trigger-based outbound" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.signals.find` is a mission (several steps, one result). It finds companies with dated buying signals. Use it to detect triggers. To check one known company, use `companies.signals.get`.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Detect and verify the trigger | `company.signals.find`, `companies.signals.get`, `companies.news` | Keep the source and date. Check it is fresh. |
| Find the right buyer | `people.search`, `people.enrich` | Confirm current role. |
| Get a deliverable email | `people.email.find`, `people.email.verify` | Skip unverified addresses. |
| Draft the opener | `email.draft.create` | Saves the draft in the user's connected Gmail or Outlook, or in a Pramaan agent inbox. Nothing is sent. |
| Send after review | `email.draft.send` | Sends that same draft from the mailbox it was saved in. |

The agent does the fit check, the hypothesis, the message and the skip-or-send decision itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `email.draft.send` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `email.draft.create` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. None of the other ids send or change anything.
