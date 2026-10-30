---
skill: ads-outbound-signaling-guide
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ads-outbound-signaling-guide
pramaan_skills: [ads-marketing, people-companies, email, apps-connections]
ids: [ads.insights.get, company.visitors.identify, account.contacts.map, people.email.find, apps.catalog.search, apps.action.execute, outreach.draft]
---

# Run "LinkedIn ads and outbound signaling" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Intent detection via campaign structure | `ads.insights.get` | Clicks and engagement per campaign. Engagement per named account comes from LinkedIn's company reports or Fibbler. |
| How intent signals flow: site visits | `company.visitors.identify` | Optional. Companies behind site visits that fit the ideal customer. |
| What BDRs should know before outreach | `account.contacts.map` | People at the engaged account by role. |
| What BDRs should know before outreach | `people.email.find` | Work email from name and company domain. |
| Workflow: engagement to intent tags | `apps.catalog.search`, `apps.action.execute` | Find the CRM update action, then write the intent tag on the company. |
| Email template, intent-based | `outreach.draft` | A first email draft, left in the user's mailbox. |

The agent decides when an account reaches "Interested" and plans the timeline and feedback loop itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. `apps.action.execute` runs one action in a connected app, and here it also writes. The agent shows the exact action and inputs and waits for the user's yes.
4. None of the other ids send or change anything.
