# Blog workflows

Two workflows, one voice. Both write a draft Markdown post into `src/content/blog/`; a person reviews and publishes it by setting `draft: false`.

| | Business | Developer |
|---|---|---|
| Reader | Any department: see `docs/blog/ROLES.md` | Developers and AI-agent builders |
| Ask for it | "write a business blog post about ..." or `/blog-business` | "write a developer blog post about ..." or `/blog-dev` |
| Workflow | `.claude/skills/blog-business/SKILL.md` | `.claude/skills/blog-dev/SKILL.md` |
| Length | How-to 800-1,200 words; learn guide 1,200-1,600 | 900-1,600 words |
| Code | None | Complete, runnable blocks |
| Shape | Job in their words, walk-through, staying in control, FAQ, call to action | What you'll build, setup, steps, approval, errors, cost, next steps |

Shared rules (words, tone, facts, words to cut): `docs/blog/VOICE.md`.

## The 7 steps, both workflows

1. **Brief**: topic, reader, goal. Asked once, only what's missing.
2. **Facts**: real ids and counts from `public/data/` and the docs. Nothing invented, nothing paid run.
3. **Outline**: 3 titles and the section plan, shown before drafting.
4. **Draft**: following the audience's shape.
5. **Search readiness**: answer-first paragraphs, description, internal links.
6. **Edit pass**: against VOICE.md (and `no-ai-slop` if installed).
7. **Save and check**: draft file, `npm run build` (catches hidden ids), report of every fact used.

## Events

Events are a second content type, in `src/content/events/<slug>.md`, listed at `/events` (Upcoming, then Past) with a page and a `.md` copy each.

```yaml
---
title: "..."
description: "..."
start: 2026-11-26T16:00:00Z     # with offset; shown in London time
end: 2026-11-26T16:45:00Z       # optional
format: online                  # online | in-person | hybrid
location: "..."                 # "Online. Link by email" or a street address
registerUrl: "https://..."      # optional; shows a "Save my seat" button until it ends
host: "Pramaan"                 # optional
draft: true
---
```

An event moves from Upcoming to Past on the first deploy after it ends. Optional `speakers:` list (name, role, photo) shows under "Featuring"; every event gets an "Add to calendar" file at `/events/<slug>.ics`.

## Guides (ebooks, whitepapers, reports)

In `src/content/guides/<slug>.md`, shown at `/guides/<slug>`.

```yaml
---
title: "..."
description: "..."
date: 2026-11-02
type: ebook                     # ebook | whitepaper | report
file: "/guides/name.pdf"        # put the PDF in public/guides/; no file shows "coming soon"
pages: 24                       # optional
cover: "/guides/name.webp"      # optional; otherwise a drawn book cover
contributors: []                # optional: name, role
draft: true
---
```

## Audience and the /resources hub

Blog posts, events and guides all take `audience: business | developers | everyone` (default everyone), and optionally `roles: [sales, marketing, ...]`, the departments a resource is for (ids in `docs/blog/ROLES.md`). `/resources` has a Team filter for roles, and `/resources?role=sales` opens with Sales ticked. `/resources` lists everything newest first, with Content type and Audience filters; "everyone" shows under both audiences. `/resources?type=ebook` opens with a type ticked.

## Newsletter sign-ups

The Subscribe box on `/blog` and on every post posts to `api/subscribe.js`, a Vercel function that adds the address to Resend as a contact. Set these in the Vercel project (Settings, Environment Variables), then redeploy:

- `RESEND_API_KEY`: a Resend key with contacts access. Until it is set, the form answers "Sign-ups open soon" and stores nothing.
- `RESEND_SEGMENT_ID` (optional): the Resend segment the newsletter sends to.

## Publishing

1. Review the draft locally: `SHOW_DRAFTS=1 npm run dev`, then open `/blog/<slug>`. Drafts are left out of normal builds, so they never reach the live site.
2. Set `draft: false`, commit, deploy.
