---
skill: aeo-visibility-tracking
author: yahav-fuchs
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/yahav-fuchs/aeo-visibility-tracking
pramaan_skills: [web-search, ai-models]
ids: [brand.visibility, aeo.competitor.share, aeo.prompt.research, aeo.citations.report, aeo.fix.plan]
---

# Run "AEO visibility tracking" with Pramaan

This skill is built for ReddGrow's AEO commands. Pramaan has no ReddGrow access, but it can set a baseline, compare rivals and mine cited sources from its own AI-answer data.

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`brand.visibility` is a mission (several steps, one result). It gives the baseline: mentions across prompts and the sites cited. `aeo.fix.plan` goes on to page changes.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Baseline 2: seed prompts in buyer language | `aeo.prompt.research` | Questions people ask AI tools about the topic, with how often each is used. |
| Baseline 3: visibility and ranking | `brand.visibility`, `aeo.competitor.share` | Mentions across prompts per engine, and rivals side by side. |
| Read: citations and sources | `aeo.citations.report` | How often each assistant cites the site, and which pages. |
| One content action per gap | `aeo.fix.plan` | Page changes for prompts where the brand is missing. |

The agent defines the brand, rivals and topics (baseline step 1), reads the trend and writes the per-topic report itself. There is no country split or sentiment explain in these ids; say so in the report.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
