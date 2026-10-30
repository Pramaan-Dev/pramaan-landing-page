---
skill: aeo-score-audit
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/aeo-score-audit
pramaan_skills: [web-search, ai-models]
ids: [brand.visibility, brand.visibility.history, aeo.mentions.summary, aeo.mentions.history, aeo.mentions.search]
---

# Run "AEO score audit" with Pramaan

This skill audits a score from an AI-visibility tracking tool with stored scans and analysis versions. Pramaan does not store scans for that tool, so it cannot decompose that tool's score. It can pull its own aggregate and trend, and fetch fresh AI answers to check a disputed result.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`brand.visibility` is a mission (several steps, one result). It measures how often AI answers mention a brand across prompts, with the sites they cite.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Aggregate | `aeo.mentions.summary` | Mention counts and AI search volume. |
| Trend over time | `aeo.mentions.history`, `brand.visibility.history` | Month by month. Locate the drop. |
| 3. Inspect | `aeo.mentions.search` | AI answers that mention the brand, with their cited sources. |

The agent does step 2 (decompose by engine, country and topic) and the analysis-version check on the tool's own export. Pramaan figures are estimates from a different source: say so, and never mix them into the tool's trend line.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
