---
skill: candidate-sourcing-and-ranking
author: nylan-richard
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/nylan-richard/candidate-sourcing-and-ranking
pramaan_skills: [people-companies]
ids: [candidate.source, candidate.pool.size, candidate.lookalikes.find, candidate.outreach.draft, job.titles.normalize, people.search-preview, people.profile.search, people.profile.details, people.enrich]
---

# Run "Source and rank candidates from a hiring brief" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`candidate.source` finds people whose current title matches a role at one employer, with checks. Use it when the brief names target companies. For a wide search, use the steps below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Diagnose the role: title families | `job.titles.normalize` | Standardise free-text titles into families. |
| Size and preview the market | `candidate.pool.size`, `people.search-preview` | Free or cheap. Check volume and sample rows before paying. |
| Size and preview: run the search | `people.profile.search` | Typed filters, 50 per page. |
| Search thesis: like a known good hire | `candidate.lookalikes.find` | Use when the user has an exemplar. |
| Enrich only the reviewable pool | `people.profile.details`, `people.enrich` | Work history, tenure, contact details. Top candidates only. |
| Recommend the next contact action: first message | `candidate.outreach.draft` | Draft from public job history. Draft only. |

The agent does the intake diagnosis, the search thesis and the evidence-based ranking itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. `candidate.outreach.draft` saves a draft. Nothing is sent, but the agent shows the exact inputs and waits for the user's yes first.
3. None of the other ids send or change anything.
