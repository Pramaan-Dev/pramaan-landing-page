---
skill: seo-intel
author: alon-goldenberg
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/alon-goldenberg/seo-intel
pramaan_skills: [web-search]
ids: [seo.audit, seo.competitor.profile, keyword.gap, keyword.research, rank.check, links.audit, content.audit, seo.quickwins, site.crawlability.audit, web.map, web.crawl, brand.visibility, aeo.competitor.share]
---

# Run "SEO intel" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`seo.audit` is a mission (several steps, one result). It returns a domain's search standing: link authority and backlink totals, and on request keyword volumes. Use it for a first read of one site.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Keyword research | `keyword.research`, `seo.quickwins` | Ideas with volume and cost, and existing positions 4 to 20 ranked by upside. |
| Rank check | `rank.check` | Where a domain ranks for a list of terms. |
| Site audit | `site.crawlability.audit`, `seo.audit`, `links.audit`, `content.audit` | What crawlers see, link standing, risky backlinks, and one page judged at a time. |
| Content gap | `web.map`, `keyword.gap` | Map each site's pages, and keywords rivals rank for that you do not. |
| Competitor reverse-engineering | `seo.competitor.profile`, `web.crawl` | A rival's search footprint, and the text of its pages. |
| AI visibility | `brand.visibility`, `aeo.competitor.share` | How often AI answers mention the brand, and against rivals. |

The agent does the routing, the topic matrix, running memory and delta modes, and the write-up itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything or change a site.
