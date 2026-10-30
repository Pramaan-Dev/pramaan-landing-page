---
name: pramaan-developer-tools
version: 1.0.0
description: Use Pramaan superpowers and missions when working with developer tools.
---

# Developer tools

Find one superpower for one job, or a mission for a sequence of jobs. This is a catalogue, not proof of live availability.

Setup and shared safety rules: https://www.pramaan.dev/skill.md

## Search → inspect → quote → run

1. Search with list_capabilities (superpowers) or list_outcomes (missions).
2. Inspect with describe_capability or describe_outcome. Build input from the schema; check availability.
3. Call quote with kind (superpower or mission), id and input; include mission options if needed. Read price_max_micro, can_run and message, and the mission plan. Prices are millionths of a dollar. If can_run is false, resolve the stated need before continuing. Nothing runs during a quote.
4. Show the maximum price. Get an explicit yes for actions that require approval, then use run_capability or run_outcome with the same input. Reuse the same idempotency key on retries. Mission runs validate their plan and ask for approval when needed. Quote again if inputs change.

## Superpowers

### General

| Id | What it does | Price basis |
|---|---|---|
| `code.agent-trace.analyze` | Read an AI agent's execution trace and find where and why it failed, with a suggested fix. | Per successful call; quote exact input for the maximum price. |
| `code.api-docs.generate` | Write Markdown documentation for an API from its OpenAPI description or a plain description. | Per successful call; quote exact input for the maximum price. |
| `code.api-mock.generate` | Make up a realistic example response for an API endpoint. | Per successful call; quote exact input for the maximum price. |
| `code.changelog.generate` | Turn a list of commits into a readable changelog grouped by kind of change. | Per successful call; quote exact input for the maximum price. |
| `code.commit-message.generate` | Write a conventional commit message from a code diff or a description of the change. | Per successful call; quote exact input for the maximum price. |
| `code.convert` | Translate source code from one programming language to another. | Per successful call; quote exact input for the maximum price. |
| `code.cron.explain` | Explain a cron schedule in plain words and list its next run times. | Per successful call; quote exact input for the maximum price. |
| `code.cron.generate` | Turn a schedule described in plain words into a cron expression. | Per successful call; quote exact input for the maximum price. |
| `code.curl.convert` | Turn a curl command into code in another programming language. | Per successful call; quote exact input for the maximum price. |
| `code.dependencies.audit` | Check a project's npm or Python dependencies for newer, deprecated or vulnerable versions. | Per successful call; quote exact input for the maximum price. |
| `code.dockerfile.generate` | Write a production Dockerfile for a language and framework. | Per successful call; quote exact input for the maximum price. |
| `code.docstrings.generate` | Add docstrings to Python functions and classes. | Per successful call; quote exact input for the maximum price. |
| `code.env-template.generate` | Find the environment variables a piece of code reads and write an example .env file for them. | Per successful call; quote exact input for the maximum price. |
| `code.error.explain` | Explain an error message or stack trace in plain words, with its likely cause and fixes. | Per successful call; quote exact input for the maximum price. |
| `code.jwt.decode` | Decode a JSON Web Token without checking its signature, with its claims and whether it has expired. | Per successful call; quote exact input for the maximum price. |
| `code.languages.list` | List the languages code execution accepts, as lowercase names to pass as `language`. | Per successful call; quote exact input for the maximum price. |
| `code.logs.parse` | Parse log text in any common format and summarise its errors, warnings and time range. | Per successful call; quote exact input for the maximum price. |
| `code.nginx-config.generate` | Write an nginx server configuration for a domain, with TLS, proxying and security settings. | Per successful call; quote exact input for the maximum price. |
| `code.npm.package` | Details of a package on the npm registry, such as its latest version, licence, dependencies and dates. | Per successful call; quote exact input for the maximum price. |
| `code.process.get` | Read an owned process state and bounded logs; successful package installs also return installed versions. Output may contain caller personal data. | Per successful call; quote exact input for the maximum price. |
| `code.process.start` | Start an owned background process with bounded output and a deadline inside its prepaid sandbox lease. Code, arguments and logs may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `code.process.stop` | Stop an owned background process and confirm it ended. | Per successful call; quote exact input for the maximum price. |
| `code.program.run` | Run a program or a validated ZIP archive as a background job with compiler options, arguments, native output comparison and explicit resource limits. Code, input, files and logs may contain personal data. Up to 20 repeats; maximum declared execution cost $0.024 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.program.run-bulk` | Run up to 10 programs as background jobs with results keyed by your row ids. Each row uses the same validated source/archive and execution limits as program.run. Failed rows are free. Maximum declared cost is $0.24 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.pypi.package` | Details of a package on the Python package index, such as its latest version, licence, dependencies and releases. | Per successful call; quote exact input for the maximum price. |
| `code.release-notes.generate` | Write release notes from a commit log, grouped by kind of change. | Per successful call; quote exact input for the maximum price. |
| `code.repo.analyze` | Assess a public code repository's languages, activity, documentation and risks. | Per successful call; quote exact input for the maximum price. |
| `code.repositories.lookup` | Look up public repository metadata by owner/name, without running code or reading private accounts. | Per successful call; quote exact input for the maximum price. |
| `code.review` | Review source code and list problems with their severity, line and a suggested fix. | Per successful call; quote exact input for the maximum price. |
| `code.run` | Run a code snippet in a sandboxed interpreter for a chosen language with stdin, time and memory limits; returns stdout, stderr, exit code and timing. The code can reach the internet. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.create` | Start a persistent code sandbox for a language; later code.sandbox.run calls reuse its files and state. npm and pip installs work; the sandbox reaches nothing else on the internet, so packages that download extra files from other sites during install will fail. Billed for the whole time-to-live. Returns a ref for code.sandbox.run and code.sandbox.delete. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.create-configured` | Create a configured sandbox with a controlled runtime and non-secret environment. Only the three package registries are reachable. Billed for the full lifetime; optional graphics or Windows choices cost more. Maximum configured lease is $3.53408 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.delete` | Permanently delete a code sandbox created with code.sandbox.create and stop its billing. Pass the ref that code.sandbox.create returned. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.env.get` | Read only caller-created non-secret sandbox variables; platform and system credentials are excluded. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.get` | Read owned sandbox state, runtime, prepaid deadline and reserved resources. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.packages.install` | Start a bounded background npm or pip install in an owned sandbox. Only registry package names are accepted. Follow the returned process reference for progress, logs and installed versions. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.pause` | Pause an owned sandbox; keeping memory preserves running state. Poll sandbox.get to confirm completion. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.resume` | Resume an owned paused sandbox with an explicit new prepaid lifetime. Maximum supported lease is $3.53408 before platform pricing. | Per successful call; quote exact input for the maximum price. |
| `code.sandbox.run` | Run a snippet inside a sandbox created with code.sandbox.create; its files and state persist between runs. Pass the ref that code.sandbox.create returned. | Per successful call; quote exact input for the maximum price. |
| `code.secrets.scan` | Scan code, config or log text for leaked keys and tokens, with a count by severity. | Per successful call; quote exact input for the maximum price. |
| `code.sql.explain` | Explain a SQL query in plain words, with its steps, likely problems and ways to speed it up. | Per successful call; quote exact input for the maximum price. |
| `db.backend.delete` | Delete this project's app backend with both deployments and all their data and files. Cannot be undone: export what you need first. | Per successful call; quote exact input for the maximum price. |
| `db.backend.env.set` | Set, replace or remove environment variables on one deployment of your app backend, in one step. Replaced values cannot be read back. | Per successful call; quote exact input for the maximum price. |
| `db.backend.get` | Read this project's app backend: whether it is ready, who owns it and the URLs of its deployments. | Per successful call; quote exact input for the maximum price. |
| `db.backend.key.create` | Create the deploy key of one deployment of your app backend, for pushing code to it. Replaces the earlier key, which stops working. | Per successful call; quote exact input for the maximum price. |
| `db.backend.provision` | Create this project's app backend with a production and a development deployment. One per project: calling again returns the same backend and finishes anything left incomplete. | Per successful call; quote exact input for the maximum price. |
| `db.backend.team.connect.start` | Start connecting your own backend team, so this project's backend is created there instead of being hosted for you. Returns a link to authorise it. | Per successful call; quote exact input for the maximum price. |
| `db.backend.team.connect.status` | Check whether your own backend team is connected to this project. | Per successful call; quote exact input for the maximum price. |
| `db.function.mutation` | Call a named mutation function deployed to your own backend (runs your code). | Per successful call; quote exact input for the maximum price. |
| `db.function.query` | Call a named read-only query function deployed to your own backend. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.branch.delete` | Delete a branch of your project's Postgres database now, with its login and every change made on it. main is never touched. Safe to repeat: a branch that is already gone answers deleted too. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.branch.list` | List the branches of your project's Postgres database that have not expired: name, purpose, status and expiry. Never returns a connection address or password. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.delete` | With approval, disable the issued credential and keep data for seven days before erasure. Sign-in keeps working and additional logins you created are not disabled beside it; without sign-in the project compute is stopped. Provision during the hold restores with a new credential shown once. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.get` | Get the state and limits of your project’s managed Postgres database; never returns a connection address or password. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.pause` | Pause your project’s managed Postgres database and its sign-in backend; data is kept. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.resume` | Resume your project’s managed Postgres database and its sign-in backend within its configured limits; a credit stop requires enough credit. | Per successful call; quote exact input for the maximum price. |
| `db.postgres.usage.get` | Read up to 60 whole UTC days of shared project usage and your recorded charges. Usage includes sign-in; reporting is not available during the free preview. | Per successful call; quote exact input for the maximum price. |
| `db.rows.delete` | Permanently delete rows matching filters from a table in your own database; at most 1,000 rows per call. | Per successful call; quote exact input for the maximum price. |
| `db.rows.insert` | Insert up to 1,000 rows into a table in your own database (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.rows.select` | Read rows from a table in your own database with column, filter, order and page options (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.rows.update` | Update rows matching filters in a table of your own database; at most 1,000 rows per call (no SQL). | Per successful call; quote exact input for the maximum price. |
| `db.tables.list` | List the tables and views in your own database with their column names and types. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.cancel` | Cancel a deployment request. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.create` | Build and deploy a git branch or commit of a project on your own hosting account (preview or production). | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.get` | Get one deployment's state, address, branch and commit on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.promote` | Serve an existing deployment on your production domains without rebuilding it. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.restore` | Start a new deployment from an earlier one; completion is checked separately and build charges are billed directly. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployment.rollback` | Roll production back to an earlier production deployment instantly, without a rebuild. | Per successful call; quote exact input for the maximum price. |
| `deploy.deployments.list` | List recent deployments on your own hosting account, newest first. | Per successful call; quote exact input for the maximum price. |
| `deploy.projects.list` | List the projects on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.autoscaling.delete` | Permanently delete the selected hosting configuration. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.autoscaling.update` | Set automatic instance scaling. Ongoing direct-account compute charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.create` | Create a hosting service on your own account. Compute, builds and storage incur ongoing direct-account charges with no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.delete` | Permanently delete the selected hosting configuration. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.get` | Read service configuration and suspension state on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.preview.create` | Create an image-backed preview service. Ongoing direct-account charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.restart` | Request a restart of your hosting service. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.scale` | Set manual instance count. Ongoing direct-account compute charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.state.update` | Request service suspension or resumption; ongoing hosting charges are billed directly. | Per successful call; quote exact input for the maximum price. |
| `deploy.service.update` | Update service configuration; new settings are not necessarily deployed. Ongoing hosting charges have no finite lifetime maximum. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.create` | Create an environment for your own site or app. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.delete` | Delete the referenced environment from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.environment.update` | Update an environment name, description or identification limit. | Per successful call; quote exact input for the maximum price. |
| `devices.environments.list` | List environments belonging to your connected account. | Per successful call; quote exact input for the maximum price. |
| `devices.event.feedback` | Request a confidence reset for a device observation within its feedback window; this does not score a person. | Per successful call; quote exact input for the maximum price. |
| `devices.event.get` | Read a device/request observation, including IP, approximate location and security signals; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.event.update` | Update caller labels or the suspect flag on an observed device event. | Per successful call; quote exact input for the maximum price. |
| `devices.events.search` | Search device or request observations, including pseudonymous device references, IP addresses, approximate locations and security signals; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.create` | Create a request filter in the referenced environment of your account. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.delete` | Delete the referenced filter from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.get` | Read a request filter and its exact expression. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.test` | Test inline or stored request filters against request metadata without changing them. | Per successful call; quote exact input for the maximum price. |
| `devices.filter.update` | Update a request filter expression, action, status or numeric position. | Per successful call; quote exact input for the maximum price. |
| `devices.filters.list` | List request filters in your account, optionally scoped to one environment. | Per successful call; quote exact input for the maximum price. |
| `devices.request.analyze` | Analyze and store an observed server request using its IP, URL and headers; secret headers are redacted. Scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.create` | Register a tracking hostname on a domain you control; DNS setup and activation are separate. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.delete` | Delete the referenced subdomain from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.get` | Read the registration state of a tracking hostname. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomain.verify` | Request DNS verification for a tracking hostname; pending remains pending. | Per successful call; quote exact input for the maximum price. |
| `devices.subdomains.list` | List tracking hostnames and their registration states. | Per successful call; quote exact input for the maximum price. |
| `devices.visitor.delete` | Delete the referenced visitor from your account; explicit confirmation is required. | Per successful call; quote exact input for the maximum price. |
| `devices.visitor.get` | Read selected-window device visit history and security signals, including IP and approximate location; scores describe a device observation, never a person. | Per successful call; quote exact input for the maximum price. |
| `devices.visitors.list` | List distinct pseudonymous devices from one event page with visit timestamps; devices may repeat on later pages. | Per successful call; quote exact input for the maximum price. |
| `devices.visitors.related` | Find related pseudonymous browser/device references originating from the same mobile device; no person identity or person score is returned. | Per successful call; quote exact input for the maximum price. |
| `domains.add` | Attach a domain you own to a project on your own hosting account and get the DNS records to verify it. | Per successful call; quote exact input for the maximum price. |
| `domains.dns-records.apply` | Apply up to 20 DNS records without touching unmentioned records. Partial progress is reported; propagation takes time. | Per successful call; quote exact input for the maximum price. |
| `domains.dns-records.list` | List DNS records of an owned domain. Values can contain personal data. | Per successful call; quote exact input for the maximum price. |
| `domains.list` | List the domains attached to a project on your own hosting account. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.contacts-set` | Replace all contact roles. Sends personal contact details once; registrant changes may restart verification and lock transfers for 60 days. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.create` | Register a domain with the builder as registrant. Sends name, email, phone and address once; never stores contact details. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.get` | Read an owned domain, including suspension, expiry and registrant verification. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.list` | List domains registered in this project; unrelated account domains are excluded. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.quote` | Read the current retail price for an exact registration or renewal term. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.renew` | Renew an owned domain for an explicitly confirmed price; the term fee is not refundable. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.search` | Search available registrations and show their retail price when billing is connected. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.update` | Change exactly one owned-domain setting and read it back. | Per successful call; quote exact input for the maximum price. |
| `domains.registration.verification-resend` | Resend the registrant verification email, at most once per domain every 15 minutes. | Per successful call; quote exact input for the maximum price. |
| `domains.verify` | Check the DNS records of a project domain and mark it verified when they match. | Per successful call; quote exact input for the maximum price. |
| `env.build-variable.delete` | Permanently delete a stored environment variable. | Per successful call; quote exact input for the maximum price. |
| `env.build-variable.set` | Write a readable environment variable; its value is never returned. | Per successful call; quote exact input for the maximum price. |
| `env.build-variables.list` | List build environment variable names, never values. | Per successful call; quote exact input for the maximum price. |
| `env.delete` | Permanently delete a project environment variable by name. | Per successful call; quote exact input for the maximum price. |
| `env.group-variable.delete` | Permanently delete a stored environment variable. | Per successful call; quote exact input for the maximum price. |
| `env.group-variable.set` | Write a readable environment variable; its value is never returned. | Per successful call; quote exact input for the maximum price. |
| `env.list` | List a project's environment variable names, types and environments (never their values). | Per successful call; quote exact input for the maximum price. |
| `env.set` | Create or replace a project environment variable; the value is write-only and never returned. | Per successful call; quote exact input for the maximum price. |
| `env.variable.generate` | Generate a fresh environment value; the stored value is readable in your hosting dashboard. | Per successful call; quote exact input for the maximum price. |
| `env.variables.replace` | Replace the complete variable set in one request; omitted keys are permanently removed. | Per successful call; quote exact input for the maximum price. |
| `functions.invoke` | Invoke a named server function you deployed, with a JSON body, and get its result. | Per successful call; quote exact input for the maximum price. |
| `kv.counter.add` | Add to a numeric counter atomically; integer values retain signed 64-bit precision. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.delete` | Delete one key and its contents after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.expiry.get` | Read whether a key expires, and when it expires. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.expiry.set` | Change a key expiry or make it persistent. Immediate expiry deletes data and requires confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.get` | Read one stored value. Values may contain caller-owned personal data. | Per successful call; quote exact input for the maximum price. |
| `kv.entry.set` | Store one value, optionally with expiry or an existence condition. Caller content is stored. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.delete` | Delete one field from a hash after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.get` | Read one text field from a hash. Values may contain caller-owned personal data. | Per successful call; quote exact input for the maximum price. |
| `kv.hash.set` | Store up to 100 text fields atomically in one hash. Caller content is stored. | Per successful call; quote exact input for the maximum price. |
| `kv.list.pop` | Remove and return one caller-owned text value from one end of a list. | Per successful call; quote exact input for the maximum price. |
| `kv.list.push` | Push up to 100 caller-owned text values to one end of a list. | Per successful call; quote exact input for the maximum price. |
| `kv.list.range` | Read up to 100 text values and their positions from a list. Values may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `queue.message.cancel` | Cancel a pending message after explicit confirmation; delivery may already have occurred. | Per successful call; quote exact input for the maximum price. |
| `queue.message.publish` | Publish caller-owned message content to your public HTTPS endpoint through your connected delivery account. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.create` | Create a recurring UTC delivery schedule in your connected account. Caller-owned message content is stored. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.delete` | Delete a recurring delivery schedule after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `queue.schedule.get` | Read a recurring delivery schedule without returning its body, credentials or destination. | Per successful call; quote exact input for the maximum price. |
| `queue.schedules.list` | List schedules in your connected delivery account, omitting message content and destinations. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.check` | Check and consume a rate-limit allowance atomically for one caller-owned subject. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.remaining` | Read a rate-limit allowance without consuming tokens. | Per successful call; quote exact input for the maximum price. |
| `ratelimit.reset` | Reset one subject allowance after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `security.breach.check` | Check breach exposure for an email, username, password hash or identifier and hash combination. Returns exposure facts and breached-site names, never leaked credentials. The submitted identifier is personal data; passwords are accepted only as hashes. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.hosts` | Hosts observed presenting a certificate, up to 50 rows; optional history returns observation intervals rather than live TLS checks. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.lookup` | Look up an observed certificate by its SHA-256 fingerprint. Subjects may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.lookup-bulk` | Look up up to 200 certificate records as a job using individual lookups; every row carries your own id. Certificate subjects may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.certificate.search` | Search observed certificates, at most 50 rows per call. Subjects may contain personal names; regex matching requires an explicit choice. | Per successful call; quote exact input for the maximum price. |
| `security.dns.history` | Historical DNS observations, bounds or ranges, up to 50 rows per call. These records are observed datasets, not live resolution; contact fields are excluded. | Per successful call; quote exact input for the maximum price. |
| `security.dns.lookup` | Current live DNS records of a domain: A, AAAA, CNAME, MX, NS, TXT, SOA, SRV and CAA, each with its value and time to live. | Per successful call; quote exact input for the maximum price. |
| `security.dns.resolve` | Resolve one hostname to IP addresses; this operation returns addresses only, without TTLs or other DNS records. | Per successful call; quote exact input for the maximum price. |
| `security.dns.reverse` | Resolve one public IP address to hostnames; no historical interval or freshness guarantee is implied. | Per successful call; quote exact input for the maximum price. |
| `security.domain.age` | How long ago a domain was registered, when it expires and whether it is new enough to be a risk. | Per successful call; quote exact input for the maximum price. |
| `security.domain.email-auth` | Check a domain's mail set-up (SPF, DKIM, DMARC, MX) and blocklist status, with a grade. | Per successful call; quote exact input for the maximum price. |
| `security.domain.history` | Read historical domain registrations as a background job. Default returns a count; includeRecords:true purchases records, estimated worst case $0.065. At most 1,000 snapshots and 2 MiB; larger answers fail explicitly. Personal names, contacts and raw registration text are excluded. | Per successful call; quote exact input for the maximum price. |
| `security.domain.reputation` | Grade a domain's trustworthiness from its DNS, mail and HTTPS set-up, with the issues found. | Per successful call; quote exact input for the maximum price. |
| `security.domain.whois` | Registration record of a domain: registrar, creation, update and expiry dates, registry statuses, name servers and the registrant's organization and country where published. | Per successful call; quote exact input for the maximum price. |
| `security.exploit.count` | Count exploit and vulnerability documents, including zero; author facet values may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.exploit.search` | Search exploit and vulnerability documents, up to 50 rows; published authors may be personal names. Code is inert text and only returned when requested. | Per successful call; quote exact input for the maximum price. |
| `security.file.behaviour` | Read a bounded file behaviour summary: up to 100 entries per action or contacted network list, with public technique identifiers. Paths, commands, registry values and personal text are excluded. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.file.check` | Look up an existing file analysis by content hash. No file is uploaded. Returns file facts and aggregate detection counts; an unknown or unanalysed file is not_found. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.headers.check` | Check a page's HTTP response headers against security good practice and grade them. | Per successful call; quote exact input for the maximum price. |
| `security.host.count` | Count matching observed host or service documents, including zero, with up to five facet fields. | Per successful call; quote exact input for the maximum price. |
| `security.host.lookup` | Observed host services, network and location; up to 1000 services. Optional banners and certificate subjects may contain personal names. This is observed data, not a live scan. | Per successful call; quote exact input for the maximum price. |
| `security.host.lookup-bulk` | Look up up to 100 host records as a job using individual lookups; every row carries your own id. Optional certificate subjects and banners may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `security.host.reputation` | Evaluate a domain or public IPv4 host with a safety score and bounded checks as a job. Basic is the default; full is an explicit purchase, estimated worst case $0.0039. No personal contact data is returned. | Per successful call; quote exact input for the maximum price. |
| `security.host.search` | Search observed hosts and services using literal text or structured filters; up to 50 rows per call. Banners may contain personal names when requested. | Per successful call; quote exact input for the maximum price. |
| `security.ip.abuse-feed.export` | Export IP abuse and proxy observations for a stateless date range as a background job. Up to seven calendar days and 10,000 returned entries; downloads are capped at 20 MB and decompression at 64 MB. Excess entries are marked truncated; narrow the range for more. Large results are clean JSON Lines files on platform storage, which must be configured before the job starts. Returns IP activity, never a person rating. | Per successful call; quote exact input for the maximum price. |
| `security.ip.blacklist.list` | Read a bounded public IP abuse list as a job, up to 1,000 rows and 2 MiB. Threshold and country filters require enabled subscriber access; no continuation is fabricated. Estimated worst case $0.008334 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.block.check` | Check IP abuse across a public network as a job. Up to 1,000 reported addresses and 2 MiB; larger answers fail. Standard IPv4 /24 or narrower; expanded /20 or narrower requires an explicit option and enabled tier, estimated worst case $0.0013. IPv6 requires documented tier limits. | Per successful call; quote exact input for the maximum price. |
| `security.ip.lookup` | Where an IP address is and who owns its network: city, region, country, coordinates, timezone, autonomous system, network owner and network type. | Per successful call; quote exact input for the maximum price. |
| `security.ip.privacy` | Classify public network addresses as VPN, proxy, Tor, relay, hosting or residential proxy. Unknown flags stay absent. Extended and residential details require an enabled data entitlement. No service names or personal scores are returned. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.proxy-check` | Check an IP address for network risk on a 0–4 scale. Returns the IP and a proxy, open proxy or VPN risk observation; it does not score a person. | Per successful call; quote exact input for the maximum price. |
| `security.ip.reports.list` | List dated public IP abuse report categories and reporter country, up to 50 per page. Reporter identities, comments and contacts are excluded. Estimated worst case $0.000167 per request. | Per successful call; quote exact input for the maximum price. |
| `security.ip.reputation` | Abuse reputation of an IP address: a 0-100 abuse confidence score, report counts, when it was last reported and whether it is a Tor exit node. | Per successful call; quote exact input for the maximum price. |
| `security.netblocks.search` | Find public network allocations by IP, CIDR, autonomous system or organisation terms. Up to 50 ranges; organisation searches have no next page. Excludes addresses, email, phone and contact records. Estimated worst case $0.0013 per request. | Per successful call; quote exact input for the maximum price. |
| `security.network.exclusions.list` | Retrieve global network privacy exclusions as a job, optionally since a timestamp. Returns network ranges, exclusion rules and update times. Maximum 10,000 rows; larger feeds fail without charge. | Per successful call; quote exact input for the maximum price. |
| `security.password.strength` | Rate a password's strength from its length, character classes and common patterns, with an estimated time to crack. | Per successful call; quote exact input for the maximum price. |
| `security.signal-reasons.list` | List the descriptions of device or transaction detection signals. These are dictionary entries, not findings or scores about a person. | Per successful call; quote exact input for the maximum price. |
| `security.ssl.check` | Check a domain's TLS certificate, with its issuer, validity dates, days to expiry and protocol. | Per successful call; quote exact input for the maximum price. |
| `security.url.check` | Look up a URL's malware and phishing verdict from sources that already scanned it. Nothing is fetched by this call; some sources add the looked-up URL to their public datasets. The verdict is malicious when 3 or more scanning engines flag the URL as malicious (or it is on a threat list), suspicious when 1 or 2 do or any engine calls it suspicious, clean when none do; flaggedBy and sources carry the engine counts so you can apply your own threshold. Clean means no source flagged the URL (for list-only sources: it is not on the list), not that it is safe; a URL no source has seen is not_found. | Per successful call; quote exact input for the maximum price. |
| `security.url.check-bulk` | Run security.url.check for up to 50 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained. | Per successful call; quote exact input for the maximum price. |
| `security.url.inspect` | Scan a public URL for malware, phishing, spam and other unsafe content, with bounded network and page facts. URLs may contain personal data; do not send secrets or access tokens. No browser or private scan is promised. | Per successful call; quote exact input for the maximum price. |
| `security.url.inspect-bulk` | Scan up to 100 public URLs as one background job, with flat results keyed by your row ids. Each row uses the single URL scan and its explicit options. Failed rows are free. URLs may contain personal data; do not send secrets or access tokens. | Per successful call; quote exact input for the maximum price. |
| `security.url.scan` | Scan a URL for malware and phishing as a background job: the scanner visits the page in a real browser and analyses what it loads. Never submit a URL that contains a secret or token. Scans run unlisted, but may stay visible to the scanner's vetted researchers. | Per successful call; quote exact input for the maximum price. |
| `security.url.scans.search` | Search existing public URL scans using typed filters, up to 50 per page. Nothing is submitted. Returned URL queries, fragments, contacts and page bodies are excluded; a scan without a verdict stays unknown. Estimated worst case $0.001096 per request. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.lookup` | Known vulnerabilities for a package version, or the record for one CVE id: summary, CVSS score and vector, dates, alias ids and references. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.lookup-bulk` | Run security.vuln.lookup for up to 100 rows as a background job. Each result echoes the caller's row id once; failed rows cost nothing. Uses bounded single lookups when native batch progress cannot be retained. | Per successful call; quote exact input for the maximum price. |
| `security.vuln.search` | Search public vulnerability advisories by keyword, severity, score vector, weakness, product criteria, date range or known exploitation. Up to 50 advisories and 100 product conditions per advisory; contacts and source identifiers are excluded. | Per successful call; quote exact input for the maximum price. |
| `software.blog-research` | Get research articles. | Per successful call; quote exact input for the maximum price. |
| `software.categories.list` | List software categories, with their names and links. | Per successful call; quote exact input for the maximum price. |
| `software.search-software` | Search software. | Per successful call; quote exact input for the maximum price. |
| `vector.index.create` | Create a vector index with a fixed vector length and distance metric, for upserting vectors and searching nearest neighbours. Returns a ref for the follow-up vector.* capabilities. | Per successful call; quote exact input for the maximum price. |
| `vector.index.delete` | Delete one of your vector indexes and every vector stored in it. This cannot be undone; the vectors are gone. | Per successful call; quote exact input for the maximum price. |
| `vector.index.get` | Get one of your vector indexes: its vector length, distance metric, vector space and an approximate count of stored vectors. | Per successful call; quote exact input for the maximum price. |
| `vector.indexes.list` | List your vector indexes with their vector length, distance metric and an approximate count of stored vectors. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.delete` | Remove stored vectors by id from one of your indexes. This cannot be undone; re-upserting an id stores a new vector. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.get` | Look up stored vectors by id in one of your indexes: their vector values and metadata. Ids that are not stored are left out of the result. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.query` | Search one of your vector indexes for the nearest neighbours of a query vector, optionally narrowed by a metadata filter. Scores follow the index's distance metric. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.query-by-id` | Find nearby vectors using a stored vector from your own index as the seed. A missing seed is refused; results stay in that index. | Per successful call; quote exact input for the maximum price. |
| `vector.vectors.upsert` | Store or replace vectors in one of your indexes, each with an id of your choice and optional metadata for filtered search. Every vector's length must equal the index's dimension. | Per successful call; quote exact input for the maximum price. |

### GitHub

| Id | What it does | Price basis |
|---|---|---|
| `github.issue.comments` | List public comments on an issue or pull request. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.issues.search` | Search public GitHub issues and pull requests. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.contributors` | List public repository contributor handles and contribution counts. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.forks` | List public forks of a repository. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.issues` | List public repository issues and pull requests. Returns personal data: Public GitHub accounts and published repository content; no contact details or personal rankings.. | Per successful call; quote exact input for the maximum price. |
| `github.repo.profile` | Read public repository details, description, language and reported activity counts. | Per successful call; quote exact input for the maximum price. |
| `github.trending.repositories` | List trending public repositories for a programming language and time period, without contributor profiles. | Per successful call; quote exact input for the maximum price. |
| `github.user.profile` | Read a public GitHub account profile without contact details. Returns personal data: Public GitHub handles, display names and biographies; no contact details or person scores.. | Per successful call; quote exact input for the maximum price. |
| `github.user.repos` | List repositories published by a public GitHub account. Returns personal data: Public account repository names and published descriptions.. | Per successful call; quote exact input for the maximum price. |

### Google

| Id | What it does | Price basis |
|---|---|---|
| `tagmanager.account.get` | Get a account in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.accounts.list` | List the accessible accounts in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.container.get` | Get a container in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.containers.list` | List containers in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.create` | Create a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.delete` | Delete a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.get` | Get a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tag.update` | Update a tag in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.tags.list` | List tags in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.create` | Create a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.delete` | Delete a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.get` | Get a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.trigger.update` | Update a trigger in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.triggers.list` | List triggers in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.create` | Create a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.delete` | Delete a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.get` | Get a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variable.update` | Update a variable in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.variables.list` | List variables in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.create` | Create a container version from a workspace, consuming that workspace; requires approval. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.get` | Get a version in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.version.publish` | Publish a version in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.versions.list` | List versions in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.workspace.get` | Get a workspace in your connected tag management account. | Per successful call; quote exact input for the maximum price. |
| `tagmanager.workspaces.list` | List workspaces in your connected tag management account. | Per successful call; quote exact input for the maximum price. |

### Hacker News

| Id | What it does | Price basis |
|---|---|---|
| `hackernews.stories.search` | Hackernews. | Per successful call; quote exact input for the maximum price. |

### Stack Overflow

| Id | What it does | Price basis |
|---|---|---|
| `stackoverflow.questions.search` | Stackoverflow. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `api.contract.check` | API endpoints called with GET and checked against the status you expect, with what changed since your last run. | Sum of step prices; quote exact input and options for the maximum price. |
| `attack.surface.report` | Observed records and technologies for one public domain, plus threat observations and caller-confirmed exact-version advisory checks. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.check` | Run a snippet in a supported language after approval and compare its measured output with one expected sample. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.release.notes` | Write a changelog and release notes from the supplied commit-range log, withholding unsupported text. | Sum of step prices; quote exact input and options for the maximum price. |
| `code.write.checked` | Write source for a bounded task, check its web addresses, then run one exact-output sample after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `cve.brief` | One vulnerability explained: the advisory record (severity, score, summary, reference links), pages that name it, and a written brief — what it is, who is affected, what to do — every sentence checked against the sources it names. No exploit steps. | Sum of step prices; quote exact input and options for the maximum price. |
| `dependency.audit` | Known vulnerabilities for a typed list of exact package versions (not lockfile text): each package's advisories with severity and score, the versions with none, and the ones that were not checked, with counts. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.rollback.checked` | Read the current production deployment, select the newest caller-proven good earlier one, optionally roll back after approval, then read the target's state. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.status.report` | The latest deployment of each project on your own hosting account, recent deployments newest first, with failed ones called out and older failures marked superseded. | Sum of step prices; quote exact input and options for the maximum price. |
| `deploy.verified` | Deploy a branch as a preview (or resume on an earlier preview), read its readiness and page, and optionally promote the checked build after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.attach` | Attach an exact domain to a project, optionally read DNS, and make bounded verification attempts. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.lookalikes.find` | Domain names that are close variants of a brand's domain: fixed typo patterns and neighbouring endings looked up live, the ones with DNS records read further (registration record, threat lookup) beside the brand's own record. Facts only: a similar name says nothing about who registered it or why. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.network.map` | Domains tied to a given domain by shared identifiers, redirects and page code, as a list with the evidence for each tie. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.register` | Check and quote an exact domain, approve its purchase and optionally upsert and read back DNS records while retaining their old values. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.renew.watch` | List a page of owned domains, quote those close to expiry and approve each bounded-price renewal. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.report` | A risk and ownership report for a domain or URL: whether it resolves and takes mail, its registration and name servers, a threat verdict for the address, and the hosting network and its abuse reputation. Findings with sources, never one risk score. | Sum of step prices; quote exact input and options for the maximum price. |
| `domain.transfer-out` | Read an owned domain, check it can be transferred, unlock it after approval, read it back and say how to get the one-time transfer code. | Sum of step prices; quote exact input and options for the maximum price. |
| `domains.expiry.check` | When a list of domains expires: the expiry date, days left counted at read time, registrar and registry statuses, one row per domain. | Sum of step prices; quote exact input and options for the maximum price. |
| `env.audit` | A project's environment variable names and types, compared with a required list: which required names are missing and which present ones the list does not name. | Sum of step prices; quote exact input and options for the maximum price. |
| `experiment.readout` | Checked experiment identity with the app's own conclusion, significance, probabilities and intervals as given. | Sum of step prices; quote exact input and options for the maximum price. |
| `flag.rollout.check` | Checked flag configuration blockers and the evidence still needed before widening a rollout. | Sum of step prices; quote exact input and options for the maximum price. |
| `host.exposure.report` | List observed host services, enrich known vulnerability identifiers and read matching exploit documents. | Sum of step prices; quote exact input and options for the maximum price. |
| `incident.brief` | Exact incident or issue facts, optional on-call rows and deployment context without guessing the cause. | Sum of step prices; quote exact input and options for the maximum price. |
| `ip.block.decide` | Suggest block, challenge or allow from separate network observations; never change a firewall. | Sum of step prices; quote exact input and options for the maximum price. |
| `ip.report` | Roughly where a public IP address is, who owns its network and whether it is reported for abuse: approximate location, owner, route and abuse reputation with sources. | Sum of step prices; quote exact input and options for the maximum price. |
| `kv.state.share` | Change one shared value, counter or list with expiry and a rate limit, returning previous values without approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `monitor.changes.digest` | Everything your monitors caught in a period, grouped by monitor and ranked by size of change, with failed checks listed apart. | Sum of step prices; quote exact input and options for the maximum price. |
| `monitor.spend.tidy` | Review paid monitor checks with no observed change and propose pausing, slowing or approved deletion. | Sum of step prices; quote exact input and options for the maximum price. |
| `release.health` | Received events or error occurrences in checked equal windows around one deployment; missing buckets stay unknown. | Sum of step prices; quote exact input and options for the maximum price. |
| `release.ship` | Stage one exact commit whose selected build passed, then approve production promotion and a checked feature flag change with a confirming read. | Sum of step prices; quote exact input and options for the maximum price. |
| `repo.secrets.audit` | Scan supplied repository snapshot text for secret counts and return fixed rotation steps, without exposing the text or secrets. | Sum of step prices; quote exact input and options for the maximum price. |
| `repo.signals.brief` | Read package and repository activity figures, with a checked factual brief. | Sum of step prices; quote exact input and options for the maximum price. |
| `secret.rotate` | Replace one secret in its checked configuration and every explicitly listed deployment use, with approvals and per-use confirmation. | Sum of step prices; quote exact input and options for the maximum price. |
| `sessions.digest` | Measured activity and error signals from exact recorded sessions, with a checked per-session digest and limits on what they establish. | Sum of step prices; quote exact input and options for the maximum price. |
| `speed.compare` | Your pages against competitors' on the same device and throttling, side by side. | Sum of step prices; quote exact input and options for the maximum price. |
| `tag.container.audit` | Read one container workspace's tags, triggers and variables, and name paused tags, tags that never fire, and unused triggers and variables. | Sum of step prices; quote exact input and options for the maximum price. |
| `tech.market.report` | How many sites use a technology, by rank band, language, country and category, and what it is used with. | Sum of step prices; quote exact input and options for the maximum price. |
| `test.dataset.build` | Realistic made-up records in a chosen locale, checked against your schema. | Sum of step prices; quote exact input and options for the maximum price. |
| `threat.lookup` | Known threat observations for one address, domain, page or file fingerprint, with unchecked sources kept explicit. | Sum of step prices; quote exact input and options for the maximum price. |
| `uptime.report` | Checked availability and sampled slow responses for one monitor and time window. | Sum of step prices; quote exact input and options for the maximum price. |
| `usage.bill` | Record billable usage events for one billing customer and read their prepaid balance back, with a status per event. | Sum of step prices; quote exact input and options for the maximum price. |
