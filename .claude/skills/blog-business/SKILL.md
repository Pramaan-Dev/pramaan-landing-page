---
name: blog-business
description: Write a Pramaan blog post for non-technical readers in any department (founders, sales, marketing, customer success, ops, finance, HR, legal, product, e-commerce, IT and security), as a how-to or a "what is X" learn guide. Use when asked for a business blog post, a post for non-engineers, a learn guide, or a how-teams-use-Pramaan post.
---

# Business blog post

Reader: someone who runs a team or a function, not a developer. They care about the job getting done, time saved, and staying in control. They do not care how the API works.

Read `docs/blog/VOICE.md` first. It wins over anything below. Then read `docs/blog/ROLES.md` for the reader's department.

## 1. Brief (ask only what's missing, in one message)

- **Topic** and the **one job** the reader wants done ("find 50 leads in fintech and draft the first email").
- **Department**: one or more `roles:` ids from `docs/blog/ROLES.md` (founders, sales, marketing, customer-success, operations, finance, hr, legal, product, ecommerce, security).
- **Format**: **how-to** (one job, done with Pramaan) or **learn guide** ("what is X", a term people search for, like the ICP guide). Default: how-to.
- **Call to action**: early access (default), a mission page, or the UI builder.

## 2. Gather facts

- Start from the department's missions in `docs/blog/ROLES.md`, and use its pains, words and questions for the intro and the FAQ.
- Find 1-3 missions and the superpowers behind them that do the job: search `public/data/missions.json` and `public/data/superpowers.json` by keyword. Note each id, its plain-English name and whether `requiresApproval` is on.
- Note the current counts you'll quote from `public/llms.txt`.
- Anything you can't confirm from these files or the docs: leave it out.

## 3. Outline (show it, then continue unless told to stop)

- 3 title options, under 65 characters. How-to: name the job and the reader ("How sales teams build a lead list in 10 minutes"). Learn guide: lead with the term ("Ideal customer profile (ICP): how to build one that works").

**How-to structure**, 800-1,200 words:
  1. **The job, in their words**: the task and why it eats their week. 2-3 short paragraphs.
  2. **What changes with Pramaan**: answer first, one paragraph.
  3. **Walk-through**: the ask in plain words, then each step Pramaan takes, using the "You ask / Pramaan plans / picks the tools / asks for approval / done, with proof" shape. Name the mission once, linked to its page.
  4. **3 more things your team can ask for**: 3 one-line asks, each mapped to a real mission.
  5. **FAQ**: 3-5 questions a non-technical buyer asks ("Do I need a developer?", "Is my data safe?"). Short answers.
  6. **Call to action**: one line, one link.

  No "staying in control" section and no "What does it cost?" FAQ: readers already know Pramaan is prepaid and pay per use, so don't repeat it in every post. If a mission needs approval, say so once, in the walk-through step where it happens.

**Learn guide structure**, 1,200-1,600 words (example: `src/content/blog/ideal-customer-profile.md`):
  1. **Intro**: the reader's department, the term, and what they'll be able to do, in 2-3 sentences.
  2. **Quick summary**: 3-4 bullets covering the whole guide.
  3. **What is X?**: a plain definition and a one-line example.
  4. **X vs the term people confuse it with**: a short HTML table.
  5. **Why it matters**: 3-4 reasons, each one line.
  6. **How to do it**: 4-6 numbered steps; name a mission where Pramaan does a step.
  7. **A finished example**: a filled-in template the reader can copy (an HTML table). Label made-up examples as made up.
  8. **Putting it to work** with Pramaan, then **mistakes to avoid**.
  9. **3 more things your team can ask for**, **FAQ**, **call to action**: as in the how-to.

## 4. Draft

- Tables are HTML (`<table>`), never Markdown pipes; see VOICE.md.
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
  audience: business
  roles: [sales]
  draft: true
  og:
    tag: "For sales teams"
  ---
  ```
- Set the share image (`og:` panel, see BLOG-HANDOFF.md), then run `npm run og -- <slug>`.
- Run `npm run build`. It fails if a hidden mission id slipped in or the share image is missing.
- Never set `draft: false` yourself. A person reviews and publishes.
- Reply with: the file path, the 3 title options, and a list of every fact you used and where it came from.
