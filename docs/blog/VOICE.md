# Pramaan blog voice (both audiences)

Every post, business or developer, follows this file. The two workflows in `.claude/skills/blog-business` and `.claude/skills/blog-dev` read it first.

## Who we are, in one line

Pramaan lets you or your AI agent get real work done (research, messages, payments, data) by asking in plain words, with your approval before anything that matters.

## Words we use

| Use | Not |
|---|---|
| superpower: one action, like `web.search` or `email.send` | tool, endpoint, capability, recipe |
| mission: a multi-step job under one business name, like `company.research` | workflow, recipe, playbook |
| "Needs approval", "waits for your approval" | human-in-the-loop, HITL, "your OK", "your yes", "stops and asks" |
| "your agent" | the LLM, the model |
| prepaid balance | credits, tokens |

Templates are screens, not superpowers or missions; don't call them either.

## How we sound

1. Plain words. If a 14-year-old couldn't follow a sentence, rewrite it. Define any technical term the first time.
2. Short sentences, one idea per paragraph, paragraphs of 1-3 sentences.
3. Answer first. The first paragraph says what the reader gets; the backstory comes later or not at all.
4. Concrete over abstract: "Send Priya a $200 payment link" beats "streamline payment workflows".
5. Confident, not loud. No exclamation marks, no "revolutionary", no "game-changer".
6. UK or US spelling: US (matches the site).

## Facts: never make them up

- Counts (superpowers, missions, categories) come from `public/data/*.json` or `public/llms.txt` at the time of writing. Quote the number you checked.
- Every superpower or mission id in a post must exist in `public/data/superpowers.json` or `public/data/missions.json`.
- No invented customers, quotes, results, benchmarks or prices. If a claim needs a number we don't have, cut the claim.
- Never name these hidden missions (the build fails if you do): candidate.background.check, candidate.employment.verify, worker.registration.verify, candidate.profile.authenticity, candidate.dev.profile.
- Never run paid superpowers to get an example. Read-only lookups (describe, quote, the OpenAPI spec) are fine.

## Words to cut (AI tells)

delve, leverage, seamless, robust, unlock, empower, elevate, harness, navigate the landscape, in today's fast-paced world, it's worth noting, game-changer, revolutionize, cutting-edge, supercharge, "not just X, but Y", "Whether you're A or B", em-dash chains, a closing "In conclusion".

## Links every post may use

- Superpowers: https://www.pramaan.dev/superpowers
- Missions: https://www.pramaan.dev/missions
- Docs: https://docs.pramaan.dev
- Early access: https://www.pramaan.dev/#start
