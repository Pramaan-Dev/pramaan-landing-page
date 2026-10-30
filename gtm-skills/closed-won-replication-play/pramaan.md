---
skill: closed-won-replication-play
author: ariel-cohen
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ariel-cohen/closed-won-replication-play
pramaan_skills: [people-companies, social-media, email, apps-connections]
ids: [lead.lookalikes.find, companies.enrich, companies.lookalike.search, people.search, people.linkedin.find, people.email.find, outreach.linkedin.opener, outreach.draft, crm.leads.push, apps.catalog.search, apps.action.execute]
---

# Run "Closed-won replication play" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`lead.lookalikes.find` is a mission. It finds companies like your best customers. `crm.leads.push` then checks and pushes the leads into your CRM. Use both when you want the list and the CRM entries without picking each step.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Extract the win profile | `apps.catalog.search`, `apps.action.execute`, `companies.enrich` | Read the deal from the CRM, then enrich the won company. |
| 3. Research each lookalike | `companies.lookalike.search`, `companies.enrich` | Give one to a few example domains. Skip any already in the CRM. |
| 3. Find the right contact | `people.search`, `people.linkedin.find`, `people.email.find` | Same persona as the champion. |
| 4. Draft outreach | `outreach.linkedin.opener`, `outreach.draft` | LinkedIn text is returned only. The email is saved as a draft in the deal owner's inbox. Keep the win anonymous. |
| 5. CRM updates | `crm.leads.push`, `apps.action.execute` | Create the new companies and contacts. |
| 6. Create the review task | `apps.action.execute` | One batch task in the user's task tool. Nothing is sent. |

The agent does step 2 (the lookalike search profile) and the exit checks itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `crm.leads.push` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
4. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
5. None of the other ids send or change anything.
