---
skill: marketing-operations
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/marketing-operations
pramaan_skills: [people-companies, email, ads-marketing, apps-connections]
ids: [leads.quality.score, lead.quality.report, company.visitors.identify, lead.ads.capture, people.email.disposable, apps.action.execute]
---

# Run "Marketing operations" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Lead scoring: data quality of each lead | `leads.quality.score`, `lead.quality.report` | Data quality grade for one lead or a list. |
| 4. AI-assisted inbound qualification: junk sign-ups | `people.email.disposable` | Flags disposable and free-mail addresses. |
| 4. ICP-fit tracking for inbound: anonymous visits | `company.visitors.identify` | Company behind the visit. |
| 8. End-to-end inbound: leads from ad forms | `lead.ads.capture` | Mission. New ad-form leads with email checked. |
| 2 and 3. Attribution and campaign numbers | `apps.action.execute` | Read actions only, on connected marketing and CRM apps. |

The agent designs the scoring model, attribution, campaign tracking and MQL hand-off rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything.
