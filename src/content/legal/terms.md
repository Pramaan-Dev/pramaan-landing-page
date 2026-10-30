---
title: "Pramaan Terms of Service"
nav: "Terms of Service"
order: 1
---

<strong>Effective date:</strong> 19 October 2026

These terms are an agreement between you and Pramaan, 66 Paul St, London EC2A 4NA ("Pramaan", "we", "us"). They cover the Pramaan API, SDKs, MCP server, CLI, web app and docs (together, the "Service").

## 1. What Pramaan is

- Pramaan is one API, SDK and MCP server for builders and their AI agents.
- A <strong>superpower</strong> (<code>capability</code> in the API) is one action, such as finding a company's details or sending a message.
- A <strong>mission</strong> (<code>outcome</code> in the API) is a multi-step job made of superpowers.
- For each call, Pramaan picks a source: data it already holds, an aggregator, or a direct provider. It checks the answer, prices it, and returns a result that does not name the source.
- A product builder, where AI agents build apps for founders, is coming. Until it launches it is marked "Coming soon", and these terms do not promise it. When it launches, a separate Product builder addendum will cover code ownership, hosting of built apps, previews and going live.

## 2. Who can use it

- You must be at least 18 and able to form a binding contract.
- If you use the Service for a company, you accept these terms for that company, and "you" means the company.
- You must not use the Service if the law or sanctions forbid it (see <a href="acceptable-use.html">Acceptable Use</a>).

## 3. Accounts and workspaces

- You sign in through our sign-in provider and must verify your email.
- Your work lives in a <strong>workspace</strong> (an organisation). Each workspace has one <strong>owner</strong>. It may also have <strong>admins</strong>, <strong>members</strong> and <strong>viewers</strong>:
   - the owner controls billing, keys, members and settings, and can transfer ownership;
   - admins can do everything except transfer ownership;
   - members can run superpowers and missions within the limits set for them;
   - viewers can only read.
- Owners and admins can invite people. An invite works once, for a limited time, and only for the invited email address.
- The workspace owner is responsible for everyone they let into the workspace, and for every call made with the workspace's keys.
- Owners and admins can see each member's keys, credit use and calls.
- Keep your account details accurate.

## 4. API keys and security

- A key is shown in full only once. We keep only a part of it for display.
- There are three kinds of key:
   - <strong>read-only keys</strong> can only read;
   - <strong>member keys</strong> act as one member, with that member's role, limits and approvals;
   - <strong>workspace keys</strong> act for the whole workspace, with every right.
- Anyone who holds a key can spend the workspace's credit. Keep keys secret. Do not put them in public code or in browsers, and do not share them outside your workspace.
- If a key leaks, revoke it at once in Settings and tell us at security@pramaan.dev. You pay for calls made with a key until it is revoked, unless the misuse was our fault.
- <strong>Approval rules.</strong> Some calls need a person's approval before they run, for example calls that cannot be undone or that cost more than a limit you set. Whoever sends a call that names an approver vouches that the approver really approved it.
- Do not share one login between several people. Invite them instead.

## 5. Credit, prices and charges

### 5.1 Prepaid credit

- The Service runs on prepaid credit in US dollars. There are no plans or seats.
- New accounts get a one-time <strong>$1 starter credit</strong>, once per person. People who join by invite get none. Starter credit has no cash value. It cannot be refunded or transferred.
- You buy credit by card from Dodo Payments, which sells it to you as merchant of record and handles tax and receipts. Its own terms apply to the purchase and are shown at checkout.
- <strong>Credit does not expire.</strong>

### 5.2 Prices

- Every superpower shows its price, or how its price is worked out, before you call it. Checking a price is free.
- When we hold credit for a call, the quoted amount is the most you pay for it. If the source costs us more than we quoted, we cover the difference.
- We may change prices. A new price applies to calls made after the change, and we give at least 60 days' notice of it.

### 5.3 How calls are charged

- <strong>A call that fails before doing any work is not charged.</strong>
- <strong>A long job that the source could not confirm is charged at most its estimate.</strong>
- <strong>A mission is charged for the steps that ran.</strong> Steps that did not run are not charged.
- A call that succeeds is charged even if the answer is empty, for example a search that finds nothing. It is not charged when the source reports nothing to charge, or when a superpower says it returns an empty list at no charge when nothing is found.
- A repeat of a call with the same idempotency key is not charged twice.
- Calls made on <strong>your own provider accounts</strong> ("own keys") are not charged by Pramaan. The provider bills you directly.

### 5.4 Spending limits

- The owner or an admin can set a daily spending cap for the workspace, and a daily or monthly limit for each member.
- With no cap set, your balance is the limit.
- Rental renewals and one-off registration fees do not count toward the daily cap.
- A call that would go over a cap or limit is refused, not charged.

### 5.5 Rentals

- Some things are rented by the month: phone numbers, registered texting campaigns, email inboxes, custom email domains and connected app accounts.
- The first month is charged when the thing is bought or filed. It is charged even if a later step of the same call fails.
- <strong>A rental renews monthly from your credit until you release it.</strong>
- If your credit cannot pay a renewal, the rental becomes past due:
   - a past-due rental cannot be used to send;
   - we retry every day;
   - we email you when the renewal fails, and again 2 days before release;
   - after 7 days, we release it. For a number, that means the number is gone. For a registered campaign, the campaign is withdrawn. For an inbox, the inbox and its mail are deleted.
- A released number or inbox may not be recoverable.
- One-off fees, such as texting brand and campaign registration fees, are charged once, when the filing is confirmed. They are not refunded if a carrier or registry later rejects the filing.

### 5.6 Refunds

See <a href="refunds.html">Credit and refunds</a>. In short: starter credit is never refunded, and purchased credit is not refundable, except where the law requires it. Dodo Payments' refund rules, as merchant of record, also apply.

### 5.7 Errors and disputes

- If we charge you wrongly, tell us within 60 days and we will correct it, usually by putting the credit back.
- If you dispute a card payment with your bank without contacting us first, we may suspend the workspace while the dispute is open.

## 6. Third-party providers, own keys and connections

- Superpowers are carried out by third-party providers. A provider can change, limit or stop a service, and when it does we may change or remove a superpower. We do not promise any particular provider.
- <strong>Own keys.</strong> You may connect your own provider accounts. You must have the right to use them. Your use is also governed by that provider's terms, and the provider bills you. We store the credentials encrypted, never show them back, and use them only for calls you or your members make.
- <strong>Connections.</strong> You may connect third-party apps (for example a CRM or a calendar) through our integrations provider. You authorise us to act in those apps when you or your agents ask. Disconnecting stops future access.
- <strong>Phone numbers and SMS.</strong> Numbers (US and Canada) come from our telephony provider, through a sub-account for your workspace. You must follow <a href="messaging.html">Messaging and SMS</a> and carrier rules. Carriers can block messages or numbers, and we cannot reverse that.
- We are not responsible for a third party's own acts, outages or data practices. We are still responsible for choosing and instructing the providers we use for you.

## 7. Acceptable use

You must follow the Acceptable Use Policy (<a href="acceptable-use.html">Acceptable Use</a>) and the SMS and Messaging Policy (<a href="messaging.html">Messaging and SMS</a>). You are responsible for what your agents, apps and end users do with the Service.

## 8. Personal data you handle

- When you call superpowers about people (people and company lookups, identity and fraud checks, hiring and court checks), or send messages to people, you decide why and how that data is used. For that data you are the <strong>controller</strong> (or business), and we act as your <strong>processor</strong> (or service provider). The exception is Pramaan Data (section 9).
- You must:
   - have a lawful basis for every lookup and every message;
   - give people the notices the law requires;
   - honour opt-outs, and access, correction and deletion requests, for the data you hold;
   - <strong>pass a real consent record id</strong> for superpowers that ask for one (hiring and court checks). Passing an id means you hold that person's valid consent, can show it to us on request, and are using the check only for the purpose consented to;
   - before using hiring or court checks, accept the <strong>Background Checks Addendum</strong>: you use them only for a lawful purpose, with consent, never as the only basis for a decision, and you meet your own legal duties as the user of the check;
   - not use any result to make decisions about credit, insurance, housing or similar eligibility.
- Our Data Processing Addendum (DPA.md) applies when we process personal data for you.

## 9. Where results come from

- Results may come from Pramaan's own data or from third-party sources.
- For the data Pramaan keeps itself, Pramaan is the controller (see <a href="privacy.html">Privacy Policy</a>).

## 10. Your content and our rights

- You keep your rights in what you send us ("your content") and in the results we return to you.
- You give us a licence to use your content only to run, secure and support the Service for you.
- We may use usage data, and aggregated, de-identified information, to run and improve the Service.
- <strong>We never train AI models on your inputs or outputs.</strong>
- We keep all rights in the Service, the catalogue and our software. You must not copy, resell or rebuild the Service, except by building your own products on top of it as these terms allow.
- If you send us feedback, we may use it freely.

## 11. Results, accuracy and AI output

- Results come from third-party and public sources. They can be incomplete, out of date or wrong. We check answers, but we do not promise they are accurate or complete.
- Some superpowers call AI models. AI output can be wrong, biased or made up. Check it before you rely on it, and before an agent acts on it.
- The web app's Home screen uses an AI model to suggest superpowers. What you type there is sent to a model provider (see <a href="privacy.html">Privacy Policy</a>). Suggestions are not advice.
- Provider output is data, not instructions. Treat it as untrusted.
- <strong>You are responsible for what your agents do.</strong> That includes sends, purchases and other actions that cannot be undone. Use approval rules for those.

## 12. Availability and changes to the Service

- We aim to keep the Service running, but we offer no uptime commitment (no SLA) unless we sign one with you.
- We may add, change or remove superpowers, missions and features. When a change will make you lose data or a rental, we will try to give notice first.

## 13. Suspension and ending

- You can stop using the Service at any time. To close a workspace, the owner emails support@pramaan.dev. We then revoke its keys, release its rentals and delete its data as <a href="privacy.html">Privacy Policy</a> describes. Unused credit is forfeited, unless the law requires otherwise.
- We may suspend a key, a member, a sending channel, or the whole workspace, at once if needed:
   - to stop a breach of these terms or the AUP;
   - to stop fraud, abuse, spam or a security risk;
   - when a provider or carrier requires it;
   - when the law requires it;
   - while a payment dispute is open.
- Where we can, we will tell you why and give you a chance to fix it.
- When we end the Service for you:
   - rentals stop renewing and are released;
   - unused purchased credit is forfeited, unless we end the Service for you without cause or the law requires otherwise;
   - we delete your data as <a href="privacy.html">Privacy Policy</a> describes.

## 14. Disclaimers

Apart from what these terms promise, the Service is provided "as is" and "as available", as far as the law allows.

## 15. Limits on liability

- Neither party is liable for indirect or consequential losses, lost profits or lost data, as far as the law allows.
- Our total liability is capped at the greater of the fees you paid us in the 12 months before the claim, or US$100.
- These limits do not apply where the law does not allow them.

## 16. Indemnity

You will defend us against third-party claims, and cover the resulting costs, where the claim arises from:

- your content;
- your use of own keys or connections;
- messages you or your agents send;
- your use of personal data;
- your breach of these terms or the law.

## 17. Changes to these terms

We will give at least 30 days' notice of material changes, by email or in the app. If you keep using the Service after a change takes effect, you accept the new terms.

## 18. Law and disputes

- The laws of England and Wales govern these terms.
- Any dispute is settled by binding individual arbitration, not in court. It is run by the London Court of International Arbitration (LCIA) under its rules, seated in London, England.
- <strong>Class-action waiver:</strong> claims may be brought only individually, not as a plaintiff or class member in any class or representative action.
- Either party may still bring an individual claim in small-claims court, or seek an urgent injunction to protect its intellectual property.

## 19. General

- These terms, together with the policies they link to, are the whole agreement.
- If one part is unenforceable, the rest still applies.
- You may not transfer these terms without our consent. We may transfer them in a merger or sale.
- Notices to us: legal@pramaan.dev, and 66 Paul St, London EC2A 4NA.
