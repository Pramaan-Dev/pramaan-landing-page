---
name: pramaan-documents-files
version: 1.0.0
description: Use Pramaan superpowers and missions when working with documents & files.
---

# Documents & files

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
| `data.csv.clean` | Tidy messy CSV text (delimiters, encodings, quotes, stray commas) and return clean CSV. | Per successful call; quote exact input for the maximum price. |
| `data.csv.to-json` | Convert CSV text to JSON rows, with the detected delimiter and columns. | Per successful call; quote exact input for the maximum price. |
| `data.fake.generate` | Make up realistic example records (names, addresses, emails) for testing, in a chosen locale. | Per successful call; quote exact input for the maximum price. |
| `data.feedback.send` | Send explicit feedback to the data operator; message is transient and never logged. | Per successful call; quote exact input for the maximum price. |
| `data.intelligence.batch-run` | Run up to 100 company, technology, funding, employee, job or public-ad lookups as one background job. Every flat result carries your row id and lookup type, with bounded lists for search rows. Personal data: employee names, titles, public profile URLs and available work email addresses and phone numbers may be returned. Failed rows are free. Cost is the sum of selected lookups and requested search limits; no expensive lookup is selected automatically. Cancellation stops local waiting; accepted work may continue at the source. For native batch processing, the 100-row maximum is USD 99.00 before the platform fee; the platform quotes the billed maximum before submission. | Per successful call; quote exact input for the maximum price. |
| `data.json.diff` | Compare two JSON values and list what was added, removed and changed. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.delete` | Cancel a monitor you own and stop paying for it. Terminal: the monitor cannot be resumed. A repeat of the same delete succeeds, so retries are safe. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.fields` | Every field a monitor may name on one dataset, with the operators each takes and whether the live (realtime) search or the index answers it: the catalog to write saved-search filters and watched-list tracks against. Free to read. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.list` | List your monitors: saved-search (discovery) and watched-list (entity) monitors across every dataset, newest first, each with a ref for the update, delete, runs and run-read follow-ups. Only your own monitors are listed. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.run.read` | One run of one of your monitors, with every record it delivered: on saved-search monitors the things that newly matched, on watched-list monitors each change plus the entity's current fields. The polling read that stands in for notifications; free to read. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.runs` | A monitor's run history, newest first: when each run ran, whether it succeeded, what it delivered and what it spent. Free to read. Each row carries a ref for data.monitor.run.read, which returns the records the run delivered. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.search.preview` | Check a saved-search monitor before creating it: whether the search can be watched, how many records it covers, a sample of them, and what one delivered record will cost on the tier you chose. Nothing is created and nothing is charged. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.track.preview` | Try a watched-list monitor's track before creating anything: the sample change and record a real delivery would carry, with the track validated exactly as the create capabilities would validate it. Nothing is saved and nothing is charged. | Per successful call; quote exact input for the maximum price. |
| `data.monitor.update` | Pause, resume, reschedule or edit a monitor you own: the schedule, the per-run cap, the freshness tier (watched-list people) and the watched list (watched-list monitors). Filters and track are fixed at creation. A change that would raise the monthly worst case is declined. Returns the monitor's current state. | Per successful call; quote exact input for the maximum price. |
| `document.contract.extract` | Read a contract and pull out its parties, dates, payment terms, governing law and other key terms. | Per successful call; quote exact input for the maximum price. |
| `document.convert` | Convert one image or PDF up to 1 MiB into another format, or one DOCX up to 100 MB into PDF, returning a hosted file. Office layout can shift when fonts are missing or documents contain SmartArt, fields, tracked changes or charts. DOCX conversion usually costs USD 0.06, with up to USD 0.30 held per file at a provisional rate. May process personal document contents; conversion is not verification. | Per successful call; quote exact input for the maximum price. |
| `document.convert-bulk` | Convert up to 10 documents as one background job, up to 100 MB in total. DOCX conversion usually costs USD 0.06 per row, with up to USD 3.00 held for 10 rows at a provisional rate. Each result carries your row id. Unanswered rows are free. DOCX to PDF may shift Office layout and may process personal document contents. | Per successful call; quote exact input for the maximum price. |
| `document.extract` | Extract structured JSON fields from one document (PDF, Office file or image), guided by a JSON schema or a prompt. | Per successful call; quote exact input for the maximum price. |
| `document.formats.list` | List document and image input formats and whether each is currently available. No document is processed or charged. | Per successful call; quote exact input for the maximum price. |
| `document.identity.extract` | Extract identity facts from both sides of a document as a job. Processes personal document data; returns up to 10 detections. Each service call is capped at 25 seconds. Maximum estimate USD 3.99. | Per successful call; quote exact input for the maximum price. |
| `document.parse` | Turn a PDF, Office file, image or web document (by URL or base64 content) into clean text. | Per successful call; quote exact input for the maximum price. |
| `document.parse-layout` | Read document text, personal details present in it, physical PDF pages and typed layout blocks as a job. Supports bounded one-shot processing up to 30 seconds. Price ceiling: (1 + maxPages + 4 per JSON/summary/guard option + 4 × (maxPages + 1) for redaction + 1 for no retention) credits at $0.00083 per credit; maximum $4.16494. | Per successful call; quote exact input for the maximum price. |
| `document.parsing.create` | Turn a large or slow PDF, Office file, image or web document into clean text, as a background job. | Per successful call; quote exact input for the maximum price. |
| `document.records.extract` | Read fixed facts from one record image or PDF, up to 1 MiB per side. Returns only document facts such as names, addresses, registration numbers, dates, bank or vehicle details. Extraction is not registry verification. | Per successful call; quote exact input for the maximum price. |
| `document.resume.parse` | Parse a resume or CV (PDF, Office file or image) into structured candidate data: contact details, skills, work history and education. | Per successful call; quote exact input for the maximum price. |
| `document.schema.validate` | Validate an object extraction schema without changing its fields or rules. Supplied examples may contain personal data; unsafe or oversized results are rejected. | Per successful call; quote exact input for the maximum price. |
| `document.signature.extract` | Extract up to ten handwritten signature images as a job. Images contain personal data and are copied to your file storage. Maximum estimate USD 5.70. | Per successful call; quote exact input for the maximum price. |
| `document.template.create` | Save a PDF template with HTML, styles and sample personal document text; content persists until removed. | Per successful call; quote exact input for the maximum price. |
| `document.template.get` | Read the chosen version of your saved PDF template, including personal document text and sample data. | Per successful call; quote exact input for the maximum price. |
| `document.template.update` | Change a saved PDF template or publish its draft; supplied personal document text persists until removed. | Per successful call; quote exact input for the maximum price. |
| `document.translate` | Translate one uploaded document, at most 10 MiB, as a job. Sources reject formats whose billable size cannot be verified before upload. Maximum estimated cost $25. | Per successful call; quote exact input for the maximum price. |
| `document.wallet.connect` | Start a person-approved hosted identity flow and return its protected authorization link. | Per successful call; quote exact input for the maximum price. |
| `document.wallet.disconnect` | Revoke access to a person’s document wallet. | Per successful call; quote exact input for the maximum price. |
| `document.wallet.document.get` | Fetch one consented wallet document using public catalogue codes and issuer parameters. Copies personal document content to your file storage, at most 10 MiB. Maximum estimate USD 0.22. | Per successful call; quote exact input for the maximum price. |
| `document.wallet.get` | Read a document wallet connection state, with personal contact fields only on request. | Per successful call; quote exact input for the maximum price. |
| `document.wallet.national-id.get` | Read a consented national identity record. Name, birth date or year, address, photo, XML and full identifier are explicit choices; files are copied to your storage, up to 10 MiB each. | Per successful call; quote exact input for the maximum price. |
| `document.watermark` | Add named watermark text to one document of up to 1 MiB and return a hosted copy. Placement is defined by the source. | Per successful call; quote exact input for the maximum price. |
| `signature.digest.sign` | Sign a SHA-256 digest with your connected key. A call made with an organisation key signs without an approver; calls made as a team member need approval. Choose an account with Pramaan-Account; keep a key-service audit trail and restrict credentials to signing and reading that one public key. Access-refusal, disabled-key and unknown-key errors mean nothing was signed; after an ambiguous failure the signature may or may not have been made. This does not create a signed PDF, prove consent or identify a signer. | Per successful call; quote exact input for the maximum price. |
| `signature.document.get` | Read uploaded signing document readiness, optionally returning its title. Document titles may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `signature.document.upload` | Upload a PDF from your file storage for signing, at most 10 MiB. The document may contain personal data. Maximum estimate USD 0.22. | Per successful call; quote exact input for the maximum price. |
| `signature.request.audit` | Read an owned signing audit as events or a copied PDF up to 10 MB. The audit can contain signer names, contacts and signing times. | Per successful call; quote exact input for the maximum price. |
| `signature.request.cancel` | Request cancellation and notify signers. Does not erase copies already held by other parties. | Per successful call; quote exact input for the maximum price. |
| `signature.request.create` | Create link-based national identity eSign for one uploaded PDF and at most ten signers. Handles signer names, mobile numbers and optional birth years; returns protected signer links. Maximum estimate USD 2.50. | Per successful call; quote exact input for the maximum price. |
| `signature.request.delete` | Permanently delete a signing request and its associated stored data. Requires explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `signature.request.download` | Download completed signed document content as PDF or ZIP, at most 10 MB, to your file storage. Not ready files are refused without copying. | Per successful call; quote exact input for the maximum price. |
| `signature.request.get` | Read signing status, optionally including signer names, emails and signing dates. | Per successful call; quote exact input for the maximum price. |
| `signature.request.remind` | Email a reminder to one current signer. Reads their name and email to verify the target. | Per successful call; quote exact input for the maximum price. |
| `signature.request.send` | Send documents for signature by email. Handles document content and signer names and emails; at most 10 MB, 20 signers and 200 fields. | Per successful call; quote exact input for the maximum price. |
| `signature.request.send-configured` | Send a configured signing invitation for a PDF up to 10 MB to at most 20 people. Charged at acceptance; explicit stamps add their approved face value. Returns acceptance and a reference. Provisional maximum with stamps: USD 2264.40. | Per successful call; quote exact input for the maximum price. |
| `signature.request.send-template` | Send one template for signature by email. Handles signer names, emails and filled text values. | Per successful call; quote exact input for the maximum price. |
| `signature.request.stop` | Stop an owned signing request while it is awaiting signatures. Requires explicit confirmation and an idempotency key; no signer notification promise. Maximum estimate USD 1.14. | Per successful call; quote exact input for the maximum price. |
| `signature.requests.list` | List sender-owned signing requests with titles, dates and status; returns no signer contacts. | Per successful call; quote exact input for the maximum price. |
| `signature.template.create` | Create a reusable template from document content and role and field labels, at most 10 MB. The job ends at acceptance, before any interactive editing. | Per successful call; quote exact input for the maximum price. |
| `signature.template.delete` | Delete a stored template from the connected sender account. Copies held by other parties are unaffected. | Per successful call; quote exact input for the maximum price. |
| `signature.template.get` | Read template role and field labels, default message and field positions; these may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `signature.templates.list` | List sender-owned templates with titles and role labels, which may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `signature.timestamp.create` | Get a validated signed timestamp token for a SHA-256 digest, without sending the document. Checks the digest, nonce, signature, certificate usage and pinned certificate chain before storing the token. Certificate revocation is not checked. A timeout is final and no other source is tried. | Per successful call; quote exact input for the maximum price. |
| `storage.bucket.create` | Create a private bucket in your own storage account. | Per successful call; quote exact input for the maximum price. |
| `storage.bucket.delete` | Permanently delete an empty bucket; refuses a bucket that contains objects, versions or uploads. | Per successful call; quote exact input for the maximum price. |
| `storage.buckets.list` | List the buckets in your own file storage. | Per successful call; quote exact input for the maximum price. |
| `storage.object.copy` | Copy an object up to 1 GiB within your connected account. Larger copies use upload parts. | Per successful call; quote exact input for the maximum price. |
| `storage.object.delete` | Permanently delete up to 100 files by path from your own file storage. | Per successful call; quote exact input for the maximum price. |
| `storage.object.download-url` | Create a short-lived signed URL that downloads one file from your own file storage. | Per successful call; quote exact input for the maximum price. |
| `storage.object.get` | Download a file up to 25 MB from your storage bucket; return base64 up to 1 MiB or an accepted hosted file. Object contents may include personal data. | Per successful call; quote exact input for the maximum price. |
| `storage.object.head` | Read the size and media type of an object without downloading its contents. | Per successful call; quote exact input for the maximum price. |
| `storage.object.put` | Upload (store) a file up to 25 MB, or inline base64 up to 1 MiB, in your own bucket. Bytes and names may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `storage.object.restore` | Request restoration of an archived object. Your storage account pays archive retrieval fees. | Per successful call; quote exact input for the maximum price. |
| `storage.object.tags.get` | Read the complete tag set of an object. Tags may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `storage.object.tags.set` | Replace all tags of an object; an empty set clears them. Tags may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `storage.object.upload-url` | Create a short-lived signed URL that uploads one file to your own file storage. | Per successful call; quote exact input for the maximum price. |
| `storage.object.versions.list` | List object versions and delete markers in your bucket, walking at most ten storage pages per call. | Per successful call; quote exact input for the maximum price. |
| `storage.objects.list` | List files and folders in a bucket of your own file storage. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.abort` | Discard all parts of an unfinished upload, and delete its part files. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.complete` | Complete an upload from its stored parts and delete its part files. The object is assembled in your bucket as sent: its content is not checked. Unclear outcomes are checked before any retry. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.create` | Start a multipart upload of an object in your bucket. Then upload each chunk as a part file (POST /v1/files?kind=part), store it with storage.upload.part.put, and finish with storage.upload.complete. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.part.copy` | Copy a byte range up to 64 MiB into one upload part. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.part.put` | Store one part of a multipart upload, at most 8 MiB, from a part file: raw bytes uploaded with POST /v1/files?kind=part. Every part except the last must be at least 5 MiB, and the parts of one upload may total 1 GiB. Part files are deleted when the upload completes or is aborted. Bytes may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `storage.upload.parts.list` | List parts of an upload, walking at most ten storage pages per call. | Per successful call; quote exact input for the maximum price. |
| `storage.uploads.list` | List unfinished uploads with follow-up references, walking at most ten storage pages per call. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `contract.review` | Check contract text against caller-supplied required and risky phrases, with verified quotes and optional sourced notes. | Sum of step prices; quote exact input and options for the maximum price. |
| `contract.send.sign` | Generate a contract PDF from owned template fields and prepare an approved signature draft, with optional owner-checked follow-up. | Sum of step prices; quote exact input and options for the maximum price. |
| `contract.sign.cancel` | Read a live signature request, approve cancellation and signer notification, then read back whether cancellation completed. | Sum of step prices; quote exact input and options for the maximum price. |
| `contract.sign.request` | Approve sending uploaded documents for signing, or collect an existing request: optionally remind one signer and store completed signed files and audit in a private bucket. | Sum of step prices; quote exact input and options for the maximum price. |
| `contract.template.send` | Read a ready contract template, verify exact signer roles and named text fields, approve sending, then read its signing status. | Sum of step prices; quote exact input and options for the maximum price. |
| `csv.prepare` | A messy CSV cleaned and turned into JSON rows, with the detected delimiter and the rows changed. | Sum of step prices; quote exact input and options for the maximum price. |
| `data.ask` | A question answered from tables of your own database that you name: their rows are read, counts and sums are worked out in code, and a model answers from those rows only, naming the tables it rests on. | Sum of step prices; quote exact input and options for the maximum price. |
| `dataset.find` | Shortlist public datasets on a topic, with each one's providers, formats and licence read from its own page. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.ask` | One question answered from one document: the passages are ranked against the question and the answer names the passages it rests on. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.classify` | What kind of document this is and what language it is in, from a public URL or base64 content. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.compare` | What changed between two versions of one document: both parsed, the differences computed in code over the two whole texts, and each one described in a checked sentence. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.extract-checked` | Fields from one document, every returned value checked against the text the document parsed to. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.generate` | Generate a PDF from unchanged caller fields and an identity-checked owned template, with app calls approved individually. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.intake.route` | A file received and sent to the right reader (resume, contract, record or general), with the fields back. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.layout.map` | Map a document's headings, tables and pages, with the page number of each block. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.redact` | Redact text or mask Aadhaar number instances in one file, returning the reported output and explicit coverage limits. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.summarize` | A document in a paragraph and key points, from a public URL or base64 content. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.timestamp.seal` | Obtain a trusted timestamp token for a supplied SHA-256 digest, then approve signing that same digest with your connected key. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.translate-checked` | A document translated into one language, paragraph structure kept, from a public URL or base64 content. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.wallet.fetch` | A person-approved document pulled from their wallet (consent link, state check, one document), then disconnected. | Sum of step prices; quote exact input and options for the maximum price. |
| `document.watermark-copy` | A named, watermarked PDF copy of a file for sharing. | Sum of step prices; quote exact input and options for the maximum price. |
| `documents.ask` | A question answered from the documents stored in one of your vector indexes: the nearest passages are read, ranked against the question, and the answer names the passages it rests on. | Sum of step prices; quote exact input and options for the maximum price. |
| `documents.convert.batch` | Convert up to 10 files as one job, each checked for page count and size, formats checked first. | Sum of step prices; quote exact input and options for the maximum price. |
| `documents.index` | The builder's documents parsed, split into passages and stored in one of the builder's vector indexes for search, each passage embedded to fit that index. | Sum of step prices; quote exact input and options for the maximum price. |
| `documents.remove` | Vector entries removed from one of your own search indexes by exact id, read first so only what is stored is removed, behind a human approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `drive.weather.risk` | A planned drive scored for weather risk along the road at the time each leg is driven. | Sum of step prices; quote exact input and options for the maximum price. |
| `file.malware.check` | Read existing file analysis and behaviour or scan a public link, retaining uncertainty. | Sum of step prices; quote exact input and options for the maximum price. |
| `file.share-link` | Upload a new file to a confirmed private bucket, check its metadata and return a time-limited download link. | Sum of step prices; quote exact input and options for the maximum price. |
| `files.index` | Files in your own storage parsed and stored for search: each file's text, chunked, embedded to fit a vector index you already have and upserted into it, with its path and text as metadata. | Sum of step prices; quote exact input and options for the maximum price. |
| `form.fill` | Fill named fields in an existing session, verify their exact values, then submit after approval. | Sum of step prices; quote exact input and options for the maximum price. |
| `form.upload.submit` | Fill exact named values and files in an existing owned form session, read each value back, then approve one submission and check its acknowledgement. | Sum of step prices; quote exact input and options for the maximum price. |
| `pdf.template.manage` | A PDF template created or updated, shown with made-up sample data before it is published. | Sum of step prices; quote exact input and options for the maximum price. |
| `proposal.generate` | Write a proposal from an identity-checked company profile and caller-owned offer, then generate its approved PDF. | Sum of step prices; quote exact input and options for the maximum price. |
| `rows.llm.fill` | One instruction applied to up to 16 rows at a time, each reply checked against the shape you asked for. | Sum of step prices; quote exact input and options for the maximum price. |
| `storage.cleanup` | Find old large files in one folder level, copy every enumerated version into a private archive and request approval before deleting unchanged originals. | Sum of step prices; quote exact input and options for the maximum price. |
| `storage.inventory` | The buckets in your own file storage, and when asked what each holds: file, folder and byte counts of the first page of every bucket's root. | Sum of step prices; quote exact input and options for the maximum price. |
| `table.enrich` | Rows in a table of your own database filled in with company data: industry, size band, description, location and, on request, the website's technologies. Only empty cells are written, by each row's own id. | Sum of step prices; quote exact input and options for the maximum price. |
