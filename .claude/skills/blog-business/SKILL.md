---
name: blog-business
description: Write a Pramaan blog post for non-technical readers (founders, sales, ops, HR, finance, marketing). Use when asked for a business blog post, a post for non-engineers, a use-case or how-teams-use-Pramaan post.
---

# Business blog post

Reader: someone who runs a team or a function, not a developer. They care about the job getting done, time saved, and staying in control. They do not care how the API works.

Read `docs/blog/VOICE.md` first. It wins over anything below.

## 1. Brief (ask only what's missing, in one message)

- **Topic** and the **one job** the reader wants done ("find 50 leads in fintech and draft the first email").
- **Reader role**: sales, ops, HR, finance, marketing, founder.
- **Call to action**: early access (default), a mission page, or the UI builder.

## 2. Gather facts

- Find 1-3 missions and the superpowers behind them that do the job: search `public/data/missions.json` and `public/data/superpowers.json` by keyword. Note each id and its plain-English name.
- Note the current counts you'll quote from `public/llms.txt`.
- Anything you can't confirm from these files or the docs: leave it out.

## 3. Outline (show it, then continue unless told to stop)

- 3 title options. Each names the job and the reader ("How sales teams build a lead list in 10 minutes"), under 65 characters.
- Structure, 800-1,200 words:
  1. **The job, in their words**: the task and why it eats their week. 2-3 short paragraphs.
  2. **What changes with Pramaan**: answer first, one paragraph.
  3. **Walk-through**: the ask in plain words, then each step Pramaan takes, using the "You ask / Pramaan plans / picks the tools / asks your OK / done, with proof" shape. Name the mission once, linked to its page.
  4. **Staying in control**: what needs their approval (messages, payments) and what it costs (prepaid, pay per use). No invented prices.
  5. **3 more things your team can ask for**: 3 one-line asks, each mapped to a real mission.
  6. **FAQ**: 3-5 questions a non-technical buyer asks ("Do I need a developer?", "Is my data safe?"). Short answers.
  7. **Call to action**: one line, one link.

## 4. Draft

- No code blocks, no JSON, no "API" or "endpoint" in the body. If the developer angle matters, link to the docs in one sentence.
- Every H2 is a question or an outcome the reader would search for.
- Put the reader's role in the first 100 words.

## 5. Search and AI-answer readiness

- `description`: under 155 characters, says who it's for and what they get.
- The first paragraph under each H2 answers that heading in 1-2 sentences, so Google and AI search tools can quote it.
- 2-4 internal links: mission pages, a superpower category, the docs.

## 6. Edit pass

Go line by line against VOICE.md: cut the AI-tell words, split long sentences, replace any abstract claim with a concrete example. If the `no-ai-slop` skill is installed, run it on the draft.

## 7. Save and check

- Save to `src/content/blog/<slug>.md` with frontmatter:
  ```yaml
  ---
  title: "..."
  description: "..."
  author: "Pramaan"
  date: YYYY-MM-DD
  draft: true
  ---
  ```
- Run `npm run build`. It fails if a hidden mission id slipped in.
- Never set `draft: false` yourself. A person reviews and publishes.
- Reply with: the file path, the 3 title options, and a list of every fact you used and where it came from.
