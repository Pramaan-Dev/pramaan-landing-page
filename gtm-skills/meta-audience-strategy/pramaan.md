---
skill: meta-audience-strategy
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/meta-audience-strategy
pramaan_skills: [ads-marketing, apps-connections]
ids: [apps.catalog.search, apps.action.execute, audience.keys.prepare, ads.audiences.report, ads.targeting.search, ads.performance.report]
---

# Run "Meta audience strategy" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Start with customer intelligence | `apps.catalog.search`, `apps.action.execute` | Find the CRM's search action, then run it for customers by deal size, cycle length and tenure. |
| Data hierarchy, tier 1: CRM seed list | `audience.keys.prepare` | Hashed email and mobile keys for the user's own customers. It does not upload them. |
| Data hierarchy: existing audiences | `ads.audiences.report` | Custom and lookalike audiences with the sizes Meta reports. |
| Data hierarchy, tier 3: interests and titles | `ads.targeting.search` | Targeting options and their availability. |
| Audience validation | `ads.performance.report` | Spend and results per campaign, to compare the one-ad-set-per-source test. |

Pramaan does not upload lists or create lookalikes, and has no third-party identity graph for tier 2. The agent does the audience design, exclusions and quality rules itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `apps.action.execute` runs one action in a connected app. Here it only reads, but the same id can write, so the agent shows the exact action and inputs and waits for the user's yes.
3. None of the other ids send or change anything. `audience.keys.prepare` returns hashed customer data, so keep its output private.
