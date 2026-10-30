---
skill: event-account-plan
author: boaz-descalo
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/boaz-descalo/event-account-plan
pramaan_skills: [people-companies, web-search, documents-files]
ids: [csv.prepare, web.read, companies.domain.find-bulk, companies.enrich-bulk, companies.signals.bulk, companies.funding-history-bulk, companies.icp.validate-bulk, account.contacts.map]
---

# Run "Event account plan" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Normalize the attendee list | `csv.prepare` | Mission. Two tables: accounts and people. |
| 2. Read the vendor's ICP | `web.read` | Read the homepage and product pages. |
| 3. Resolve companies | `companies.domain.find-bulk`, `companies.enrich-bulk` | |
| 4. Find signals | `companies.signals.bulk`, `companies.funding-history-bulk` | Signals say why now. |
| 5. Score and tier | `companies.icp.validate-bulk` | Up to 100 per call. Use native scoring: the generative option holds about $100. Weights come from the ICP you read. |
| 6. Buying committee for Tier 1 | `account.contacts.map` | A mission. Contacts by role with checked work emails. |

The agent does the five intake questions (including credit spend), the tiers, step 7 (the plays) and step 8 (the three deliverables) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price. The skill asks you to confirm credit spend, so show the quote total and wait for a yes.
2. No id here is marked as needing approval.
