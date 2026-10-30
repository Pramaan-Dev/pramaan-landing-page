---
skill: google-ads
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/google-ads
pramaan_skills: [ads-marketing, web-search]
ids: [keyword.research, google.domain.paid-keywords, google.serp.ads, ads.competitor.footprint, ads.budget.estimate, ads.performance.report]
---

# Run "Google Ads for B2B" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Rule 3. Build bottom-up by intent | `keyword.research` | Keywords for a topic with volume, to sort by intent. |
| Rule 3. Build bottom-up by intent | `google.domain.paid-keywords` | Keywords a competitor bids on, with cost per click. |
| Rule 6. RSA best practices | `google.serp.ads`, `ads.competitor.footprint` | Ads shown for a search, or a competitor's full search and library ads with landing pages. |
| Bidding strategy: budget | `ads.budget.estimate` | Google and Bing traffic and cost at a chosen bid. An estimate, not a promise. |
| Key metrics to watch | `ads.performance.report` | Spend and results by campaign on a connected Google Ads account. |

Pramaan does not create or edit Google Ads campaigns and has no search terms report, so rule 2 runs in Google Ads. The agent does the structure, match types and copy itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or spend ad budget.
