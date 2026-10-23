# Superpowers: Gen AI

Make images, video, voice and music, and call language models.

## 3D models

Check 3D models for printing and rigging, and list animation presets.

- `model3d.animations.list`: List free animation presets with neutral keys and supported skeleton types. Filters are applied locally; up to 200 choices per call.
- `model3d.print-analyze`: Analyze a model's printability, including holes and optional wall thickness at a chosen print size. Free job; accepts a public model URL.
- `model3d.rig-check`: Check whether a GLB model can be rigged and return the recommended skeleton type. Runs as a free job; accepts a public model URL.

## Ad image tools

Translate, resize and vary the images in an ad.

- `image.ad.localize`: Translate the visible copy in an ad while preserving its layout and branding; up to 4 copies.
- `image.ad.resize`: Resize an ad while rebuilding its layout for the target dimensions; up to 4 copies.
- `image.ad.vary`: Create ad variations along one chosen axis while preserving copy and branding; up to 4 copies.

## AI avatars

Create talking avatars, lip-sync and reusable video templates.

- `video.avatar.create`: Create a named avatar from a description, photo or footage. Runs as a job; likeness and voice data may be processed. Photo and footage sources require supported file validation.
- `video.avatar.delete`: Permanently delete an avatar you created, including its likeness; stock avatars cannot be deleted.
- `video.avatar.get`: Get the name, consent status and readiness of an avatar. Returns likeness metadata.
- `video.avatar.look.delete`: Permanently delete a caller appearance; deleting the last appearance also removes its avatar.
- `video.avatar.look.get`: Get an avatar appearance and supported rendering tiers. Returns likeness metadata.
- `video.avatar.look.update`: Rename an appearance belonging to the caller.
- `video.avatar.looks.list`: List appearances for an avatar, including likeness metadata and neutral keys.
- `video.avatar.render`: Render a speaking avatar as a video job, returning a stored video and measured duration. Handles submitted speech and likeness. Text is capped at 5,000 characters.
- `video.avatars.list`: List caller avatars or stock studio characters. Returns names and likeness metadata; private account records outside this caller are omitted.
- `video.lipsync.create`: Match one face in a supplied video to supplied speech audio. Processes faces and voices; runs as a job and keeps the result for 7 days. Current source maximum: $0.847, including face detection and up to 60 seconds of rendering.
- `video.lipsync.delete`: Permanently delete an owned terminal lip-sync media record. Pending work cannot be cancelled by deletion.
- `video.lipsync.download`: Copy the completed lip-sync video, including its face and voice content, to platform storage. Outputs above 25 MB are refused; needs file storage.
- `video.lipsync.get`: Read the status, duration and progress of an owned lip-sync video. Returns media metadata only.
- `video.lipsync.options`: List available lip-sync processing qualities without account details.
- `video.lipsync.update`: Change the output filename of an owned lip-sync video.
- `video.lipsyncs.list`: List only the caller's lip-sync media records, with handles for follow-up calls. Sparse pages may be empty and still have a next cursor.
- `video.render.delete`: Delete your rendered video and its personal content; confirm must be true.
- `video.render.get`: Read your rendered video's metadata, which may contain personal text; optionally copy its finished video within 25 seconds, up to 25 MB.
- `video.render.update`: Change your video's name, personal description, sharing or button settings; scene content stays the same.
- `video.renders.list`: List your rendered videos and their names, descriptions and states; metadata may contain personal text. Empty pages can still have a next page.
- `video.talking-photo.generate`: Animate a portrait photo using supplied speech audio. Processes a face and voice; runs as a job and keeps the video for 7 days. Current source maximum: $16.80 for fast quality or $33.60 for best quality at 300 seconds.
- `video.template.create`: Create a private template from a caller avatar render. Starts with no variables. Copies likeness, media and script into a stored template.
- `video.template.delete`: Remove a caller template from use. Soft deletion leaves previously rendered videos intact.
- `video.template.get`: Get the caller template variables, bindable elements and scenes, including script text.
- `video.template.update`: Rename a template belonging to the caller.
- `video.template.variables.update`: Replace the complete set of template variables, including text, image, video, audio, avatar and voice bindings.
- `video.templates.list`: List templates created by this caller. Unowned workspace templates are omitted.

## AI memory

Store documents and facts for an AI to remember, search and forget.

- `memory.add`: Store up to 50 text messages verbatim as private memories. Use extraction for inferred facts.
- `memory.connector.delete`: Permanently delete an import connector and stop its imports. Needs confirm: true. By default the documents it already imported are kept; deleteDocuments: true erases them too, which can include people's messages and files. Pass the ref from memory.connectors.list.
- `memory.connector.get`: Read one import connector: its state, how many documents it imported and its latest import run, optionally the last 10 runs with the titles of items that failed. Pass the ref from memory.connectors.list. Returns no imported content or credentials; failed-item titles come from your own source.
- `memory.connectors.list`: List your import connectors (Notion, Google Drive, OneDrive, Gmail, GitHub, S3, web crawler, Granola) that feed documents into a namespace, each with its state and a handle for memory.connector.get and memory.connector.delete. Returns connector labels and counts only, never imported content or credentials.
- `memory.document.add`: Add text or a URL to a namespace so it becomes searchable memory; returns its processing status and a ref for follow-ups.
- `memory.document.delete`: Permanently delete one stored document and everything learned from it, by id or by the ref memory.document.add returned.
- `memory.document.get`: Read one stored document's content, title, summary, metadata and processing state, by id or by the ref memory.document.add returned.
- `memory.document.update`: Replace one stored document's content (and optionally its metadata) without changing its id, by id or by the ref memory.document.add returned.
- `memory.documents.list`: List the documents stored for a namespace, newest first, with their processing state.
- `memory.entities.list`: List your private user, agent, app and session entities, with logical identifiers.
- `memory.entity.create`: Create a private entity under your memory scope.
- `memory.entity.delete`: Delete an owned entity and its memories as a job; confirmation must be true.
- `memory.entity.get`: Read a private entity using your logical identifier.
- `memory.event.get`: Poll one owned memory operation, optionally returning its private facts.
- `memory.events.list`: Poll the private memory operation feed; no raw payloads or account-wide counts are returned.
- `memory.export.create`: Create a structured private-memory export as a job, capped at 1000 source facts and 5 MiB.
- `memory.export.get`: Read a completed private structured export after checking its source facts.
- `memory.extraction.create`: Extract personal facts from up to 50 messages as a job; temporal enrichment may finish later.
- `memory.filters.list`: List filter choices drawn from your private facts and entities.
- `memory.forget`: Forget the memories in a namespace that match a description. Previews by default; pass dryRun: false to delete for real.
- `memory.history.list`: List private fact changes; this is memory history rather than the operation feed.
- `memory.item.delete`: Permanently delete one owned fact. Confirmation must be true.
- `memory.item.feedback`: Save usefulness feedback on a private memory, without scoring a person.
- `memory.item.get`: Read one private remembered fact by its reference.
- `memory.item.history`: Read changes to one private fact; source conversations are optional.
- `memory.item.update`: Update one private fact or its metadata after checking ownership.
- `memory.items.list`: List private facts with owned references, at most 50 per page.
- `memory.items.search`: Search private remembered facts with filters and owned references, at most 50 results.
- `memory.namespace.get`: Read a namespace's settings: the background text that guides how its documents are interpreted, and when it was created and last changed. The background text is whatever you set, and may mention people.
- `memory.namespace.update`: Set or clear the background text of a namespace, which guides how its documents are interpreted and what is remembered from them. Replaces the previous text. The namespace must already exist (it exists once documents have been added). The text is stored as you send it, so do not put secrets in it.
- `memory.namespaces.list`: List the document sets (namespaces) this account has stored memory for, with their document and memory counts.
- `memory.profile-buckets.delete`: Delete profile categories you added to a namespace. Previews by default; pass dryRun: false to delete for real. Names that are not yours to delete, such as shared defaults, are left in place. Returns the categories in effect, which may mention people.
- `memory.profile-buckets.get`: Read the profile categories in effect for a namespace: the names and descriptions that guide how memories are sorted into a profile. Includes shared defaults you cannot edit as well as the ones you added with memory.profile-buckets.upsert. Returns your own descriptions, which may mention people.
- `memory.profile-buckets.upsert`: Add or update profile categories for a namespace (name to description). The descriptions guide how memories are sorted into a profile. Up to 50 per call; categories you leave out are untouched and shared defaults cannot be changed. Returns every category now in effect.
- `memory.profile.get`: Read the profile built from a namespace's memories: durable facts, current context and per-category summaries of the subject.
- `memory.profile.structured.get`: Read an owned user's structured personal profile where profiles are enabled.
- `memory.scope.delete`: Erase an owned memory scope as a job, capped at 1000 facts; larger scopes are refused before deletion.
- `memory.search`: Search what has been remembered for a namespace: learned memories, passages from stored documents, or both.
- `memory.summary.get`: Read private summaries whose ownership can be proved; untyped or unowned values are omitted.

## AI model rankings

Compare AI models by leaderboard rank, cost and task.

- `ai-models.arena.best-coding-models`: Get best coding models.
- `ai-models.arena.image-edit-leaderboard`: Get image-editing leaderboard.
- `ai-models.arena.image-to-video-leaderboard`: Get image-to-video leaderboard.
- `ai-models.arena.leaderboard-overview`: Get leaderboard overview.
- `ai-models.arena.list-available-models`: List available models.
- `ai-models.arena.search-leaderboard`: Get search leaderboard.
- `ai-models.arena.text-leaderboard`: Get text leaderboard.
- `ai-models.arena.text-to-image-leaderboard`: Get text-to-image leaderboard.
- `ai-models.arena.text-to-video-leaderboard`: Get text-to-video leaderboard.
- `ai-models.arena.vision-leaderboard`: Get vision leaderboard.
- `ai-models.cost-per-task`: Get cost per task.
- `ai-models.llm-providers-leaderboard`: Get provider leaderboard.
- `ai-models.models-list`: List models.
- `ai-models.speech-image-video-models`: List speech, image and video models.

## AI video editing

Edit, enlarge, reframe, join and transcribe videos.

- `video.background.remove`: Remove the background from an uploaded video, which may contain people. Input up to 500 MB and 300 seconds; output retains transparency.
- `video.dialogue.transcribe`: Transcribe spoken personal content from a video into words with absolute millisecond timings and local labels, as a job. Source at most one hour; upload at most 8 MB. Needs file storage.
- `video.edit`: Edit a video, including personal video and voices. A source that cannot honor the clip length or size declines, and may normalize frame rate or resolution; source audio is retained where supported. Jobs and files are kept for 7 days.
- `video.faces.detect`: Detect visible faces in a supplied video. Returns cropped previews and appearance times, without identifying people. Runs as a job; previews are kept for 7 days.
- `video.frame.extract`: Extract the first, middle or last frame of an uploaded video, which may contain people. Input up to 500 MB and 300 seconds; returns up to three image files.
- `video.merge`: Join two to ten uploaded videos in the supplied order, which may contain people and voices. Inputs up to 500 MB in total and 300 seconds combined.
- `video.reframe`: Reframe a video by filling new canvas around it. Runs as a job; input duration is checked before payment. Maximum current-tier cost 3.60 USD; other rates are provisional.
- `video.thumbnail.get`: Copy your video's thumbnail, which may show a person's face, within 25 seconds; JPEG or GIF up to 20 MB.
- `video.translation.languages.list`: List the documented language and dialect choices for video translation.
- `video.translations.list`: Read the language states of translations of your personal video; this call does not start rendering or return translated files.
- `video.upscale`: Enlarge a video, including personal video and voices. A source that cannot honor the clip length or size declines. Source audio is retained where supported; large outputs may use a smaller scale. Jobs and files are kept for 7 days.

## AI video generation

Make video clips from text, images and product pictures.

- `video.animate`: Animate first, last or timed images into a clip, including images of people. Timed auto length rounds the last time up. Jobs and files are kept for 7 days.
- `video.draft.generate`: Generate a 480p video preview from text and optional uploaded images. Returns a draft reference when the job finishes; enhancement needs a later operation. The preview file is kept for 7 days.
- `video.effect-templates.list`: List named visual effects and the number of reference images each requires. Free, immediate catalogue; no saved template refs.
- `video.effects.generate`: Render a named visual effect using one or two supplied images. May process faces; runs as a job and keeps the video for 7 days. Current source spending estimate: $6.30; template-specific prices and a proven maximum remain unverified.
- `video.extend`: Generate continuation footage from one video, including personal video or voices; the result is the added clip. Jobs and files are kept for 7 days.
- `video.generate`: Generate a short video clip from a text prompt. Runs as a job; the result has links to the video files, kept for 7 days.
- `video.generate-bulk`: Generate videos for up to 8 prompt rows as a job; each row carries your own id. Prompts and generated videos may depict people.
- `video.generate-configured`: Generate a clip with explicit length, framing, resolution and audio controls. Sources decline unsupported options. Jobs and files are kept for 7 days.
- `video.motion-options.list`: List video concept controls or camera motion phrases. This is free; supported controls depend on the generation source.
- `video.multi-shot.generate`: Generate a video from a story brief or three to five timed shots. Custom shot durations must sum to the video duration. Runs as a job; files are kept for 7 days.
- `video.product-ad.generate`: Generate a product advertisement from uploaded product and style images. Runs as a job; files are kept for 7 days.
- `video.product-ugc.generate`: Generate a presenter product video from uploaded character and product images. Images may depict a person; the generated video is kept for 7 days.

## Content checks

Check text for AI writing, plagiarism, quality and readability.

- `text.ai.allowance-check`: Check up to 5,000 Unicode code points against an explicit generated-text allowance. Confidence is not a measured percentage of generated words. Excerpts may contain personal text. Maximum estimated cost $0.5967.
- `text.ai.detect`: Estimate how likely a text is machine-written: returns a probability from 0 to 1, most reliable for English. The score is an estimate to review, not proof.
- `text.content.check`: Run selected text analyses as bounded independent chunk reports for up to 5,000 Unicode code points. Metrics are per chunk; cross-chunk comparisons can be missed. Text excerpts may contain personal data. Maximum estimated full-suite cost $10.7406.
- `text.content.check-bulk`: Run selected analyses on up to 20 texts as one background job, one immutable text chunk per paid step. Every row returns independent chunk reports keyed by your own id. A failed step fails the whole job, which is free. Personal excerpts may be returned. Maximum estimated full-suite cost $214.812.
- `text.facts.check`: Review reported support for up to 100 factual claims in 5,000 Unicode code points as a job. Zero support can mean unverifiable, and is not a false verdict. Claims may contain personal text. Maximum estimated cost $5.967.
- `text.plagiarism.check`: Check source matches in up to 2,000 Unicode code points. Text and excerpts may contain personal data. Slow scans can time out; use text.plagiarism.check-long for slow or longer texts. Maximum estimated cost $0.23868.
- `text.plagiarism.check-long`: Check up to 100,000 UTF-16 units as independent chunks of at most 2,000 Unicode code points. Word-weighted scores are estimates and matches across boundaries may be missed. Text and excerpts may contain personal data. Use text.plagiarism.check for short texts. Maximum estimated cost $13.1274.
- `text.quality.check`: Estimate content quality in up to 5,000 Unicode code points with a label and confidence distribution. Scores describe the content, never its author. Maximum estimated cost $0.5967.
- `text.readability.check`: Return eleven named readability metrics and bounded difficult sentences for up to 5,000 Unicode code points. Sentence excerpts may contain personal text. Maximum estimated cost $0.5967.
- `text.scan.create`: Store one text scan of up to 5,000 Unicode code points and return its reports and reference. Explicit retain:true and approval required; submitted personal text persists upstream with no published delete endpoint. Maximum estimated cost $10.7406. (needs approval)
- `text.scan.create-bulk`: Retain and scan up to 3 texts with explicit retain:true in every row and approval. Native batches require matching options, at most 1,000 Unicode code points per row, and cannot enforce quality or exclusion options. Returns reports; native rows are not guaranteed retrievable and carry no saved references. Unsupported native inputs are declined before payment; use text.scan.create for those rows. Personal text persists upstream with no published delete endpoint. Maximum estimated full-suite cost $32.2218. (needs approval)
- `text.scan.get`: Read your own retained scan by its reference or list handle. Original personal text is omitted unless includeText:true. Historical scan usage is not charged again.
- `text.scans.list`: List up to 100 of your recorded saved scans per page, with labels, creation times, selected checks and handles for text.scan.get. No scan bodies are returned.

## Dubbing

Dub speech in audio or video into another language, keeping the voices.

- `media.dubbing.create`: Dub the speech in an audio or video file into another language, keeping the speakers' voices. Dubs at most durationLimitSeconds of the source and holds the price for that much. The dubbing stays in your account until you delete it with media.dubbing.delete. Recordings of people speaking are personal data. Runs as a job.
- `media.dubbing.delete`: Permanently delete a dubbing you made with media.dubbing.create, with the source and dubbed files held for it. Pass the ref and confirm: true. There is no undo.
- `media.dubbing.get`: Check a dubbing you made with media.dubbing.create: its status, name, languages and length. Pass the ref that media.dubbing.create returned.

## Embeddings and ranking

Turn text into vectors, rank passages and count or shrink prompts.

- `media.embed`: Turn supplied text and uploaded media into vectors, with one vector per group of parts. Media may contain faces, speech or personal document data; the result contains vectors only. Up to eight inputs and 20 MiB of files.
- `text.chunks.select`: Pick the passages most relevant to a question that fit within a token budget.
- `text.embed`: Turn a list of texts into embedding vectors for search, clustering or classification; returns the vectors, their length and the opaque space they live in.
- `text.embed-bulk`: Embed up to 16 rows as one background job, with exactly one text per row. Each result carries your row id. Failed rows are free.
- `text.embed-contextual`: Embed supplied chunks in the context of their own document, preserving your chunk boundaries. Takes up to eight documents, 64 chunks and 32,768 UTF-8 bytes.
- `text.embed-options`: Embed supplied text with explicit domain, purpose, language, normalization and compact number formats. Unsupported combinations are refused; truncation is off by default.
- `text.prompt.compress`: Shorten a language model prompt while keeping its meaning, with the tokens saved.
- `text.rerank`: Rank a list of documents against a query by relevance; returns them best first with the document text and a score.
- `text.tokens.count`: Estimate how many tokens a text uses for a language model, and whether it fits the model's context.

## Image analysis

Describe an image, find objects in it and check its quality.

- `image.depth.estimate`: Estimate relative depth from an uploaded image, which may contain people. Returns a depth image, not measured distances; input up to 20 MB and 4 megapixels.
- `image.describe`: Describe an uploaded image in plain words or as scene elements with normalized boxes. Empty descriptions are a free miss.
- `image.inspect`: Inspect an uploaded image for selected content, product-fidelity or image-quality checks, including visible human content. No person is identified or ranked. Requires a configured inspection source; only requested checks are returned.
- `image.objects.detect`: Detect object labels and boxes in an uploaded image, including person labels. Returns no identities or scores of people; input up to 20 MB and 4 megapixels.

## Image editing

Remove backgrounds, erase objects, enlarge, restore and retouch images.

- `image.background.blur`: Blur an image background while preserving its subject and framing. Uploaded images may contain personal content; one result is kept for seven days.
- `image.background.remove`: Remove an image background and return a transparent foreground copy.
- `image.background.replace`: Replace an image background, preserving the foreground; up to 4 copies. A source that cannot honor an option declines.
- `image.colorize`: Colorize an uploaded black and white image, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels.
- `image.compress`: Compress one uploaded image, up to 1 MiB, and return a hosted copy. Sources decline size options they cannot honor.
- `image.deblur`: Reduce blur in an image, including personal photos; lost details may be invented. A source that cannot honor the size declines. Jobs and files are kept for 7 days.
- `image.edit`: Edit or combine 1 to 10 source images, including personal photos, into 1 to 4 outputs. Jobs and files are kept for 7 days.
- `image.erase`: Remove masked objects from an image, including personal photos. A source that cannot honor the size declines. Jobs and files are kept for 7 days.
- `image.expand`: Extend image borders or place an image on a larger canvas. Inputs may contain people. A source that cannot honor the size declines. Jobs and files are kept for 7 days.
- `image.inpaint`: Replace a masked region in an image, including personal photos. White mask areas change; black areas stay. Jobs and files are kept for 7 days.
- `image.layers.extract`: Split an image into up to ten complete transparent layers, including captions that may describe people. Runs as a job; maximum cost 0.450 USD.
- `image.layout.adjust`: Adjust image canvas, subject framing and spacing, optionally removing the background. Uploaded images may contain personal content; one result is kept for seven days.
- `image.logo.layerize`: Match up to 10 reference logos, remove them from an image, and return their boxes. At most 200 regions; no matches is still a successful result.
- `image.relight`: Relight a subject with a background description or reference image. Returns one image as a job; uploaded PNG, JPEG or WebP images must fit a 10 MiB request, with each side at least 64 pixels and at most 9437184 pixels total. Worst-case upstream cost is USD 0.08.
- `image.restore`: Restore an uploaded damaged photograph, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels.
- `image.segment`: Make a mask of the objects described in an uploaded image, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels.
- `image.shadow.add`: Add a shadow to an uploaded image subject, optionally recomposing it after background removal. Images may contain personal content; one result is kept for seven days. Style support varies by source.
- `image.subject.mask`: Extract a grayscale subject mask from an uploaded image, which may depict people or contain personal content. Returns one owned file kept for seven days; white retains the subject and black removes the background.
- `image.subject.outline`: Add an outline around an image subject, optionally extracting it onto a transparent or solid background. Uploaded images may contain personal content; one result is kept for seven days.
- `image.subject.segment`: Separate a subject, head, face or clothing from a supplied image. May process faces and bodies; returns masks without identities or scores as a job, kept for 7 days.
- `image.text.layerize`: Separate text from an uploaded design into editable text regions and a text-free base image. At most 200 regions; finding no text is still a successful result.
- `image.text.remove`: Remove all or a selected type of text from an uploaded image, which may contain personal content. One result is kept for seven days; unsupported text types decline before processing.
- `image.upscale`: Enlarge one image by scale or target size with optional enhancement. A source that cannot honor an enhancement option declines.

## Image generation

Make new images from text, in your own saved styles.

- `image.generate`: Generate 1-4 images from a text prompt; returns links to the image files, kept for 7 days.
- `image.generate-bulk`: Generate images for up to 16 prompt rows as a job; each row carries your own id. Prompts and generated images may depict people.
- `image.generate-configured`: Generate 1 to 4 images with explicit rendering controls; unsupported fields decline. Jobs and files are kept for 7 days.
- `image.marketing-stock.generate`: Generate marketing stock images from a brief and an optional uploaded brand image. Runs as a job; output files are kept for 7 days.
- `image.prompt.expand`: Expand an image prompt into detailed words and optional scene elements.
- `image.style-presets.list`: List public curated image styles with handles usable for rendering or creating a style.
- `image.style.create`: Save a private reusable image style from reference pictures or one earlier style. Pictures may depict people; saved metadata stays scoped to the caller.
- `image.style.delete`: Permanently delete the caller's saved image style; requires confirm: true.
- `image.style.get`: Read metadata of a private saved image style owned by the caller.
- `image.style.render`: Generate image alternatives using a saved private style or a public preset. Returns stored files; prompts and pictures may depict people. Unsupported output choices are refused before generation.
- `image.styles.list`: List the caller's private saved image styles, with handles for reading, rendering or deleting.
- `image.variation`: Create 1 to 8 variations from an image, including personal photos. Strength is honored only by sources supporting it. Jobs and files are kept for 7 days.

## Language models

Chat with AI models, generate text in bulk and count tokens.

- `llm.chat`: Generate one stateless conversation turn with text and/or tool calls. Messages, tool results and arguments may contain personal data. The application runs tools and supplies their results on the next call; saved conversations are not supported. Send Accept: text/event-stream to receive the reply as it is generated.
- `llm.complete`: Generate a text reply to a chat of system, user and assistant messages; returns the text, why it stopped and token usage.
- `llm.complete-bulk`: Generate text replies for up to 16 message rows as a job; each row carries your own id.
- `llm.complete-illustrated`: Generate an ordered reply of text and images as a job. Prompts, inputs and generated images may depict people; files are kept for seven days.
- `llm.models.list`: List opaque model handles and documented context, output and feature limits. Generation using these handles needs a compatible operation.
- `llm.tokens.count`: Count input tokens for a chat without generating a reply; token counts depend on the chosen quality tier.

## Media branding

Save brand colors and fonts to use in generated videos.

- `media.branding.create`: Create your branding colors and fonts; logo media is not included.
- `media.branding.delete`: Permanently delete your branding; previously rendered projects keep their baked colors and fonts.
- `media.branding.get`: Read your branding colors and fonts; logo media is not returned.
- `media.branding.update`: Change your branding colors or fonts; omitted fields keep their current values.
- `media.brandings.list`: List your branding colors and fonts, optionally including shared read-only presets; logo media is omitted.

## Media consent

Collect and check a person's recorded consent before using their likeness.

- `media.consent.attach`: Submit a person’s uploaded video and name for consent verification; returns before verification completes.
- `media.consent.create`: Create a consent challenge for a person to record; the challenge expires after 30 minutes.
- `media.consent.delete`: Permanently delete your consent recording resource; confirm must be true.
- `media.consent.get`: Read consent verification state and the person’s supplied name; recording bytes are not returned.
- `media.consents.list`: List your consent verification records and supplied names; recordings are omitted.

## Media generation

Check on or delete the media you have generated.

- `media.generation.delete`: Delete your own generated-media record where supported. Requires explicit confirmation; copied files keep their normal expiry.
- `media.generation.get`: Read the state of your own generated media without copying files or returning submitted prompts.
- `media.generations.list`: List your own media generations. Stored states can lag rendering; read a row to refresh its state. An empty page may have a continuation.

## Model catalog

Browse public AI models, their versions, documentation and examples.

- `model.catalog.get`: Get a public model and its pinned input guidance. Prepares an owner-bound key for bounded execution when its compute price is known.
- `model.catalog.list`: List public models with opaque, owner-bound keys and pinned versions. Returns at most 50 per page.
- `model.catalog.search`: Search public models, collections and documentation titles. No upstream links or model identifiers are returned.
- `model.collection.get`: Get a collection and its public models, up to 50 models per page.
- `model.collections.list`: List public collections of models, using owner-bound collection keys.
- `model.documentation.get`: Read bounded model documentation with identifying names and external links removed.
- `model.examples.list`: Read up to 3 public model examples per call. Example outputs are copied to your files; personal media and text may be returned.
- `model.version.get`: Get the input guidance for the exact public model version pinned by your model key.
- `model.versions.list`: List pinned versions of a public model with owner-bound model keys, up to 50 per page.

## Music generation

Write lyrics, extend or change music and make soundtracks.

- `audio.lyrics.generate`: Write or edit song lyrics with a title and style tags, as a background job. Returns caller-supplied or generated lyrics; these can contain personal details.
- `audio.music.extend`: Extend an uploaded music recording before or after its ends, which may contain voices. Input up to 100 MB; total output at most 300 seconds.
- `audio.music.inpaint`: Replace a selected section of uploaded music using a prompt. Returns one audio file as a job. Input must be MP3 or WAV, 6 to 380 seconds, at most 100 MB. Up to USD 0.26 is held while the job runs; the actual cost is charged on success.
- `audio.music.playlists.list`: List music playlist choices and their tempo and key ranges. Free, with exact local filters and up to 200 choices.
- `audio.music.transform`: Transform uploaded music using a prompt. Returns one audio file as a job. Input must be MP3 or WAV, 6 to 380 seconds, at most 50 MB. Up to USD 0.26 is held while the job runs; the actual cost is charged on success.
- `audio.soundtrack.generate`: Generate sound effects and background music for a supplied video. May process voices; runs as a job and keeps audio and video files for 7 days.
- `audio.stems.separate`: Separate an uploaded audio recording, which may contain voices, into up to six music stems. Runs as a job; input up to 100 MB and 300 seconds.

## Product and fashion images

Show clothes on a model, recolor products and make campaign pictures.

- `image.garment.render`: Render a garment on a white studio background from 1 to 10 photos. One output.
- `image.pose.vary`: Render new poses or camera angles while preserving the person and garment; up to 4 copies.
- `image.product-campaign.generate`: Generate four product campaign images from an uploaded product image and creative brief. Runs as a job; files are kept for 7 days.
- `image.product.material-swap`: Apply reference materials to up to 4 masked product regions. One output.
- `image.product.recolor`: Recolor up to 4 masked product regions while preserving construction and prints. One output.
- `image.try-on`: Preview clothing on a supplied person photo; returns an image, no identity or body score. A source that cannot honor the image size declines. Jobs and files are kept for 7 days.
- `image.views.generate`: Generate alternate views of a subject from one frontal image. May process faces; runs as a job and keeps images for 7 days.

## Running models

Run a public AI model on your inputs and read the result.

- `model.prediction.get`: Read the state and available output of your own model prediction. Outputs can contain personal text or media; expired upstream output is unavailable.
- `model.predictions.list`: List only your own model predictions. Returns status and references, without inputs, outputs or logs.
- `model.run`: Run a pinned public model as a job with validated named inputs. Outputs may contain personal text or media. Runtime is capped at 600 seconds; the highest compute tier can cost at most 7.32 USD.
- `model.run-bulk`: Run up to 100 pinned public models as one job. Every row has your own id. Each job step submits or polls one row; failed rows are free. Each row can cost at most 7.32 USD, so the whole-request maximum is 732 USD.

## Sound effects

Make sound effects from a written description.

- `audio.sound-effect.generate`: Sound Effects.
- `audio.sound-effects.generate`: Make a sound effect from a written prompt; returns a link to an MP3 file, kept for 7 days. Runs as a job.

## Speech to text

Turn recordings into text, subtitles and searchable transcripts.

- `audio.align`: Align supplied words to an uploaded voice recording, returning word times without speaker identities or scores. Input up to 100 MB and 300 seconds.
- `audio.model.get`: Get supported languages and recognition features for a listed model.
- `audio.models.list`: List recognition models and opaque handles for model details or configured transcription.
- `audio.redaction.create`: Remove chosen personal details from up to ten hours of single-channel audio and its transcript as a background job. Maximum cost $3.40, or $3.50 with profanity filtering.
- `audio.subtitles.create`: Transcribe up to ten hours of single-channel audio into an SRT or VTT download as a background job. May contain personal speech data. Maximum transcription cost $2.10.
- `audio.transcribe`: Transcribe a public audio URL into text with timestamped segments.
- `audio.transcribe-bulk`: Transcribe up to two single-channel recordings per background job, each at most ten hours. Results echo your row ids. May contain personal speech data. Maximum transcription cost $4.20; failed rows are free.
- `audio.transcribe-configured`: Transcribe with a listed recognition model, timed words, speaker labels, formatting, redaction and optional content analysis. Returns spoken personal data and requested extracted entities. The hold covers 10 minutes, requested channels and add-ons, plus $0.135 per analysis feature (maximum $1.356); longer audio is absorbed by the service.
- `audio.transcription.create`: Transcribe a long audio URL (podcasts, meetings) into text with timestamped segments, as a background job.
- `audio.transcription.delete`: Delete a saved transcript and its personal speech data. Requires confirm: true.
- `audio.transcription.get`: Read a saved transcript as paged text or timed words, utterances, sentences or paragraphs. May contain personal speech data.
- `audio.transcription.word-search`: Find words or phrases in a saved transcript and page through their timed occurrences. May contain personal speech data.
- `audio.transcriptions.list`: List only your saved transcripts in the last 30 days. Activity metadata may reveal personal recording activity; empty pages can still have a continuation.

## Text tools

Rewrite, classify, analyse and draft text.

- `text.analyze`: Analyze submitted text for requested summaries, topics, intentions and sentiment; content may contain personal data. Holds a provisional ceiling of $0.135 per requested feature, up to $0.540.
- `text.blog-outline.generate`: Write an outline for a blog post on a topic, with title ideas and sections.
- `text.classify`: Sort a text into categories (your own or general ones), with a confidence for each.
- `text.email.draft`: Draft a professional email from a short description of the situation, with subject line options.
- `text.entities.extract`: Find the people, organisations, places and other named things a text mentions, with how central each one is to that text. It reads only the text you send and looks nobody up. Names of people in your text are sent to the source to be read.
- `text.fuzzy.compare`: Compare two supplied names or addresses and return a match verdict. Both true and false answers cost one operation; no person score is returned.
- `text.grammar.check`: Correct grammar and spelling in up to 5,000 characters, with correction spans where available. Text may contain personal data. Maximum estimated cost $3.398.
- `text.judge`: Ask a yes/no question about a text and get the probability that the answer is yes, judged by a model. Live-unverified: the model's id is the source's own published name and is settled by the first live call.
- `text.markdown.render`: Turn Markdown into HTML with inline styles.
- `text.redact`: Redact personal data (names, email addresses, phone numbers, locations, financial numbers and secrets) from any text you pass, by placeholder, mask or removal. Detection is automatic and can miss or over-match; check high-stakes output.
- `text.rewrite`: Rewrite up to 5,000 characters with an explicit transformation, tone or style; returns up to five alternatives. Maximum estimated cost $2.50.
- `text.sentiment.analyze`: The tone of a text (positive, negative, neutral or mixed), with scores and the tone of each aspect mentioned.
- `text.social-post.generate`: Write a social media post for a platform from a topic or a link, with hashtags.

## Translation

Translate text, detect languages and keep your preferred terms.

- `document.translate`: Translate one uploaded document, at most 10 MiB, as a job. Sources reject formats whose billable size cannot be verified before upload. Maximum estimated cost $25.
- `text.dictionary.lookup`: Look up a word or phrase of up to 100 characters, returning translations and related source terms. Maximum estimated cost $0.001; no match is free.
- `text.glossary.create`: Create a glossary of preferred translations, up to five language pairs and 500 terms. Terms can contain personal data.
- `text.glossary.delete`: Permanently delete your glossary after explicit confirmation.
- `text.glossary.get`: Read your glossary and up to 500 preferred translations; terms can contain personal data.
- `text.glossary.list`: List your glossaries; names and terms may contain personal data.
- `text.glossary.update`: Rename a glossary, merge or replace up to 100 terms, or remove a dictionary with explicit confirmation.
- `text.language.detect`: Detect the language of a text; returns the best-matching language with its confidence and, where reported, the next-best alternatives. Confidences are probabilities, not certainties.
- `text.languages.list`: List the languages text translation accepts as source or target, with display names and, where reported, native names and formality support.
- `text.translate`: Translate a text into a target language, with an optional source language and tone; returns the translation and, when no source language was sent, the language detected in the input.
- `text.translate-custom`: Translate up to 5,000 characters using your glossary, with optional context and model preference. Maximum estimated cost $0.125.
- `text.transliterate`: Convert up to 1,000 characters between writing systems without translating their meaning. Maximum estimated cost $0.02.

## Vector search

Store vectors and find the closest matches for your own data.

- `vector.index.create`: Create a vector index with a fixed vector length and distance metric, for upserting vectors and searching nearest neighbours. Returns a ref for the follow-up vector.* capabilities.
- `vector.index.delete`: Delete one of your vector indexes and every vector stored in it. This cannot be undone; the vectors are gone.
- `vector.index.get`: Get one of your vector indexes: its vector length, distance metric, vector space and an approximate count of stored vectors.
- `vector.indexes.list`: List your vector indexes with their vector length, distance metric and an approximate count of stored vectors.
- `vector.vectors.delete`: Remove stored vectors by id from one of your indexes. This cannot be undone; re-upserting an id stores a new vector.
- `vector.vectors.get`: Look up stored vectors by id in one of your indexes: their vector values and metadata. Ids that are not stored are left out of the result.
- `vector.vectors.query`: Search one of your vector indexes for the nearest neighbours of a query vector, optionally narrowed by a metadata filter. Scores follow the index's distance metric.
- `vector.vectors.query-by-id`: Find nearby vectors using a stored vector from your own index as the seed. A missing seed is refused; results stay in that index.
- `vector.vectors.upsert`: Store or replace vectors in one of your indexes, each with an id of your choice and optional metadata for filtered search. Every vector's length must equal the index's dimension.

## Video agents

Set up talking video agents with tools, rules and goals.

- `video.agent-tools.attach`: Attach your named tools to your named agent; no more than 50 tools may be attached.
- `video.agent-tools.detach`: Detach your named tool from your named agent without deleting the tool.
- `video.agent-tools.list`: List your standalone tools attached to your named agent; excludes inline and shared system tools.
- `video.agent.create`: Create a named conversational agent using a shared stock avatar. Instructions may contain personal information. Custom avatars, external services and conferencing require later support.
- `video.agent.delete`: Delete your named configuration. Confirmation is required; this does not erase conversation records.
- `video.agent.get`: Read your named conversational agent, including its instructions and linked configuration names.
- `video.agent.update`: Update your named agent. Instructions may contain personal information; force must be explicit to discard pending editor work.
- `video.agents.list`: List only your named configurations, with at most 50 rows per page.
- `video.guardrail-tags.list`: List tags on your owned guardrails; shared account tags and foreign guardrail names are excluded.
- `video.guardrail.create`: Create a named conversational guardrail. Its prompt and tags may contain personal information; callbacks are not registered.
- `video.guardrail.delete`: Delete your named configuration. Confirmation is required; this does not erase conversation records.
- `video.guardrail.get`: Read your named guardrail, including its behavioral prompt and tags.
- `video.guardrail.update`: Update your named conversational guardrail without changing its ownership or name.
- `video.guardrails.list`: List only your named configurations, with at most 50 rows per page.
- `video.objective-set.create`: Create a named objective set containing one objective. Prompts and collected variable definitions may contain personal information.
- `video.objective-set.delete`: Delete your named configuration. Confirmation is required; this does not erase conversation records.
- `video.objective-set.get`: Read your named objective set and its prompt; may contain personal information.
- `video.objective-set.update`: Update the objective in your named set, preserving its stable key.
- `video.objective-sets.list`: List only your named configurations, with at most 50 rows per page.
- `video.tool.create`: Register a named tool configuration for application message delivery. This does not execute the tool; callbacks, secrets and connected service tools are declined pending delivery support.
- `video.tool.delete`: Delete your named configuration. Confirmation is required; this does not erase conversation records.
- `video.tool.get`: Read your named tool configuration, including argument definitions; never returns credentials or delivery URLs.
- `video.tool.update`: Update your named tool configuration; external delivery and secrets are not supported yet.
- `video.tools.list`: List only your named configurations, with at most 50 rows per page.

## Voices and speech

Turn text into spoken audio and design or clone voices.

- `audio.pronunciation-dictionaries.list`: List your speech pronunciation dictionaries without returning their terms.
- `audio.pronunciation-dictionary.clone`: Copy your speech pronunciation dictionary; terms may contain personal names.
- `audio.pronunciation-dictionary.create`: Create a speech pronunciation dictionary; terms may contain personal names.
- `audio.pronunciation-dictionary.delete`: Permanently delete your pronunciation dictionary, including terms that may contain personal names.
- `audio.pronunciation-dictionary.get`: Read a speech pronunciation dictionary, including substitutions that may contain personal names.
- `audio.pronunciation-dictionary.update`: Change a speech pronunciation dictionary; adding an existing key replaces that substitution.
- `audio.speech`: Turn text into spoken audio; returns a link to the audio file, kept for 7 days.
- `audio.voice-catalog.list`: List public voice names, languages, gender and supported controls, returning stable voice keys.
- `audio.voice-settings.get`: Read how one of your voices speaks: stability, similarity, style, speaker boost and speed. Pass the ref of a voice.
- `audio.voice-settings.update`: Change how one of your voices speaks: stability, similarity, style, speaker boost or speed. Only the settings you send change. Works on voices you created, not on shared ones.
- `audio.voice.clone`: Make a voice from recordings of a speaker. Upload the recordings first and pass their file ids. The voice is stored in your account until you delete it, and its ref works in the other voice capabilities. Voice recordings are personal data and are sent to the voice service. Runs as a job.
- `audio.voice.create`: Keep a designed voice. Pass the ref of a preview from audio.voice.design with a name and description; the voice then exists in your account, and its ref works in the other voice capabilities. Stored until you delete it.
- `audio.voice.delete`: Permanently delete one of your voices and the recordings it was made from. Pass the ref of the voice and confirm: true. There is no undo.
- `audio.voice.design`: Design a new voice from a written description. Returns a few preview recordings of candidate voices; keep one with audio.voice.create using its ref. The previews are charged once as one piece of speech. Runs as a job.
- `audio.voice.get`: Read one of your voices: name, description, languages, tags, number of samples and how it speaks. Pass the ref of a voice. Returns the description and tags you wrote.
- `audio.voice.update`: Change one of your voices: rename it, rewrite its description or tags, or add recordings (up to 3 files and 10 MB in total). Only what you send changes. Adding recordings costs extra. Voice recordings are personal data.
- `audio.voices.list`: List the voices you created (designed or cloned), newest first. Each row has a ref for the other voice capabilities. Returns each voice's name and the description you wrote.
