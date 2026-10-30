---
skill: signal-to-campaign
author: bojan-berisavljevic
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/bojan-berisavljevic/signal-to-campaign
pramaan_skills: [people-companies, web-search, email]
ids: [outreach.signal.campaign, companies.signals.search, news.signals.search, account.contacts.map, outreach.copy.generate]
---

# Run "Signal to campaign" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`outreach.signal.campaign` is a mission. It finds companies from a plain signal and drafts outreach. Use it when the signal is one sentence, such as "hiring a head of RevOps".

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Prove the signal carries pain | `news.signals.search` | Check press and events behind the signal. |
| Build the evidence layer | `companies.signals.search` | Evidence-backed companies from a signal question. |
| Map buyers after the account passes | `account.contacts.map` | Mission. |
| Turn evidence into a campaign | `outreach.copy.generate` | Up to three emails for one named person. |

The agent does the pain test, the offer and the campaign plan itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. No id here is marked as needing approval. Everything drafts. Nothing sends.
