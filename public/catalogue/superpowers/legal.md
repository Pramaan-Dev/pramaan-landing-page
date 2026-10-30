# Superpowers: Legal

Courts, cases, dockets, judges and statutes.

## Company court records

Find court cases that name a company.

- `companies.litigation.list`: Company court records with case identifiers, parties, dates and status. Allegations are not findings of guilt. At most 100 rows.

## Court records

Search US court cases, dockets, filings, judges, opinions and oral arguments.

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
- `law.judge.get`: Read one public judge records with judicial names and biography. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.judges.search`: Search public judge records with judicial names and biography. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.opinion.get`: Read one public opinion records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.opinions.list`: List public opinion records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-argument.get`: Read one public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-arguments.list`: List public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.
- `law.oral-arguments.search`: Search public argument records; captions and text may name people. Estimated call budget is 0.001112 USD using a provisional allocation.

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
