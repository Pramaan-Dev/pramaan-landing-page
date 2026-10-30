---
skill: patent-backed-seo-quick-wins
author: thebigasif
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thebigasif/patent-backed-seo-quick-wins
pramaan_skills: [web-search, ai-models]
ids: [seo.quickwins, web.read, google.serp.patents, google.serp.organic, llm.complete]
---

# Run "Patent-backed SEO quick wins" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`seo.quickwins` is a mission (several steps, one result). It finds pages ranking in positions 4 to 20, with volume and difficulty. Use it to pick candidate pages, then do the patent grounding below.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Read the page the way the system does | `web.read` | Fetch the page text. |
| Check who ranks for the query | `google.serp.organic` | Compare the page with the pages above it. |
| Every win needs a receipt | `google.serp.patents` | Search for the patent that backs the change. Quote its number. |
| Rank by effort to impact | `llm.complete` | Optional. The agent can do this itself. |

The agent does the direction from the user, the ranking and the top three hand-back itself. They need no superpower.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
