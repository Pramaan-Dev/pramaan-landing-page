---
title: "Pramaan Security Overview"
nav: "Security"
order: 9
---

<strong>Effective date:</strong> 19 October 2026

This page describes only the security measures built today.

## How we protect your data

- <strong>Keys.</strong> An API key is shown once. Only a prefix and its last four characters are displayed after that. Keys can be revoked at once.
- <strong>Credentials.</strong> Your own provider credentials and connection tokens are encrypted, each tied to its workspace. They are never logged or shown back.
- <strong>Encrypted in transit.</strong> Public connections use HTTPS, and traffic between our services and our database travels over our hosting provider's encrypted private network. Requests to third-party providers use HTTPS. If you ask us to fetch an address that uses plain http, that request is sent as you specified.
- <strong>Backups.</strong> Daily copies are kept 6 days, weekly copies 27 days and monthly copies 89 days. Manual copies are deleted after 90 days.
- <strong>Separate workspaces.</strong> Every stored record is scoped to its workspace, project and environment. Tests check that one workspace cannot read another's data.
- <strong>Provider-neutral results.</strong> Results leave out provider names, ids and account details. Sources receive a hash of your workspace id, not your name.
- <strong>Logs.</strong> Server logs carry request ids, key prefixes and a fingerprint of the input. They never carry request bodies or credentials.
- <strong>Outbound calls.</strong> Web addresses that builders supply are checked, and private network addresses are blocked.
- <strong>Inbound webhooks.</strong> Signatures are checked and repeats ignored before anything runs.
- <strong>Sending limits.</strong> Each workspace has a daily send cap and a kill switch on Pramaan-owned SMS, email and social channels.
- <strong>Approvals.</strong> Calls that cannot be undone, or that cost more than your limit, can require a named approver.
- <strong>Software supply chain.</strong> Dependency versions are pinned, and new package releases are held for a day before use.

## Reporting a vulnerability

Email security@pramaan.dev. We confirm your report within 3 business days and keep you updated until it is fixed.

- Test only your own account. Do not access, change or delete other people's data.
- Do not disrupt the service, run automated scans, or try social engineering or phishing.
- Give us 90 days, or until we have fixed the issue, before telling anyone else.

If you follow these rules, we treat your research as authorised and will not take legal action against you. With your permission, we will thank you on this page. We do not offer cash rewards.

## Incidents

If a breach affects your data, we will tell you without undue delay and as the law requires.
