---
title: "How to check if staff emails were in a breach"
description: "For IT and security teams: check up to 20 work addresses for known breach exposure, then review who has access to your app and who is inactive."
author: "Pramaan"
date: 2026-11-04
audience: business
roles: [security]
draft: false
og:
  tag: "For security teams"
  steps:
    - "List the addresses to check"
    - "Read the exposure and next steps"
    - "Review who has access to your app"
    - "Remove access you no longer need"
---

If you run IT or security, a breach in the news raises one question: were any of our people in it? With Pramaan you give a list of up to 20 addresses and get back what is known about each one, with practical next steps. A second mission lists who has access to your app and who hasn't signed in lately, so you can tidy up at the same time.

## Why is it hard to know if staff were in a breach?

The data sits in many places, and you check one address at a time. Then you still have to work out what each result means for that person.

Access has the same problem. Old accounts stay open because nobody owns the list, and nobody notices until something goes wrong.

## What changes with Pramaan?

You give the addresses once. Pramaan checks known exposure for each and returns evidence with next steps, so you see what to do, not just a hit or a miss. Then you review access in a second step. Both steps read and report.

## How do I check addresses for breach exposure?

Use the [Check if emails were in a data breach](/missions/breach.exposure.check) mission. It takes one to twenty distinct addresses that you already hold.

**You ask:** "Check these 15 staff addresses for known breach exposure."

**Pramaan plans.** The mission has one step, a breach check, and it runs that step for each address.

**You see the proof.** For each address you get the evidence found and practical next steps, such as which people to ask to change a password. If you want the raw facts for one address, the mission points to a separate superpower for that, `security.breach.check`.

This mission does not need approval. It only reads. It does not email your staff or reset anything. Telling people is up to you.

These are real people's addresses. Share the results only with the people who need them, such as the person who handles password resets.

## What does the result look like?

Here is a made-up result for three addresses. The names and findings are invented to show the shape, not the exact fields.

<table>
<tr><th>Address (made up)</th><th>Known exposure</th><th>Next step</th></tr>
<tr><td>sam@example.com</td><td>Found in a breach</td><td>Ask Sam to change the password and check reuse</td></tr>
<tr><td>lee@example.com</td><td>Nothing known</td><td>No action from this check</td></tr>
<tr><td>ana@example.com</td><td>Found in a breach</td><td>Ask Ana to change the password and check reuse</td></tr>
</table>

A row that says nothing known does not mean the person was never exposed. It means nothing known was found.

A practical order of work: send the next steps to the people on the exposed rows first, then run the access review below. People who appear in both results are the ones to check first.

## How do I see who has access to my app?

Use the [Review who has access to your app](/missions/access.review) mission. It takes no input. It reads the auth account you have connected.

**You ask:** "Who has access to our app, and who hasn't signed in for 30 days?"

**Pramaan plans.** The mission has four steps. It lists your users, lists your teams, lists each team's members, and reads sign-in sessions. By default, "lately" is 30 days, and you can set anything from 1 to 365. It can also read the sessions of up to ten users, the undated and longest-away first, so active access can be counted.

**You see the proof.** One result shows people, teams and last sign-in. Match it against your breach results: anyone on both lists is a good place to start.

This mission does not need approval and only reads. Removing access is something you do yourself in your own system.

## What else can my team ask for?

- "Find fake domains copying our brand." This runs [Find lookalike domains of your brand](/missions/domain.lookalikes.find).
- "Check an email someone reported as phishing." This runs [Check an email for phishing](/missions/email.phishing.check).
- "Check our site's HTTPS setup." This runs [Audit a site's HTTPS security](/missions/site.tls.audit).

## Questions security teams ask

**Does it change anything in our systems?**
No. Both missions read and report.

**How many addresses can I check at once?**
Up to 20 per run. For a bigger team, run it in batches.

**Does no result mean nobody was exposed?**
No. It means nothing known was found for that address. Treat it as one input, not a clean bill of health.

**Can it reset passwords or remove users?**
No. It reads and reports. Resets and removals happen in your own systems.

**Do I need a developer?**
No. You ask in plain words, or your AI assistant asks for you. The access review needs your auth account connected first.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and run your first breach check.
