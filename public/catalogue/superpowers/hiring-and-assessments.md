# Superpowers: Hiring & assessments

Jobs, pay, candidates and proctored tests.

## Company jobs and reviews

See a company's open jobs and what its employees say about it.

- `companies.employee-reviews.list`: Reviews that a company's employees and former employees posted, with their ratings, pros and cons.
- `companies.jobs.filters.list`: The filter value lists behind job-listings search: countries, regions, employment types, company types and industries, each entry with the exact id to filter by. Cache them; they change rarely. Free.
- `companies.jobs.monitor.create`: Watch a saved job search on a schedule; each run delivers the jobs newly posted against the filters. Standing spend: rented monthly at the worst case of the request: runs a month (744 divided by everyHours, rounded up) times maxResultsPerRun times 0.5 credits per job, so the defaults (every 24 hours, 25 jobs) are 387.5 credits a month. The dearest option is isRealtime, 150 credits per delivered job (116,250 a month at the defaults); it is never the default. No notifications are sent; read deliveries with data.monitor.runs and data.monitor.run.read. Returns a ref for data.monitor.update and data.monitor.delete.
- `companies.jobs.search`: Open job listings at a company; send its name (best coverage) and/or domain. An empty list means none found.
- `companies.jobs.search-bulk`: Run companies.jobs.search for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 99.00 before the platform fee; the platform quotes the billed maximum before submission.
- `companies.jobs.search-suggest`: The exact values a job search filter accepts, for one field: job titles, categories and the technologies a posting names. Free; use it before companies.jobs.search so a filter matches.

## Crypto jobs

Search Web3 jobs, companies, remote roles and crypto salaries.

- `job.crypto.companies`: List Web3 companies.
- `job.crypto.intelligence-report`: Get market intelligence report.
- `job.crypto.job-detail`: Get job detail.
- `job.crypto.job-listings`: List job postings.
- `job.crypto.remote-jobs`: List remote jobs.
- `job.crypto.salaries`: Get Web3 salaries.
- `job.crypto.search-jobs`: Search jobs.

## Employment checks

Check employment history, credentials and background records.

- `people.background.clearance.verify`: Look up one clearance certificate and return its holder and expiry facts. A certificate record does not certify innocence or current background status. (needs approval)
- `people.background.court.search`: Search court records for a person or company and return factual case counts. Processes names, birth dates and addresses; a miss is not a clearance certificate. High accuracy has a higher allowance. Case reports and risk ratings are not returned. (needs approval)
- `people.credentials.verify`: Look up one professional or vocational credential. Returns the registered name, credential and institution facts; never a rating of the person. (needs approval)
- `people.employment.check`: Compare a public profile's current employer with the company the caller names, and report what the profile shows: same_employer, different_employer, not_listed, or unclear when the profile is ambiguous or lacks dates. A profile that cannot be found is a not_found error. Facts from the profile only; no history, tenure or score.
- `people.employment.check-bulk`: Run people.employment.check for up to 100 rows as a background job. Each row returns the same fields as one lookup, keyed by your own row id; failed rows are free. Personal data: names, profile URLs and employment facts may be returned. Searches keep each row's requested result limit. For native batch processing, the 100-row maximum is USD 5.94 before the platform fee; the platform quotes the billed maximum before submission.
- `people.employment.registry-check`: Check a consented Indian employment registry record. May return a registry number and dated employment facts; no person ranking. At most 100 history rows; maximum estimate USD 1.14. (needs approval)
- `people.employment.verify`: Review evidence about one profile's claimed work history in a background job. Returns employment findings, uncertainty, caveats and cited public sources for human review; never scores a person or establishes that a person is genuine. Contains personal employment assertions and evidence. Maximum source cost $1 at the provisional credit rate.
- `people.employment.verify-bulk`: Review claimed work history for up to 10 public profiles as one background job. Personal employment findings and cited evidence for human review, keyed by your own row ids. No person scores. Unanswered rows are free; maximum source cost $10 at the provisional credit rate.
- `people.social-registration.verify`: Look up a supplied social or tax registration and return registered holder facts. Does not establish employment, income or trustworthiness. (needs approval)

## Google Jobs

Search job openings by employer, place and description.

- `google.jobs.search`: Search Google Jobs; returns openings with employer, place and description.

## Job market stats

See vacancies, top employers, regions and pay trends in a country.

- `job.market.categories`: List available job categories for a country.
- `job.market.employers`: Top five employers by advertised vacancies, with local-currency average salary when reported.
- `job.market.regions`: Advertised vacancy counts by region within a country.
- `job.market.salary-distribution`: Reported salary thresholds and vacancy counts in local currency. Counts have unspecified range or cumulative meaning because the published definitions conflict.
- `job.market.salary-history`: Monthly average advertised salaries, in local currency, for up to twelve months.

## Job postings

Search open job postings, analyze an ad and normalize job titles.

- `job.posting.analyze`: Read a job posting and pull out the title, skills, salary range, remote policy and warning signs.
- `job.postings.catalogs.list`: The full filter catalogs for job-postings search in one call: countries, regions, employment types, industries, company types and seniority levels, each with the exact ids to filter by. These change rarely; cache them. Free.
- `job.postings.companies.suggest`: Autocomplete for job-search company filters: match a partial company name or an exact domain and get the company ids to scope a job search by. Free.
- `job.postings.dataset.stats`: How big and how fresh the job-postings search index is: total postings indexed and days behind now, to size expectations before a broad search or export. Free.
- `job.postings.filters.resolve`: Turn friendly job-search filters (company names and domains, country and city names, skill tags, occupation names, title phrases) into the exact filter ids a job-postings search accepts, before you search. Values that could not be resolved come back in warnings. Free.
- `job.postings.locations.list`: Autocomplete for job-search location filters: match a partial country, region, state or city name and get the exact ids to search with. Free.
- `job.postings.occupation.taxonomy`: Autocomplete over the occupation taxonomy behind job-postings search: match a partial occupation name and get the canonical ids and labels at each level, broad family to specific occupation. Free.
- `job.postings.roles.list`: Autocomplete for job-search role filters: match a partial role name and get the canonical roles with their occupation-taxonomy placement, to narrow a search by occupation. Free.
- `job.postings.search`: Search open job postings across companies: titles (keyword or meaning), companies, places, salary in US dollars, seniority, skills, posting date and remote flag.
- `job.postings.search-export`: Export the job postings matching a filter set as one batch: up to 1000 jobs per run (default 100), the full posting text only when you ask for it. The source documents up to 5,000 jobs per run, but a response that large does not fit the time a run has, so this capability caps at 1000; narrow the filters and run again for more. No pagination: every matched job inside the cap comes back in one run. Every exported job is billed whether or not you read it, and a run where nothing matched is free.
- `job.postings.search-filtered`: Search job postings with keyword modes, geography, salary, employment and observation filters. Each source serves only filters it supports. Snippets and optional full text can mention people. Optional hiring contact details include name, title and email or profile contact; up to 50 postings per page.
- `job.postings.tags.list`: Autocomplete for job-search tag filters: match a partial skill or topic tag and get the exact values to search with, each with its tag type and any occupation association. Free.
- `job.postings.titles.list`: Autocomplete for job-search title filters: match a partial title phrase and get the exact values to search with, each with where it sits in the occupation taxonomy. Free.
- `job.tech.search-jobs`: Search tech jobs.
- `job.title.enrich`: Normalize a job title and return up to five related titles and skills.

## LinkedIn jobs

Search LinkedIn job postings and read their details.

- `linkedin.job.detail`: Get one LinkedIn job posting by its address, with the role, the company, the place, the description and how many have applied.
- `linkedin.jobs.search`: Search LinkedIn job postings by keyword, with the role, the company, the place and when each was posted.

## Nonprofit jobs

Search nonprofit jobs, internships, volunteer roles and organizations.

- `job.nonprofit.search-internships`: Search internships.
- `job.nonprofit.search-jobs`: Search jobs.
- `job.nonprofit.search-organizations`: Search organizations.
- `job.nonprofit.search-volunteer-opportunities`: Search volunteer opportunities.

## Proctored exams

Build proctored exams, invite candidates and read their results and integrity reports.

- `assessment.exam.create`: Use when you start a draft candidate examination; for making an existing exam available use assessment.exam.publish. Create a proctored draft exam and return a reference. Next add questions with assessment.question.create, publish with assessment.exam.publish, then invite with assessment.invitation.create. Identity checks are unavailable. An unconfirmed create may leave a draft; list exams before retrying.
- `assessment.exam.get`: Use when you read one exam and its settings; for candidate scores use assessment.result.get. Read the settings and state of your exam.
- `assessment.exam.publish`: Use when you make a draft examination available to candidates; for inviting one candidate use assessment.invitation.create. Publish your exam, freezing its question set. The exam cannot return to draft.
- `assessment.exams.list`: Use when you browse the exams you own; for reading one exam use assessment.exam.get. List your exams with settings, question counts and handles for follow-up calls.
- `assessment.integrity-report.get`: Use when you read assessment integrity evidence; for scores use assessment.result.get. Read your invitation's integrity verdict, coverage and evidence counts. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key.
- `assessment.invitation.create`: Use when you create a candidate test invitation link; for checking an existing invitation use assessment.invitation.get. Create one invitation for your active exam and return its candidate link without emailing. To deliver it, send the link with email.send: from the person's own connected Gmail or Outlook (apps.connection.start), or with sender "domain" from your own verified domain. Requires a retry key; credit for one session is held for ten days. A lost answer may leave the invitation saved; read the list before retrying.
- `assessment.invitation.get`: Use when you check whether a candidate invitation has expired or its current state; for candidate test scores use assessment.result.get. Read the state and dates of your invitation.
- `assessment.invitation.revoke`: Use when you withdraw an unused candidate invitation; for reading its state use assessment.invitation.get. Withdraw an unused invitation and release its held credit. Needs approval; a candidate who has started cannot be interrupted. (needs approval)
- `assessment.invitations.list`: Use when you list candidate invitations for an exam; for creating an invitation use assessment.invitation.create. List your exam's invitations with handles for follow-up calls.
- `assessment.question.create`: Use when you add a question to a draft examination; for reading existing questions use assessment.questions.list. Add a question to your draft exam. A lost answer may leave it saved; list questions before retrying. Repeating a create can add a duplicate, even with the same retry key.
- `assessment.questions.list`: Use when you read the questions in an examination; for adding a question use assessment.question.create. List your exam's questions in serving order, including grading settings. For exam authors, not candidates.
- `assessment.result.get`: Use when you fetch candidate test scores and grading progress; for test session progress use assessment.session.get. Read your candidate's assessment outcome and grading progress. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key.
- `assessment.session.get`: Use when you check candidate test session progress; for scores and grading use assessment.result.get. Read the session state of your invitation without changing the session. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key.

## Resume parsing

Turn a resume into contact details, skills, work history and education.

- `document.resume.parse`: Parse a resume or CV (PDF, Office file or image) into structured candidate data: contact details, skills, work history and education.

## Salaries

Look up salaries, H-1B pay, internship pay and company benefits.

- `job.salaries.company-benefits`: Get company benefits.
- `job.salaries.company-overview`: Get company overview.
- `job.salaries.h1b-salaries`: Get H-1B salaries.
- `job.salaries.internship-salaries`: Get internship salaries.
- `job.salaries.job-families`: List job families.
- `job.salaries.popular-companies`: List popular companies.
- `job.salaries.salary-data`: Get salary data.
- `job.salaries.salary-summary-md`: Get salary summary.

## Startup jobs

Find startup jobs, trending startups and company profiles.

- `job.startups.company-jobs`: List jobs at a startup.
- `job.startups.company-profile`: Get startup profile.
- `job.startups.job-autocomplete-roles`: Autocomplete job roles.
- `job.startups.search-jobs`: Search startup jobs.
- `job.startups.trending-jobs`: List trending jobs.
- `job.startups.trending-startups`: List trending startups.

## Work permits

Check whether a citizen of one country needs a work permit in another.

- `compliance.work-permit.check`: Whether a citizen of one country needs a work permit for another, and which kinds apply.
