---
skill: citation-gap-outreach
author: huxley-peckham
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/huxley-peckham/citation-gap-outreach
pramaan_skills: [web-search, people-companies]
ids: [aeo.citation.gap, web.read, people.email.find, brand.visibility]
---

# Run "Citation gap outreach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Rank by answers fed | `aeo.citation.gap` | The pages and domains AI answers cite most for a topic, against the user's own pages. |
| Match the ask to the source | `web.read` | Read each target page to see its type and what engines quote from it. |
| Run it like pipeline: the human contact | `people.email.find` | Work email of the editor or owner, from name and domain. |
| Verify the placement landed in answers | `brand.visibility` | Re-ask the questions that source was feeding and compare. |

The agent does the ask per source type, the tracking sheet and the messages itself. Sending is the user's call.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
