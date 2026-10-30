# Superpowers: Data

Companies, people and contacts: research, lead lists, work emails and company signals.

## Ad audiences

Get advertising IDs and hashed emails for ad audience uploads.

- `people.adid.find`: Mobile advertising IDs linked to a person's email address, for mobile retargeting and ad-audience activation. Personal data: device identifiers tied to a person.
- `people.hashes.find`: Hashed email match keys for a person, for ad-platform audience uploads (customer match and custom audiences). Send a LinkedIn URL or a work email; the result carries hashes of their email addresses, never the plain addresses.

## Agency directory

Search a directory of agencies and the services they offer.

- `agencies.list-categories`: List service categories.
- `agencies.search-companies`: Search agencies.

## Brand change alerts

Watch brands and get told when their logos, colors or details change.

- `brand.change-monitor.create`: Create an owned brand change monitor; callbacks go to the platform.
- `brand.change-monitor.delete`: Permanently delete an owned monitor, its subscriptions and delivery history.
- `brand.change-monitor.deliveries.list`: Read an owned monitor’s delivery history, including failed and test deliveries.
- `brand.change-monitor.get`: Read an owned brand change monitor.
- `brand.change-monitor.subscribe`: Subscribe an owned monitor to a brand; worst-case rental $0.10 per month.
- `brand.change-monitor.subscribe-bulk`: Subscribe up to 100 brands on one owned monitor; worst-case rental $10 per month.
- `brand.change-monitor.subscriptions.list`: List an owned monitor’s confirmed subscriptions.
- `brand.change-monitor.unsubscribe`: Remove an owned brand subscription and stop future renewal periods.
- `brand.change-monitor.unsubscribe-bulk`: Remove up to 100 owned subscriptions from one monitor.
- `brand.change-monitor.update`: Update an owned brand change monitor.
- `brand.change-monitors.list`: List only this builder’s brand change monitors.

## Brand logos and styles

Get a brand's logos, colors, fonts and description from its website.

- `brand.assets.list`: Available logo and image metadata without provider links. Worst-case job lookup $0.20.
- `brand.colors.get`: Brand colors with observed roles when available. Worst-case job lookup $0.20.
- `brand.context.get`: Narrative brand identity, positioning, voice and style. Worst-case job lookup $0.20.
- `brand.fonts`: List the font families a website uses, with their fallbacks and the share of the page set in each.
- `brand.identity.get`: Public brand identity, company data, curated fonts, colors and asset metadata. No image downloads. Worst-case lookup $0.10.
- `brand.identity.get-bulk`: Look up brand identities for up to 100 rows as a job; caller row ids are preserved.
- `brand.prefetch`: Warm up brand indexing without fetching a paid profile.
- `brand.prefetch-bulk`: Warm brand caches for up to 100 rows as a job; caller row ids are preserved.
- `brand.profile.get`: Look up a public brand profile as a job, including its logo palette and optional image copies. Up to 25 banners, 10 MiB per image and 50 MiB total. Worst-case lookup cost $0.05; indexing may take five minutes.
- `brand.profile.prefetch`: Warm up indexing for an earlier brand profile.
- `brand.profile.read`: Read the public brand profile named by an earlier reference. Image copies are explicit; up to 25 banners, 10 MiB per image and 50 MiB total. Worst-case lookup cost $0.05. Retry a pending profile later.
- `brand.styleguide`: A website's visual identity: colors, fonts (with font links) and spacing, from its domain.
- `brand.typography.get`: Curated title and body fonts; does not report measured font stacks. Worst-case lookup $0.10.
- `companies.brandmark.get`: Retrieve a wide logo lockup as a job, often a symbol paired with a styled name, rather than a guaranteed text-only wordmark. Files are capped at 10 MiB. Worst-case lookup cost $0.03; indexing may take five minutes.
- `companies.logo.get`: Retrieve a company logo as a job, by one identifier. Exchange codes return operator marks and index symbols return publisher marks. Files are capped at 10 MiB. Worst-case lookup cost $0.02; a generated monogram is explicit. Indexing may take five minutes.

## Company data monitors

Watch companies and saved searches and get told when something new matches.

- `data.monitor.delete`: Cancel a monitor you own and stop paying for it. Terminal: the monitor cannot be resumed. A repeat of the same delete succeeds, so retries are safe.
- `data.monitor.fields`: Every field a monitor may name on one dataset, with the operators each takes and whether the live (realtime) search or the index answers it: the catalog to write saved-search filters and watched-list tracks against. Free to read.
- `data.monitor.list`: List your monitors: saved-search (discovery) and watched-list (entity) monitors across every dataset, newest first, each with a ref for the update, delete, runs and run-read follow-ups. Only your own monitors are listed.
- `data.monitor.run.read`: One run of one of your monitors, with every record it delivered: on saved-search monitors the things that newly matched, on watched-list monitors each change plus the entity's current fields. The polling read that stands in for notifications; free to read.
- `data.monitor.runs`: A monitor's run history, newest first: when each run ran, whether it succeeded, what it delivered and what it spent. Free to read. Each row carries a ref for data.monitor.run.read, which returns the records the run delivered.
- `data.monitor.search.preview`: Check a saved-search monitor before creating it: whether the search can be watched, how many records it covers, a sample of them, and what one delivered record will cost on the tier you chose. Nothing is created and nothing is charged.
- `data.monitor.track.preview`: Try a watched-list monitor's track before creating anything: the sample change and record a real delivery would carry, with the track validated exactly as the create capabilities would validate it. Nothing is saved and nothing is charged.
- `data.monitor.update`: Pause, resume, reschedule or edit a monitor you own: the schedule, the per-run cap, the freshness tier (watched-list people) and the watched list (watched-list monitors). Filters and track are fixed at creation. A change that would raise the monthly worst case is declined. Returns the monitor's current state.

## Company emails

Find how a company's work emails are written and which addresses are known.

- `companies.email-format.get`: Find a company's work email naming pattern from its domain or name. Returns patterns, never individual addresses. Maximum source cost $0.39 per match.
- `companies.email-format.get-bulk`: Run companies.email-format.get for up to 2,000 rows as a background job, keyed by your row ids. More than 1,000 rows require an uploaded row file. Maximum source cost $780 per full run.
- `companies.email-pattern.find`: Find the formats a company's work email addresses follow (for example first.last), with the share of its addresses on each.
- `companies.emails.count`: Count the email addresses known for a company's domain, split into personal and shared mailboxes.
- `companies.emails.countries`: Count a company's known work email addresses by country, to see where its staff are.
- `companies.emails.coverage`: Estimate how many email addresses are reachable at the companies matching a description.
- `companies.emails.search`: List the email addresses published for a company's domain, with each person's name and job title. Returns personal data: work email address, name, job title and department.
- `companies.find-company-email-patterns`: Find company email patterns.

## Company funding and investors

Find funding rounds, acquisitions, investors and pre-IPO valuations for companies.

- `companies.accelerator.search`: Search YC companies.
- `companies.acquisitions.list`: List the companies a company has acquired, with when each deal was announced.
- `companies.acquisitions.signals`: Recent acquisitions and M&A deals from the press, as structured facts: acquirer, target, deal amount with its currency, announcement date and source link. The upstream feed is rebuilt often and can be legitimately empty for a while; an empty list means no announcements passed the filters.
- `companies.financing-events.search`: Search observed company financing events by financing type, location, company size, industry and first observation date; up to 50 events per page.
- `companies.funding-history`: A company's funding history: rounds with dates, amounts and investors, total raised, revenue, headcount, and the chief executive.
- `companies.funding-history-bulk`: Run companies.funding-history for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 7.92 before the platform fee; the platform quotes the billed maximum before submission.
- `companies.funding.signals`: Recent startup funding rounds from the technology press, as structured facts: company, amount with its currency, round type, announcement date and source link. A rolling feed of what was just announced, not a search over one company's history.
- `companies.portfolio.list`: List the companies an investor company has invested in, with when and how much each has raised in all.
- `companies.pre-ipo.list`: Private companies tracked before going public, with their latest valuation.
- `companies.pre-ipo.markets`: Markets where exposure to a private company's shares trades before it goes public.
- `companies.pre-ipo.raises`: A private company's funding rounds.
- `companies.pre-ipo.summary`: A private company's profile and latest valuation.
- `companies.pre-ipo.valuations`: A private company's valuation history.
- `investors.accelerator-partners.list`: List public investment partners at the supported startup accelerator. Returns personal data: public professional names, roles and business profile links; no contact details or person scores.
- `investors.deals.list`: The funding rounds an investor took part in, with each round's type, date, amount and valuation.
- `investors.directory.search`: Search public business investor directory names and investment counts. Returns personal data: public professional investor names and published investment counts; no contact details or person scores.
- `investors.profile.get`: An investor's profile, with its stage focus, deal counts, location and most recent deal date.
- `investors.search`: Find investors by name, website domain or public profile link.
- `people.investments.list`: The funding rounds a person invested in as an angel or partner, with each round's type, date and amount. Returns personal data: the rounds a named person invested in, found by their public profile link.

## Company profiles

Get a full profile of a company from its name, website or profile link.

- `companies.connection-rank`: Rank companies by connection strength in your connected professional network. Scores describe relationships, not personal merit. (needs a connected account)
- `companies.connections.list`: Observed relationships between companies, with directed evidence and confidence in that relationship. Context text can name people.
- `companies.domain.find`: Use when you have a business name but need its website domain; for a company profile use companies.enrich. Find the most likely website domain for a company name.
- `companies.domain.find-bulk`: Find company domains for up to 1000 company-name rows as one background job. Each result carries your row id; no record is found false.
- `companies.enrich`: Use when you need one company profile from its domain, name or LinkedIn page; for a list of businesses use companies.search. Company profile (industry, size, founding year, location, links) from a domain, name or LinkedIn URL.
- `companies.enrich-bulk`: Enrich up to 100 companies in one asynchronous job — domain or profile URL per row, all rows the same kind (a company name is not an identifier and is not accepted); each result row carries the company's profile fields next to your row id and a found flag. Runs as a job: start it, then poll for the rows. Each matched company costs the same as a single enrich.
- `companies.fetch-company-context`: Get company context.
- `companies.founders.list`: List the founders of a company, with where they are based and their public LinkedIn, X and GitHub profiles. Returns personal data: founders' names, location and links to their public LinkedIn, X and GitHub profiles.
- `companies.headcount.get`: How many people a company employs, with the split by department when the source has it.
- `companies.identify`: Use when you must choose which company a name or domain refers to; for details about a known company use companies.enrich. Resolve one company from a website domain, a name or a profile URL; returns the candidate matches ranked by the source. Use it to disambiguate before enriching.
- `companies.identify-ip`: Identify the organisations behind traffic from an IP address, for B2B website-visitor identification. Resolves companies, not people; consumer internet-provider addresses usually match nothing.
- `companies.identify-ip-detailed`: Identify the company behind an IP with geographic facts. Explicit options add network flags and occupational role/level attributes, never personal names or contacts. Provisional maximum is 0.84 USD when both premium options are requested.
- `companies.intro-paths.check`: Check whether your connected network has an introduction path to a company. (needs a connected account)
- `companies.intro-paths.find`: Find warm introduction paths to people at a company through your connected professional network. Relationship scores have no fixed upper bound. Returns personal data: names, titles, employers, locations and profile URLs of the people reached, the introducer and the people in your network who can start each path. (needs a connected account)
- `companies.launch-posts.list`: List the latest posts companies made on startup community sites to launch a product or announce they are hiring, newest first.
- `companies.linkedin.find`: Find a company's LinkedIn page from its name or website domain.
- `companies.name.match`: Compare two company names, allowing for legal suffixes and spelling, and say whether they are the same company.
- `companies.name.normalize`: Normalize a company name: legal suffixes (Inc, LLC, Ltd, Corporation and similar) removed, sentence case with acronyms kept uppercase, and nothing but the name returned.
- `companies.operations.get`: Disclosed company activities, industries and operating facts with period and currency. At most 100 rows per section.
- `companies.peers.list`: Peers disclosed for an official company identity, with reported period, industry and revenue comparison metrics. At most 100 rows.
- `companies.product-reviews.list`: A company's products with their categories, pros and cons as reviewers describe them.
- `companies.products.feed`: Browse product observations across companies, without company attribution when it is not present in the record.
- `companies.products.list`: List the products, services and plans a company sells, read from its own website, with prices where it publishes them.
- `companies.profile-sections.get`: Structured company profile sections: business model, analyst assessment, customers, strategy signals, and M&A and investments. Ask for the sections you want; a section the source has nothing for is left out.
- `companies.profile.lookup`: Use when a company profile needs funding, workforce or growth detail; for a basic business profile use companies.enrich. Detailed company profile from domain, name, public profile or ticker plus location hints. Explicit groups add funding, workforce, growth, inferred technology use and hiring counts; arrays capped at 50.
- `companies.repositories.list`: List the public code repositories a company publishes, with when each was first seen.
- `companies.research-bulk`: Research up to 100 companies as a background job. Requires our configured research engine. Provisional maximum $100.53; higher search depth and typed answers are explicit. No person scoring.
- `companies.social.find`: Find a company's social media profile URLs from its website domain (Facebook, LinkedIn, X, Instagram, GitHub, YouTube, TikTok, Pinterest, Snapchat, Reddit, Medium, Threads, Behance and Dribbble).
- `companies.website.changes`: List the pages that appeared on or disappeared from a company's website, with when each was first and last seen.
- `companies.workforce`: Read company employee totals, role and region breakdowns, history and labelled growth percentages. Contains company facts, no individual employees. Lists capped at 100 with a truncation flag. Maximum source cost $0.20 at the provisional credit rate.
- `data.feedback.send`: Send explicit feedback to the data operator; message is transient and never logged. (needs approval)
- `data.intelligence.batch-run`: Run up to 100 company, technology, funding, employee, job or public-ad lookups as one background job. Every flat result carries your row id and lookup type, with bounded lists for search rows. Personal data: employee names, titles, public profile URLs and available work email addresses and phone numbers may be returned. Failed rows are free. Cost is the sum of selected lookups and requested search limits; no expensive lookup is selected automatically. Cancellation stops local waiting; accepted work may continue at the source. For native batch processing, the 100-row maximum is USD 99.00 before the platform fee; the platform quotes the billed maximum before submission.
- `search.datasets.stats`: What the people, company and job-postings searches cover: how many records each index holds, its most common dimension values, and the filter families it supports. Cached source data for sizing filters and expectations; it returns no records. Free.

## Company registers

Read official company register records, officers, owners, filings and licences.

- `companies.charities.lookup`: Look up a charity registered in England and Wales by number or name, with its income and status.
- `companies.document.verify`: Verify a company deed against its source using supplied company, notary and date facts. Returns only corroboration facts.
- `companies.employment-registration.verify`: Look up an employer registration, returning up to 100 factual establishment records. Does not verify a worker or expand employee details.
- `companies.insolvency.search`: Search company insolvency records and return up to 100 factual proceedings. May contain parties to company proceedings; no risk ratings.
- `companies.lei.lookup`: Look up a company's Legal Entity Identifier record (name, legal and head office address, status) by LEI or name.
- `companies.license.download`: Retrieve one food business licence certificate as a hosted file. The certificate may contain proprietor details.
- `companies.license.verify`: Look up one business licence, returning registration, business name, address and validity facts. May include proprietor names.
- `companies.professional-registration.find`: Find professional firms or members in Indian registries, at most 100 records. Returns names, registration numbers and selected firm member facts; no contacts or person scores.
- `companies.registry-number.detect`: Tell which country and kind of company registration number a given number is.
- `companies.registry.capital.get`: Disclosed registered capital or partnership contribution totals; money values retain their currency.
- `companies.registry.charge-history.list`: Registered charge events with dates, amounts and creditor names. At most 100 rows.
- `companies.registry.charge.get`: Read a registered charge by its row handle, including creditor names and charged assets.
- `companies.registry.charges.list`: List registered company charges, their assets and disclosed creditor names, which may identify people. At most 100 rows per page.
- `companies.registry.contacts.get`: Publicly disclosed business contact emails and phone numbers. No personal contact enrichment.
- `companies.registry.contributions.get`: Partnership contribution obligations, amounts received and disclosed partner names. At most 100 partner rows.
- `companies.registry.filing.get`: Read a filing row, its disclosed annotations, associated filings and resolutions. Descriptions may name people; documents are not downloaded.
- `companies.registry.filings-latest.get`: Latest observed filing date for each disclosed form; this is not a complete filing history.
- `companies.registry.filings.list`: List public company filings, including descriptions that may name people. One page per call, at most 100 rows.
- `companies.registry.get`: A company's official register record: registry number, status, incorporation date, registered address, officers and industry codes.
- `companies.registry.history.list`: Disclosed legal name changes and effective dates. A record retrieval date is not a legal event. At most 100 rows.
- `companies.registry.lookup`: Find a business record by its official business tax identifier; names may identify a proprietor.
- `companies.registry.network.get`: Direct corporate relationships with official identities and disclosed ownership percentages. At most 100 rows.
- `companies.registry.officer-appointments.list`: List public company appointments for a registered officer, including disclosed personal name and role. At most 100 rows per page.
- `companies.registry.officer.get`: Read a registered office held by a named person, including disclosed address, birth date and appointment dates. The record identifies an office at a company, not a verified global person.
- `companies.registry.officer.lookup`: Look up a registry officer by official identifier. Returns public name and identifier status; no contact or birth data.
- `companies.registry.officers.list`: List registered officers with disclosed names, roles, dates and official identifiers. At most 100 rows.
- `companies.registry.officers.search`: Search public registered officers, returning disclosed names, roles, addresses and birth-date precision. Each row states its supported follow-ups. At most 100 rows; no person score.
- `companies.registry.owner.get`: Read disclosed owner details, including public names, birth-date precision, nationality and service address. Protected identities remain absent.
- `companies.registry.owners.list`: List disclosed controlling entities and beneficial owners, including public personal names. Significant control does not prove ultimate ownership. At most 100 rows.
- `companies.registry.search`: Search the official company register by name; returns each match's registry number, jurisdiction, status and incorporation date.
- `companies.registry.shareholdings.get`: Disclosed named and category shareholdings, including shareholder and officer names; at most 100 rows per section.
- `companies.registry.statement.get`: Read a public control, registration, notice or trademark statement. Disclosed entity names may identify people; source metadata and person scores are omitted.
- `companies.registry.statements.list`: List public company statements; summaries may contain personal names. At most 100 rows per page.
- `companies.related-transactions.list`: Disclosed related party transactions, including relevant counterparty names and amounts. At most 100 rows.
- `companies.securities.list`: Disclosed company securities allotments with quantity, date and amounts. At most 100 rows.
- `companies.tax-identifiers.list`: List business tax registrations associated with a supplied tax identifier, up to 50. May return proprietor registration identifiers.
- `companies.tax-registration.match`: Compare a tax registration against the registrations disclosed for an official company identity. Name similarity alone is inconclusive.
- `companies.tax-registration.verify`: Verify a business tax registration; may return a sole proprietor name and business registration facts.
- `companies.workforce-filings.list`: Employer provident fund filings and payments; employer facts only. At most 100 rows.

## Company search

Find lists of companies by description, filters or lookalikes.

- `companies.count-companies`: Count companies.
- `companies.discovery-count`: Count companies matching structured filters, without fetching records. Descriptions and lookalike seeds are unsupported.
- `companies.discovery-search`: Discover companies using descriptions, similar-company seeds and native geographic, industry, size and website filters. At most 100 records per page; baseline estimate $0.53, enhanced or generated-query options have a provisional $1 extra allowance.
- `companies.filters.resolve`: Turn a plain-words description of target companies into structured filters a natural-language company list accepts, so you can inspect, tweak and reuse them before running the list.
- `companies.icp.validate-bulk`: Validate 1 to 100 companies against ideal-customer criteria. Native scoring estimates at most $0.53; explicit generative scoring requires our engine configuration and a provisional $100.53 hold. Scores describe companies only.
- `companies.industries.search`: Turn a free-text industry topic into standard industry codes and names.
- `companies.industry.classify`: Classify a business into NAICS industry codes from its website domain or a sentence describing what it does.
- `companies.lookalike.search`: Find companies that resemble a set of example companies you give by their website domains, in size, industry and profile. Each company returned is billed.
- `companies.match-search`: Find up to 100 company matches for identity and location hints. Returns company profiles without people or match scores.
- `companies.natural-language.search`: Build a list of companies from one natural-language description, or from structured filters a filter lookup resolved. Each row is a company profile; totalMatches counts everything that fit.
- `companies.profile.search`: Search detailed company profiles using typed predicates, up to 50 per page. Explicit groups add funding, workforce, growth, inferred technology use and hiring counts; arrays capped at 50.
- `companies.search`: Use when you need a list of companies matching filters or a description; for one known business profile use companies.enrich. Find companies by description, name, industry, technology used or domain; optional country.
- `companies.search-bulk`: Run one company filter search as an asynchronous job and get the whole match set as rows, up to 10000 companies (the page search returns one page at a time). The job stops at maxRows and is limited to it upstream, so the worst case is maxRows results, and the job refuses to start unless your credit covers that worst case (the technology filter costs the most per company). Runs as a job: start it, then poll.
- `companies.search-filtered`: Search companies with include/exclude filters, offered services, employee and revenue bands, and optional homepage text, up to 100 per page. Domain exclusions are unsupported. Homepage text requires includeFullText true. A 100-company page costs at most $0.400. Continuations expire after 24 hours.
- `companies.search-industries`: Search industries.
- `companies.search-suggest`: The exact values a company search filter accepts, for one field: industries, countries, funding rounds, technologies and more. Free; use it before companies.search so a filter matches.
- `companies.segment`: Group 5 to 100 company domains by business similarity as a background job. The result depends on the whole set. Estimated maximum $0.53.
- `companies.similar`: Companies similar to a seed company, given its domain.
- `companies.similar-bulk`: Run companies.similar for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 9.90 before the platform fee; the platform quotes the billed maximum before submission.
- `entities.find`: Find companies or people matching a description, with every match verified against your match conditions, as a background job. Billed per run plus per match: at the 50-match limit a run costs at most $1.75 (fast), $9.50 (standard) or $60 (deep) without extra fields, $2.25, $10.75 or $65 with them; preview tries the query on a handful of candidates for $0.10 without extra fields (at most $0.20 fast, $0.35 standard or $1.10 deep with them). The job starts only when the credit covers its worst case. Person results carry no contact details. Returns a ref for entities.find-extend and entities.find-result.
- `entities.find-events`: Watch a running or finished search: how it read your objective, how it is going, every person or company it considered and how each fared, and any failure, in order. Reads of people runs return personal data - names, the public page identifying each person and a public description, never contact details - about people the search considered, in discovery order, with no score or ranking.
- `entities.find-extend`: Keep a finished entity search looking for more matches without starting over: raise its match limit and it continues in the background, re-checking its own criteria on new candidates. The additional matches are billed at the run's per-match price for the worst case at this call. Read the matches found so far with entities.find.result.
- `entities.find-plan`: See the plan a search would follow before paying to run it: how the plain-words objective is read, as what kind of entity, with which match conditions, at which depth and match limit. Nothing is searched and no match is evaluated.
- `entities.find-refresh`: Run an entity search again, leaving out what you already have: pass the entities earlier runs returned as exclude and get back only what is new. Priced like entities.find (a fixed price per run plus a price per new match). This is a background job.
- `entities.find-result`: Read the matches an entity search has found: each match with its verified conditions and any extra fields the search was asked to fill, with their sources and confidence. Returns what the search has found so far; free to call.

## Company signals and watches

Watch companies for buying signals and changes, and get new ones delivered.

- `companies.account-contacts.list`: Read up to 10 contacts on your company account, including names, possible work or personal email addresses, phone numbers, job details and locations. No contact is scored or ranked.
- `companies.account-monitor.create`: Add one company to your group. Active monitoring rents an account monthly, with a placeholder upstream cost of USD 0.666667 per month; suggestions are included. Research is not promised to be complete. Unpaid accounts are archived; if archiving is refused, deletion may erase history to stop the cost.
- `companies.account-monitor.delete`: Permanently delete your account and its signal history, then end its rental after confirming removal.
- `companies.account-monitor.get`: Read one company account you own, including its company profile and summary; public-source text may mention people.
- `companies.account-monitor.move`: Move your monitored company to another group you own. Refuses a domain that is also present in any group you do not own.
- `companies.account-monitor.update`: Change your account monitoring status. Confirmed activation starts a monthly rental at placeholder upstream cost USD 0.666667; confirmed archive stops paid monitoring and keeps history. Failed activation charges nothing.
- `companies.account-monitors.list`: List company accounts in your own groups. Company summaries may mention people from public sources; contact arrays are omitted.
- `companies.account-outreach.get`: Read an optional outreach draft on your company account. Text may name people; absence means no draft is available.
- `companies.changes.monitor.create`: Watch a list of companies you supply and get what changed about each one: a headcount move, a funding round, a news mention, a rebrand. The watched list is editable later; the track is fixed at creation. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times the smaller of the list size and maxResultsPerRun times 5 credits per changed company, so 25 companies at the defaults are 3,875 credits a month. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.
- `companies.monitor.create`: Watch a saved company search on a schedule; each run delivers the companies that newly match. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times maxResultsPerRun times 2 credits per company, so the defaults (every 24 hours, 25 companies) are 1,550 credits a month. The dearest option is isRealtime, 150 credits per delivered company (116,250 a month at the defaults); it is never the default. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.
- `companies.signal-answers.list`: Read positive, negative and unknown company signal answers with sources, quotes and facts. Public-source text may name people; contact arrays are omitted. Undocumented answer structures are omitted.
- `companies.signal-group.create`: Create a signal group for company monitoring. Group features have no separate monthly fee.
- `companies.signal-group.delete`: Permanently delete your signal group, its rules, accounts and all their signal history. Confirmed deletion stops their monthly rentals.
- `companies.signal-group.get`: Read the settings of one signal group you own.
- `companies.signal-groups.list`: List only your signal groups and their current account suggestion settings.
- `companies.signal-industries.list`: List industries supported by account suggestions.
- `companies.signal-location-codes.list`: List country or US state codes supported by account suggestions.
- `companies.signal-rule.create`: Create a company signal rule in your group. A question may mention people; it never ranks a person. Rules have no separate monthly fee.
- `companies.signal-rule.delete`: Permanently delete your company signal rule and stop its included rental.
- `companies.signal-rule.get`: Read one company signal rule you own; the question may mention people.
- `companies.signal-rules.list`: List your company signal rules; questions may mention people.
- `companies.signal-suggestions.configure`: Change your group's account suggestion mode. Suggestions are previews and do not activate paid monitoring.
- `companies.signal-suggestions.employee-bounds`: Set employee bounds for suggestions in your own group. This can reject queued suggestions. Zero is the upstream default; no unbounded interpretation is promised.
- `companies.signal-suggestions.filter`: Change your group's suggestion filter. This can reject queued suggested accounts.
- `companies.signal-suggestions.run`: Request suggestions for your group, at most once every two hours upstream. Suggestions must be enabled and at least one rule must have high company-signal importance. Read new previews with companies.account-monitors.list.
- `companies.signal-templates.list`: List company signal templates, with example questions where available.
- `companies.signals.bulk`: The newest verified company signals for many company domains at once, as one background job: at most 200 rows per job, and every row comes back keyed by your own row id, with found false where a company delivered nothing. Runs as a job: start it, then poll.
- `companies.signals.get`: The newest verified company signals for one company domain: dated, typed events (funding, hiring, launches and more), each with a headline, a summary and the source URL that proves it. At most 10 per call. Runs as a job: a fresh answer needs live research and takes a while; a recently researched company answers from the store on the first poll.
- `companies.signals.monitor.create`: Watch one company domain for new verified company signals on a schedule. The checks bill per signal they find ($0.01 each, charged daily through your credit); no notification is sent — read what a watch found with companies.signals.monitor.events. Returns a ref for the follow-ups.
- `companies.signals.monitor.delete`: Permanently delete a company signal watch created with companies.signals.monitor.create, and stop its per-signal billing. Pass the ref that create returned. The signals it already found stay readable until the source drops them; deleting the watch stops all further checks.
- `companies.signals.monitor.events`: Read the verified company signals one of your watches has found, newest first. Signals are billed per returned signal at the watch's per-signal rate.
- `companies.signals.monitor.list`: List the company signal watches you created, with what they watch, their schedules and whether they are running. Each row carries a handle for the watch follow-ups.
- `companies.signals.monitor.run`: Run a company signal watch's check now, ahead of its schedule. The check cannot be undone and sending this twice runs two checks; the signals it finds bill at the watch's per-signal rate through your credit (the call itself reports no per-call price, so the estimate held is a conservative worst case, and only the signals actually found are charged).
- `companies.signals.monitor.update`: Change a company signal watch's schedule, pause it, or resume it, or relabel it. A paused watch runs no checks and finds no signals; its schedule keeps its per-signal billing model.
- `companies.signals.search`: Discover companies from a natural-language signal question: up to 100 evidence-backed signals across distinct companies, each with its type, headline, summary, date, source URL, and the company name and domain it is about. A request is a ceiling, not a promise: fewer results come back when public evidence cannot verify both the date and the company. Runs as a job: the search researches live sources and takes a while.

## Company tech and traffic

See the technologies, website traffic and infrastructure behind a company.

- `companies.footprint.growth`: Read quarterly company infrastructure growth; these are not revenue or headcount growth. Estimated maximum $0.1835.
- `companies.footprint.score`: Read a company infrastructure footprint score and its certificate-based components. Estimated maximum $0.1835.
- `companies.technologies.search`: Search the catalogue of website technologies (analytics, payments, hosting and the like) by name, with what each is, its vendor's site, its categories and what it typically costs. Billed per technology returned.
- `companies.traffic`: Read dated monthly visitor estimates and traffic channel percentages for company domains. No visitor identities. At most 25 domains and 100 observations per list, with truncation flags. Maximum source cost $0.20 at the provisional credit rate.

## Email and phone finding

Find work or personal emails and phone numbers for a person.

- `contacts.batch.run`: Run up to 100 contact lookups in one background job. Personal data: work and private email addresses, mobile numbers, profile names and employment facts, only for the lookup each row selects. Results carry your row ids. Failed rows are free. Before the platform fee, the highest per-row rate is USD 0.198 for an explicit identity lookup, and a 100-row run is at most USD 19.80. The platform quotes the billed maximum before submission. Cancellation stops local waiting; accepted work may continue at the source.
- `people.contacts.reveal`: Reveal personal contact data for a selected search row: mailbox addresses of unspecified type and phone numbers. Pass the row's ref from people.search-filtered. PLACEHOLDER maximum $0.008, estimated from two contact channels; the actual provider fee is unconfirmed. No contact means no builder charge.
- `people.email.best.find`: Find the best available email address for a person from their LinkedIn profile URL. The address can be a personal (non-work) mailbox: use people.email.find when only a work address is acceptable.
- `people.email.best.find-bulk`: Find the best available email address for each LinkedIn profile URL, business preferred with a personal fallback, as one background job. At most 100 rows per call; every row comes back keyed by your own row id, with found false where nothing was matched. Rows that could not be answered carry an error and are free.
- `people.email.find`: Use when you need a professional email from a name and employer or LinkedIn page; for checking an address you have use people.email.verify. Find a person's work email from their name plus company domain, or their LinkedIn URL.
- `people.email.find-bulk`: Find each person's work email from their LinkedIn profile URL (or their name plus company domain), as one background job. At most 100 rows per call; every row comes back keyed by your own row id, with found false where nothing was matched. Rows that could not be answered carry an error and are free.
- `people.email.find-detailed`: Find a person's work email using their first name, optional middle and last names, and a company domain or name. Returns an address with optional categorical confidence. Maximum source cost $0.39 per match.
- `people.email.find-published`: Find a person's work email from their name plus company domain, or their LinkedIn URL, returning only addresses observed published on a public web page — never ones worked out from a name pattern. Personal data: the result is a person's email address.
- `people.email.personal.find`: Find a person's personal, non-work email address (for example a private mailbox) from their LinkedIn URL, or from their name plus company domain. Personal data: the result is a private mailbox address. This source covers US records and serves LinkedIn-URL lookups only.
- `people.email.personal.find-bulk`: Find each person's personal, non-work email address (for example a private mailbox) from their LinkedIn profile URL, as one background job. Personal data: the results are private mailbox addresses; this source covers US records. At most 100 rows per call; every row comes back keyed by your own row id, with found false where nothing was matched. Rows that could not be answered carry an error and are free.
- `people.email.reveal`: Unlock one row of a people.emails.search survey: the address itself and the contact details behind it. Personal data: returns a person's email address and, where published, their name, phone number and profile link. A row unlocked earlier in the same billing period costs nothing to unlock again.
- `people.email.sources`: List the public web pages an email address was found on, with when it was first and last seen and whether it is still there. Returns personal data: the public pages where the email address you send appears.
- `people.emails.search`: Survey which email addresses exist across every company matching a filter set, without revealing them: one row per address with the person's role, company and presence flags, and a per-row handle for people.email.reveal, which is where an address and its contact details are unlocked. Personal data: metadata about identified people; no addresses or full names until the reveal call.
- `people.personal-email.available`: Check whether a public professional profile has a discoverable personal email address. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `people.phone.available`: Check whether a public professional profile has a discoverable phone number. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `people.phone.find`: Find a person's phone number from their LinkedIn URL (best coverage), work email, or name plus company domain. lineType says whether it is a mobile, a landline or a voip line when the source knows, and carrierVerified is true when the source confirmed the number with the carrier; not every source checks.
- `people.phone.find-bulk`: Find each person's phone number from their LinkedIn profile URL (or their work email, or name plus company domain), as one background job. At most 100 rows per call; every row comes back keyed by your own row id, with found false where nothing was matched. Each row says what is known about its number: lineType (mobile, landline or voip) when the source knows, and carrierVerified true when the source confirmed the number with the carrier; not every source checks, so read the row before relying on either. Rows are charged per number returned, and rows that could not be answered carry an error and are free; ask for an estimate to see the most a run can cost.
- `people.phone.resolve`: Identifies a person from a phone number: the name, job title, employer and LinkedIn profile URL of the person the number belongs to. This looks up a private individual from their number; only use it where the law and the person allow. If more than one person has the number, nobody is returned (not found). Contact details are not returned.
- `people.phone.resolve-bulk`: Identifies up to 200 people from phone numbers in one run: the name, job title, employer and LinkedIn profile URL of the person behind each number, keyed by your own row ids. No contact details are returned. This returns personal data about private individuals; only use it where the law and the people allow. When more than one person has a number, the row comes back found false rather than guessing. Only numbers that return a person are billed (a shared number is billed for each person it returned).
- `people.work-email.available`: Check whether a public professional profile has a discoverable work email address. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..

## Email checking

Check whether emails are real, deliverable, risky or disposable, and score lead quality.

- `leads.quality.score`: Score one lead record's data quality from 0 to 1 with a letter grade: how good its email address is, how complete it is, how fresh it is, and how consistent its formats are. The record is scored as given; nothing about the person is looked up, stored or returned.
- `people.contact.verify`: Check whether a name matches the phone number, email address and postal address you hold for that person, and whether each of them is valid. Returns personal data: whether the name you send matches the phone, email and address you send, and whether each is valid; nothing new about the person is returned.
- `people.email.activity`: Get dated mailbox activity observations for an email address. Returns the supplied address, a recent activity window and an optional first observation date; missing data does not prove inactivity. Requires source entitlement; maximum estimated source cost $0.0195 per match.
- `people.email.activity-bulk`: Run people.email.activity for up to 2,000 rows as a background job, keyed by your row ids. More than 1,000 rows require an uploaded row file. Maximum source cost $39 per full run.
- `people.email.disposable`: Whether an email address is at a disposable-mail or free-webmail provider.
- `people.email.inspect`: Use when you need email delivery risks and mailbox observations; for a basic deliverability check use people.email.verify. Inspect an email address's delivery verdict, address risks and optional corporate domain or mailbox activity observations. Returns the supplied address; no demographic or location data. Maximum source cost $0.0195, or $0.039 with explicit activity.
- `people.email.inspect-bulk`: Run people.email.inspect for up to 2,000 rows as a background job, keyed by your row ids. More than 1,000 rows require an uploaded row file. Maximum source cost $78 with explicit activity per full run.
- `people.email.list.analyze`: Analyze an uploaded list of 100 to 2,000 email addresses as a background job. Returns aggregate percentages and optional risk observations, never individual addresses. Requires an isolated source with erasure support; source evaluation is free.
- `people.email.list.get`: Read the status and counts of your saved mailbox-check list. No email addresses are returned.
- `people.email.list.remove`: Permanently remove your saved mailbox-check list. Requires confirm true. This does not claim to refund verification already performed.
- `people.email.list.stop`: Stop verification of your saved mailbox-check list. Completed results remain available; the originating job owns the verification charge.
- `people.email.quality`: Check an email address's mailbox delivery quality, from 0 to 10. Returns the supplied address and a mailbox score; it does not rate a person. Maximum source cost $0.0195 per address.
- `people.email.quality-bulk`: Run people.email.quality for up to 2,000 rows as a background job, keyed by your row ids. More than 1,000 rows require an uploaded row file. Maximum source cost $39 per full run.
- `people.email.reputation`: Rate how trustworthy an email address looks from its domain age, mail set-up and provider type.
- `people.email.signals`: Cheap deliverability signals for an email address you already have, without a full verification and without a verdict: random-looking mailbox, known address pattern, mail server present, throwaway or webmail provider. No address is contacted.
- `people.email.threat.check`: Check security risk signals associated with an email mailbox, not its owner. Zero means undetermined. Explicit alsoVerify adds a delivery check; worst case $0.02 per address.
- `people.email.threat.check-bulk`: Check mailbox threat signals for at most 1,000 rows inline as one background job. Returns submitted addresses and mailbox signals keyed by your own row ids. Larger runs need result-file support. Worst case $20 with delivery checks, $10 without.
- `people.email.toxicity.check`: Check an email mailbox for risks to a sender's delivery reputation, as a background job. Returns the submitted email and a mailbox risk signal, never a score of a person. Planning ceiling $0.008 per address.
- `people.email.toxicity.check-bulk`: Check mailbox toxicity signals for at most 1,000 rows inline as one background job. Returns submitted addresses and mailbox signals keyed by your own row ids. Larger runs need result-file support. Worst case $8 at the planning ceiling.
- `people.email.validate`: Check an email address's syntax and mail server, and whether it is disposable, free or a role address. It does not contact the mailbox. Returns personal data: Submitted email and technical domain properties; no person profile or mailbox deliverability verdict..
- `people.email.verify`: Use when you need to check work email deliverability or whether an address accepts messages; for finding an unknown address use people.email.find. Check that an email address you already have is real and deliverable: it accepts mail (valid, invalid, accept_all or unknown).
- `people.email.verify-bulk`: Check a list of email addresses at once, as one background job. At most 100 rows per call; every row comes back keyed by your own row id, either a definitive valid or invalid verdict or found false where the source could not decide. Only definitive answers are billed.
- `people.email.verify-delayed`: Recheck an email address after a temporary refusal as a background job, waiting at least 30 minutes between pickups and at most 24 hours. Returns the supplied address and delivery verdict. Requires an isolated source queue; maximum source cost $0.0195 per successful pickup.

## Google Maps business contacts

Get the emails and phones businesses on Google Maps publish on their sites.

- `google.maps.contacts`: Get the contact details that businesses on Google Maps publish on their own websites (email addresses and a phone number), for a kind of business in a place. It is for contact details; to find local businesses use local.businesses.search. Returns personal data: business contact details published on the business's own website, namely email addresses and phone numbers, which can be a named person's.

## Outreach drafting

Draft sales emails and campaigns from company signals; nothing is sent.

- `outreach.campaign.generate`: Run a signal-to-review campaign pipeline: discover companies from a natural-language signal question, find contact people at each, and draft outreach emails held for your review. The result is generated text about the contact people found, built from public, dated company signals. This capability only returns text: nothing is ever sent to anyone, review approval is always kept on, and sending anything it drafts is up to you and your own mail capability. Runs as a job. Personal data: the result can carry contact people's names, job titles and work email addresses. Billed per company worked through.
- `outreach.copy.generate`: Draft up to three complete outreach emails for one named person at one company. The result is generated text about that person, built from public, dated, source-backed company signals (or from your campaign offer alone with runWithoutSignal). This capability only returns text: nothing is sent to anyone, and sending anything it drafts is up to you and your own mail capability. Runs as a job: grounding the drafts in verified signals researches live sources and takes a while.

## People profiles

Turn a name, email or profile link into a full professional profile.

- `people.contact.social-profiles`: Read the public social profile links of a contact selected from company contact search. Returns personal data: the contact's social profile links.
- `people.contacts.enrich`: Enrich one person in the background and read their contact details back: their profile (name, title, employer, location, profile URL) plus their email addresses — professional by default, personal too on request, and their mobile numbers when includePhones is set. Personal data: the result carries private mailbox addresses, and mobile numbers when asked. Runs as a job: start it, then poll for the result.
- `people.contacts.enrich-bulk`: Enrich up to 2500 people in one background run and read their contact details back, every row keyed by your own row id: found true with the person's profile and their email addresses (and mobile numbers for the rows that asked), found false where the source had nothing. The run looks for numbers only when at least one row sets includePhones. Personal data: the rows carry private mailbox addresses, and mobile numbers where they were asked for. The run is held for its worst case before it starts, and a row that asks for phones is the dearest; ask for an estimate to see the most a run can cost.
- `people.dev.profiles.find`: Find public developer accounts linked to a person's public profile. Returns public biography, repository facts, memberships and activity history; excludes emails and person confidence scores. At most 10 profiles and 25 repositories per profile; other lists capped at 100 with truncation flags. Maximum source cost $0.20 at the provisional credit rate.
- `people.enrich`: Use when you have a LinkedIn page, email or name and employer and need a contact profile; for finding people by description use people.find. Professional profile (title, employer, location, LinkedIn URL) from a work email, a LinkedIn URL, or a name plus company domain.
- `people.enrich-availability`: Preview a person from private or professional identity hints. Returns real name, title, employer and profile link, with flags for private contact, residential and history data; no private values or scores.
- `people.enrich-bulk`: Enrich up to 500 people in one run: the professional profile (name, title, employer, location, profile URL) of each row, keyed by your own row ids, with found false where the source had nothing. No contact details are returned. Billed per row submitted whether or not the row matches, so the run costs the same if half the rows miss.
- `people.enrich-with-company`: Look up one work email and return the person's professional profile alongside their company's profile, in one call. Personal data: returns the person's name, title, employer, location and profile links behind the address.
- `people.gender.check`: Guess a person's gender from their full name: a statistical guess from the first name within the supplied full name, returned for the one name sent. Personal data: a demographic attribute inferred about a person. The answer is a guess about the name, never a fact about the person. We do not keep the name or the answer beyond a one-way hash in the call record, and nothing ranks or filters people by it.
- `people.identify`: Find candidate people from personal identity hints: name, public profile identifier, work or private email, email hash, private phone, employer, school, residential address or birth date. Returns names and professional profiles in alphabetical order, without contacts or match scores.
- `people.identity.resolve`: Use when a work email must become a name and LinkedIn page; for a full professional profile use people.enrich. Resolve a work email to the person's LinkedIn profile URL and name.
- `people.identity.resolve-bulk`: Resolve up to 100 email addresses to the people behind them in one asynchronous job — their LinkedIn profile URL and name, keyed by your row id. Work and personal addresses both resolve. Runs as a job: start it, then poll for the rows; an email that resolves to nobody costs nothing.
- `people.linkedin.find`: Find a person's LinkedIn profile URL from their full name (or first and last name) and their company's domain.
- `people.name.normalize`: Clean up a person's name: emojis, special characters, professional and academic suffixes, generational suffixes, honorifics, pronouns and bracketed text removed, spaces trimmed, accents folded.
- `people.name.parse`: Split a full name into prefix, first, middle and last names, suffix and nickname. Returns personal data: the name the caller sends, split into its parts.
- `people.personality.analyze`: An inferred personality profile of an identified person, generated by a data provider from that person's public profile text: Big Five and DISC trait scores with an archetype label, plus suggested outreach angles. Everything in the result is the provider's prediction, not a fact about the person; it says nothing verified about their character, and no decision about a person should rest on it. This returns personal data about a named individual. Nothing is stored or logged beyond the call record, and nothing here ranks or filters people — the one response passes through as sent.
- `people.profile.details`: Read public employment, education and skills from a person's profile, with credentials only on explicit opt-in. Contains personal profile history; no contact details. Each list is capped at 100 with a truncation flag. Maximum source cost $0.10 at the provisional credit rate.
- `people.profile.details-extended`: Look up a person from professional links or identity hints, including email hashes, private phones, school, residential address and birth date. Returns professional data by default; explicit groups add employment, education, skills, languages, social profiles, work email, personal emails, phones, residential addresses, demographics or compensation. Histories are capped at 50, text at 5000 characters.
- `people.profile.get`: Get a discovered person by their row handle. Professional data by default; explicit groups add work email, personal emails, phones, residential addresses, demographics and inferred compensation, alongside employment, education, skills and public links.
- `people.research.profiles`: Find public academic profiles linked to a person's public profile. Includes affiliations, publication and citation facts and public coauthors; no person ranking metrics. At most 10 profiles, 100 publications and 100 coauthors per profile, with truncation flags. Maximum source cost $0.30 at the provisional credit rate.
- `people.social-profiles.find`: Find the public LinkedIn, GitHub and X profiles that belong to the owner of any email address, work or personal. For a work email when you need the person's name and employer with one LinkedIn profile, use people.identity.resolve. Returns personal data: links to the person's public LinkedIn, GitHub and X profiles.

## People search

Find and count people by role, company and description, and export lists.

- `people.bulk-jobs.validate`: Check the rows of a bulk people-data run before submitting it: whether each row would be accepted, and what is missing or malformed, field by field. Nothing is submitted and nothing is charged; the rows you send are the rows you are about to (they may hold email addresses and profile URLs; only verdicts come back). estimatedCostUsd is an estimate of the least the target run would cost these rows at the current rate, never a quote, and never below what the target run is held to. The target's own row cap still applies.
- `people.company-contacts.search`: Use when you need possible contacts and inferred mailboxes at a named company; for verified email deliverability use people.email.verify. Find contacts at a named company, including possible work and personal mailboxes. Mailboxes can be inferred and unverified; match strength does not establish deliverability. Pass each row's ref to read its public social profiles.
- `people.company.search`: Use when you need to see who works for a business and their work contact details; for public people search use people.find. Work contact details for the people at one company: name, job title, LinkedIn profile URL, work email and phone number. Each person returned with an email or a phone is billed as one found contact (USD 0.004 each); people with neither are free. A page holds at most 20 people.
- `people.company.search-bulk`: Run people.company.search for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Personal data: names, profile URLs, work email addresses, phone numbers and employment facts may be returned. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 3.96 before the platform fee; the platform quotes the billed maximum before submission.
- `people.connection-rank`: Rank people by connection strength in your connected professional network. Scores describe relationships, not personal merit. (needs a connected account)
- `people.discover`: Find people from a plain-language description, using live public sources; slower than people.search and with more context. Returns personal data: display name, location and a link to each person's public profile.
- `people.filters.list`: The exact values a people-search filter accepts: seniority levels, job functions, company size and revenue bands, countries, industries, email verification states, funding round types. List filters are enum-exact at every source, so send these values back verbatim.
- `people.find`: Use when you need to find people by describing them on the public web; for filling in a known contact profile use people.enrich. Find people on the public web by describing them. Personal data: returns people's names and the public pages that identify them, with a short public description. Never contact details, and no rank or score of any person; results are in the order the search produced them.
- `people.intro-paths.find`: Find warm introduction paths to a person through your connected professional network. Relationship scores have no fixed upper bound. Returns personal data: names, titles, employers, locations and profile URLs of the target, the introducer and the people in your network who can start each path. (needs a connected account)
- `people.lists.upsert`: Create an exclusion list of people or companies on the data source's account, or add to one: up to 10 members per call, each given as a LinkedIn profile URL (people) or a website domain (companies) and resolved to a record before it enters the list — resolving costs credits per matched record, so the call is not free even though the list itself is. A second call with the returned ref appends or replaces. Lists expire after 24 hours at the source, hold at most 10,000 members. No other capability here takes a list yet. This is per-caller state on a shared account: every list belongs to the caller that created it.
- `people.lookalike.search`: Find people whose role, seniority and employer resemble a set of example people you give by their LinkedIn profiles. No contact details. Returns personal data: names, job titles, departments, employers, city and country, and LinkedIn URLs of the people found.
- `people.profile.search`: Search people with typed filters and dataset slices, up to 50 per page. Professional data by default; explicit groups add work email, personal emails, phones, residential addresses, demographics and inferred compensation. No scores; histories capped at 50 and text at 5000 characters.
- `people.role.find`: Find the one person who holds a named role at a company, for example its chief financial officer, and return their LinkedIn profile. To list many people at a company by job title, use people.search. Returns personal data: the LinkedIn profile URL of the person in that role.
- `people.search`: Find people by description, company domain, job title or name; optional country, location and keywords. No contact details.
- `people.search-availability`: Preview people matching typed filters and explicit dataset slices, up to 50 per page. Returns real personal names and professional profiles with private contact, residential and history availability flags, never their private values or scores.
- `people.search-bulk`: Run one people filter search as an asynchronous job and get the whole match set as rows, up to 10000 people (the page search returns one page at a time). The job stops at maxRows and is limited to it upstream, so the worst case is maxRows results — at the default 100 that is about 13 credits, more with the keywords filter. Runs as a job: start it, then poll.
- `people.search-count`: How many people match a people-search filter set, without returning them. Useful for sizing an audience before paying to pull it. Counts over broad keyword filters can be slow or capped at some sources; `approximate` says when the number is a floor.
- `people.search-export`: Export the people matching a search filter set as rows, with their work emails and mobile numbers where known: up to 50000 rows per run (default 1000). Every exported row is billed, so the run costs the requested rows even if you never read them. This returns personal contact data (work email addresses and mobile numbers).
- `people.search-filtered`: Search professional profiles with explicit include/exclude filters, up to 100 per page. Returns personal data: names, job titles, professional profile links and contact-availability flags, never email addresses or phone numbers. A row with ref can be passed to people.contacts.reveal; rows without ref cannot be revealed. Continuations expire after 24 hours.
- `people.search-preview`: Validate a people-search filter set and size the market before paying per result: one page of masked sample profiles (names arrive partly hidden) plus the exact total match count. Personal data: the samples are real people's records with the names deliberately masked. One flat price per page, whatever it holds.
- `people.search-suggest`: The exact values a people search filter accepts, for one field: job titles, skills, schools, countries and more. Free; use it before people.search so a filter matches.

## People watches

Watch people and profiles for job changes and new engagement.

- `people.changes.monitor.create`: Watch a list of people you supply, by public profile URL, and get what changed about each one: a new job, a title move, a fresh certification. This stores the list of people at the provider and reports changes about them; nothing ranks or scores a person, and each delivery carries only the tracked change plus the profile fields the monitor was created with. The watched list is editable later; the track is fixed at creation. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times the smaller of the list size and maxResultsPerRun times the credits per changed person for the freshness you choose: 5 at 30 days (the default), 10 at 14, 20 at 7, 50 at 3 and 150 at 1 day. 25 people at the defaults are 3,875 credits a month; at the 1-day tier, which you must ask for, 116,250. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.
- `people.engagement.monitor.create`: Watch a public profile and capture everyone who engages with its posts (likes and comments) as leads, with their work details. Runs until deleted, and bills by the month for as long as it runs: the watch is charged from the first month on, plus roughly the same again up front when backfill is on. Read the captured people with people.engagement.monitor.leads. Personal data: the captured people's names, employers and work emails.
- `people.engagement.monitor.delete`: Permanently delete a profile engagement monitor created with people.engagement.monitor.create, and stop its monthly charge. Pass the ref that create returned. Deleting the monitor does not delete the leads it already captured at the source; it stops all further capture and billing.
- `people.engagement.monitor.leads`: The people your profile engagement monitors captured: who liked or commented on the watched profiles' posts, what they wrote, and their work details. Returns personal data about the people who engaged - their names, employers and work email addresses. The order is the source's capture order, not newest first: walk the pages and compare against what you already hold to find new leads.
- `people.engagement.monitor.list`: List the profile engagement monitors you created, with what they watch and whether they are running. Monitors carry no ids here: they are paused, resumed and deleted through the ref that people.engagement.monitor.create returned.
- `people.engagement.monitor.update`: Pause or resume a profile engagement monitor created with people.engagement.monitor.create. Pass the ref that create returned. A paused watch bills nothing new; its captured leads stay readable.
- `people.monitor.create`: Watch a saved person search on a schedule; each run delivers the people who newly match. Stores a saved search at the provider and reports the people it finds; nothing ranks or scores a person, and each delivery carries only the profile fields the monitor was created with. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times maxResultsPerRun times 0.5 credits per person, so the defaults (every 24 hours, 25 people) are 387.5 credits a month. The dearest option is isRealtime, 150 credits per delivered person (116,250 a month at the defaults); it is never the default. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.

## School data

Turn a school name or website into clean school facts.

- `schools.clean`: Normalize one school name, domain or public profile into school facts; no student data.

## Trade data

Find importers, exporters and shipments, and see country trade figures.

- `trade.companies.search`: Find trading companies whose names match, optionally in given countries.
- `trade.company.profile`: A trading company's registration, industry, addresses and import and export totals.
- `trade.country.stats`: A country's trade balance, top exports and imports and main trading partners.
- `trade.destinations.rank`: Rank the destination countries of the shipments matching a trade search, by value and volume.
- `trade.exporters.rank`: Rank the exporters behind the shipments matching a trade search, by value, volume and deal count.
- `trade.hs-codes.rank`: Rank the tariff (HS) codes of the shipments matching a trade search, by value and volume.
- `trade.importers.rank`: Rank the importers behind the shipments matching a trade search, by value, volume and deal count.
- `trade.origins.rank`: Rank the origin countries of the shipments matching a trade search, by value and volume.
- `trade.shipments.count`: Count trade records matching a company or product over a date range.
- `trade.shipments.search`: Search customs shipment records by product, tariff code, importer, exporter, country or port.
- `trade.volume.history`: Trade value and volume over time (by month, quarter or year) for the shipments matching a trade search.

## US business lookup

Find US businesses by name or address and read their contact details.

- `geo.address.businesses.list`: List business names associated with a US address and return short-lived handles for separate detail lookups. Summaries are free at the data source.
- `geo.business.get`: Get business contact, address, company and financial facts using a short-lived business handle. Can include contact names, phone numbers and email addresses. Reported contact gender requires an explicit include selection; nothing scores a person. A detail lookup costs up to 0.48 USD; unchanged records are free.
- `geo.businesses.search`: Search US business names by keyword prefixes, with optional city, state and postal filters. Returns names and short-lived detail handles, with no pagination. Summaries are free at the data source.

## YouTube channel contacts

Get the business email a YouTube channel published.

- `youtube.channel.contact`: The email address a YouTube channel published for business enquiries, by the channel's handle or id. It is the address the channel itself made public, which is often a person's own. Returns personal data: the business email address the channel published, which is often a person's own.
