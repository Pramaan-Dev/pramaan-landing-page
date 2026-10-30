---
skill: competitor-monitoring
author: alon-goldenberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alon-goldenberg/competitor-monitoring
pramaan_skills: [people-companies, web-search, ads-marketing]
ids: [competitor.snapshot, company.changes.snapshot, companies.news, ad.intel, companies.website.changes, competitor.pricing.read, linkedin.company.posts, web.search]
---

# Run "Competitor monitoring" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`competitor.snapshot` is a mission (several steps, one result). It puts a company and its competitors side by side: profiles, and when asked, news. `company.changes.snapshot` lists recent news, posts and job openings for one company.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Fan out the research: news | `companies.news`, `web.search` | News is dated by event: check the date before calling it recent. |
| Site changes | `companies.website.changes` | Pages that appeared or disappeared. |
| Pricing | `competitor.pricing.read` | Read from the competitor's own site. |
| Posts | `linkedin.company.posts` | Recent company page posts. |
| Ads | `ad.intel` | Ads in a public ad library, grouped into themes. |
| Weekly changes | `company.changes.snapshot` | News, posts and jobs in one read. |

The agent does the profile setup, memory, signal validation, briefing and saving itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.changes.snapshot` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. None of the other ids send or change anything.
