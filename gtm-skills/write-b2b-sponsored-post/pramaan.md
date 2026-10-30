---
skill: write-b2b-sponsored-post
author: thomas-marcelle
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/thomas-marcelle/write-b2b-sponsored-post
pramaan_skills: [ai-models, social-media]
ids: [llm.complete, text.rewrite, social.post.validate.length]
---

# Run "Write a B2B sponsored post" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

This skill is writing. No superpower is needed except these optional ones.

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| Draft the four layers | `llm.complete` | Optional. Give it the creator's real story and one measured result. |
| Fix anti-patterns | `text.rewrite` | Rewrite a line with an explicit rule. |
| Format | `social.post.validate.length` | Check the length before it goes to the creator. |

The agent does the hook, story, resolution and CTA itself.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids publish anything.
