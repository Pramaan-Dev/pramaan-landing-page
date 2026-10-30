---
skill: competitor-positioning
author: alon-goldenberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alon-goldenberg/competitor-positioning
pramaan_skills: [people-companies, web-search, ads-marketing]
ids: [competitor.snapshot, competitor.discover, competitor.pricing.read, companies.enrich, web.map, web.read, ads.competitor.footprint]
---

# Run "Competitor positioning" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`competitor.snapshot` is a mission (several steps, one result). It puts a company and its competitors side by side. Use it for the first pass, then read their pages for messaging.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Confirm scope: who competes | `competitor.discover` | Competitors from a company graph and similar companies. |
| Capture your own baseline | `web.map`, `web.read` | Map the site to find the real feature and pricing pages, then read them as text. |
| Research each competitor | `companies.enrich`, `web.map`, `web.read` | Profile from a domain, then the homepage, feature and pricing pages. |
| Pricing | `competitor.pricing.read` | Read from the competitor's own site. |
| Paid messaging | `ads.competitor.footprint` | What they advertise on library networks. |

The agent does the marketing analysis, snapshots and battlecards itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
