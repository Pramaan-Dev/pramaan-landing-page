# Superpowers: Identity & security

Verify people, stop fraud, run sign-in and check for threats.

## Age and profile checks

Work out an age from a birth date and check a profile is genuine.

- `people.age.check`: Work out an age from a date of birth and whether it meets a minimum age. Returns personal data: the date of birth the caller sends.
- `people.profile.assess`: Assess whether a public profile record is genuine, not the person. Returns the source's documented verdict and any cited evidence findings, with no numeric score. For human review; thin evidence does not establish fraud or justify an automatic decision. Maximum source cost $0.10 at the provisional credit rate.

## Breach checks

Check whether an email or password has shown up in a known data breach.

- `security.breach.check`: Check breach exposure for an email, username, password hash or identifier and hash combination. Returns exposure facts and breached-site names, never leaked credentials. The submitted identifier is personal data; passwords are accepted only as hashes.
- `security.password.strength`: Rate a password's strength from its length, character classes and common patterns, with an estimated time to crack.

## Compliance checks

Score money-laundering risk and check data protection and crypto service rules.

- `compliance.aml.score`: Combine country, sanctions, politically exposed person and adverse media signals into one anti-money-laundering risk level.
- `compliance.dpa.lookup`: The data protection authority of an EU or EEA country, with its contacts and complaint link.
- `compliance.vasp.check`: Check whether a crypto-asset service provider is authorised under the EU MiCA register.
- `compliance.website.gdpr`: Scan a website for data protection signals (cookie consent, privacy policy, trackers, security headers) and grade it.

## Device signals

See which devices visit your site and flag risky requests.

- `devices.environment.create`: Create an environment for your own site or app. (needs a connected account)
- `devices.environment.delete`: Delete the referenced environment from your account; explicit confirmation is required. (needs a connected account)
- `devices.environment.update`: Update an environment name, description or identification limit. (needs a connected account)
- `devices.environments.list`: List environments belonging to your connected account. (needs a connected account)
- `devices.event.feedback`: Request a confidence reset for a device observation within its feedback window; this does not score a person.
- `devices.event.get`: Read a device/request observation, including IP, approximate location and security signals; scores describe a device observation, never a person. (needs a connected account)
- `devices.event.update`: Update caller labels or the suspect flag on an observed device event. (needs a connected account)
- `devices.events.search`: Search device or request observations, including pseudonymous device references, IP addresses, approximate locations and security signals; scores describe a device observation, never a person. (needs a connected account)
- `devices.filter.create`: Create a request filter in the referenced environment of your account. (needs a connected account)
- `devices.filter.delete`: Delete the referenced filter from your account; explicit confirmation is required. (needs a connected account)
- `devices.filter.get`: Read a request filter and its exact expression. (needs a connected account)
- `devices.filter.test`: Test inline or stored request filters against request metadata without changing them.
- `devices.filter.update`: Update a request filter expression, action, status or numeric position. (needs a connected account)
- `devices.filters.list`: List request filters in your account, optionally scoped to one environment. (needs a connected account)
- `devices.request.analyze`: Analyze and store an observed server request using its IP, URL and headers; secret headers are redacted. Scores describe a device observation, never a person.
- `devices.subdomain.create`: Register a tracking hostname on a domain you control; DNS setup and activation are separate. (needs a connected account)
- `devices.subdomain.delete`: Delete the referenced subdomain from your account; explicit confirmation is required. (needs a connected account)
- `devices.subdomain.get`: Read the registration state of a tracking hostname. (needs a connected account)
- `devices.subdomain.verify`: Request DNS verification for a tracking hostname; pending remains pending. (needs a connected account)
- `devices.subdomains.list`: List tracking hostnames and their registration states. (needs a connected account)
- `devices.visitor.delete`: Delete the referenced visitor from your account; explicit confirmation is required.
- `devices.visitor.get`: Read selected-window device visit history and security signals, including IP and approximate location; scores describe a device observation, never a person. (needs a connected account)
- `devices.visitors.list`: List distinct pseudonymous devices from one event page with visit timestamps; devices may repeat on later pages. (needs a connected account)
- `devices.visitors.related`: Find related pseudonymous browser/device references originating from the same mobile device; no person identity or person score is returned.

## Document wallet

Fetch a person's official documents from their digital wallet, with their consent.

- `document.wallet.connect`: Start a person-approved hosted identity flow and return its protected authorization link. (needs approval)
- `document.wallet.disconnect`: Revoke access to a person’s document wallet. (needs approval)
- `document.wallet.document.get`: Fetch one consented wallet document using public catalogue codes and issuer parameters. Copies personal document content to your file storage, at most 10 MiB. Maximum estimate USD 0.22.
- `document.wallet.get`: Read a document wallet connection state, with personal contact fields only on request.
- `document.wallet.national-id.get`: Read a consented national identity record. Name, birth date or year, address, photo, XML and full identifier are explicit choices; files are copied to your storage, up to 10 MiB each.

## Exposed hosts

Find internet-facing servers and services and judge how risky they look.

- `security.host.count`: Count matching observed host or service documents, including zero, with up to five facet fields.
- `security.host.lookup`: Observed host services, network and location; up to 1000 services. Optional banners and certificate subjects may contain personal names. This is observed data, not a live scan.
- `security.host.lookup-bulk`: Look up up to 100 host records as a job using individual lookups; every row carries your own id. Optional certificate subjects and banners may contain personal names.
- `security.host.reputation`: Evaluate a domain or public IPv4 host with a safety score and bounded checks as a job. Basic is the default; full is an explicit purchase, estimated worst case $0.0039. No personal contact data is returned.
- `security.host.search`: Search observed hosts and services using literal text or structured filters; up to 50 rows per call. Banners may contain personal names when requested.

## Face and liveness checks

Match faces, confirm a live person and estimate age from a photo.

- `identity.age.estimate`: Estimate a person's age from one face photo, server to server, with a passive liveness check on the same photo, and get a passed or failed answer against your minimum age. This call processes a face image; by default nothing is kept after the answer.
- `identity.face.match`: Compare two face photos server to server and get a similarity score with a passed or failed answer — typically a selfie against an ID document portrait, or a returning user against an enrolled photo. This call processes two face images; by default nothing is kept after the answer. (needs approval)
- `identity.face.search`: Search a face server to server against the faces enrolled in your own account's index (only faces you enrolled are ever searched) and get the closest matches with their similarity — for duplicate-account and blocklist screening. This call processes a face image; matches carry facts about the match, never the identities of the people behind the faces. By default nothing is kept after the answer.
- `identity.liveness.check`: Check that a face photo shows a real, live person rather than a spoof (a screen replay, a printout or a mask), server to server. Send one front-facing photo and get a liveness score and a passed or failed answer. This call processes a face image; by default nothing is kept after the answer. (needs approval)

## Fraud checks

Check emails, phones, IPs, cards, addresses and transactions for fraud signs.

- `fraud.address.check`: Check up to three submitted residential or delivery addresses. Explicit options return postal, match, forwarding and coordinate facts. Stores an event in your connected account; upstream work is billed there. (needs a connected account)
- `fraud.bank-account-risk.evaluate`: Check a person's consented bank account for documented fraud risk attributes; returns counts and flags, no score. (needs approval)
- `fraud.card.inspect`: Inspect a card prefix for validity, issuing bank, network and country; no cardholder data. Maximum lookup cost $0.2796.
- `fraud.device.inspect`: Inspect a device session collected by your own client. Returns device and integrity facts and explicitly selected location; stores an event in your connected account. The connected account pays for upstream work. (needs a connected account)
- `fraud.email.inspect`: Inspect mailbox delivery, domain and digital footprint facts. Optional breach and registrant evidence contains personal data. Maximum lookup cost $0.5592; expanded details default off.
- `fraud.geofence.check`: Check a collected device session against a country boundary. Optional precise location contains personal data and requires client location permission. Maximum lookup cost $0.2796.
- `fraud.identity.check`: Check supplied identity facts against a country-specific register as a job. Returns field matches and explicitly requested personal facts; no person rating. Each step stays under 30 seconds. Stores an event in your connected account; upstream work is billed there. (needs a connected account)
- `fraud.ip.inspect`: Inspect factual proxy, VPN, Tor and spam signals for a public IP. Optional location and network facts. Maximum lookup cost $0.2796; account history is excluded.
- `fraud.phone.inspect`: Inspect a phone number and its digital footprint. Optional checks return caller name, carrier, SIM-change and porting facts. No person rating. Maximum lookup cost $1.6776; paid extras default off.
- `fraud.transaction.assess`: Assess the submitted transaction event, returning an optional approve/review/decline state and event fraud probability. Explicit signal groups return facts about supplied contacts, device and location. Stores the event in your connected account; upstream work is billed there. (needs a connected account)
- `security.signal-reasons.list`: List the descriptions of device or transaction detection signals. These are dictionary entries, not findings or scores about a person.

## Fraud network reports

Report fraud and screen people against shared fraud reports.

- `fraud.data.erase`: Submit permanent erasure in your connected account with confirm: true. No preview. Acceptance does not prove completion; poll the returned reference for up to two days. Upstream work is billed to the connected account. (needs a connected account)
- `fraud.data.erasure.get`: Read the status of an accepted erasure in your connected account for as long as deletion takes. Unknown terminal states remain pending. Upstream work is billed there. (needs a connected account)
- `fraud.incident-match.get`: Read a matching network fraud allegation and field match states; no other person's identity values are returned.
- `fraud.incident-matches.list`: List matching network fraud allegations and field match states; no other person's identity values are returned.
- `fraud.incident.get`: Read a fraud allegation's category, date and loss amount without the person's identity values.
- `fraud.incident.report`: Publish a confirmed fraud allegation about a person to the network; this does not move money. (needs approval)
- `fraud.incidents.list`: List the person's recorded fraud allegations with references for reading each incident.
- `fraud.network-screening-accounts.get`: Read fraud-related counts and flags for the person's consented bank accounts; no account identifiers or score are returned.
- `fraud.network-screening.create`: Screen consented identity and bank data against network fraud evidence; upstream screening records have no published deletion endpoint. (needs approval)
- `fraud.network-screening.get`: Read a person's network fraud screening state and timestamps; no identity values or hit list are returned.
- `fraud.network-screening.review`: Record a human decision to clear or reject a person's network fraud screening. (needs approval)
- `fraud.network-screening.update`: Update consented identity fields and run network fraud screening again; identity values are forwarded once. (needs approval)

## Identity verification

Check ID documents and identity numbers and run full verification flows.

- `document.identity.extract`: Extract identity facts from both sides of a document as a job. Processes personal document data; returns up to 10 detections. Each service call is capped at 25 seconds. Maximum estimate USD 3.99.
- `identity.address.verify`: Verify a person's residential address server to server: send their proof-of-address document (a utility bill, bank statement or government letter) and get back what it says — issuer, dates, the name and address on it — with checks against the address, country and name you expect. This call processes an image of a document carrying the person's address; by default nothing is kept after the answer.
- `identity.document.forgery.check`: Check one identity document for alteration. Processes a personal document image and returns only factual image checks. (needs approval)
- `identity.document.inspect`: Inspect an identity document image for its type, readability and face presence. Processes personal document images; this is visual inspection, not source verification. (needs approval)
- `identity.document.mask`: Conceal Aadhaar numbers in an image or PDF as a job. Returns a masked PNG and instance counts. Does not erase the original document. Maximum estimate USD 1.14.
- `identity.document.qr.decode`: Decode supplied secure identity QR contents and return only requested personal fields. Decoding does not certify identity or authenticity. (needs approval)
- `identity.document.source.check`: Corroborate an identity using its number, name, birth date, selfie and card image. Returns source facts only; never personal ratings or expanded contact details. (needs approval)
- `identity.document.verify`: Verify one government ID document server to server: send photos or scans of the document (front, and back when it has one) and get back what the document says — name, date of birth, document number and dates, address — with fraud screening for screen replays, printed copies and portrait manipulation. This call processes images of an identity document; by default nothing is kept after the answer. (needs approval)
- `identity.identifier-link.check`: Check whether two supplied identity identifiers are linked in the registry. Processes personal identifiers and returns no identifier copies. (needs approval)
- `identity.identifier.lookup`: Look up one Indian identity document with consent, returning selected holder name, category, status or region. A found record does not assert legal validity. (needs approval)
- `identity.name.compare`: Compare two supplied names as strings; returns both match classifications and percentages.
- `identity.national-id-session.create`: Start a person-approved hosted identity flow and return its protected authorization link. (needs approval)
- `identity.national-id-session.get`: Read a consented national identity record. Name, birth date or year, address, photo, XML and full identifier are explicit choices; files are copied to your storage, up to 10 MiB each.
- `identity.number.verify`: Verify an identity number with consent; returns holder name or coarse demographics and masked phone when available. (needs approval)
- `identity.verification.correct`: Correct the identity data a hosted verification's document check extracted (name, date of birth, document details, address) — for example after a manual review fixed a misread field. Corrections stay editable: send new values any time.
- `identity.verification.create`: Start a hosted identity verification for one of your end users and get the private link to send them: they open it, follow the steps your flow asks for (an ID document, a selfie, and so on), and the decision is read afterwards with identity.verification.get. The link is live for as long as the flow allows; anyone who has it can take that one verification, so send it only to the person it is for. Creating a verification is not charged; a finished verification is charged once, for the checks the person completed.
- `identity.verification.create-configured`: Create a verification invitation using an installed workflow with at most 20 checks. Returns acceptance and a reference; contact and identity data are sent to complete the selected checks. Charged for the declared checks at acceptance. Provisional maximum with stamps: USD 2264.40. (needs approval)
- `identity.verification.delete`: Permanently delete one hosted identity verification and the personal data in it (document images, selfie, extracted fields). Pass eraseBiometrics to also purge the person's retained face template. This permanently erases the person's verification data and cannot be undone: afterwards the verification can no longer be read and no report can be generated for it. Send an Idempotency-Key.
- `identity.verification.get`: Read the decision of one hosted identity verification: where it stands, the identity facts its document check read (name, date of birth, document details), and one row per check the flow ran. Poll it while the person is still verifying; it carries personal data about the person verified.
- `identity.verification.media.get`: Copy selected owned verification media to private storage, binary up to 10 MB or XML up to 1 MB. Returns identity documents, images or video only for the selected action.
- `identity.verification.purge`: Erase data from one owned verification journey. Does not promise erasure of reusable biometrics, registry records, or files already copied to your storage. Maximum estimate USD 1.14.
- `identity.verification.report`: Generate the compliance report of one finished identity verification and put it on your storage as a PDF: the identity facts, the checks that ran and their outcomes. The report contains the person's personal data; it can be generated once a verification reached a decision (in review, approved or declined, including an approved one that has since expired). A verification that is still running, or that expired or was abandoned before it finished, has no report.
- `identity.verification.retry`: Repeat selected owned verification checks, up to 20 actions. Sends the retry reason to the person when requested and charges selected check units at acceptance. (needs approval)
- `identity.verification.update`: Record your own final decision on one hosted identity verification: approve it, decline it, or send it back to the person to redo. Approving or declining changes a person's verification outcome and cannot be undone by this call alone (each later overturns the other). Send an Idempotency-Key.
- `identity.verifications.list`: List the identity verifications of your account, newest first, with their status, end user and document facts. Each row carries a ref for the follow-up calls that read, correct or delete that verification. Carries personal data about the people verified.

## IP checks

See where an IP address is, who owns it and whether it is abusive.

- `security.ip.abuse-feed.export`: Export IP abuse and proxy observations for a stateless date range as a background job. Up to seven calendar days and 10,000 returned entries; downloads are capped at 20 MB and decompression at 64 MB. Excess entries are marked truncated; narrow the range for more. Large results are clean JSON Lines files on platform storage, which must be configured before the job starts. Returns IP activity, never a person rating.
- `security.ip.blacklist.list`: Read a bounded public IP abuse list as a job, up to 1,000 rows and 2 MiB. Threshold and country filters require enabled subscriber access; no continuation is fabricated. Estimated worst case $0.008334 per request.
- `security.ip.block.check`: Check IP abuse across a public network as a job. Up to 1,000 reported addresses and 2 MiB; larger answers fail. Standard IPv4 /24 or narrower; expanded /20 or narrower requires an explicit option and enabled tier, estimated worst case $0.0013. IPv6 requires documented tier limits.
- `security.ip.lookup`: Where an IP address is and who owns its network: city, region, country, coordinates, timezone, autonomous system, network owner and network type.
- `security.ip.privacy`: Classify public network addresses as VPN, proxy, Tor, relay, hosting or residential proxy. Unknown flags stay absent. Extended and residential details require an enabled data entitlement. No service names or personal scores are returned. Estimated worst case $0.0013 per request.
- `security.ip.proxy-check`: Check an IP address for network risk on a 0–4 scale. Returns the IP and a proxy, open proxy or VPN risk observation; it does not score a person.
- `security.ip.reports.list`: List dated public IP abuse report categories and reporter country, up to 50 per page. Reporter identities, comments and contacts are excluded. Estimated worst case $0.000167 per request.
- `security.ip.reputation`: Abuse reputation of an IP address: a 0-100 abuse confidence score, report counts, when it was last reported and whether it is a Tor exit node.
- `security.netblocks.search`: Find public network allocations by IP, CIDR, autonomous system or organisation terms. Up to 50 ranges; organisation searches have no next page. Excludes addresses, email, phone and contact records. Estimated worst case $0.0013 per request.
- `security.network.exclusions.list`: Retrieve global network privacy exclusions as a job, optionally since a timestamp. Returns network ranges, exclusion rules and update times. Maximum 10,000 rows; larger feeds fail without charge.

## Sanctions and watchlist screening

Screen a person or company against sanctions and watchlists.

- `identity.adverse-media.check`: Find public adverse-media mentions of a person or company name. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `identity.pep.check`: Check whether a name matches public politically exposed person records. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `identity.sanctions.check`: Check public sanctions lists for a person or company name. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `identity.screening.check`: Screen a person or company against sanctions, watchlist and politically-exposed-person lists, server to server: send their name (plus date of birth, nationality or document number to sharpen matches) and get the matched list entries with what each one is listed as. This call sends the person's full name, and the date of birth, nationality and document number when you give them, to the screening service; by default nothing is kept after the answer. A match means a list entry resembles the details you sent, not that the person is that entry: check it before acting on it.
- `identity.screening.check-advanced`: Screen a named person or company against lists with explicit matching controls. Optional adverse media and nine local checks default off. Returns matching facts and requested identity evidence, stores a scoped screening. Maximum cost $3.0756.

## Sign-in and users

Add sign-in to your app and manage its users, teams and sessions.

- `auth.app-invitation.accept`: Claim a local-app invitation using your app server key. The first claim consumes it; retries return the same email, role and reference for ten minutes after that claim, then the token is spent. Create your own local account once per invitationRef. No password or managed identity is created here.
- `auth.app-invitation.create`: Send an invitation from your own verified domain to your local app. The recipient follows a one-time link; your app server accepts it, then creates its own local account. No password passes through this API. Auth handling is free; email delivery uses the normal email.send price. (needs approval)
- `auth.backend.delete`: Permanently delete your app's managed sign-in backend and every user in it (cannot be undone). Delete its managed Postgres database first. (needs approval; needs a connected account)
- `auth.backend.domains.set`: Set the origins users may be sent back to after signing in on your app's managed sign-in backend (replaces the list). (needs a connected account)
- `auth.backend.email.set`: Configure custom SMTP on your managed sign-in backend and enable email/password recovery. Your sender domain must already be verified in your own sending account or sending area. Shared, default and platform-owned domains are refused. SMTP credentials are write-only. Your app calls the backend's built-in recovery flow directly; no reset token or password passes through this capability. (needs approval; needs a connected account)
- `auth.backend.get`: Read the status and settings of your app's managed sign-in backend: its URLs, social providers and allowed domains. (needs a connected account)
- `auth.backend.provision`: Open a managed sign-in backend for your app, with no auth account of your own; calling again returns the same one.
- `auth.backend.social.remove`: Switch a social sign-in provider off on your app's managed sign-in backend; its sign-in button stops working. (needs a connected account)
- `auth.backend.social.set`: Set your own client id and secret for a social sign-in provider on your app's managed sign-in backend. (needs a connected account)
- `auth.backend.transfer`: Take over your app's whole managed project, including sign-in and any Postgres database, into your own account; returns a claim link. Sign-in and database credentials keep working; it cannot be undone. (needs approval; needs a connected account)
- `auth.bot-check.verify`: Verify a single-use client challenge token, optionally sending the visitor IP address. When several accounts are connected, name one with the Pramaan-Account header. A timeout needs a fresh token. (needs a connected account)
- `auth.directory.groups.sync`: Read directory groups and direct user members from a connected administrator account. Results are paged group fragments, with directory primary emails for your app to map to its own users. No sign-in subject matching, membership grant or nested-group expansion is implied. Continue until complete before applying a full role snapshot; inaccessible or nested members keep complete false.
- `auth.enterprise-connection.create`: Save one customer's direct OpenID Connect configuration, or inactive native SAML/OIDC configuration on your connected auth account. Native configurations stay pending until access policy and activation are completed at that account; use native sign-in then auth.token.verify, never direct enterprise start. The provider's discovery document is checked first; a connection that fails is not saved. The secret is write-only. Who among your customers may set this up is your app's own check. (needs approval)
- `auth.enterprise-connection.delete`: Delete an enterprise sign-in connection and its stored secret. That customer's staff can no longer sign in through it. Deletes no user in your app. (needs approval)
- `auth.enterprise-connections.list`: List the enterprise sign-in connections you saved, optionally for one customer. Never returns an issuer, a client id or a secret.
- `auth.enterprise.start`: Start sign-in through one customer's identity provider: returns a one-time link to send the visitor to. Your app makes state, nonce and the code verifier, keeps them in the visitor's session and checks state when the visitor returns; then call auth.social.exchange with the same connectionRef, redirectUri, state, nonce and verifier (a state that differs is refused there too). Each start is redeemed once, within 10 minutes.
- `auth.invitation.create`: Invite someone by email to join an organization (team) in your app. (needs approval; needs a connected account)
- `auth.organization.create`: Create an organization (team) in your app's connected auth system. (needs a connected account)
- `auth.organization.members.list`: List the members of an organization (team) and their roles. (needs a connected account)
- `auth.organizations.list`: List the organizations (teams) in your app's connected auth system. (needs a connected account)
- `auth.session.revoke`: Sign a user out of one session (from auth.sessions.list). (needs a connected account)
- `auth.sessions.list`: List a user's sign-in sessions in your app's connected auth system. (needs a connected account)
- `auth.social.exchange`: Redeem a single-use sign-in code and return identity, email and optional name or picture (personal data), without tokens. When several accounts are connected, name one with the Pramaan-Account header. A timeout needs a fresh code. With startRef, redeem a hosted auth.social.start once within ten minutes, with its state, nonce and proof-key verifier. With connectionRef (enterprise sign-in) only a sign-in begun with auth.enterprise.start is redeemed, once, and only with the state it was begun with (still compare state in your app first); the identity is connectionRef plus subjectId, and email is a claim to show, never a key to find or link an account. (needs a connected account)
- `auth.social.start`: Start social sign-in using a connected app and a one-time hosted link. First save the exact allowed https callback addresses on the connected sign-in account. Keep state, nonce and the proof-key verifier in the visitor's own server session; check state on return and redeem with auth.social.exchange using startRef. Creates no user or connected resource account. (needs a connected account)
- `auth.token.verify`: Check a signed-in user's session token against your auth system's public keys; returns who it is for. (needs a connected account)
- `auth.user.ban`: Ban a user from signing in to your app and end their sessions. (needs approval; needs a connected account)
- `auth.user.create`: Create a user in your app's connected auth system. (needs a connected account)
- `auth.user.delete`: Permanently delete a user from your app's connected auth system (erasure; cannot be undone). (needs a connected account)
- `auth.user.get`: Get one user of your app's connected auth system by user id. (needs a connected account)
- `auth.user.unban`: Lift a ban so the user can sign in to your app again. (needs a connected account)
- `auth.user.update`: Change a user's display name in your app's connected auth system. (needs a connected account)
- `auth.users.list`: List or search the users of your app's connected auth system. (needs a connected account)

## URL and file safety

Check links and files for malware and phishing.

- `security.file.behaviour`: Read a bounded file behaviour summary: up to 100 entries per action or contacted network list, with public technique identifiers. Paths, commands, registry values and personal text are excluded. Estimated worst case $0.0013 per request.
- `security.file.check`: Look up an existing file analysis by content hash. No file is uploaded. Returns file facts and aggregate detection counts; an unknown or unanalysed file is not_found. Estimated worst case $0.0013 per request.
- `security.url.check`: Look up a URL's malware and phishing verdict from sources that already scanned it. Nothing is fetched by this call; some sources add the looked-up URL to their public datasets. The verdict is malicious when 3 or more scanning engines flag the URL as malicious (or it is on a threat list), suspicious when 1 or 2 do or any engine calls it suspicious, clean when none do; flaggedBy and sources carry the engine counts so you can apply your own threshold. Clean means no source flagged the URL (for list-only sources: it is not on the list), not that it is safe; a URL no source has seen is not_found.
- `security.url.check-bulk`: Run security.url.check for up to 50 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained.
- `security.url.inspect`: Scan a public URL for malware, phishing, spam and other unsafe content, with bounded network and page facts. URLs may contain personal data; do not send secrets or access tokens. No browser or private scan is promised.
- `security.url.inspect-bulk`: Scan up to 100 public URLs as one background job, with flat results keyed by your row ids. Each row uses the single URL scan and its explicit options. Failed rows are free. URLs may contain personal data; do not send secrets or access tokens.
- `security.url.scan`: Scan a URL for malware and phishing as a background job: the scanner visits the page in a real browser and analyses what it loads. Never submit a URL that contains a secret or token. Scans run unlisted, but may stay visible to the scanner's vetted researchers.
- `security.url.scans.search`: Search existing public URL scans using typed filters, up to 50 per page. Nothing is submitted. Returned URL queries, fragments, contacts and page bodies are excluded; a scan without a verdict stays unknown. Estimated worst case $0.001096 per request.

## Vulnerabilities

Look up known security flaws and exploits for software.

- `security.exploit.count`: Count exploit and vulnerability documents, including zero; author facet values may contain personal names.
- `security.exploit.search`: Search exploit and vulnerability documents, up to 50 rows; published authors may be personal names. Code is inert text and only returned when requested.
- `security.vuln.lookup`: Known vulnerabilities for a package version, or the record for one CVE id: summary, CVSS score and vector, dates, alias ids and references.
- `security.vuln.lookup-bulk`: Run security.vuln.lookup for up to 100 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained.
- `security.vuln.search`: Search public vulnerability advisories by keyword, severity, score vector, weakness, product criteria, date range or known exploitation. Up to 50 advisories and 100 product conditions per advisory; contacts and source identifiers are excluded.
- `web.cve`: Cve.

## Website security

Check a website's security headers, TLS, privacy setup and known weak spots.

- `security.certificate.hosts`: Hosts observed presenting a certificate, up to 50 rows; optional history returns observation intervals rather than live TLS checks.
- `security.certificate.lookup`: Look up an observed certificate by its SHA-256 fingerprint. Subjects may contain personal names.
- `security.certificate.lookup-bulk`: Look up up to 200 certificate records as a job using individual lookups; every row carries your own id. Certificate subjects may contain personal names.
- `security.certificate.search`: Search observed certificates, at most 50 rows per call. Subjects may contain personal names; regex matching requires an explicit choice.
- `security.headers.check`: Check a page's HTTP response headers against security good practice and grade them.
- `security.ssl.check`: Check a domain's TLS certificate, with its issuer, validity dates, days to expiry and protocol.
- `web.content.check`: Fetch a public HTTPS page with a 2 MB cap and no redirects, strip active markup, then scan up to 5,000 Unicode code points as independent chunk reports. Text may contain personal data and is returned only on request; excess text is marked truncated. Maximum estimated cost $10.7406.
- `web.cookies.scan`: List the cookies and tracking scripts a website sets, by category, and whether it shows a consent banner.
