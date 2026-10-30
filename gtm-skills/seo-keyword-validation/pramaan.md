---
skill: seo-keyword-validation
author: sam-dunning
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/sam-dunning/seo-keyword-validation
pramaan_skills: [web-search, ads-marketing]
ids: [keyword.research, google.keywords.volume, google.keywords.difficulty, google.keywords.ideas, keyword.gap]
---

# Run "SEO keyword validation" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

Pramaan has no Ahrefs. These ids give the same facts: volume, difficulty and competitor gaps.

## Fastest path

`keyword.research` is a mission (several steps, one result). It returns keyword ideas for a seed term with search volume and cost. `keyword.gap` is a mission that lists keywords rivals rank for and you do not.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Generate seed keywords per opportunity | `google.keywords.ideas`, `keyword.research` | Seed from each opportunity type. |
| 1. Validate volume | `google.keywords.volume` | Monthly volume and CPC. Never invent a number; say when none came back. |
| 1. Validate difficulty | `google.keywords.difficulty` | How hard to rank. |
| 1. Competitor-based candidates | `keyword.gap` | Keywords rivals rank for and the client does not. |

The agent does step 2 (filter candidates), step 3 (organize the pool) and the summary itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
