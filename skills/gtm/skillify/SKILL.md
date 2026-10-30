---
name: skillify
title: Skillify
description: "Turns useful work from the current conversation into a reusable skill your agent can run again. Captures the trigger, outcome, procedure and judgement, plus the Pramaan superpowers it used, so the play can be rerun."
category: RevOps
---

Adapted for Pramaan from "Skillify" by Ido Goldberg (Swan), MIT licence.

## Instructions

### When this applies

Only skillify work that is **repeatable** and **already proven**. The conversation has to have produced a real procedure with a real outcome, not a half-finished attempt or a one-off task. If the conversation mostly wandered, say so and ask what to capture.

Shapes that skillify well: a qualification rubric just used on an inbound lead, a research pattern that should run on the rest of the list, a scoring approach, an outreach framework, a triage flow for a signal. Shapes that don't: ad-hoc questions, one-time data pulls, debugging sessions.

### Procedure

**1. Reconstruct the three load-bearing pieces.**

- **Trigger**: the specific repeatable situation. "When an inbound demo request comes in" beats "the user asked about a lead".
- **Outcome**: the concrete deliverable. A scored list, a draft sequence, a research brief, a CRM cleanup.
- **Procedure**: the steps the agent actually ran, in order, taken from the conversation. Don't invent steps that weren't run, and don't add tools that "might be useful next time".

If any of the three is fuzzy, ask one focused question. Don't guess.

**2. Strip the specifics. Generalise the pattern.**

- Real company and contact names become "the target company", "the buying-committee persona".
- Hard-coded filters, segment definitions, list ids and stage names become "load the ICP", "read the pipeline stages".
- Hard-coded copy, weights and thresholds defer to the user's voice: "match past approved messages". Don't paste the subject line that worked once.

Exception: the user says the skill is locked to one account or campaign. Keep the specifics and say so in the description.

**3. Capture the judgement, not just the steps.**

Find the moments where a non-obvious call was made: a filter narrowed, an objection reframed, a draft rejected, a signal weighted up. Those go in a `## What good looks like` section: what to spot first, what gets overlooked, the failure modes, success versus mediocre.

If the only thing worth writing down is "call these three tools in order", the conversation produced an execution, not a skill. Tell the user.

**4. Lay it out for gradual disclosure.**

- **Description** (frontmatter): decides whether the agent ever picks the skill. Lead with "Use this skill when..." and the outcome, and pack in real phrasings the user said. One to three short paragraphs.
- **Main page** (`## Instructions`): the decision tree and the general procedure. Lean.
- **Reference pages** (`references/<scenario>.md`): one per branching scenario that carries its own method, linked by name from the main page. Use them only when a branch needs three or more paragraphs.

**5. Speak in GTM verbs; name Pramaan ids in a separate map.**

The skill body says "check the CRM", "find the work email", "read the company's news", so it survives a stack change. Then write a `pramaan.md` next to it: a table of each step and the Pramaan superpower or mission id the conversation actually used for it, and which of them wait for the user's yes. Only list ids that were used in the conversation; confirm each with `describe_capability` or `describe_outcome`.

**6. Confirm and save.**

Show the draft and confirm:

- **Name**: kebab-case folder name, plain sentence-case title.
- **Category** matched to the outcome, not the procedure.
- **Scope**: this project only (the project's skills folder) or everywhere for this user (the user's own skills folder). Personal workflows (their inbox, their calendar) go to the user's folder; shared team plays go in the project.

Once confirmed, write `<name>/SKILL.md`, `<name>/pramaan.md` and any `references/` pages into the chosen skills folder. Echo back the name, the trigger phrasing it will match on, and one line on when the agent will reach for it next. Offer, don't push, to share it with the team or to suggest it to the Pramaan skills library.

### Rules

- MUST confirm name, category and scope before saving.
- MUST only cite Pramaan ids the conversation actually used.
- MUST include a `## What good looks like` section. A skill without it is a step list.
- NEVER skillify a one-off task. The trigger has to be repeatable.
- NEVER bake in the user's voice, weights or segment definitions. Defer to their saved notes and past messages.
- NEVER add a step the conversation did not run.
- NEVER put more than one or two lines per branch on the main page. Longer branches go to reference pages.

## What good looks like

The next person on the team, or the next run a month later against a different account, can run the skill cold and get a comparable result. The specifics from this conversation are gone. What survives is the trigger, the procedure, the Pramaan ids that do the work, and the *why* behind the non-obvious moves.

What to spot first: the moment a call wasn't mechanical. A filter pulled tighter, an account dropped, a draft thrown out. That judgement has to make it into the skill, or the skill is hollow.

What gets overlooked:

- **The strip-and-generalise pass.** Read the draft as someone who has never heard of the company in the conversation. If it still tells them what to do, it worked.
- **The description.** It decides whether the skill ever fires again. Spend real time on the trigger phrasings.

Failure modes:

- **Two skills in one.** The conversation covered two procedures and the draft holds both. Ask which one. Save one.
- **Tool-coupled body.** The body names the exact CRM or scraper. Keep verbs in the body; ids belong in `pramaan.md`.
- **Step list with no judgement.** Be honest with the user that there is nothing worth saving yet.
- **Hard-coded voice.** The exact subject line or threshold from this run is pasted in.
- **Description and body disagree.** The agent keeps picking the skill in the wrong situations.
- **Wrong scope.** A personal inbox workflow saved for the whole team, or a team play saved only for one person.

Success: the user reruns it next month against a different account without re-explaining the same judgement.
