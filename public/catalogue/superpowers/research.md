# Superpowers: Research

Deep research, academic papers and answers that cite their sources.

## Academic papers

Search papers, authors, citations, journals and research institutions.

- `papers.affiliations.search`: Search academic affiliation strings as published; may identify people. Returns matched institution handles where available.
- `papers.author.get`: Get a public academic author’s name, ORCID, alternate names and affiliations; no scores or contact details.
- `papers.author.get-bulk`: Look up public academic identifiers as a background job, at most 1000 rows. Each row echoes your id; failed rows are free. Returns published author names and affiliations. Public identifiers only; refs are not accepted. Worst-case upstream cost USD 0 using free singleton lookups.
- `papers.author.works`: List an academic author’s publications and their published author names and affiliations.
- `papers.authors.list`: List a paper’s published authors, public ORCIDs and academic affiliations.
- `papers.authors.search`: Search public academic authors; returns names, ORCIDs and affiliations, without scores or contact details.
- `papers.citations.list`: List publications citing a paper; includes published author names and available citation contexts.
- `papers.embedding.get`: Get a stored numeric paper embedding with an opaque identifier for its comparison space.
- `papers.entities.suggest`: Suggest academic entities for a partial name; paper and author suggestions may include published names or affiliations.
- `papers.funder.get`: Get a public research funder by public funder DOI or funder handle.
- `papers.funders.search`: Search public research funders and their public identifiers.
- `papers.get`: Get a publication by a public identifier or paper handle. Returns published author names, ORCIDs and academic affiliations.
- `papers.get-bulk`: Look up public academic identifiers as a background job, at most 500 rows. Each row echoes your id; failed rows are free. Returns published author names and affiliations. Public identifiers only; refs are not accepted. Worst-case upstream cost USD 0 using free singleton lookups.
- `papers.institution.get`: Get a research institution’s public identity, names, location and related institutions.
- `papers.institutions.search`: Search research institutions by name, country and institution type.
- `papers.location.get`: Get the original links and available metadata for one publication copy.
- `papers.locations.search`: Search harvested copies of publications and their original public links.
- `papers.open-access.get`: Get a paper’s reported public-access status and original publisher or repository links.
- `papers.recommend`: Find related publications for one paper; includes published author names.
- `papers.recommend-set`: Recommend papers from positive and negative public DOI seeds. Includes published author names.
- `papers.references.list`: List a publication’s outgoing references, including partial deposited references and published author names.
- `papers.search-filtered`: Search publications with exact bibliographic filters. Returns published author names, ORCIDs and affiliations; unsupported filter combinations go to another source.
- `papers.snippets.search`: Search bounded published paper excerpts with section and character offsets. Excerpts and paper metadata may include published author names.
- `papers.summary.get`: Get stored summary text for a paper; text may include published author names.
- `papers.title.match`: Find the closest publication title match and its reported paper match score. Includes published author names.
- `papers.venue.get`: Get a journal, conference or repository by public ISSN or venue handle.
- `papers.venues.search`: Search journals, conferences and repositories with public ISSNs and original homepages.
- `web.authors.search`: Search public scholarly author profiles by name. Returns personal data: Public names, profiles, wallet activity or published records; see the result fields..
- `web.publications.search`: Search research papers and publications on a topic; returns titles, links, authors, venue and year. Returns personal data: author names as printed on published papers.

## Deep research

Run web research on questions or lists of records, and watch answers change.

- `research.fields.extract`: Research a question or record on the live web and return each field you asked for with its value, sources, confidence and reasoning, as a background job. Price is per run by quality ($0.01 fast, $0.025 standard, $0.10 deep), not per field.
- `research.fields.extract-bulk`: Research many rows against the live web as one background job: the same fields for every row, each row with its own evidence. At most 100 rows per call. Priced per successful row ($0.01 fast, $0.025 standard, $0.10 deep); the job starts only if your credit covers every row, and the most expensive possible run is stated before it starts.
- `research.group.events`: The progress of a research batch as events: running totals, each row reaching its final state, and stream errors. Read it again with the returned cursor for what happened since.
- `research.group.row`: Check one row of a research batch by your own row id: whether it is queued, running, completed, failed or cancelled. The row's result itself is on the batch job.
- `research.group.status`: Where a research batch stands: how many rows it holds, how many finished, failed or were cancelled, and whether any are still running.
- `research.memory.clear`: Erase your account's whole saved research memory - every remembered research run, monitor finding and entity search - so later research starts from scratch. The underlying runs, monitors and searches are not touched, only their reuse in memory. Only your own account's memory is cleared. This cannot be undone.
- `research.memory.evict`: Drop one finished entity search from your saved research memory, so later research stops building on it. The search itself and its results are not touched; only its reuse in your memory ends. This cannot be undone without running the search again.
- `research.memory.search`: Search your own past research: finished research runs, running monitors and finished entity searches this account has produced, so new work can build on what is already known instead of paying to research it again. Returns previews of what was asked and answered; only your own runs are ever searched.
- `research.monitor.create`: Watch the answer to a research question for material changes on a schedule: the answer is researched again on every check and only what changed is reported. The first research is billed once and every check bills at its cadence; there is no notification - read web.monitor.events. Returns a ref for the follow-ups.
- `research.monitor.list`: List the monitors you run that watch a research result on a schedule (research.monitor.create). Each row carries a handle for the monitor follow-ups: read its events, trigger an extra check, change its schedule or stop it.
- `research.monitor.update`: Change a research-watching monitor's schedule or its name (research.monitor.create). Only schedules the source can honour exactly are accepted - hourly, or every 2, 3, 4, 6, 8 or 12 hours; checks then run on that cadence from the change, not at fixed clock times. A schedule that would make the monitor more expensive than it is now is declined.
- `research.run.delete`: Permanently delete a retained research run. Requires confirm true; active runs must be cancelled through their background job first.
- `research.run.events`: Read stored lifecycle events for one research run by polling. At most 100 events per call; this is not a live subscription.
- `research.run.get`: Read the state and retained output of one research run. Output may contain personal fields explicitly requested when the run was started.
- `research.run.list`: List only your retained research runs, with state, times and a handle for follow-ups. Scans a bounded page of retained history.
- `research.schema.suggest`: Turn a plain-words intent into a plan for structured research: the fields a record should carry, the fields the research would fill in, example rows, and notes about where the plan had to generalize. Nothing is researched.
- `research.sources.extract`: Research 1 to 100 questions or records on the live web as one background batch, with controls the plain research capabilities do not offer: how deep each row runs (quick $0.005 to exhaustive $2.40 per row), named free partner data sources, pay-per-use partner data sources (each successful call bills extra; needs the account's paid-sources switch), your own tool servers called during the run, and domain or date limits on what may be used. Rows come back keyed to your own row ids, each exactly once. With a schema each row returns fields with evidence; without one, a written report. Returns a ref for research.group.status, research.group.events and research.group.row.
- `research.tier.suggest`: Which research depth a task needs: give the fields a record carries or the fields the research should fill in, and get the depths that can do the job, cheapest adequate first. Nothing runs.
- `research.trace.input`: See exactly what one of your watched research runs asked: the question or record, the depth it ran at, which partner sources and your own tool servers it could use, and any domain limits. Only runs you started are readable.
- `research.trace.run`: Run a research task on the live web as a background job you can watch: progress is reported while it runs, and the run's ref lets you continue with follow-up questions or audit exactly what was asked (research.trace.input). Price is per run by depth, quick $0.005 to exhaustive $2.40; failed runs are not billed. A run the platform stops at its deadline keeps running and may still complete and bill; you are charged at most the estimate for the work.

## Google Dataset Search

Find public datasets on a topic and read their details.

- `google.dataset.detail`: Details of a dataset from Google Dataset Search, with its description, providers, formats and licence.
- `google.datasets.search`: Search Google Dataset Search for public datasets on a topic.

## Google Scholar and Patents

Search academic papers and patents with citations and filing details.

- `google.serp.patents`: Search Google Patents; returns filings with their number, dates, assignee and inventor. Returns personal data: inventor names as printed on published patents.
- `google.serp.scholar`: Search Google Scholar; returns publications with year, citation count and a PDF link when one is public. Returns personal data: author names as printed in publication details.

## Public datasets

Look up public data such as drug recalls, nutrition and earthquakes.

- `web.fda`: Fda.
- `web.nutrition`: Nutrition.
- `web.recalls`: Recalls.
- `web.usgs-quakes`: Usgs Quakes.

## Web answers

Ask questions and get sourced answers or reports from the live web.

- `web.answers`: Research the web for a task and return a sourced answer, optionally in your JSON shape.
- `web.answers-thread`: Answers that remember the conversation: ask a question grounded in the live web, get the answer with its sources, and continue by passing each turn's ref back as ref. Depth is chosen per turn: low $0.01, medium $0.05 (default), high $0.25; a high turn can take up to a minute and miss a short time budget. Domains can limit what the answer may draw on.
- `web.chat`: Chat with an assistant grounded in the live web: send the conversation so far, get the next reply with the pages it drew on. "fast" is the low-latency tier; "light", "standard" and "deep" research more before answering. Multi-turn works by sending the full history each time.
- `web.research`: Answer a research question from the live web; returns a summary and cited sources.
- `web.research-report`: Research a question as a background job, with optional structured output and caller-owned text attachments. Reports and attachments may contain personal data. At most five files, two MB per file, eight MB and 80,000 words combined; report text at most 100,000 characters and 100 sources. Worst case $0.88 fast or $2 deep/auto. Some sources cannot stop paid research after submission.

## Zhihu scholar

Search scholarly papers on Zhihu.

- `zhihu.scholar.search`: Search Zhihu scholar papers by keyword. Returns personal data: public names, profile details and published content.
