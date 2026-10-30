---
skill: ad-copywriting
author: ivan-falco
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/ivan-falco/ad-copywriting
pramaan_skills: [ads-marketing, people-companies, social-media, web-search]
ids: [company.reputation.report, web.read, complaints.mine, linkedin.search.posts, ads.library.search, ads.creative.brief]
---

# Run "Ad copywriting" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Voice of customer, tier 1: reviews | `company.reputation.report` | Public reviews and complaints about the user's company or a competitor. |
| Voice of customer, tier 1: testimonials | `web.read` | Case study and testimonial pages on the user's site. |
| Voice of customer, tier 2: Reddit and forums | `complaints.mine` | Complaints and requests mined from public posts on a topic. |
| Voice of customer, tier 2: LinkedIn posts | `linkedin.search.posts` | Posts where the ICP discusses the problem. |
| Voice of customer, tier 3: competitor ad copy | `ads.library.search` | Meta, LinkedIn or Google public ad libraries. |
| Six headline formulas | `ads.creative.brief` | Optional. Copy ideas from the user's best ads and competitors' ads. Needs a connected ads account. Drafts only. |

Call transcripts and support tickets come from the user. The agent extracts the language and writes the headlines and visuals itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
