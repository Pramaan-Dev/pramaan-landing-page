---
skill: inbound-triggers-30
author: alex-vacca
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alex-vacca/inbound-triggers-30
pramaan_skills: [people-companies, social-media]
ids: [lead.engagers.find, lead.inbound.route, company.visitors.identify, lead.enrich]
---

# Run "30 inbound triggers" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Social and intent: post engagers | `lead.engagers.find` | People who reacted to or commented on a LinkedIn post. |
| Site visits | `company.visitors.identify` | Companies visiting the site. |
| Who just wrote in | `lead.inbound.route` | The company behind a sender's address. |
| Fill in the lead | `lead.enrich` | Full contact record from an email or profile. |

The agent does the trigger choice and the response message itself. Event, content and sponsor triggers come from the user's own lists.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
