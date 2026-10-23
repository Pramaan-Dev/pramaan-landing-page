# Missions: Legal

Courts, cases, dockets, judges and statutes.

- `statute.answer`: Answer a legal question from the statute. An answer to a legal question from the exact statute text, with its changes and what cites it, quoted. (steps: law.us.statutes.search, law.us.section.get, law.us.section.text, law.us.section.changes, law.us.section.cited-by, llm.complete)
- `judge.opinions.brief`: Brief on a judge's opinions. A judge's profile with the court's opinions and arguments on a topic, with quotes copied from the opinion text. (steps: law.judges.search, law.judge.get, law.opinions.list, law.oral-arguments.search)
- `statute.compare.states`: Compare state laws on a subject. How states treat the same subject, with the sections side by side. (steps: law.us.statutes.search, law.us.section.cross-state, law.us.section.text)
- `company.legal.record`: Look up a company's legal record. Company court records, insolvency proceedings, registered charges and related-party transactions as facts without a verdict. (steps: companies.litigation.list, companies.registry.charges.list, companies.registry.charge-history.list, companies.related-transactions.list, companies.insolvency.search, companies.registry.charge.get)
- `docket.digest`: Read a court docket in plain words. A case docket read: parties, recent entries and filings in plain words, with new entries since a date. (steps: law.dockets.search, law.docket.get, law.docket-entries.list, law.filings.list, law.docket-entry.get, llm.complete)
- `case.law.research`: Research case law. Relevant public cases for a question, with opinions read and each claim tied to a quoted passage. (steps: law.cases.search, law.case.get, law.opinion.get, law.citations.lookup, llm.complete)
- `contract.review`: Review a contract for risky phrases. Check contract text against caller-supplied required and risky phrases, with verified quotes and optional sourced notes. (steps: document.parse, document.extract, llm.complete)
- `party.court-records.search`: Search court records by name. Possible court-record name matches, without asserting party identity. (steps: law.dockets.search, law.cases.search, law.docket.get)
- `citations.verify`: Verify legal citations in a draft. A draft's legal citations checked: each found, resolved to a section, and the quote compared to the text. (steps: law.citations.lookup, law.us.citations.resolve, law.us.section.text)
