---
skill: pricing-monetisation-ops
author: rutger-katz
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/rutger-katz/pricing-monetisation-ops
pramaan_skills: [web-search, ai-models]
ids: [companies.products.list, web.read, llm.complete]
---

# Run "Pricing and monetisation ops" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill designs metering, rating, billing and dunning. No superpower is needed. Optionally read competitors' public pricing.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Competitor plans and prices | `companies.products.list`, `web.read` | Products and plans read from the company's own site. |
| Draft policy text | `llm.complete` | Optional. |

The agent designs the metering and billing layers itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
