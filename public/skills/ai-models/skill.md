---
name: pramaan-ai-models
version: 1.0.0
description: Use Pramaan superpowers and missions when working with ai models.
---

# AI models

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
| `ai-models.arena.best-coding-models` | Get best coding models. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.image-edit-leaderboard` | Get image-editing leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.image-to-video-leaderboard` | Get image-to-video leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.leaderboard-overview` | Get leaderboard overview. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.list-available-models` | List available models. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.search-leaderboard` | Get search leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.text-leaderboard` | Get text leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.text-to-image-leaderboard` | Get text-to-image leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.text-to-video-leaderboard` | Get text-to-video leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.arena.vision-leaderboard` | Get vision leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.cost-per-task` | Get cost per task. | Per successful call; quote exact input for the maximum price. |
| `ai-models.llm-providers-leaderboard` | Get provider leaderboard. | Per successful call; quote exact input for the maximum price. |
| `ai-models.models-list` | List models. | Per successful call; quote exact input for the maximum price. |
| `ai-models.speech-image-video-models` | List speech, image and video models. | Per successful call; quote exact input for the maximum price. |
| `ai.judgment.calibrated` | Return a decision model's probability for each supplied option using your question and context. These are model estimates, not a guarantee of accuracy or measured calibration on your data. Evaluate thresholds on your own labelled examples before acting on them. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.create` | Create a named compute endpoint; nonzero minimum workers incur ongoing usage charges. Container settings may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.delete` | Delete your endpoint and end its rental. Running containers may have their own external effects. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.get` | Read your named endpoint configuration without secrets or connection addresses. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.health` | Read queue and worker counts for your endpoint. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.releases.list` | List your endpoint release history without secrets or raw change values. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.update` | Change your endpoint configuration; always-on workers incur ongoing usage charges. Environment values are forwarded only. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoint.workers.list` | List bounded worker state for your endpoint, without worker addresses. | Per successful call; quote exact input for the maximum price. |
| `gpu.endpoints.list` | List only your named compute endpoints. | Per successful call; quote exact input for the maximum price. |
| `gpu.job.cancel` | Stop a job you submitted that is still queued or running. A job already ended is left as it is. The compute a stopped job used is charged to the job itself, not to this call. | Per successful call; quote exact input for the maximum price. |
| `gpu.job.get` | Read the state and result of a job you submitted. The provider keeps a finished job's result for about 30 minutes; after that the job is not found. Does not charge again. | Per successful call; quote exact input for the maximum price. |
| `gpu.job.submit` | Run one job on a GPU endpoint you created, and wait for it. Your own container runs your code, so it may have its own outside effects. At the time limit the job is cancelled and ends as timed_out. A worker that fails or is stopped at the limit is still charged for the compute it used. Holds up to about $87 for a one-hour limit. Send an Idempotency-Key: a retry returns the first job and is never run twice. | Per successful call; quote exact input for the maximum price. |
| `gpu.queue.purge` | Remove waiting jobs from your queue; running containers continue and may have their own external effects. | Per successful call; quote exact input for the maximum price. |
| `gpu.registries.list` | List only your named registries, without secret values. | Per successful call; quote exact input for the maximum price. |
| `gpu.registry.create` | Save a named registry credential upstream; its secret is forwarded once, never logged, saved here or returned. | Per successful call; quote exact input for the maximum price. |
| `gpu.registry.delete` | Delete your registry and end any rental. Deployed containers may have their own external effects. | Per successful call; quote exact input for the maximum price. |
| `gpu.registry.get` | Read your named registry, without secret values. | Per successful call; quote exact input for the maximum price. |
| `gpu.template.create` | Create a named container template. Environment values may contain personal data and are forwarded only. | Per successful call; quote exact input for the maximum price. |
| `gpu.template.delete` | Delete your template and end any rental. Deployed containers may have their own external effects. | Per successful call; quote exact input for the maximum price. |
| `gpu.template.get` | Read your named template, without secret values. | Per successful call; quote exact input for the maximum price. |
| `gpu.template.update` | Change your container template. Environment values are forwarded only. | Per successful call; quote exact input for the maximum price. |
| `gpu.templates.list` | List only your named templates, without secret values. | Per successful call; quote exact input for the maximum price. |
| `gpu.volume.create` | Create a named persistent volume, billed monthly by size; up to 4096 GB. | Per successful call; quote exact input for the maximum price. |
| `gpu.volume.delete` | Delete your volume and end any rental. Deployed containers may have their own external effects. | Per successful call; quote exact input for the maximum price. |
| `gpu.volume.get` | Read your named volume, without secret values. | Per successful call; quote exact input for the maximum price. |
| `gpu.volume.update` | Rename or grow your persistent volume; the higher rental price is accepted before resizing. | Per successful call; quote exact input for the maximum price. |
| `gpu.volumes.list` | List only your named volumes, without secret values. | Per successful call; quote exact input for the maximum price. |
| `llm.chat` | Generate one stateless conversation turn with text and/or tool calls. Messages, tool results and arguments may contain personal data. The application runs tools and supplies their results on the next call; saved conversations are not supported. Send Accept: text/event-stream to receive the reply as it is generated. | Per successful call; quote exact input for the maximum price. |
| `llm.complete` | Generate a text reply to a chat of system, user and assistant messages; returns the text, why it stopped and token usage. | Per successful call; quote exact input for the maximum price. |
| `llm.complete-bulk` | Generate text replies for up to 16 message rows as a job; each row carries your own id. | Per successful call; quote exact input for the maximum price. |
| `llm.complete-illustrated` | Generate an ordered reply of text and images as a job. Prompts, inputs and generated images may depict people; files are kept for seven days. | Per successful call; quote exact input for the maximum price. |
| `llm.models.list` | List opaque model handles and documented context, output and feature limits. Generation using these handles needs a compatible operation. | Per successful call; quote exact input for the maximum price. |
| `llm.tokens.count` | Count input tokens for a chat without generating a reply; token counts depend on the chosen quality tier. | Per successful call; quote exact input for the maximum price. |
| `memory.add` | Store up to 50 text messages verbatim as private memories. Use extraction for inferred facts. | Per successful call; quote exact input for the maximum price. |
| `memory.connector.delete` | Permanently delete an import connector and stop its imports. Needs confirm: true. By default the documents it already imported are kept; deleteDocuments: true erases them too, which can include people's messages and files. Pass the ref from memory.connectors.list. | Per successful call; quote exact input for the maximum price. |
| `memory.connector.get` | Read one import connector: its state, how many documents it imported and its latest import run, optionally the last 10 runs with the titles of items that failed. Pass the ref from memory.connectors.list. Returns no imported content or credentials; failed-item titles come from your own source. | Per successful call; quote exact input for the maximum price. |
| `memory.connectors.list` | List your import connectors (Notion, Google Drive, OneDrive, Gmail, GitHub, S3, web crawler, Granola) that feed documents into a namespace, each with its state and a handle for memory.connector.get and memory.connector.delete. Returns connector labels and counts only, never imported content or credentials. | Per successful call; quote exact input for the maximum price. |
| `memory.document.add` | Add text or a URL to a namespace so it becomes searchable memory; returns its processing status and a ref for follow-ups. | Per successful call; quote exact input for the maximum price. |
| `memory.document.delete` | Permanently delete one stored document and everything learned from it, by id or by the ref memory.document.add returned. | Per successful call; quote exact input for the maximum price. |
| `memory.document.get` | Read one stored document's content, title, summary, metadata and processing state, by id or by the ref memory.document.add returned. | Per successful call; quote exact input for the maximum price. |
| `memory.document.update` | Replace one stored document's content (and optionally its metadata) without changing its id, by id or by the ref memory.document.add returned. | Per successful call; quote exact input for the maximum price. |
| `memory.documents.list` | List the documents stored for a namespace, newest first, with their processing state. | Per successful call; quote exact input for the maximum price. |
| `memory.entities.list` | List your private user, agent, app and session entities, with logical identifiers. | Per successful call; quote exact input for the maximum price. |
| `memory.entity.create` | Create a private entity under your memory scope. | Per successful call; quote exact input for the maximum price. |
| `memory.entity.delete` | Delete an owned entity and its memories as a job; confirmation must be true. | Per successful call; quote exact input for the maximum price. |
| `memory.entity.get` | Read a private entity using your logical identifier. | Per successful call; quote exact input for the maximum price. |
| `memory.event.get` | Poll one owned memory operation, optionally returning its private facts. | Per successful call; quote exact input for the maximum price. |
| `memory.events.list` | Poll the private memory operation feed; no raw payloads or account-wide counts are returned. | Per successful call; quote exact input for the maximum price. |
| `memory.export.create` | Create a structured private-memory export as a job, capped at 1000 source facts and 5 MiB. | Per successful call; quote exact input for the maximum price. |
| `memory.export.get` | Read a completed private structured export after checking its source facts. | Per successful call; quote exact input for the maximum price. |
| `memory.extraction.create` | Extract personal facts from up to 50 messages as a job; temporal enrichment may finish later. | Per successful call; quote exact input for the maximum price. |
| `memory.filters.list` | List filter choices drawn from your private facts and entities. | Per successful call; quote exact input for the maximum price. |
| `memory.forget` | Forget the memories in a namespace that match a description. Previews by default; pass dryRun: false to delete for real. | Per successful call; quote exact input for the maximum price. |
| `memory.history.list` | List private fact changes; this is memory history rather than the operation feed. | Per successful call; quote exact input for the maximum price. |
| `memory.item.delete` | Permanently delete one owned fact. Confirmation must be true. | Per successful call; quote exact input for the maximum price. |
| `memory.item.feedback` | Save usefulness feedback on a private memory, without scoring a person. | Per successful call; quote exact input for the maximum price. |
| `memory.item.get` | Read one private remembered fact by its reference. | Per successful call; quote exact input for the maximum price. |
| `memory.item.history` | Read changes to one private fact; source conversations are optional. | Per successful call; quote exact input for the maximum price. |
| `memory.item.update` | Update one private fact or its metadata after checking ownership. | Per successful call; quote exact input for the maximum price. |
| `memory.items.list` | List private facts with owned references, at most 50 per page. | Per successful call; quote exact input for the maximum price. |
| `memory.items.search` | Search private remembered facts with filters and owned references, at most 50 results. | Per successful call; quote exact input for the maximum price. |
| `memory.namespace.get` | Read a namespace's settings: the background text that guides how its documents are interpreted, and when it was created and last changed. The background text is whatever you set, and may mention people. | Per successful call; quote exact input for the maximum price. |
| `memory.namespace.update` | Set or clear the background text of a namespace, which guides how its documents are interpreted and what is remembered from them. Replaces the previous text. The namespace must already exist (it exists once documents have been added). The text is stored as you send it, so do not put secrets in it. | Per successful call; quote exact input for the maximum price. |
| `memory.namespaces.list` | List the document sets (namespaces) this account has stored memory for, with their document and memory counts. | Per successful call; quote exact input for the maximum price. |
| `memory.profile-buckets.delete` | Delete profile categories you added to a namespace. Previews by default; pass dryRun: false to delete for real. Names that are not yours to delete, such as shared defaults, are left in place. Returns the categories in effect, which may mention people. | Per successful call; quote exact input for the maximum price. |
| `memory.profile-buckets.get` | Read the profile categories in effect for a namespace: the names and descriptions that guide how memories are sorted into a profile. Includes shared defaults you cannot edit as well as the ones you added with memory.profile-buckets.upsert. Returns your own descriptions, which may mention people. | Per successful call; quote exact input for the maximum price. |
| `memory.profile-buckets.upsert` | Add or update profile categories for a namespace (name to description). The descriptions guide how memories are sorted into a profile. Up to 50 per call; categories you leave out are untouched and shared defaults cannot be changed. Returns every category now in effect. | Per successful call; quote exact input for the maximum price. |
| `memory.profile.get` | Read the profile built from a namespace's memories: durable facts, current context and per-category summaries of the subject. | Per successful call; quote exact input for the maximum price. |
| `memory.profile.structured.get` | Read an owned user's structured personal profile where profiles are enabled. | Per successful call; quote exact input for the maximum price. |
| `memory.scope.delete` | Erase an owned memory scope as a job, capped at 1000 facts; larger scopes are refused before deletion. | Per successful call; quote exact input for the maximum price. |
| `memory.search` | Search what has been remembered for a namespace: learned memories, passages from stored documents, or both. | Per successful call; quote exact input for the maximum price. |
| `memory.summary.get` | Read private summaries whose ownership can be proved; untyped or unowned values are omitted. | Per successful call; quote exact input for the maximum price. |
| `model.catalog.get` | Get a public model and its pinned input guidance. Prepares an owner-bound key for bounded execution when its compute price is known. | Per successful call; quote exact input for the maximum price. |
| `model.catalog.list` | List public models with opaque, owner-bound keys and pinned versions. Returns at most 50 per page. | Per successful call; quote exact input for the maximum price. |
| `model.catalog.search` | Search public models, collections and documentation titles. No upstream links or model identifiers are returned. | Per successful call; quote exact input for the maximum price. |
| `model.collection.get` | Get a collection and its public models, up to 50 models per page. | Per successful call; quote exact input for the maximum price. |
| `model.collections.list` | List public collections of models, using owner-bound collection keys. | Per successful call; quote exact input for the maximum price. |
| `model.documentation.get` | Read bounded model documentation with identifying names and external links removed. | Per successful call; quote exact input for the maximum price. |
| `model.examples.list` | Read up to 3 public model examples per call. Example outputs are copied to your files; personal media and text may be returned. | Per successful call; quote exact input for the maximum price. |
| `model.prediction.get` | Read the state and available output of your own model prediction. Outputs can contain personal text or media; expired upstream output is unavailable. | Per successful call; quote exact input for the maximum price. |
| `model.predictions.list` | List only your own model predictions. Returns status and references, without inputs, outputs or logs. | Per successful call; quote exact input for the maximum price. |
| `model.run` | Run a pinned public model as a job with validated named inputs. Outputs may contain personal text or media. Runtime is capped at 600 seconds; the highest compute tier can cost at most 7.32 USD. | Per successful call; quote exact input for the maximum price. |
| `model.run-bulk` | Run up to 100 pinned public models as one job. Every row has your own id. Each job step submits or polls one row; failed rows are free. Each row can cost at most 7.32 USD, so the whole-request maximum is 732 USD. | Per successful call; quote exact input for the maximum price. |
| `model.version.get` | Get the input guidance for the exact public model version pinned by your model key. | Per successful call; quote exact input for the maximum price. |
| `model.versions.list` | List pinned versions of a public model with owner-bound model keys, up to 50 per page. | Per successful call; quote exact input for the maximum price. |
| `text.ai.allowance-check` | Check up to 5,000 Unicode code points against an explicit generated-text allowance. Confidence is not a measured percentage of generated words. Excerpts may contain personal text. Maximum estimated cost $0.5967. | Per successful call; quote exact input for the maximum price. |
| `text.ai.detect` | Estimate how likely a text is machine-written: returns a probability from 0 to 1, most reliable for English. The score is an estimate to review, not proof. | Per successful call; quote exact input for the maximum price. |
| `text.analyze` | Analyze submitted text for requested summaries, topics, intentions and sentiment; content may contain personal data. Holds a provisional ceiling of $0.135 per requested feature, up to $0.540. | Per successful call; quote exact input for the maximum price. |
| `text.blog-outline.generate` | Write an outline for a blog post on a topic, with title ideas and sections. | Per successful call; quote exact input for the maximum price. |
| `text.chunks.select` | Pick the passages most relevant to a question that fit within a token budget. | Per successful call; quote exact input for the maximum price. |
| `text.classify` | Sort a text into categories (your own or general ones), with a confidence for each. | Per successful call; quote exact input for the maximum price. |
| `text.content.check` | Run selected text analyses as bounded independent chunk reports for up to 5,000 Unicode code points. Metrics are per chunk; cross-chunk comparisons can be missed. Text excerpts may contain personal data. Maximum estimated full-suite cost $10.7406. | Per successful call; quote exact input for the maximum price. |
| `text.content.check-bulk` | Run selected analyses on up to 20 texts as one background job, one immutable text chunk per paid step. Every row returns independent chunk reports keyed by your own id. A failed step fails the whole job, which is free. Personal excerpts may be returned. Maximum estimated full-suite cost $214.812. | Per successful call; quote exact input for the maximum price. |
| `text.dictionary.lookup` | Look up a word or phrase of up to 100 characters, returning translations and related source terms. Maximum estimated cost $0.001; no match is free. | Per successful call; quote exact input for the maximum price. |
| `text.email.draft` | Draft a professional email from a short description of the situation, with subject line options. | Per successful call; quote exact input for the maximum price. |
| `text.embed` | Turn a list of texts into embedding vectors for search, clustering or classification; returns the vectors, their length and the opaque space they live in. | Per successful call; quote exact input for the maximum price. |
| `text.embed-bulk` | Embed up to 16 rows as one background job, with exactly one text per row. Each result carries your row id. Failed rows are free. | Per successful call; quote exact input for the maximum price. |
| `text.embed-contextual` | Embed supplied chunks in the context of their own document, preserving your chunk boundaries. Takes up to eight documents, 64 chunks and 32,768 UTF-8 bytes. | Per successful call; quote exact input for the maximum price. |
| `text.embed-options` | Embed supplied text with explicit domain, purpose, language, normalization and compact number formats. Unsupported combinations are refused; truncation is off by default. | Per successful call; quote exact input for the maximum price. |
| `text.entities.extract` | Find the people, organisations, places and other named things a text mentions, with how central each one is to that text. It reads only the text you send and looks nobody up. Names of people in your text are sent to the source to be read. | Per successful call; quote exact input for the maximum price. |
| `text.facts.check` | Review reported support for up to 100 factual claims in 5,000 Unicode code points as a job. Zero support can mean unverifiable, and is not a false verdict. Claims may contain personal text. Maximum estimated cost $5.967. | Per successful call; quote exact input for the maximum price. |
| `text.fuzzy.compare` | Compare two supplied names or addresses and return a match verdict. Both true and false answers cost one operation; no person score is returned. | Per successful call; quote exact input for the maximum price. |
| `text.glossary.create` | Create a glossary of preferred translations, up to five language pairs and 500 terms. Terms can contain personal data. | Per successful call; quote exact input for the maximum price. |
| `text.glossary.delete` | Permanently delete your glossary after explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `text.glossary.get` | Read your glossary and up to 500 preferred translations; terms can contain personal data. | Per successful call; quote exact input for the maximum price. |
| `text.glossary.list` | List your glossaries; names and terms may contain personal data. | Per successful call; quote exact input for the maximum price. |
| `text.glossary.update` | Rename a glossary, merge or replace up to 100 terms, or remove a dictionary with explicit confirmation. | Per successful call; quote exact input for the maximum price. |
| `text.grammar.check` | Correct grammar and spelling in up to 5,000 characters, with correction spans where available. Text may contain personal data. Maximum estimated cost $3.398. | Per successful call; quote exact input for the maximum price. |
| `text.judge` | Ask a yes/no question about a text and get the probability that the answer is yes, judged by a model. Live-unverified: the model's id is the source's own published name and is settled by the first live call. | Per successful call; quote exact input for the maximum price. |
| `text.language.detect` | Detect the language of a text; returns the best-matching language with its confidence and, where reported, the next-best alternatives. Confidences are probabilities, not certainties. | Per successful call; quote exact input for the maximum price. |
| `text.languages.list` | List the languages text translation accepts as source or target, with display names and, where reported, native names and formality support. | Per successful call; quote exact input for the maximum price. |
| `text.markdown.render` | Turn Markdown into HTML with inline styles. | Per successful call; quote exact input for the maximum price. |
| `text.plagiarism.check` | Check source matches in up to 2,000 Unicode code points. Text and excerpts may contain personal data. Slow scans can time out; use text.plagiarism.check-long for slow or longer texts. Maximum estimated cost $0.23868. | Per successful call; quote exact input for the maximum price. |
| `text.plagiarism.check-long` | Check up to 100,000 UTF-16 units as independent chunks of at most 2,000 Unicode code points. Word-weighted scores are estimates and matches across boundaries may be missed. Text and excerpts may contain personal data. Use text.plagiarism.check for short texts. Maximum estimated cost $13.1274. | Per successful call; quote exact input for the maximum price. |
| `text.prompt.compress` | Shorten a language model prompt while keeping its meaning, with the tokens saved. | Per successful call; quote exact input for the maximum price. |
| `text.quality.check` | Estimate content quality in up to 5,000 Unicode code points with a label and confidence distribution. Scores describe the content, never its author. Maximum estimated cost $0.5967. | Per successful call; quote exact input for the maximum price. |
| `text.readability.check` | Return eleven named readability metrics and bounded difficult sentences for up to 5,000 Unicode code points. Sentence excerpts may contain personal text. Maximum estimated cost $0.5967. | Per successful call; quote exact input for the maximum price. |
| `text.redact` | Redact personal data (names, email addresses, phone numbers, locations, financial numbers and secrets) from any text you pass, by placeholder, mask or removal. Detection is automatic and can miss or over-match; check high-stakes output. | Per successful call; quote exact input for the maximum price. |
| `text.rerank` | Rank a list of documents against a query by relevance; returns them best first with the document text and a score. | Per successful call; quote exact input for the maximum price. |
| `text.rewrite` | Rewrite up to 5,000 characters with an explicit transformation, tone or style; returns up to five alternatives. Maximum estimated cost $2.50. | Per successful call; quote exact input for the maximum price. |
| `text.scan.create` | Store one text scan of up to 5,000 Unicode code points and return its reports and reference. Explicit retain:true and approval required; submitted personal text persists upstream with no published delete endpoint. Maximum estimated cost $10.7406. | Per successful call; quote exact input for the maximum price. |
| `text.scan.create-bulk` | Retain and scan up to 3 texts with explicit retain:true in every row and approval. Native batches require matching options, at most 1,000 Unicode code points per row, and cannot enforce quality or exclusion options. Returns reports; native rows are not guaranteed retrievable and carry no saved references. Unsupported native inputs are declined before payment; use text.scan.create for those rows. Personal text persists upstream with no published delete endpoint. Maximum estimated full-suite cost $32.2218. | Per successful call; quote exact input for the maximum price. |
| `text.scan.get` | Read your own retained scan by its reference or list handle. Original personal text is omitted unless includeText:true. Historical scan usage is not charged again. | Per successful call; quote exact input for the maximum price. |
| `text.scans.list` | List up to 100 of your recorded saved scans per page, with labels, creation times, selected checks and handles for text.scan.get. No scan bodies are returned. | Per successful call; quote exact input for the maximum price. |
| `text.sentiment.analyze` | The tone of a text (positive, negative, neutral or mixed), with scores and the tone of each aspect mentioned. | Per successful call; quote exact input for the maximum price. |
| `text.social-post.generate` | Write a social media post for a platform from a topic or a link, with hashtags. | Per successful call; quote exact input for the maximum price. |
| `text.tokens.count` | Estimate how many tokens a text uses for a language model, and whether it fits the model's context. | Per successful call; quote exact input for the maximum price. |
| `text.translate` | Translate a text into a target language, with an optional source language and tone; returns the translation and, when no source language was sent, the language detected in the input. | Per successful call; quote exact input for the maximum price. |
| `text.translate-custom` | Translate up to 5,000 characters using your glossary, with optional context and model preference. Maximum estimated cost $0.125. | Per successful call; quote exact input for the maximum price. |
| `text.transliterate` | Convert up to 1,000 characters between writing systems without translating their meaning. Maximum estimated cost $0.02. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `agent.find` | Find local property professionals. | Sum of step prices; quote exact input and options for the maximum price. |
| `agent.run.review` | Recorded steps, errors, durations and per-observation costs for one checked run; a trace reader, never a score against expected outputs. | Sum of step prices; quote exact input and options for the maximum price. |
| `ai.overview.citations` | For a list of queries: the AI overview Naver shows, the sources it cites, and whether a given domain is cited or ranks in the web results. | Sum of step prices; quote exact input and options for the maximum price. |
| `answer.compare` | One question asked of several answer sources, with where they agree and where they differ. | Sum of step prices; quote exact input and options for the maximum price. |
| `bot.signup.guard` | Combine a challenge, email and network observations with one rate allowance into signup handling. | Sum of step prices; quote exact input and options for the maximum price. |
| `copy.edit` | A draft with spelling and grammar fixed, rewritten in the tone you name, and scored for readability and quality. | Sum of step prices; quote exact input and options for the maximum price. |
| `fact.check` | A claim checked against several pages, for and against, with no overall verdict. | Sum of step prices; quote exact input and options for the maximum price. |
| `gpu.cost.cleanup` | Find endpoints with no queued or running work and only idle workers, approve their deletion, and inventory volumes without guessing their use. | Sum of step prices; quote exact input and options for the maximum price. |
| `gpu.job.run` | Run one job on your own compute endpoint after approval, returning untrusted output and the reported terminal status. | Sum of step prices; quote exact input and options for the maximum price. |
| `gpu.model.serve` | Create a zero-minimum-worker GPU endpoint, read its health counts and approve one bounded test job. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.ask` | A question answered from what has been remembered about a subject, sentence by sentence, each sentence citing the remembered items it is taken from; says plainly when nothing remembered answers it. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.correct` | Find and read an exact owned fact, preserve its old text and history, then correct it without approval or approve its deletion. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.export` | Create a structured copy of a subject's private memories, checked against owned source facts. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.learn.conversation` | Preserve old conversation memory, store exact messages, extract facts and list their confirmed references for checking. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.pages.refresh` | Re-read selected stored web pages and replace only complete, changed content, returning its old value. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.profile.setup` | Set selected namespace profile categories and optional background, returning old settings and the built profile. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.remember` | Notes or pages added to a subject's memory, one document per note under a stable id, with the store's own answer for each. A note that looks like it holds a secret is not stored. | Sum of step prices; quote exact input and options for the maximum price. |
| `memory.review` | The documents stored in one subject's memory, listed by title, summary and state (two pages), with the remembered profile and, on request, the namespace's own counts. Read-only. Learned memories and the documents' content are not listed. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.compare` | Identical prompt cases compared across quality tiers with exact-answer scores and token usage. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.find` | A public model for a job (image, audio, text), with its input guide, versions and examples. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.pick` | Compare quality tiers against your exact-answer cases and show available catalogue limits. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.print.check` | A 3D model checked for printing and rigging, with a readable list of fixes. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.run-batch` | Up to 100 inputs through one pinned model as a job, a row per input and a spend ceiling. | Sum of step prices; quote exact input and options for the maximum price. |
| `model.run-job` | One public model run with validated inputs, read back until done, with the output copied to your files. | Sum of step prices; quote exact input and options for the maximum price. |
| `prompt.evaluate` | Run an exact prompt on a bounded existing dataset and score completed replies by exact text equality without showing the expected answers. | Sum of step prices; quote exact input and options for the maximum price. |
| `prompt.shrink` | A shorter prompt that gives the same answers on your test cases, with tokens saved. | Sum of step prices; quote exact input and options for the maximum price. |
| `text.redact-checked` | Personal data removed from a text, then re-scanned to show nothing of the listed kinds is left. | Sum of step prices; quote exact input and options for the maximum price. |
| `toolcall.evaluate` | Whether a model picks the right tool and arguments on your test cases, scored in code. | Sum of step prices; quote exact input and options for the maximum price. |
| `translate.with-glossary` | A text translated with your preferred terms, source language detected, names transliterated where asked. | Sum of step prices; quote exact input and options for the maximum price. |
