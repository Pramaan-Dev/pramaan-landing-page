---
title: "Pramaan Privacy Policy"
nav: "Privacy Policy"
order: 2
---

<strong>Effective date:</strong> 19 October 2026

This policy explains what personal data Pramaan ("Pramaan", "we") collects, why, how long we keep it, and your rights.

- Privacy questions and requests: privacy@pramaan.dev
- Anything else: support@pramaan.dev
- Address: 66 Paul St, London EC2A 4NA

## 1. Our two roles

<div class="legal-table"><table><thead><tr><th>Whose data</th><th>Our role</th><th>Who decides</th></tr></thead><tbody><tr><td><strong>Builders</strong>: people who sign up, their workspaces, members and billing</td><td><strong>Controller</strong></td><td>Pramaan</td></tr><tr><td><strong>Builders' end users and the people builders look up or message</strong>, when a builder calls a superpower</td><td><strong>Processor</strong> (service provider)</td><td>The builder. Ask the builder first about your data; we will help them.</td></tr><tr><td><strong>Pramaan Data</strong>: public-source answers we keep and reuse (section 5)</td><td><strong>Controller</strong></td><td>Pramaan</td></tr><tr><td><strong>Visitors</strong> to our sites</td><td><strong>Controller</strong></td><td>Pramaan</td></tr></tbody></table></div>

## 2. What we collect from builders

<div class="legal-table"><table><thead><tr><th>Data</th><th>Examples</th><th>Why</th><th>Legal basis</th></tr></thead><tbody><tr><td>Account</td><td>name, email, sign-in records, job role you choose</td><td>run your account</td><td>contract</td></tr><tr><td>Workspace</td><td>workspace name, members, roles, invites</td><td>let teams work together</td><td>contract</td></tr><tr><td>Keys</td><td>key prefix and last four characters; the full key is not kept in readable form</td><td>secure access</td><td>contract, legitimate interest (security)</td></tr><tr><td>Billing</td><td>top-ups, balance, usage, receipts. Card details are handled by our payment provider, not by us</td><td>charge for the Service</td><td>contract, legal duty (tax, accounting)</td></tr><tr><td>Call records</td><td>who called which superpower, when, price, status, approver, a fingerprint (hash) of the input</td><td>billing, limits, support, abuse prevention</td><td>contract, legitimate interest</td></tr><tr><td>Own keys and connections</td><td>provider credentials (encrypted), connected app accounts</td><td>make calls you ask for</td><td>contract</td></tr><tr><td>What you type on Home</td><td>your question to the app's assistant</td><td>suggest superpowers</td><td>contract</td></tr><tr><td>Support and email</td><td>messages to us</td><td>help you</td><td>contract, legitimate interest</td></tr><tr><td>Device and log data</td><td>IP address, browser, request ids</td><td>security, debugging</td><td>legitimate interest</td></tr></tbody></table></div>

- We do not log request bodies or credentials in our server logs.

## 3. What we process for builders (as processor)

When a builder calls a superpower, we process whatever that call involves, on their instructions. That can include:

- people and company lookups (names, work emails, job titles, social profiles);
- identity and fraud checks (for example documents, phone numbers, IP addresses);
- hiring and court-record checks. The builder must hold the person's consent and send its record id;
- messages and their recipients: SMS, email, voice and social posts;
- files that builders upload, and media we generate for them;
- data in apps the builder connects (CRM, calendar and so on).

The DPA (DPA.md) governs this processing. Job results and files are kept as described in section 6.

## 4. Opt-out lists

- When someone replies STOP to a text, or uses an unsubscribe link, we add them to that builder's opt-out list.
- Anyone can also choose <strong>"stop all messages from apps built on Pramaan"</strong>. That puts them on a platform-wide list, and every builder's sends to them are refused.
- We store only a keyed hash of the phone number or email address, not the address itself.
- Login codes (one-time passcodes) the person asked for still go through after STOP, because the person asked for them. Everything else is blocked.

## 5. Pramaan Data (public answers we keep)

- <strong>What it covers:</strong> answers we fetch from <strong>public sources</strong> using <strong>Pramaan's own provider accounts</strong>, for example a company's public details or a public profile.
- <strong>What it never covers:</strong> anything from a builder's own provider accounts or connections, and any content a builder supplies.
- <strong>Why:</strong> to build Pramaan's own data set and answer requests faster and more reliably.
- <strong>Legal basis:</strong> legitimate interest. We weighed it against your rights:
   - Our interest: answering requests faster, more cheaply and more reliably, without fetching the same public record again for every request.
   - What we keep: answers from public sources that a builder already asked for.
   - Your expectations: the information was already public, so keeping a copy adds little new intrusion.
   - Safeguards: encrypted, personal fields deleted 24 months after last use, never sold, and you can ask us to erase a record about you at any time.
   - Result: we think our interest is not outweighed by your rights. You can object at any time, and we will stop using your record unless we have a compelling reason not to.
- <strong>How it is kept:</strong> encrypted.
- <strong>How long:</strong> personal fields are deleted 24 months after a record was last used. Company and other non-personal data is kept. A record is also erased sooner when you ask and the law gives you that right (section 10).
- <strong>Where the data comes from:</strong> public sources reached through our providers, such as people and company data providers.

## 6. How long we keep things

<div class="legal-table"><table><thead><tr><th>Data</th><th>Kept for</th></tr></thead><tbody><tr><td>Account and workspace</td><td>while the workspace is open, then deleted 90 days after it closes. Your sign-in identity is kept while you still belong to another workspace</td></tr><tr><td>Billing, ledger, meter and usage records</td><td>at least as long as tax and accounting law requires (usually 7 years). We do not delete them automatically</td></tr><tr><td>Call logs</td><td>13 months. Daily totals, without any inputs or outputs, are kept until the workspace is deleted</td></tr><tr><td>Job results and scheduled-run history</td><td>30 days after the job finishes</td></tr><tr><td>Files (uploads, generated media, exports)</td><td>7 days. Unfinished uploads are removed after 1 hour</td></tr><tr><td>Own-key credentials and connections</td><td>until you delete or disconnect them</td></tr><tr><td>Opt-out entries</td><td>indefinitely, as hashes, so the opt-out keeps working</td></tr><tr><td>Pramaan Data records</td><td>personal fields deleted 24 months after last use; business details (companies, places, products) kept; erased sooner on a valid request</td></tr><tr><td>Rented inbox mail</td><td>until the inbox is deleted, or released after non-payment</td></tr><tr><td>Server logs</td><td>30 days</td></tr><tr><td>Backups</td><td>up to 90 days, including any manual backup copies</td></tr></tbody></table></div>

## 7. Who we share data with

- <strong>Subprocessors</strong> that run the Service for us: see <a href="subprocessors.html">Subprocessors</a>.
- <strong>Providers that carry out superpowers.</strong> We send them only what each call needs. They see a hashed workspace tag, never your workspace name.
- <strong>Connected apps</strong> you authorise.
- <strong>Authorities</strong>, when the law requires it. Where we can, we tell you first.
- <strong>A buyer</strong>, if Pramaan is sold or merged.
- We do not sell personal data.

## 8. AI models

- Some superpowers send your input to an AI model provider, as you ask.
- The Home assistant sends what you type to a model provider, on Pramaan's own account.
- We may use usage data, and aggregated, de-identified information, to run and improve the Service. <strong>We never train AI models on builders' inputs or outputs.</strong>
- Text and AI-judgment models: our agreements with model providers do not allow them to train on this data.
- Image, video and audio generation: the provider keeps the generated file briefly so it can be delivered, under that provider's own terms.

## 9. International transfers

- Our hosting, database and subprocessors run in the United States and the EU.
- Where the law requires it, we use Standard Contractual Clauses, with the UK addendum for UK data.

## 10. Your rights

- Depending on where you live, you can ask to access, correct, export or delete your data, and to restrict or object to its processing. You can also withdraw consent.
- <strong>Builders:</strong> many of these you can do in Settings. For the rest, email privacy@pramaan.dev.
- <strong>People a builder looked up or messaged:</strong> contact the builder first. You can also contact us, and we will pass the request on or help.
- <strong>Pramaan Data:</strong> ask us directly to erase a record about you.
- We answer within 30 days and will not treat you differently for asking.
- You can complain to your local data protection authority.

## 11. Security

See <a href="security.html">Security</a>. In short:

- credentials and stored answers are encrypted;
- every workspace is kept separate from the others;
- keys are shown once;
- results do not name providers.

If a breach affects your data, we will tell you and the regulator as the law requires.

## 12. Cookies

We use cookies that the app needs to work (sign-in and session, workspace choice), and none for advertising. Full list: <a href="cookies.html">Cookies</a>.

## 13. Children

The Service is not for anyone under 18, and we do not knowingly collect children's data. If you think a child has signed up, tell us and we will delete the account.

## 14. Changes

We will post changes here and update the date. For material changes (a new purpose, a new kind of data, a new kind of subprocessor) we will tell builders in advance by email or in the app.
