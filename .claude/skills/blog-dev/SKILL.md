---
name: blog-dev
description: Write a Pramaan blog post for developers and AI-agent builders (tutorials, how-tos, integration guides, release notes with code). Use when asked for a technical, developer or engineering blog post.
---

# Developer blog post

Reader: a developer or someone wiring up an AI agent. They want working code, the exact ids, and what happens when it fails. They skim, so code and headings carry the post.

Read `docs/blog/VOICE.md` first. It wins over anything below.

## 1. Brief (ask only what's missing, in one message)

- **What the reader builds** by the end ("an agent that researches a company and drafts an intro email").
- **Surface**: REST API, TypeScript SDK, CLI or MCP server.
- **Level**: first-time user or existing user.

## 2. Gather facts

- Exact ids, inputs and outputs: `public/data/superpowers.json`, `public/data/missions.json`, the page `.md` copies (for example https://www.pramaan.dev/missions/company.research.md), and https://api.pramaan.dev/openapi.json.
- How-tos and error codes: https://docs.pramaan.dev (every page has a `.md` copy at the same URL plus `.md`).
- Allowed: read-only calls (OpenAPI spec, describe, quote). Not allowed: running paid superpowers or missions to get sample output. Build sample output from the documented response shape and label it "example response".

## 3. Outline (show it, then continue unless told to stop)

- 3 title options, each "How to <result> with <surface>" or the result itself, under 65 characters.
- Structure, 900-1,600 words:
  1. **What you'll build**: 2 sentences and the final result (a short output sample).
  2. **Before you start**: key, install line, runtime version. A bulleted list.
  3. **Steps**: one H2 per step. Each step = one sentence of why, then the code, then what you should see.
  4. **When it needs approval**: which steps return `approval_required` and how to handle it. Show the handling code.
  5. **Errors you'll hit**: a table of error code, what it means, the fix. Only codes from the docs.
  6. **Cost**: how pricing works (quote first, prepaid balance). No invented prices; show the quote call instead.
  7. **Next steps**: 2-3 links to related missions, superpowers or docs guides.

## 4. Code rules

- Every block is complete and copy-paste runnable: imports included, no `...` gaps.
- Keys come from `process.env.PRAMAAN_API_KEY`. Never a real key, never a placeholder that looks real.
- Fence every block with its language (`ts`, `bash`, `json`).
- Code before prose explanation where possible; keep comments short.
- Mark any block you could not check against the spec with a one-line note above it.

## 5. Search and AI-answer readiness

- `description`: under 155 characters, names the result and the surface.
- Headings use the words a developer would search ("retry", "webhook", "rate limit", the id itself).
- Link each id the first time it appears to its catalogue page.

## 6. Edit pass

Against VOICE.md: cut AI-tell words, cut any paragraph that repeats what the code shows, define each Pramaan term once. If the `no-ai-slop` skill is installed, run it on the prose, not the code.

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
- Check every id in the post exists in `public/data/*.json`.
- Run `npm run build`. It fails if a hidden mission id slipped in.
- Never set `draft: false` yourself. A person reviews and publishes.
- Reply with: the file path, the 3 title options, every id used, and which code blocks were checked against the spec.
