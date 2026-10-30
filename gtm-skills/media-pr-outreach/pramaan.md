---
skill: media-pr-outreach
author: gali-firon
source: https://github.com/swan-gtm/gtm-skills/tree/main/skills/gali-firon/media-pr-outreach
pramaan_skills: [web-search, social-media, people-companies, email]
ids: [web.search, web.read, linkedin.user.posts, people.email.find]
---

# Run "Media and PR outreach" with Pramaan

The skill says what to do. This page says which Pramaan superpowers do each step. Setup (key, MCP, SDK or HTTP): https://www.pramaan.dev/skill.md

## Step by step

| Skill step | Pramaan id | Notes |
|---|---|---|
| 1. Qualify the reporter: find a recent byline | `web.search` | The reporter's name plus outlet. Check the date. |
| 1. Qualify the reporter: read it | `web.read` | Read the article the pitch will anchor to. |
| 1. Qualify the reporter: their beat | `linkedin.user.posts` | Optional. What the reporter has posted lately. |
| 6. Send from the right inbox | `people.email.find` | The reporter's work email from name and outlet. |

The agent does steps 2 to 5 itself: pitch type, drafting, the copy pass and the review gate. A person approves and sends the email, as the skill says.

## Before running

1. Quote each id first (`quote`). Nothing runs during a quote, and it returns the maximum price.
2. None of these ids send anything.
