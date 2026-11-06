# Superpowers: Legal

Courts, cases, dockets, judges and statutes.

## Company court records

Find court cases that name a company.

- `companies.litigation.list`: Company court records with case identifiers, parties, dates and status. Allegations are not findings of guilt. At most 100 rows.

## Court records

Search US court cases, dockets, filings, judges, opinions and oral arguments.

- `law.au-high-court.case.get`: Read a High Court of Australia Full Court case file from the current or decided register.
- `law.au-high-court.cases.list`: Lists Full Court cases from the High Court's Current Cases or Decided Cases register (cases referred to the Full Court since February 2011), a page per call,
- `law.au-high-court.clr-case.get`: Read a digitised Commonwealth Law Reports case page by its slug.
- `law.au-high-court.clr.search`: Searches the High Court's digitised Commonwealth Law Reports, volumes 1 to 100 (1903-1959, 3,702 reported cases), and returns a page of case summaries: title,
- `law.au-high-court.judgment.get`: Read a High Court of Australia judgment by its slug: citation, date, case number, bench and text.
- `law.au-high-court.judgments.search`: Searches the High Court's published judgments from 1998 to the present and returns a page of judgment summaries (title, neutral citation, bench, judgment date
- `law.au-jade.citation.get`: Look up an Australian legal case by its medium neutral citation components (year, court code, and case number). Returns the case name, full citation, the numeri
- `law.au-jade.recent-cases.list`: List the most recently published High Court of Australia (HCA) decisions that JADE currently features (a record per judgment).
- `law.br-tst.courts.list`: List all available judicial bodies (órgãos judicantes) at TST, with their numeric codes and siglas.
- `law.ca-quebec.courts.list`: List courts for Quebec legal information.
- `law.case.get`: Read one public case records; captions and text may name people. Estimated call budget is 0.004448 USD using a provisional allocation.
- `law.cases.list`: List public case records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.cases.search`: Search public case records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.citations.lookup`: Look up printed legal citations or citations in a passage that may name people. Keeps ambiguous and unchecked outcomes. Estimated provisional call budget 0.001112 USD.
- `law.court.get`: Read one public court records. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.courts.list`: List public court records. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.docket-entries.list`: List public entry records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.docket-entry.get`: Read one public entry records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.docket.get`: Read one public docket records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.dockets.list`: List public docket records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.dockets.search`: Search public docket records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.filing.get`: Read one public filing records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.filings.list`: List public filing records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.filings.search`: Search public filing records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.in-ecourts.judgments.search`: Full-text search of Indian court judgments and orders.
- `law.in-gujarat-courts.courts.list`: List the courts sitting at a bench location of the tribunal.
- `law.in-gujarat-courts.locations.list`: List the tribunal's bench locations, with their numeric ids.
- `law.in-indiankanoon.court-months.list`: List available months for a specific court and year.
- `law.in-indiankanoon.court-years.list`: List available years for a specific court. Returns years in descending order. Each year can be passed to browse_court_year_months to discover monthly breakdowns
- `law.in-indiankanoon.courts.list`: List all available courts and tribunals for browsing. Returns court names and slugs that can be used with browse_court_years and browse_court_year_months.
- `law.in-nclat.judgments.list`: List NCLAT judgments and final orders from the last 14 days, newest first.
- `law.judge.get`: Read one public judge records with judicial names and biography. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.judges.search`: Search public judge records with judicial names and biography. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.nz-lii.case.get`: Read a New Zealand court decision: title, neutral citation, court, year and decision date.
- `law.nz-lii.cases.search`: Search New Zealand case-law databases by case name.
- `law.nz-lii.citation.search`: Find New Zealand case-law decisions matching a citation such as '[2019] NZCA 219'.
- `law.opinion.get`: Read one public opinion records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.opinions.list`: List public opinion records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-argument.get`: Read one public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-arguments.list`: List public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-arguments.search`: Search public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.us-judyrecords.stats.get`: Read general statistics about the court-case database, including the number of indexed cases.
- `law.us-ny-efiling.documents.list`: List documents filed in a NYSCEF case.
- `law.us-oklahoma-court.case-types.list`: List all district court case type codes and their labels.
- `law.us-oklahoma-court.cases.search`: Searches for cases using various filters across Oklahoma district courts. At least a filter (case_type with date range, or lname) should be provided for relia
- `law.us-oklahoma-court.counties.list`: List all Oklahoma county/court database identifiers available for search.
- `law.us-oklahoma-court.daily-filings.list`: Read the daily filing report for a specific county.
- `law.us-oklahoma-court.opinion.get`: Read a published appellate opinion from OSCN's legal research database: header (case name, matching citations, appellate case number, decision date, court).
- `law.us-oklahoma-court.statute-sections.list`: List every section document of a statute title, in the order OSCN's index lists them, with the section number, its name, the chapter/article heading it sit.
- `law.us-oklahoma-court.statute-titles.list`: List the titles of the Oklahoma Statutes, a row per title.
- `law.us-oklahoma-court.statute.get`: Read an Oklahoma statute section: its text, its legislative history (the 'Historical Data' note, with links to superseded versions when OSCN keeps them), an.

## European laws and gazettes

Search and read laws and official gazettes from the EU and European countries.

- `government.eu-data-protection.opinions.get`: Read opinions for EU data protection opinions.
- `law.es-legislation.acts.get`: Read acts for Spanish legislation.
- `law.es-legislation.acts.list`: List acts for Spanish legislation.
- `law.es-legislation.gazette.get`: Read gazette for Spanish legislation.
- `law.eu-legislation.document-metadata.get`: Read document metadata for EU legislation.
- `law.eu-legislation.document-procedure.get`: Read document procedure for EU legislation.
- `law.eu-legislation.document-summary.get`: Read document summary for EU legislation.
- `law.eu-legislation.documents-structure.get`: Read documents structure for EU legislation.
- `law.eu-legislation.documents-text.get`: Read documents text for EU legislation.
- `law.eu-legislation.documents.search`: Search documents for EU legislation.
- `law.eu-legislation.national-transposition.get`: Read national transposition for EU legislation.
- `law.eu-legislation.official-journal-daily.get`: Read official journal daily for EU legislation.
- `law.fr-jorf.issue.get`: Read the table of contents of a specific JORF issue by date and number.
- `law.fr-jorf.latest-issues.list`: Read the most recently published JORF issues.
- `law.fr-jorf.text.get`: Read a specific JORF text (law, decree, announcement, notice) by its unique identifier.
- `law.fr-jorf.texts.search`: Full-text search over the Journal Officiel de la République Française (JORF). Matches titles and text bodies. Filters by nature of text (decree, announcement, e
- `law.gb-legislation.legislation.search`: Search UK legislation by title, year, number or type.
- `law.gb-legislation.outline.get`: Table of contents of an UK Act or statutory instrument: its parts, chapters and sections.
- `law.gb-legislation.section.get`: Read the text of a section or part of a piece of UK legislation.
- `law.hu-legislation.law.get`: Read the full text content of a specific Hungarian law by its ID.
- `law.hu-legislation.laws.search`: Full-text search over Hungarian laws and legal documents. Accepts keyword, year, number, and type filters. At least one of keyword, year, or number must be prov
- `law.hu-legislation.suggestions.get`: Read autocomplete suggestions for a partial search query.
- `law.it-legislation.laws.search`: Full-text search across all Italian laws using a single query string. Equivalent to the homepage search bar. Returns paginated results with 20 items per page. D
- `law.it-legislation.suggestions.get`: Read search suggestions for a partial query in the Italian legislation database.
- `law.it-legislation.text.get`: Read the full text of a specific Italian law/act.
- `law.pt-gazette.acts.search`: Search acts for Portuguese official gazette.
- `law.pt-gazette.series-two.search`: Search series two for Portuguese official gazette.
- `law.ro-official-gazette.act-text.get`: Fetch and extract the complete body text of all acts from a gazette issue PDF. Parses page-by-page text using the SUMAR (table of contents) to identify act boun
- `law.ro-official-gazette.announcements.get`: Search for professional announcements (Partea a IV-a) by Company ID (CUI) or registration number (Nr Înregistrare MO). Automatically obtains a session cookie an
- `law.ro-official-gazette.date-issues.list`: Read gazette issues for a specific date.
- `law.ro-official-gazette.emonitor-calendar.get`: Scan a month to identify dates with gazette publications. Iterates each day up to today and returns dates that have at least a published part. Only part names
- `law.ro-official-gazette.issue.get`: Fetch and parse the table of contents (SUMAR) of a gazette issue PDF into structured act records; an upstream request per call (the PDF is downloaded once).
- `law.ro-official-gazette.modifications.search`: Read all gazette issues published within a date range.
- `law.ro-official-gazette.site.search`: Site-wide search across products (books) and articles. Returns paginated results mixing both types. Products include a price; articles may include a text snippe
- `law.ru-legislation.authorities.list`: List the authorities that issue Russian legal acts, for use as a search filter.
- `law.ru-legislation.blocks.list`: Lists the portal's publication sections (President, Government, federal authorities, regional authorities, ...) with their block code, name and description. The
- `law.ru-legislation.document-types.list`: Lists the portal's document types (Федеральный закон, Указ, Постановление, ...) as document_type_id/name pairs for use as the document_type_id filter of search_
- `law.ru-legislation.document.get`: Read an officially published Russian legal act by its 16-digit publication number.
- `law.ru-legislation.documents.search`: Searches officially published legal acts. Returns a record per publication (publication_number is the portal's 16-digit official publication number, consumed

## Laws and gazettes: Asia, Pacific and Americas

Search and read laws, acts and official gazettes from India, Australia, Canada and more.

- `government.au-legal-databases.database-years.get`: Read database years for Australian legal databases.
- `government.au-legal-databases.databases.list`: List databases for Australian legal databases.
- `government.in-gazette.gazette-directory.get`: Read gazette directory for Indian official gazettes.
- `government.in-gazette.gazettes-by-category.get`: Read gazettes by category for Indian official gazettes.
- `government.in-gazette.recent-gazettes.get`: Read recent gazettes for Indian official gazettes.
- `law.au-sa-legislation.legislation.search`: Full-text search of the South Australian legislation register.
- `law.au-sa-legislation.versions.get`: Read the home page of a piece of South Australian legislation: its title, responsible minister and notices.
- `law.ca-documents.employment-standards.search`: Search employment standards for Canadian legal documents.
- `law.ca-documents.jurisdiction-databases.get`: Read jurisdiction databases for Canadian legal documents.
- `law.ca-documents.jurisdiction.list`: List jurisdiction for Canadian legal documents.
- `law.id-kemenkeu.document-files.get`: List the downloadable files associated with a legal document. Returns file metadata including type codes, descriptions, filenames, sizes, and download URLs. The
- `law.id-kemenkeu.document-types.list`: List all document type categories available in the database with their document counts. Returns the full vocabulary of document types accepted by the bentuk fil
- `law.id-kemenkeu.document.get`: Read full metadata for a single legal document by its slug.
- `law.id-kemenkeu.documents.search`: Full-text search over the Indonesian Ministry of Finance legal document database. Supports filtering by document type, year, status, issuing body, topic, and la
- `law.in-indiankanoon.document.get`: Read the full text and detailed metadata for a specific legal document by its numeric ID.
- `law.in-indiankanoon.documents.search`: Full-text search over Indian legal documents (judgments, laws, sections). Supports plain keywords and advanced query syntax including 'doctypes:<court_slug>', '
- `law.in-indiankanoon.recent.list`: Read recent judgments added today across different courts.
- `law.in-indiankanoon.suggestions.get`: Read keyword and case autocomplete suggestions for a given search term prefix.
- `law.in-legislation.act.get`: Read act for Indian legislation.
- `law.in-legislation.act.search`: Search act for Indian legislation.
- `law.in-legislation.acts.list`: List acts for Indian legislation.
- `law.in-legislation.all-sections.list`: List all sections for Indian legislation.
- `law.in-legislation.chapter.get`: Read chapter for Indian legislation.
- `law.in-legislation.chapters.list`: List chapters for Indian legislation.
- `law.in-legislation.section-crossreferences.get`: Read section crossreferences for Indian legislation.
- `law.in-legislation.section-navigation.get`: Read section navigation for Indian legislation.
- `law.in-legislation.section.get`: Read section for Indian legislation.
- `law.kh-moj.books.list`: Read paginated books from the Ministry of Justice library.
- `law.kh-moj.laws.list`: Read laws and regulations from the Ministry of Justice.
- `law.kh-moj.news.list`: Read news and events from the Ministry of Justice.
- `law.kh-moj.search`: Search legal documents using the Ministry of Justice legal search engine. Returns legal documents matching the query with title, URL, description, date, and cat
- `law.kh-moj.site.search`: Search the entire Ministry of Justice site. Only Khmer-language queries return results; English queries return an empty results array. Results include news, eve

## Legal guides and lawyers

Read plain-language legal guides and find lawyers and practice areas.

- `law.immigration-directory-filters.get`: Read country, language and state options for an immigration law directory.
- `law.practice-areas.list`: List legal practice areas and their directory pages.
- `law.public-questions.search`: Search public legal question headlines and page links.
- `law.us-justia.guides.list`: Browse legal guide topics.
- `law.us-justia.law-schools.list`: List the US states that have law school pages.
- `law.us-justia.state-directory.list`: List lawyer directory categories and links for a state, organized by Practice Areas, Cities, and Counties tabs. Useful for discovering the category structure of
- `law.us-nevada-bar.directory-links.list`: Fetches the State Bar of Nevada Lawyer Referral Service page in a round trip and returns the exact href URL of the link labeled "LRS self-directed portal" and
- `law.us-nolo.article.get`: Fetch the full content of a Nolo legal article by its URL path. Returns the article title, author (when credited), last-updated date (when displayed), structure
- `law.us-nolo.articles.search`: Search Nolo articles by keyword. Returns paginated results with article titles, URLs, and text snippets. Results come from the www.nolo.com subdomain. Paginatio
- `law.us-nolo.dictionary-term.get`: Fetch a legal term definition from the Nolo legal dictionary. Returns the canonical term heading and its full plain-text definition. The term is looked up by sl
- `law.us-nolo.recent-articles.list`: Fetch recently modified articles from Nolo.com. Returns a flat list of articles ordered by most recently updated. Each article carries a title and full URL. No
- `law.us-nolo.renters-overview.get`: Fetch the top-level Renters' Rights hub from Nolo.com. Returns named sub-topic categories (e.g. Security Deposits, Evictions) with URLs, plus a Key Articles lis
- `law.us-nolo.renters-states.list`: Fetch the index of all U.S. states (and D.C.) with links to their state-specific renters' rights pages on Nolo.com. Returns 51 entries (50 states + D.C.).
- `law.us-nolo.search`: Global search across all Nolo network content including articles, products, and dictionary terms. Returns results from multiple Nolo network sites (nolo.com, la
- `law.us-nolo.tenant-guides.get`: Tenant-rights topics for an US state, such as evictions and security deposits, with guide links.
- `law.us-nolo.trending-articles.list`: Fetch trending articles from Nolo.com. Returns a flat list of currently popular articles with titles and URLs. No parameters; the server curates the trending se
- `law.us-wex.category-entries.list`: Read entries belonging to a specific legal area/category with pagination support.
- `law.us-wex.entries.list`: List Wex legal encyclopedia entries for a specific letter or all letters. Returns term names, slugs, and URLs. Each letter page contains all entries starting wi
- `law.us-wex.entries.search`: Search Wex entries by keyword in the term name. Performs a case-insensitive substring match against entry names in the alphabetical index. By default searches t
- `law.us-wex.entry.get`: Read the full definition, legal areas/categories, and related terms for a specific Wex entry by its slug.
- `legal.notices.search`: Search French official legal notices about companies.

## Legislatures and bills

Follow legislatures, bills, sessions and legislative calendars.

- `government.audit-assembly-decision.get`: Read audit assembly decision in Turkey.
- `government.budget-amendments.list`: List budget amendments in Brazil.
- `government.de-parliament.sessions.search`: Search sessions for German parliamentary proceedings.
- `government.de-parliament.votes.search`: Search votes for German parliamentary proceedings.
- `government.legislative-broadcasts.list`: List legislative broadcasts in Texas.
- `government.legislative-events.list`: List legislative events for the chosen market or collection.
- `government.us-california-assembly.event-media.get`: Read event media for California assembly events.
- `government.us-california-assembly.events.list`: List events for California assembly events.
- `government.us-florida-senate-media.schedule.get`: Read schedule for Florida senate broadcasts.
- `government.us-florida-senate-media.video.get`: Read video for Florida senate broadcasts.
- `government.us-florida-senate-media.videos.search`: Search videos for Florida senate broadcasts.
- `government.us-georgia-house.meetings.list`: Read the livestream schedule for a given date.
- `government.us-legislature-calendar.events`: Read the Michigan House of Representatives TV schedule for a calendar day.
- `government.us-massachusetts-legislature.events.search`: List all hearings and events from the Massachusetts Legislature for a given month and year.
- `government.us-new-jersey-legislature.proceedings.list`: Read the New Jersey Legislature proceedings (floor sessions, committee meetings, commission meetings) scheduled for a calendar day, a row per proceeding,.
- `government.us-pennsylvania-legislature.session-status.get`: Read the current session status and schedule for the specified chamber of the Pennsylvania General Assembly.
- `government.us-texas-house.broadcasts.list`: List scheduled, live and completed broadcasts of the Texas House of Representatives.
- `government.us-texas-house.events.list`: List the Texas House of Representatives' broadcast events, with their dates and committees.
- `government.us-texas-legislature.bill-actions.get`: Read bill actions for Texas legislature.
- `government.us-texas-legislature.bill-stages.get`: Read bill stages for Texas legislature.
- `government.us-texas-legislature.bills.search`: Search bills for Texas legislature.
- `government.us-texas-legislature.committees.list`: List committees for Texas legislature.

## Patents and trademarks

Search patents and trademarks, trademark journals and IP registers.

- `government.intellectual-property-registers.list`: List intellectual property registers in Switzerland.
- `government.objected-trademarks.search`: Search objected trademarks in India.
- `government.trademark-classes.list`: List trademark classes in India.
- `government.trademark-journal.get`: Read trademark journal in India.
- `government.trademark-journals.list`: List trademark journals in India.
- `legal.trademarks.search`: Search published trademark registers by name on a chosen trademarks website.
- `patents.document.get`: Read the title, abstract, claims and public filing dates of a published patent.
- `patents.in-ipindia.application-status.get`: Read the official application status metadata from the InPASS portal for a given Indian patent application number.
- `patents.us-ptos.patent.get`: Read an US patent or pre-grant publication by document number, with its abstract and claims.

## US laws

Search and read US federal and state statutes, regulations and court rules.

- `law.us.citations.resolve`: Turn written legal citations into the exact US law sections they name.
- `law.us.corpora.list`: The bodies of US law that can be searched, with what each covers.
- `law.us.section.changes`: The recorded additions, amendments and removals of one US law section.
- `law.us.section.cited-by`: The US Code and federal regulation sections whose text refers to a given section.
- `law.us.section.cross-state`: Provisions in other states that cover the same subject as a state statute.
- `law.us.section.get`: One US law section's citation, place in its code, status and official source links.
- `law.us.section.neighbors`: The sections that follow a US law section in statutory order.
- `law.us.section.text`: The full official text of one US law section, optionally as it stood on a past date.
- `law.us.statutes.browse`: Walk a US legal code level by level, from titles to chapters, parts and sections.
- `law.us.statutes.count`: Count Sections in Scope.
- `law.us.statutes.search`: Search US federal and state statutes, regulations and court rules by question or keyword.
