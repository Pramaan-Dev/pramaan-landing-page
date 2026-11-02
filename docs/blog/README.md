# Blog workflows

Two workflows, one voice. Both write a draft Markdown post into `src/content/blog/`; a person reviews and publishes it by setting `draft: false`.

| | Business | Developer |
|---|---|---|
| Reader | Founders, sales, ops, HR, finance, marketing | Developers and AI-agent builders |
| Ask for it | "write a business blog post about ..." or `/blog-business` | "write a developer blog post about ..." or `/blog-dev` |
| Workflow | `.claude/skills/blog-business/SKILL.md` | `.claude/skills/blog-dev/SKILL.md` |
| Length | 800-1,200 words | 900-1,600 words |
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

## Publishing

1. Review the draft locally: `SHOW_DRAFTS=1 npm run dev`, then open `/blog/<slug>`. Drafts are left out of normal builds, so they never reach the live site.
2. Set `draft: false`, commit, deploy.
