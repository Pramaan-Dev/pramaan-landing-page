---
skill: ai-visibility-sampling
author: huxley-peckham
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/huxley-peckham/ai-visibility-sampling
pramaan_skills: [web-search]
ids: [brand.visibility, aeo.web-surface.check, brand.visibility.history]
---

# Run "AI visibility sampling" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Fastest path

`brand.visibility` is a mission (several steps, one result). It asks a sample of AI answer engines a set of prompts and counts how often the brand is named and which sites they cite.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Sample before scoring | `brand.visibility` | Run the same question set more than once to see the variance. |
| Define what counts as present | `aeo.web-surface.check` | The answer text a person sees in ChatGPT, Copilot and Google's assistant, to tell a recommendation from a passing mention. |
| Read movement honestly | `brand.visibility.history` | Estimated mentions by month. A trend line, not the skill's fixed question set. |

The agent does the question by engine grid, the vote counts and the dated verbatim log itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
