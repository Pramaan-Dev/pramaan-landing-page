---
title: "How to find fake domains copying your brand"
description: "For IT and security teams: list close variants of your domain that exist, read their records, and check a suspect email before anyone clicks."
author: "Pramaan"
date: 2026-11-02
audience: business
roles: [security]
draft: false
og:
  tag: "For security teams"
  steps:
    - "Give your own domain"
    - "Review the lookalikes that exist"
    - "Check a suspect email"
    - "Decide what to report"
---

If you run IT or security, you know the pattern. Someone registers a domain one letter off from yours, and your staff or customers get an email from it. With Pramaan you give your own domain and get back the close variants that exist, with their records beside yours. When a suspect email shows up, a second mission reads it for risk signals.

## Why is finding fake domains so slow by hand?

There are many variants and no single list. A swapped letter, a dropped letter, a different ending like .co or .net: each one is a separate lookup, and each lookup has two or three more behind it.

Most teams find out after a customer forwards the email. By then the domain has been live for days.

## What changes with Pramaan?

You give the domain once. Pramaan generates a fixed set of typo patterns and neighboring endings, looks each one up live, and reads further on the ones that have DNS records. DNS records are the public settings that say where a domain points. You get facts to review, and you decide what to do with them.

## How do I find lookalike domains?

Use the [Find lookalike domains of your brand](/missions/domain.lookalikes.find) mission. It needs one input: your brand's own domain. A subdomain or a full address is reduced to the main domain.

**You ask:** "Find domains that look like example.com." (a made-up domain)

**Pramaan plans.** It builds candidates in a fixed order: neighboring endings, letter swaps, dropped letters, doubled letters. By default it looks up 12 of them. You can raise that to 20.

**It picks the tools.** The mission has three kinds of step. For each candidate it checks whether the name has DNS records. For the ones that do, it reads the registration record and runs a threat lookup, beside your own domain's record. By default it goes deeper on 4, and you can raise that to 5.

**You see the proof.** You get the variants that exist and what was found for each one.

The result is facts only. A similar name says nothing about who registered it or why. Whether to report it, block it or ignore it is your call. This mission does not need approval.

## What does the result look like?

Here is a made-up result for example.com. The names and findings are invented to show the shape.

<table>
<tr><th>Variant (made up)</th><th>Has DNS records</th><th>What was read</th></tr>
<tr><td>example.co</td><td>Yes</td><td>Registration record and threat lookup, beside example.com's own</td></tr>
<tr><td>exmaple.com</td><td>Yes</td><td>Registration record and threat lookup, beside example.com's own</td></tr>
<tr><td>examplee.com</td><td>No</td><td>Nothing further read</td></tr>
</table>

The records beside your own domain's make differences easy to spot, such as a different registrar. A difference is a reason to look closer. It does not prove anything.

## How do I check an email I think is phishing?

Use the [Check an email for phishing](/missions/email.phishing.check) mission. It needs the inbox the message sits in and the message's ID.

**You ask:** "Check this message in the support inbox."

**Pramaan plans.** It looks up each link at sources that already scanned it. It compares the From and Reply-To lines in code. It reads the sender domain's registration record and DNS, and it reads the wording for pressure tactics.

**You see the proof.** Each part comes back as flagged, no flags known, or not checked. It never says a message is safe. A clean result means nothing was found, not that the message is fine.

You can turn off link lookups, the domain check or the wording check, and set how many links to look up (1 to 10). This mission does not need approval.

## What else can my team ask for?

- "Check our website for known vulnerabilities." This runs [Check a website for known vulnerabilities](/missions/site.vuln.check).
- "Check whether our staff emails were in a breach." This runs [Check if emails were in a data breach](/missions/breach.exposure.check). The [next post](/blog/check-staff-emails-in-breaches) walks through it.
- "Check our packages for known vulnerabilities." This runs [Check packages for known vulnerabilities](/missions/dependency.audit).

## Questions security teams ask

**Does it change anything in our systems?**
No. These two missions only read public records and the one message you point to.

**Does a match mean the domain is malicious?**
No. The result lists what exists and what was found. It makes no claim about intent.

**Does it find every lookalike?**
No. It checks a fixed set of patterns, up to 20 per run. It is a fast first pass, not a full sweep of every name.

**What does "no flags known" mean on an email?**
It means the sources checked had nothing on record. The mission never calls a message safe, so keep your usual caution with anything that asks for money, passwords or secrecy.

**Do I need a developer?**
No. You ask in plain words, or your AI assistant asks for you.

**What else can it do?**
There are 891 missions and 10,428 superpowers today. [Browse the missions](/missions).

[Get early access](/#start) and run your first domain check.
