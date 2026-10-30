---
skill: competitive-intelligence-radar
author: sabahudin-murtic
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sabahudin-murtic/competitive-intelligence-radar
pramaan_skills: [people-companies, web-search, apps-connections]
ids: [google.serp.organic, competitor.pricing.read, web.read, companies.news, company.reputation.report, companies.funding-history, companies.jobs.search, company.changes.snapshot, apps.action.run]
---

# Run "Competitive intelligence radar" with Pramaan

This skill is a plugin built on BrightData for web data and Notion for publishing. Pramaan can do the scouts' gathering and the Notion upsert. The diff, the briefing, the dashboard and the war room stay with the agent.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`company.changes.snapshot` is a mission (several steps, one result). It returns one competitor's dated news, posts and open jobs with a summary, and can repeat on a schedule. It does not cover SERP rank or pricing. Use the steps below for the full dossier.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Scout: SERP rank for tracked keywords | `google.serp.organic` | One call per keyword. Find each competitor's position in the results. |
| Scout: pricing | `competitor.pricing.read` | Reads the pricing page from the competitor's own site. |
| Scout: positioning | `web.read` | Homepage and product pages. Keep the URL and fetch time. |
| Scout: fresh news | `companies.news` | Check the event date before calling it fresh. |
| Scout (opt-in): sentiment | `company.reputation.report` | Employee and product review samples with dated news. |
| Scout (opt-in): funding | `companies.funding-history` | Rounds, dates and investors. |
| Scout (opt-in): hiring | `companies.jobs.search` | Open roles by company name or domain. |
| Publish to Notion | `apps.action.run` | Needs a connected Notion account. Upserts the Competitors database and adds a Briefings page. |

The agent does the week-over-week diff, change classes, ranking, the briefing, the HTML dashboard and the war room itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `company.changes.snapshot` needs approval. The agent shows the exact inputs and waits for the user's yes.
3. `apps.action.run` needs approval. The agent shows the exact inputs and waits for the user's yes.
4. None of the other ids send or change anything.
