---
skill: content-de-slop-ai
author: vesselin-malev
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/vesselin-malev/content-de-slop-ai
pramaan_skills: [ai-models]
ids: [text.ai.detect, text.quality.check, text.readability.check, text.rewrite, text.facts.check, text.plagiarism.check]
---

# Run "Content de-slop (AI)" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 2. Strip the surface | `text.rewrite` | Rewrite with an explicit rule. |
| 3. Specificity pass | `text.facts.check` | Reported support for the claims you kept. Zero support can mean unverifiable, not false. |
| 4. Rhythm pass | `text.readability.check` | Difficult sentences and metrics. |
| 7. Prove it clean | `text.ai.detect`, `text.quality.check`, `text.plagiarism.check` | A probability and a label. Use as a signal, not proof. |

The agent does steps 1, 5 and 6 itself: the skeleton, the author's voice and the channel calibration.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send or change anything.
