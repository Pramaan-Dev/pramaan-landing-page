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
- `job.board-company-profile.get`: Read company profile on the chosen site. Returns personal data: personal details as published.
- `job.boards.companies.list`: Browse a recruitment directory's company names and public page addresses on the chosen site.
- `job.companies.search`: Search companies — Dutch internship employers.
- `job.companies.suggest`: Suggest matches for companies — Dutch internship employers.
- `job.company-detail.get`: Read company detail on ethiojobs.net. Returns personal data: personal details as published.
- `job.company-details.get`: Read company details on indeed.co.in. Returns personal data: personal details as published.
- `job.company-interview-questions.get`: Read company interview questions on glassdoor.co.in. Returns personal data: personal details as published.
- `job.company-profile.get`: Read company profile on the chosen site. Returns personal data: personal details as published.
- `job.company-reviews.get`: Read company reviews on ca.indeed.com. Returns personal data: personal details as published.
- `job.crypto.company-jobs.list`: List public cryptocurrency-sector jobs at a selected company.
- `job.employer-profile.get`: Read a company's page on poslovi.infostud.com. Returns personal data: personal details as published.
- `job.hiring-companies.list`: List featured hiring companies and their advertised opening counts on timesjobs.com.
- `job.indeed-company-profile.get`: Read company profile on indeed.com. Returns personal data: personal details as published.
- `job.internship.company-detail.get`: Read company detail — Dutch internship employers. Returns personal data: personal details as published.
- `job.ph-company-profile.get`: Read company profile on ph.jobstreet.com. Returns personal data: personal details as published.
- `job.startup-company-profile.get`: Read a startup's public company profile on a startup job board. Returns personal data: personal details as published.
- `job.startup-details.get`: Read startup details on angel.co. Returns personal data: personal details as published.

## Crypto jobs

Search Web3 jobs, companies, remote roles and crypto salaries.

- `job.crypto.companies`: List Web3 companies.
- `job.crypto.intelligence-report`: Get market intelligence report.
- `job.crypto.job-detail`: Get job detail.
- `job.crypto.job-listings`: List job postings.
- `job.crypto.remote-jobs`: List remote jobs.
- `job.crypto.salaries`: Get Web3 salaries.
- `job.crypto.search-jobs`: Search jobs.
- `job.crypto.tagged-jobs.list`: List public cryptocurrency-sector jobs with a selected tag.

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

## Job application forms

Read the questions and fields of public job application forms.

- `job.application-form.get`: Read the blank field definitions of a public job application form on the chosen site.
- `job.application-questions.get`: Read application questions on jobs.workable.com. Returns personal data: personal details as published.
- `job.board-application-form.get`: Read application form on the chosen site. Returns personal data: personal details as published.
- `job.careers-application-form.get`: Read application form on careers.opentext.com. Returns personal data: personal details as published.
- `job.job-application-form.get`: Read job application form. Returns personal data: personal details as published.
- `job.jobbatical-application-form.get`: Read application form on jobbatical.bamboohr.com. Returns personal data: personal details as published.
- `job.jobs-application-form.get`: Read application form on jobs.dayforcehcm.com. Returns personal data: personal details as published.
- `job.mellenu-application-form.get`: Read application form on mellenu.csod.com. Returns personal data: personal details as published.
- `job.oviva-application-form.get`: Read application form on oviva.careers.hibob.com. Returns personal data: personal details as published.
- `job.simon-kucher-application-form.get`: Read application form on simon-kucher.csod.com. Returns personal data: personal details as published.
- `job.training.application-links.list`: List public training-program application links by geographic zone on idice.ng.
- `job.vald-application-form.get`: Read application form on vald.breezy.hr. Returns personal data: personal details as published.

## Job boards

Search job boards, job ads, internships and occupation profiles.

- `commerce.clasificadosonline-jobs.search`: Search clasificadosonline jobs on clasificadosonline.com.
- `job.apprenticeship.categories.list`: List apprenticeship occupation categories and their public directory paths on getmyfirstjob.co.uk.
- `job.apprenticeship.count.get`: Read the published count of apprenticeship listings on findapprenticeship.service.gov.uk.
- `job.apprenticeship.locations.list`: List apprenticeship location filters and their public directory paths on getmyfirstjob.co.uk.
- `job.apprenticeship.profession.get`: Read a public apprenticeship profession description on ausbildung.de.
- `job.apprenticeship.professions.list`: List apprenticeship professions in a public career glossary on ausbildung.de.
- `job.board-advert.get`: Read one job advert on boss.az. Returns personal data: personal details as published.
- `job.board-adverts.search`: Search job adverts on boss.az. Returns personal data: personal details as published.
- `job.board-job-details.get`: Read job details on civilservicejobs.service.gov.uk. Returns personal data: personal details as published.
- `job.board-jobs.list`: List jobs on app.skolakonnect.com. Returns personal data: personal details as published.
- `job.board-posting-page.get`: Read job on the chosen site. Returns personal data: personal details as published.
- `job.board.article.get`: Read a public career-board article on chirojobs.com.
- `job.board.articles.list`: List public career-board articles on chirojobs.com.
- `job.board.categories.list`: List category codes and vacancy counts on a specific public career board on careers.astrazeneca.com.
- `job.board.cities.list`: List cities and vacancy counts for a public career-board country on careers.astrazeneca.com.
- `job.board.countries.list`: List the countries of one company's careers site with their job counts on careers.astrazeneca.com.
- `job.board.departments.list`: List departments and teams on a public job board on ashbyhq.com.
- `job.board.directory-counts.list`: List public job-board directory entries and observed counts on cv.lv.
- `job.board.industries.list`: List industry categories from a public job board.
- `job.board.levels.list`: List experience levels used by a public job board on emploitic.com.
- `job.board.organizations.list`: Browse public business names and directory keys on recruitment websites.
- `job.board.plans.list`: List public job-board listing plans and price descriptions on chirojobs.com.
- `job.board.professional-roles.list`: List public occupational categories used by a job board on hh.uz.
- `job.board.regions.list`: List regions and their public job-board codes.
- `job.boards.categories.list`: List the categories published by a particular public job board.
- `job.boards.departments.list`: List departments published by a public employer board on posindonesia.co.id.
- `job.boards.divisions.list`: List the business divisions that filter one company's careers site on novartis.com.
- `job.boards.facets.get`: Read public job-board facet values and their vacancy counts.
- `job.boards.filters.get`: Read the published filter definitions of a public job board on linkedin.com.
- `job.boards.functions.list`: List the job function filters of one company's careers site on novartis.com.
- `job.boards.locations.list`: List locations or popular geographic filters published by a selected public job board.
- `job.boards.overseas-registration.get`: Read published information about overseas job-seeker registration on jobroom.ams.or.at.
- `job.boards.posting.get`: Read a public job posting on the chosen job board, by its code, slug or address.
- `job.boards.postings.count`: Count public job postings matching a keyword and location on jobs.vodafone.com.
- `job.boards.regions.list`: List public job-board regions and the locations within them on jobvision.ir.
- `job.boards.terms.get`: Read the published usage text of a public job board on jobroom.ams.or.at.
- `job.boards.trending-searches.list`: List popular search terms published by a public job board on shine.com.
- `job.career-role.get`: Read a public career role and its published description sections on warrn.io.
- `job.career-roles.list`: List the career roles one company publishes on warrn.io.
- `job.categories.list`: List job categories and the number of advertised openings on timesjobs.com.
- `job.internship-roles.list`: List role names and keys used by internship search on unstop.com.
- `job.internships.search`: Search internships by role and on-site or remote setting on unstop.com.
- `job.job-details.get`: Read job details on cv.lv. Returns personal data: personal details as published.
- `job.jobs.list`: List jobs on peopleperhour.com. Returns personal data: personal details as published.
- `job.listing-categories.list`: List public job and internship listing categories on wayup.com.
- `job.listing-detail.get`: Read listing detail on ausbildung.de. Returns personal data: personal details as published.
- `job.ny-state-posting.get`: Read one New York State government job posting on statejobs.ny.gov. Returns personal data: personal details as published.
- `job.occupations.get`: Read an occupation description with skills, tasks and education on onetonline.org.
- `job.occupations.search`: Search occupation descriptions by keyword on onetonline.org.
- `job.opportunity-details.get`: Read opportunity details on cookuf.net. Returns personal data: personal details as published.
- `job.popular-roles.list`: List popular job roles and their advertised opening counts on timesjobs.com.
- `job.posting-detail.get`: Read job on the chosen site. Returns personal data: personal details as published.
- `job.posting-status.get`: Check whether a public job posting is still accepting applications on healthcare.wd1.myworkdayjobs.com.
- `job.postings.insights.get`: Read published skill and experience insights for a public posting on jobs.vodafone.com.
- `job.postings.similar`: List postings related to a public job on the selected board.
- `job.projects.search`: Search public freelance projects by keyword on a selected board.
- `job.search-facets.get`: Read available job-search filter values and matching counts on timesjobs.com.
- `job.seeking-work-listings.list`: List job-seeker adverts on m.ss.com. Returns personal data: personal details as published.

## Job market stats

See vacancies, top employers, regions and pay trends in a country.

- `government.us-new-york-layoffs.warn-notices.get`: Read warn notices for New York employer layoff notices.
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

- `assessment.exam.create`: Use when you start a draft candidate examination; for making an existing exam available use assessment.exam.publish. Create a proctored draft exam and return a reference. Next add questions with assessment.question.create, publish with assessment.exam.publish, then invite with assessment.invitation.create. Identity checks are unavailable. An unconfirmed create may leave a draft; list exams before retrying. passScore defaults to 70 (0 to 100). Profiles: observe takes camera snapshots every 60 seconds and applies browser lockdown, without video; record adds screen recording and microphone, and the host page must allow both; verify cannot start through the hosted SDK flow; secure requires the desktop secure browser. Proctoring on phones cannot enforce browser lockdown.
- `assessment.exam.get`: Use when you read one exam and its settings; for candidate scores use assessment.result.get. Read the settings and state of your exam.
- `assessment.exam.publish`: Use when you make a draft examination available to candidates; for inviting one candidate use assessment.invitation.create. Publish your exam, freezing its question set. The exam cannot return to draft. (needs approval)
- `assessment.exams.list`: Use when you browse the exams you own; for reading one exam use assessment.exam.get. List your exams with settings, question counts and handles for follow-up calls.
- `assessment.integrity-report.get`: Use when you read assessment integrity evidence; for scores use assessment.result.get. Read your invitation's integrity verdict, coverage and evidence counts. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key. The integrity verdict is a signal for a person to review, not grounds for automatic rejection. An indeterminate verdict means monitoring was insufficient (for example, no camera snapshots arrived), not a pass.
- `assessment.invitation.create`: Use when you create a candidate test invitation link; for checking an existing invitation use assessment.invitation.get. Create one invitation for your active exam and return its candidate link without emailing. To deliver it, send the link with email.send: from the person's own connected Gmail or Outlook (apps.connection.start), or with sender "domain" from your own verified domain. Requires a retry key; credit for one session is held for ten days. A lost answer may leave the invitation saved; read the list before retrying. It saves no email draft; to hold credit and save invitation emails as drafts use assessment.invite.send.
- `assessment.invitation.get`: Use when you check whether a candidate invitation has expired or its current state; for candidate test scores use assessment.result.get. Read the state and dates of your invitation. completed means the candidate submitted, or the deadline passed and the session was closed. Too many warnings or a terminate ends the session as abandoned; the invitation does not become completed.
- `assessment.invitation.revoke`: Use when you withdraw an unused candidate invitation; for reading its state use assessment.invitation.get. Withdraw an unused invitation and release its held credit. Needs approval; a candidate who has started cannot be interrupted. (needs approval)
- `assessment.invitations.list`: Use when you list candidate invitations for an exam; for creating an invitation use assessment.invitation.create. List your exam's invitations with handles for follow-up calls.
- `assessment.question.create`: Use when you add a question to a draft examination; for reading existing questions use assessment.questions.list. Add a question to your draft exam. A lost answer may leave it saved; list questions before retrying. Repeating a create can add a duplicate, even with the same retry key. points defaults to 1. required is accepted but is not stored by the assessment service.
- `assessment.questions.list`: Use when you read the questions in an examination; for adding a question use assessment.question.create. List your exam's questions in serving order, including grading settings. For exam authors, not candidates.
- `assessment.result.get`: Use when you fetch candidate test scores and grading progress; for test session progress use assessment.session.get. Read your candidate's assessment outcome and grading progress. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key. The integrity verdict and trust score are signals for a person to review, not grounds for automatic rejection. An indeterminate verdict means monitoring was insufficient (for example, no camera snapshots arrived), not a pass.
- `assessment.session.get`: Use when you check candidate test session progress; for scores and grading use assessment.result.get. Read the session state of your invitation without changing the session. Missing data is not ready yet; retry later. Unrecognised status and category values return other without exposing the original label. A retry key returns the response once without saving candidate data. Poll without a key or use a new key. This read has no integrity verdict or trust score; use assessment.integrity-report.get or assessment.result.get. Treat those as signals for a person to review, not grounds for automatic rejection. An indeterminate verdict means monitoring was insufficient (for example, no camera snapshots arrived), not a pass.

## Public sector jobs

Find civil service job openings, exam notices and exam papers.

- `government.br-concursos.article.get`: Read the full content of a news article including headline, subtitle, and body text.
- `government.br-concursos.exam.get`: Read full details for a specific concurso including institution, vacancies, salary range, agenda dates, education level, and registration fee.
- `government.br-concursos.headlines.list`: Extract news article headlines and links from the homepage. Returns up to 20 headlines with their titles and URLs. Useful for monitoring newly published concurs
- `government.br-concursos.jobs.list`: Read private-sector job and internship listings.
- `government.br-concursos.news.list`: Read a paginated list of latest concursos news articles with title, summary, author, publication date, and thumbnail URL.
- `government.br-concursos.ongoing.list`: Read in-progress public exam listings.
- `government.br-concursos.open-by-state.list`: Read open concursos filtered by a required state parameter.
- `government.br-concursos.open.list`: Read currently open public exam listings with optional state filter.
- `government.br-concursos.predicted.list`: Read predicted/upcoming public exam listings.
- `government.exam-notice.get`: Read exam notice in India.
- `government.exam-notices.search`: Search exam notices in India.
- `government.exam-paper.get`: Read exam paper in India.
- `government.exam-papers.list`: List exam papers in India.

## Resume parsing

Turn a resume into contact details, skills, work history and education.

- `document.resume.parse`: Parse a resume or CV (PDF, Office file or image) into structured candidate data: contact details, skills, work history and education.

## Salaries

Look up salaries, H-1B pay, internship pay and company benefits.

- `health.all-salary-submissions.get`: Read all salary submissions on salarydr.com. Returns personal data: personal details as published.
- `health.dentist-salaries.get`: Read dentist salaries on salarydr.com. Returns personal data: personal details as published.
- `health.recent-salary-submissions.get`: Read recent salary submissions on salarydr.com. Returns personal data: personal details as published.
- `health.salary-specialties.list`: List public salary specialties on salarydr.com.
- `health.salary-submission-detail.get`: Read salary submission detail on salarydr.com. Returns personal data: personal details as published.
- `health.specialty-salary-by-state.get`: Read specialty salary by state on salarydr.com. Returns personal data: personal details as published.
- `job.apprenticeship.salary.get`: Read published training salary descriptions for an apprenticeship profession on ausbildung.de.
- `job.h1b-salaries.get`: Read h1b salaries. Returns personal data: personal details as published.
- `job.internship-salaries.get`: Read internship salaries. Returns personal data: personal details as published.
- `job.market.salary-averages.get`: Read aggregate annual salary averages by job title and location on indeed.com.
- `job.salaries.company-benefits`: Get company benefits.
- `job.salaries.company-overview`: Get company overview.
- `job.salaries.h1b-salaries`: Get H-1B salaries.
- `job.salaries.internship-salaries`: Get internship salaries.
- `job.salaries.job-families`: List job families.
- `job.salaries.popular-companies`: List popular companies.
- `job.salaries.salary-data`: Get salary data.
- `job.salaries.salary-summary-md`: Get salary summary.
- `job.salary-data.get`: Read salary data. Returns personal data: personal details as published.

## Startup jobs

Find startup jobs, trending startups and company profiles.

- `companies.jobs.get`: Read jobs on topstartups.io. Returns personal data: personal details as published.
- `job.startups.company-jobs`: List jobs at a startup.
- `job.startups.company-profile`: Get startup profile.
- `job.startups.job-autocomplete-roles`: Autocomplete job roles.
- `job.startups.search-jobs`: Search startup jobs.
- `job.startups.trending-jobs`: List trending jobs.
- `job.startups.trending-startups`: List trending startups.

## Work permits

Check whether a citizen of one country needs a work permit in another.

- `compliance.work-permit.check`: Whether a citizen of one country needs a work permit for another, and which kinds apply.
