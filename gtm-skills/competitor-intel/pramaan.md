---
skill: competitor-intel
author: yoni-tserruya
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yoni-tserruya/competitor-intel
pramaan_skills: [people-companies, web-search]
ids: [competitor.snapshot, companies.identify, companies.enrich, companies.funding-history, companies.news, competitor.pricing.read, company.hiring.signal, people.search, companies.signals.search]
---

# Run "Competitor intel" with Pramaan

This skill is built for Lusha. Pramaan can pull the competitor's profile, news, hiring and leaders from its own sources. It cannot see which of the competitor's customers show intent on your category.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`competitor.snapshot` is a mission (several steps, one result). It puts a company and its competitors side by side, with news, pricing pages, posts, open roles and ads when asked. Use it for general competitive prep.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Resolve the competitor | `companies.identify` | If two matches are close, ask the user. |
| 3. Firmographics and funding | `companies.enrich`, `companies.funding-history` | Size, HQ, rounds and investors. |
| 3. Recent news | `companies.news` | Last 90 days. Leadership moves, launches, layoffs. |
| 3. Pricing changes | `competitor.pricing.read` | Plans from the competitor's own pricing page. Most useful for renewal defence. |
| 3. Hiring signals | `company.hiring.signal` | Open roles and recent posts, with a reading of both. Mark surges and gaps per function. |
| 3. Leadership contacts | `people.search` | C-suite and VPs at the competitor's domain. Departures do not show. |
| 3. Customer intent (rough) | `companies.signals.search` | A plain question such as "companies replacing [competitor]". It finds public signals, not the competitor's customer list. |

The agent anchors on the deal context (step 1), triages (step 4) and writes the displacement angles last (step 5) itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
