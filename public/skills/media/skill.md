---
name: pramaan-media
version: 1.0.0
description: Use Pramaan superpowers and missions when working with media (image, video, audio).
---

# Media (image, video, audio)

Find one superpower for one job, or a mission for a sequence of jobs. This is a catalogue, not proof of live availability.

Setup and shared safety rules: https://www.pramaan.dev/skill.md

## Search → inspect → quote → run

1. Search with list_capabilities (superpowers) or list_outcomes (missions).
2. Inspect with describe_capability or describe_outcome. Build input from the schema; check availability.
3. Call quote with kind (superpower or mission), id and input; include mission options if needed. Read price_max_micro, can_run and message, and the mission plan. Prices are millionths of a dollar. If can_run is false, resolve the stated need before continuing. Nothing runs during a quote.
4. Show the maximum price. Get an explicit yes for actions that require approval, then use run_capability or run_outcome with the same input. Reuse the same idempotency key on retries. Mission runs validate their plan. Over MCP the person is asked when a plan needs a yes; over the SDK and HTTP nothing asks, and a plan that needs approval is refused (approval_required) unless you send the approved plan or a signed-in member approves it in the app. Quote again if inputs change.

## Superpowers

### Apple Music

| Id | What it does | Price basis |
|---|---|---|
| `apple-music.album.detail` | Read a public Apple Music album title, release information and up to fifty tracks. Returns personal data: Public release credits may identify artists or rights holders; no contact details or account identifiers.. | Per successful call; quote exact input for the maximum price. |
| `apple-music.artist.detail` | Read a public Apple Music artist or band page, with up to fifty songs and albums. Returns personal data: The public artist or band name and editorial biography; no contact details or account identifiers.. | Per successful call; quote exact input for the maximum price. |
| `apple-music.songs.search` | Search the public song catalogue and return grouped song titles and their public links. | Per successful call; quote exact input for the maximum price. |
| `apple-music.track.detail` | Read the public title, album, page and explicit-content flag of an Apple Music song. | Per successful call; quote exact input for the maximum price. |

### General

| Id | What it does | Price basis |
|---|---|---|
| `anime.episodes.list` | List one anime title's episodes. | Per successful call; quote exact input for the maximum price. |
| `anime.search` | Search anime series by title. | Per successful call; quote exact input for the maximum price. |
| `anime.stream-sources.get` | List one anime episode's stream sources. | Per successful call; quote exact input for the maximum price. |
| `anime.title.get` | Read one anime title's details and episode list. | Per successful call; quote exact input for the maximum price. |
| `audio.align` | Align supplied words to an uploaded voice recording, returning word times without speaker identities or scores. Input up to 100 MB and 300 seconds. | Per successful call; quote exact input for the maximum price. |
| `audio.lyrics.generate` | Write or edit song lyrics with a title and style tags, as a background job. Returns caller-supplied or generated lyrics; these can contain personal details. | Per successful call; quote exact input for the maximum price. |
| `audio.model.get` | Get supported languages and recognition features for a listed model. | Per successful call; quote exact input for the maximum price. |
| `audio.models.list` | List recognition models and opaque handles for model details or configured transcription. | Per successful call; quote exact input for the maximum price. |
| `audio.music.extend` | Extend an uploaded music recording before or after its ends, which may contain voices. Input up to 100 MB; total output at most 300 seconds. | Per successful call; quote exact input for the maximum price. |
| `audio.music.inpaint` | Replace a selected section of uploaded music using a prompt. Returns one audio file as a job. Input must be MP3 or WAV, 6 to 380 seconds, at most 100 MB. Up to USD 0.26 is held while the job runs; the actual cost is charged on success. | Per successful call; quote exact input for the maximum price. |
| `audio.music.playlists.list` | List music playlist choices and their tempo and key ranges. Free, with exact local filters and up to 200 choices. | Per successful call; quote exact input for the maximum price. |
| `audio.music.transform` | Transform uploaded music using a prompt. Returns one audio file as a job. Input must be MP3 or WAV, 6 to 380 seconds, at most 50 MB. Up to USD 0.26 is held while the job runs; the actual cost is charged on success. | Per successful call; quote exact input for the maximum price. |
| `audio.processing-wait-times.get` | Read published processing queue wait times for an audio tool on voice.ai. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionaries.list` | List your speech pronunciation dictionaries without returning their terms. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionary.clone` | Copy your speech pronunciation dictionary; terms may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionary.create` | Create a speech pronunciation dictionary; terms may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionary.delete` | Permanently delete your pronunciation dictionary, including terms that may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionary.get` | Read a speech pronunciation dictionary, including substitutions that may contain personal names. | Per successful call; quote exact input for the maximum price. |
| `audio.pronunciation-dictionary.update` | Change a speech pronunciation dictionary; adding an existing key replaces that substitution. | Per successful call; quote exact input for the maximum price. |
| `audio.redaction.create` | Remove chosen personal details from up to ten hours of single-channel audio and its transcript as a background job. Maximum cost $3.40, or $3.50 with profanity filtering. | Per successful call; quote exact input for the maximum price. |
| `audio.sound-effect.generate` | Sound Effects. | Per successful call; quote exact input for the maximum price. |
| `audio.sound-effects.generate` | Make a sound effect from a written prompt; returns a link to an MP3 file, kept for 7 days. Runs as a job. | Per successful call; quote exact input for the maximum price. |
| `audio.soundtrack.generate` | Generate sound effects and background music for a supplied video. May process voices; runs as a job and keeps audio and video files for 7 days. | Per successful call; quote exact input for the maximum price. |
| `audio.speech` | Turn text into spoken audio; returns a link to the audio file, kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `audio.speech-faq.list` | List public speech synthesis questions and answers by category on kikivoice.ai. | Per successful call; quote exact input for the maximum price. |
| `audio.speech-timed` | Turn text into MP3 speech with timed text segments; copies audio to file storage. | Per successful call; quote exact input for the maximum price. |
| `audio.stems.separate` | Separate an uploaded audio recording, which may contain voices, into up to six music stems. Runs as a job; input up to 100 MB and 300 seconds. | Per successful call; quote exact input for the maximum price. |
| `audio.subscription-plans.list` | List public audio subscription plans and displayed prices on voice.ai. | Per successful call; quote exact input for the maximum price. |
| `audio.subtitles.create` | Transcribe up to ten hours of single-channel audio into an SRT or VTT download as a background job. May contain personal speech data. Maximum transcription cost $2.10. | Per successful call; quote exact input for the maximum price. |
| `audio.transcribe` | Transcribe a short public audio URL into text with timestamped segments. | Per successful call; quote exact input for the maximum price. |
| `audio.transcribe-bulk` | Transcribe up to two single-channel recordings per background job, each at most ten hours. Results echo your row ids. May contain personal speech data. Maximum transcription cost $4.20; failed rows are free. | Per successful call; quote exact input for the maximum price. |
| `audio.transcribe-configured` | Transcribe with a listed recognition model, timed words, speaker labels, formatting, redaction and optional content analysis. Returns spoken personal data and requested extracted entities. The hold covers 10 minutes, requested channels and add-ons, plus $0.135 per analysis feature (maximum $1.356); longer audio is absorbed by the service. | Per successful call; quote exact input for the maximum price. |
| `audio.transcription.create` | Transcribe a long audio URL (podcasts, meetings) into text with timestamped segments, as a background job. | Per successful call; quote exact input for the maximum price. |
| `audio.transcription.delete` | Delete a saved transcript and its personal speech data. Requires confirm: true. | Per successful call; quote exact input for the maximum price. |
| `audio.transcription.get` | Read a saved transcript as paged text or timed words, utterances, sentences or paragraphs. May contain personal speech data. | Per successful call; quote exact input for the maximum price. |
| `audio.transcription.word-search` | Find words or phrases in a saved transcript and page through their timed occurrences. May contain personal speech data. | Per successful call; quote exact input for the maximum price. |
| `audio.transcriptions.list` | List only your saved transcripts in the last 30 days. Activity metadata may reveal personal recording activity; empty pages can still have a continuation. | Per successful call; quote exact input for the maximum price. |
| `audio.voice-catalog.list` | List public voice names, languages, gender and supported controls, returning stable voice keys. | Per successful call; quote exact input for the maximum price. |
| `audio.voice-settings.get` | Read how one of your voices speaks: stability, similarity, style, speaker boost and speed. Pass the ref of a voice. | Per successful call; quote exact input for the maximum price. |
| `audio.voice-settings.update` | Change how one of your voices speaks: stability, similarity, style, speaker boost or speed. Only the settings you send change. Works on voices you created, not on shared ones. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.clone` | Make a voice from recordings of a speaker. Upload the recordings first and pass their file ids. The voice is stored in your account until you delete it, and its ref works in the other voice capabilities. Voice recordings are personal data and are sent to the voice service. Runs as a job. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.create` | Keep a designed voice. Pass the ref of a preview from audio.voice.design with a name and description; the voice then exists in your account, and its ref works in the other voice capabilities. Stored until you delete it. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.delete` | Permanently delete one of your voices and the recordings it was made from. Pass the ref of the voice and confirm: true. There is no undo. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.design` | Design a new voice from a written description. Returns a few preview recordings of candidate voices; keep one with audio.voice.create using its ref. The previews are charged once as one piece of speech. Runs as a job. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.get` | Read one of your voices: name, description, languages, tags, number of samples and how it speaks. Pass the ref of a voice. Returns the description and tags you wrote. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.preview` | Generate one voice preview from a description, without creating a saved voice. | Per successful call; quote exact input for the maximum price. |
| `audio.voice.update` | Change one of your voices: rename it, rewrite its description or tags, or add recordings (up to 3 files and 10 MB in total). Only what you send changes. Adding recordings costs extra. Voice recordings are personal data. | Per successful call; quote exact input for the maximum price. |
| `audio.voices.list` | List the voices you created (designed or cloned), newest first. Each row has a ref for the other voice capabilities. Returns each voice's name and the description you wrote. | Per successful call; quote exact input for the maximum price. |
| `image.ad.localize` | Translate the visible copy in an ad while preserving its layout and branding; up to 4 copies. | Per successful call; quote exact input for the maximum price. |
| `image.ad.resize` | Resize an ad while rebuilding its layout for the target dimensions; up to 4 copies. | Per successful call; quote exact input for the maximum price. |
| `image.ad.vary` | Create ad variations along one chosen axis while preserving copy and branding; up to 4 copies. | Per successful call; quote exact input for the maximum price. |
| `image.artist-profile.get` | Read artist profile on openclipart.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.artwork.get` | Read an artwork title, description and public engagement counts on furaffinity.com. | Per successful call; quote exact input for the maximum price. |
| `image.background.blur` | Blur an image background while preserving its subject and framing. Uploaded images may contain personal content; one result is kept for seven days. | Per successful call; quote exact input for the maximum price. |
| `image.background.remove` | Remove an image background and return a transparent foreground copy. | Per successful call; quote exact input for the maximum price. |
| `image.background.replace` | Replace an image background, preserving the foreground; up to 4 copies. A source that cannot honor an option declines. | Per successful call; quote exact input for the maximum price. |
| `image.brand-icon.get` | Read the color and source links for a brand icon on simpleicons.org. | Per successful call; quote exact input for the maximum price. |
| `image.brand-icons.list` | List brand icons with their colors and source links on simpleicons.org. | Per successful call; quote exact input for the maximum price. |
| `image.brand-icons.search` | Search brand icon metadata by name on simpleicons.org. | Per successful call; quote exact input for the maximum price. |
| `image.catalog-image.inspect` | Read dimensions, format and byte size of a public design-catalogue image on cdn.cosmos.so. | Per successful call; quote exact input for the maximum price. |
| `image.category-textures.list` | List texture metadata within a category on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.cinema-frames.search` | Search cinema frames on frameset.app. | Per successful call; quote exact input for the maximum price. |
| `image.clipart-service-status.get` | Read a public clipart service version and status on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.clipart-statistics.get` | Read aggregate public clipart library counts on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.clipart.get` | Read public clipart metadata without artist identities on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.clipart.search` | Find public clipart records by keyword on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.colorize` | Colorize an uploaded black and white image, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels. | Per successful call; quote exact input for the maximum price. |
| `image.compress` | Compress one uploaded image, up to 1 MiB, and return a hosted copy. Sources decline size options they cannot honor. | Per successful call; quote exact input for the maximum price. |
| `image.deblur` | Reduce blur in an image, including personal photos; lost details may be invented. A source that cannot honor the size declines. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.depth.estimate` | Estimate relative depth from an uploaded image, which may contain people. Returns a depth image, not measured distances; input up to 20 MB and 4 megapixels. | Per successful call; quote exact input for the maximum price. |
| `image.describe` | Describe an uploaded image in plain words or as scene elements with normalized boxes. Empty descriptions are a free miss. | Per successful call; quote exact input for the maximum price. |
| `image.edit` | Edit or combine 1 to 10 source images, including personal photos, into 1 to 4 outputs. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.erase` | Remove masked objects from an image, including personal photos. A source that cannot honor the size declines. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.expand` | Extend image borders or place an image on a larger canvas. Inputs may contain people. A source that cannot honor the size declines. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.free-textures.list` | List textures offering free sample content on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.garment.render` | Render a garment on a white studio background from 1 to 10 photos. One output. | Per successful call; quote exact input for the maximum price. |
| `image.generate` | Generate 1-4 images from a text prompt; returns links to the image files, kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.generate-bulk` | Generate images for up to 16 prompt rows as a job; each row carries your own id. Prompts and generated images may depict people. | Per successful call; quote exact input for the maximum price. |
| `image.generate-configured` | Generate 1 to 4 images with explicit rendering controls; unsupported fields decline. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.generation-styles.list` | List public image generation style names and slugs on deepai.org. | Per successful call; quote exact input for the maximum price. |
| `image.inpaint` | Replace a masked region in an image, including personal photos. White mask areas change; black areas stay. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.inspect` | Inspect an uploaded image for selected content, product-fidelity or image-quality checks, including visible human content. No person is identified or ranked. Requires a configured inspection source; only requested checks are returned. | Per successful call; quote exact input for the maximum price. |
| `image.layers.extract` | Split an image into up to ten complete transparent layers, including captions that may describe people. Runs as a job; maximum cost 0.450 USD. | Per successful call; quote exact input for the maximum price. |
| `image.layout.adjust` | Adjust image canvas, subject framing and spacing, optionally removing the background. Uploaded images may contain personal content; one result is kept for seven days. | Per successful call; quote exact input for the maximum price. |
| `image.logo.layerize` | Match up to 10 reference logos, remove them from an image, and return their boxes. At most 200 regions; no matches is still a successful result. | Per successful call; quote exact input for the maximum price. |
| `image.marketing-stock.generate` | Generate marketing stock images from a brief and an optional uploaded brand image. Runs as a job; output files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.objects.detect` | Detect object labels and boxes in an uploaded image, including person labels. Returns no identities or scores of people; input up to 20 MB and 4 megapixels. | Per successful call; quote exact input for the maximum price. |
| `image.photographer-gallery.get` | Read photographer gallery. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.photos.search` | Search photos. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.pose.vary` | Render new poses or camera angles while preserving the person and garment; up to 4 copies. | Per successful call; quote exact input for the maximum price. |
| `image.product-campaign.generate` | Generate four product campaign images from an uploaded product image and creative brief. Runs as a job; files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.product.material-swap` | Apply reference materials to up to 4 masked product regions. One output. | Per successful call; quote exact input for the maximum price. |
| `image.product.recolor` | Recolor up to 4 masked product regions while preserving construction and prints. One output. | Per successful call; quote exact input for the maximum price. |
| `image.profile.get` | Read profile on furaffinity.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.prompt.expand` | Expand an image prompt into detailed words and optional scene elements. | Per successful call; quote exact input for the maximum price. |
| `image.random-clipart.get` | Read one randomly selected public clipart record without artist identities on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.recent-textures.list` | List recently published texture metadata on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.relight` | Relight a subject with a background description or reference image. Returns one image as a job; uploaded PNG, JPEG or WebP images must fit a 10 MiB request, with each side at least 64 pixels and at most 9437184 pixels total. Worst-case upstream cost is USD 0.08. | Per successful call; quote exact input for the maximum price. |
| `image.restore` | Restore an uploaded damaged photograph, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels. | Per successful call; quote exact input for the maximum price. |
| `image.search` | Search the web for images matching keywords or a description; returns image URLs, the pages they appear on, titles and dimensions. | Per successful call; quote exact input for the maximum price. |
| `image.segment` | Make a mask of the objects described in an uploaded image, which may contain people. Runs as a job; input up to 20 MB and 4 megapixels. | Per successful call; quote exact input for the maximum price. |
| `image.shadow.add` | Add a shadow to an uploaded image subject, optionally recomposing it after background removal. Images may contain personal content; one result is kept for seven days. Style support varies by source. | Per successful call; quote exact input for the maximum price. |
| `image.stock-challenges.list` | List public stock-media challenges and participation counts. | Per successful call; quote exact input for the maximum price. |
| `image.stock-suggestions.get` | Read public stock-media search suggestions. | Per successful call; quote exact input for the maximum price. |
| `image.style-presets.list` | List public curated image styles with handles usable for rendering or creating a style. | Per successful call; quote exact input for the maximum price. |
| `image.style.create` | Save a private reusable image style from reference pictures or one earlier style. Pictures may depict people; saved metadata stays scoped to the caller. | Per successful call; quote exact input for the maximum price. |
| `image.style.delete` | Permanently delete the caller's saved image style; requires confirm: true. | Per successful call; quote exact input for the maximum price. |
| `image.style.get` | Read metadata of a private saved image style owned by the caller. | Per successful call; quote exact input for the maximum price. |
| `image.style.render` | Generate image alternatives using a saved private style or a public preset. Returns stored files; prompts and pictures may depict people. Unsupported output choices are refused before generation. | Per successful call; quote exact input for the maximum price. |
| `image.styles.list` | List the caller's private saved image styles, with handles for reading, rendering or deleting. | Per successful call; quote exact input for the maximum price. |
| `image.subject.mask` | Extract a grayscale subject mask from an uploaded image, which may depict people or contain personal content. Returns one owned file kept for seven days; white retains the subject and black removes the background. | Per successful call; quote exact input for the maximum price. |
| `image.subject.outline` | Add an outline around an image subject, optionally extracting it onto a transparent or solid background. Uploaded images may contain personal content; one result is kept for seven days. | Per successful call; quote exact input for the maximum price. |
| `image.subject.segment` | Separate a subject, head, face or clothing from a supplied image. May process faces and bodies; returns masks without identities or scores as a job, kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.tagged-clipart.list` | List public clipart records matching a tag on openclipart.org. | Per successful call; quote exact input for the maximum price. |
| `image.text.layerize` | Separate text from an uploaded design into editable text regions and a text-free base image. At most 200 regions; finding no text is still a successful result. | Per successful call; quote exact input for the maximum price. |
| `image.text.remove` | Remove all or a selected type of text from an uploaded image, which may contain personal content. One result is kept for seven days; unsupported text types decline before processing. | Per successful call; quote exact input for the maximum price. |
| `image.texture-categories.list` | List texture library categories and their content groups on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.texture-category.get` | Read texture subcategories and content groups on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.texture.get` | Read a texture record and available image dimensions on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.textures.search` | Find texture metadata by keyword on textures.com. | Per successful call; quote exact input for the maximum price. |
| `image.trending-photos.get` | Read trending photos. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.try-on` | Preview clothing on a supplied person photo; returns an image, no identity or body score. A source that cannot honor the image size declines. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.upscale` | Enlarge one image by scale or target size with optional enhancement. A source that cannot honor an enhancement option declines. | Per successful call; quote exact input for the maximum price. |
| `image.variation` | Create 1 to 8 variations from an image, including personal photos. Strength is honored only by sources supporting it. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `image.videos.search` | Search videos. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `image.views.generate` | Generate alternate views of a subject from one frontal image. May process faces; runs as a job and keeps images for 7 days. | Per successful call; quote exact input for the maximum price. |
| `media.branding.create` | Create your branding colors and fonts; logo media is not included. | Per successful call; quote exact input for the maximum price. |
| `media.branding.delete` | Permanently delete your branding; previously rendered projects keep their baked colors and fonts. | Per successful call; quote exact input for the maximum price. |
| `media.branding.get` | Read your branding colors and fonts; logo media is not returned. | Per successful call; quote exact input for the maximum price. |
| `media.branding.update` | Change your branding colors or fonts; omitted fields keep their current values. | Per successful call; quote exact input for the maximum price. |
| `media.brandings.list` | List your branding colors and fonts, optionally including shared read-only presets; logo media is omitted. | Per successful call; quote exact input for the maximum price. |
| `media.consent.attach` | Submit a person’s uploaded video and name for consent verification; returns before verification completes. | Per successful call; quote exact input for the maximum price. |
| `media.consent.create` | Create a consent challenge for a person to record; the challenge expires after 30 minutes. | Per successful call; quote exact input for the maximum price. |
| `media.consent.delete` | Permanently delete your consent recording resource; confirm must be true. | Per successful call; quote exact input for the maximum price. |
| `media.consent.get` | Read consent verification state and the person’s supplied name; recording bytes are not returned. | Per successful call; quote exact input for the maximum price. |
| `media.consents.list` | List your consent verification records and supplied names; recordings are omitted. | Per successful call; quote exact input for the maximum price. |
| `media.dubbing.create` | Dub the speech in an audio or video file into another language, keeping the speakers' voices. Dubs at most durationLimitSeconds of the source and holds the price for that much. The dubbing stays in your account until you delete it with media.dubbing.delete. Recordings of people speaking are personal data. Runs as a job. | Per successful call; quote exact input for the maximum price. |
| `media.dubbing.delete` | Permanently delete a dubbing you made with media.dubbing.create, with the source and dubbed files held for it. Pass the ref and confirm: true. There is no undo. | Per successful call; quote exact input for the maximum price. |
| `media.dubbing.get` | Check a dubbing you made with media.dubbing.create: its status, name, languages and length. Pass the ref that media.dubbing.create returned. | Per successful call; quote exact input for the maximum price. |
| `media.embed` | Turn supplied text and uploaded media into vectors, with one vector per group of parts. Media may contain faces, speech or personal document data; the result contains vectors only. Up to eight inputs and 20 MiB of files. | Per successful call; quote exact input for the maximum price. |
| `media.game-platforms.list` | List gaming platforms supported by a critic-score data source on opencritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.game-reviews.get` | Read game reviews on opencritic.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `media.game-tags.list` | List game tags used by a critic-score data source on opencritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.generation.delete` | Delete your own generated-media record where supported. Requires explicit confirmation; copied files keep their normal expiry. | Per successful call; quote exact input for the maximum price. |
| `media.generation.get` | Read the state of your own generated media without copying files or returning submitted prompts. | Per successful call; quote exact input for the maximum price. |
| `media.generations.list` | List your own media generations. Stored states can lag rendering; read a row to refresh its state. An empty page may have a continuation. | Per successful call; quote exact input for the maximum price. |
| `media.magazines.search` | Search the live magazines in a magazine network directory. | Per successful call; quote exact input for the maximum price. |
| `media.prepare` | Prepare an image or video for a publishing platform as a background job. Videos above 200 MB are refused. Each team can prepare 60 files per hour. | Per successful call; quote exact input for the maximum price. |
| `media.ranked-titles.list` | List ranked games, films or shows by score and release year on metacritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.rated-game.get` | Read a game’s description, platforms and aggregate critic ratings on opencritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.rated-games.list` | List games with aggregate critic scores and release dates on opencritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.rated-games.search` | Find games by title in a critic-score catalogue on opencritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.rated-title.get` | Read a game, film or show’s metadata and aggregate critic score on metacritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.rated-titles.search` | Find games, films and shows with aggregate critic scores on metacritic.com. | Per successful call; quote exact input for the maximum price. |
| `media.reviews.get` | Read reviews on metacritic.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `media.stock-photos.search` | Search stock photos with licence information, image dimensions and required source and photographer credits. Display both credits and their links. Image and credit addresses are intentional source attribution. Empty results cost zero; a stock licence does not establish every depicted person's consent. | Per successful call; quote exact input for the maximum price. |
| `media.upload.create` | Place a media file on your posting profile's storage, so posts can attach media you have no public link for. Pass a file you uploaded (fileId) or its public URL; at most 100 MB, images, videos, PDF, audio or subtitle files. The placed copy is kept for 7 days; a post that references the media within that window makes it permanent. For a url source the result carries the media again as a platform-hosted file whose URL serves the raw file over HTTPS, ready to pass as a media URL. The storage location of the placed copy is internal and never returned. Needs platform file storage. | Per successful call; quote exact input for the maximum price. |
| `media.video.download` | Fetch a video by its public URL and put it on platform storage as a file, at most 25 MB (bigger videos are refused). Returns the video's title, the delivered format's details, and the file. The video's own hosting links are never returned. Needs platform file storage. | Per successful call; quote exact input for the maximum price. |
| `media.video.formats.list` | List the downloadable formats of a video by its public URL: resolution, frame rate, container and whether each carries audio or video. Pass a format's formatId to media.video.download to get that format as a file. Works on TikTok video pages. | Per successful call; quote exact input for the maximum price. |
| `model3d.animations.list` | List free animation presets with neutral keys and supported skeleton types. Filters are applied locally; up to 200 choices per call. | Per successful call; quote exact input for the maximum price. |
| `model3d.furniture.get` | Read public furniture model metadata and geometry properties on furnimesh.com. | Per successful call; quote exact input for the maximum price. |
| `model3d.furniture.list` | Browse public furniture model listings by category on furnimesh.com. | Per successful call; quote exact input for the maximum price. |
| `model3d.furniture.search` | Search public furniture model listings and supported formats on furnimesh.com. | Per successful call; quote exact input for the maximum price. |
| `model3d.print-analyze` | Analyze a model's printability, including holes and optional wall thickness at a chosen print size. Free job; accepts a public model URL. | Per successful call; quote exact input for the maximum price. |
| `model3d.rig-check` | Check whether a GLB model can be rigged and return the recommended skeleton type. Runs as a free job; accepts a public model URL. | Per successful call; quote exact input for the maximum price. |
| `music.airbit.playlists.featured` | List featured playlists on airbit.com. | Per successful call; quote exact input for the maximum price. |
| `music.album-comments.get` | Read album comments on ximalaya.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.album-info.get` | Read album info on ximalaya.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.album-lyrics.get` | Read public album lyrics on darklyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.album-tracks.get` | Read public album tracks. | Per successful call; quote exact input for the maximum price. |
| `music.albums.search` | Search public albums on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.allmusic.album.get` | Read album on allmusic.com. | Per successful call; quote exact input for the maximum price. |
| `music.allmusic.releases.latest` | List new releases on allmusic.com. | Per successful call; quote exact input for the maximum price. |
| `music.allmusic.song.get` | Read song on allmusic.com. | Per successful call; quote exact input for the maximum price. |
| `music.amoeba.release.get` | Read release on amoeba.com. | Per successful call; quote exact input for the maximum price. |
| `music.amoeba.releases.browse` | Browse releases on amoeba.com. | Per successful call; quote exact input for the maximum price. |
| `music.amoeba.releases.latest` | List new releases on amoeba.com. | Per successful call; quote exact input for the maximum price. |
| `music.area-events.list` | List public area events on ra.co. | Per successful call; quote exact input for the maximum price. |
| `music.artist-detail.get` | Read artist detail on guitarpro.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist-details.get` | Read artist details on allmusic.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist-id.get` | Read artist id on merchbar.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist-list.get` | Read artist list on guitarpro.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist-merchandise.list` | List public artist merchandise on merchbar.com. | Per successful call; quote exact input for the maximum price. |
| `music.artist-profile.get` | Read artist profile on bandcamp.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist-releases.list` | List public artist releases on musixmatch.com. | Per successful call; quote exact input for the maximum price. |
| `music.artist-tabs.list` | List public artist tabs. | Per successful call; quote exact input for the maximum price. |
| `music.artist-tracks.list` | List public artist tracks on traxsource.com. | Per successful call; quote exact input for the maximum price. |
| `music.artist.get` | Read artist on 1001tracklists.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artist.search` | Search artist on musicbrainz.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artists-by-letter.list` | Browse artists by letter on lyrics.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artists.get` | Read artists on ibanez.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.artists.search` | Search artists on the chosen site. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.audio-asset.get` | Read public audio asset on fadr.com. | Per successful call; quote exact input for the maximum price. |
| `music.audio-assets.list` | List public audio assets on fadr.com. | Per successful call; quote exact input for the maximum price. |
| `music.audio-plans.list` | List public audio plans on soundboost.ai. | Per successful call; quote exact input for the maximum price. |
| `music.band-discography.list` | List public band discography. | Per successful call; quote exact input for the maximum price. |
| `music.band-members.get` | Read band members on metal-archives.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.band-recommendations.list` | List public band recommendations on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.band.get` | Read public band on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandcamp.album.get` | Read album on bandcamp.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandcamp.sales.list` | List sales on bandcamp.com. | Per successful call; quote exact input for the maximum price. |
| `music.bands.browse` | Browse public bands on darklyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.bands.search` | Search public bands on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandsintown.artist.past-events` | List past concerts for an artist on bandsintown.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandsintown.city.events` | Read city on bandsintown.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandsintown.city.resolve` | Read city on bandsintown.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandsintown.event.get` | Read event on bandsintown.com. | Per successful call; quote exact input for the maximum price. |
| `music.bandsintown.venues.search` | Search venues on bandsintown.com. | Per successful call; quote exact input for the maximum price. |
| `music.bass-guitar.get` | Read public bass guitar on ibanez.com. | Per successful call; quote exact input for the maximum price. |
| `music.bass-guitars.list` | List public bass guitars on ibanez.com. | Per successful call; quote exact input for the maximum price. |
| `music.bass-guitars.search` | Search public bass guitars on ibanez.com. | Per successful call; quote exact input for the maximum price. |
| `music.bass-series.list` | List public bass series on ibanez.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport-artist.get` | Read artist on beatport.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.artist.tracks` | List published tracks credited to an artist on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.chart.top-tracks` | Read the main published track chart on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.genre.chart` | Read the published track chart for a genre on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.genre.top-tracks` | List the leading tracks in a genre on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.genres.list` | List genres on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.label.get` | Read label on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.playlist.get` | Read a publicly shared playlist and its tracks on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.release.get` | Read release on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.releases.search` | Search releases on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.track.get` | Read track on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.beatport.tracks.search` | Search tracks on beatport.com. | Per successful call; quote exact input for the maximum price. |
| `music.brand-plugins.list` | List public brand plugins on pluginboutique.com. | Per successful call; quote exact input for the maximum price. |
| `music.cartridges.search` | Search public cartridges on vinylengine.com. | Per successful call; quote exact input for the maximum price. |
| `music.catalog.get` | Read catalog on repertoire.bmi.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.catalog.search` | Search catalog on amoeba.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.category-albums.get` | Read category albums on ximalaya.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.chord-chart.get` | Read public chord chart on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.chord-progressions.search` | Search public chord progressions on hooktheory.com. | Per successful call; quote exact input for the maximum price. |
| `music.chosic-artist.get` | Read artist on chosic.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.chosic.genres.list` | List genres on chosic.com. | Per successful call; quote exact input for the maximum price. |
| `music.chosic.songs.recommend` | Recommend songs from a genre or public track identifiers, with optional musical filters on chosic.com. | Per successful call; quote exact input for the maximum price. |
| `music.chosic.songs.search` | Search songs on chosic.com. | Per successful call; quote exact input for the maximum price. |
| `music.chosic.songs.similar` | Find songs similar to a supplied track or song title on chosic.com. | Per successful call; quote exact input for the maximum price. |
| `music.club-events.list` | List public club events on ra.co. | Per successful call; quote exact input for the maximum price. |
| `music.club.get` | Read public club on ra.co. | Per successful call; quote exact input for the maximum price. |
| `music.clubs.list` | List public clubs. | Per successful call; quote exact input for the maximum price. |
| `music.concert.get` | Read public concert on concertarchives.org. | Per successful call; quote exact input for the maximum price. |
| `music.concerts.search` | Search public concerts on concertarchives.org. | Per successful call; quote exact input for the maximum price. |
| `music.dealers.get` | Read dealers on ibanez.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.discogs.artist.releases` | List published music releases credited to an artist on api.discogs.com. | Per successful call; quote exact input for the maximum price. |
| `music.discogs.label.releases` | List music releases from a label on api.discogs.com. | Per successful call; quote exact input for the maximum price. |
| `music.discogs.release.get` | Read release on api.discogs.com. | Per successful call; quote exact input for the maximum price. |
| `music.discogs.releases.search` | Search releases on api.discogs.com. | Per successful call; quote exact input for the maximum price. |
| `music.equipment-manufacturers.list` | List public equipment manufacturers on vinylengine.com. | Per successful call; quote exact input for the maximum price. |
| `music.event-areas.search` | Search public event areas on ra.co. | Per successful call; quote exact input for the maximum price. |
| `music.event.get` | Read public event on ra.co. | Per successful call; quote exact input for the maximum price. |
| `music.fan-profile.get` | Read fan profile on bandcamp.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.free-instruments.list` | List public free instruments on orchestraltools.com. | Per successful call; quote exact input for the maximum price. |
| `music.free-plugins.list` | List public free plugins on pluginboutique.com. | Per successful call; quote exact input for the maximum price. |
| `music.full-tab.get` | Read public full tab on songsterr.com. | Per successful call; quote exact input for the maximum price. |
| `music.generated-playlist.list` | List public generated playlist on suno.com. | Per successful call; quote exact input for the maximum price. |
| `music.generated-songs.list` | List public generated songs on suno.com. | Per successful call; quote exact input for the maximum price. |
| `music.genre-artists.list` | List genre artists on everynoise.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.genres.list` | List public genres on traxsource.com. | Per successful call; quote exact input for the maximum price. |
| `music.karaoke-chart.list` | List public karaoke chart on x-minus.pro. | Per successful call; quote exact input for the maximum price. |
| `music.karaoke-track.get` | Read public karaoke track on x-minus.pro. | Per successful call; quote exact input for the maximum price. |
| `music.karaoke.search` | Search public karaoke on x-minus.pro. | Per successful call; quote exact input for the maximum price. |
| `music.label-bands.list` | List public label bands on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.label-releases.get` | Read public label releases on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-albums.latest` | List recent public lyric albums on darklyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-discovery.get` | Read public lyric discovery on musixmatch.com. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-languages.get` | Read public lyric languages on musixmatch.com. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-songs.browse` | Browse public lyric songs on lyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-songs.latest` | List recent public lyric songs on lyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.lyric-songs.search` | Search public lyric songs on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.lyrics-artist.get` | Read artist on lyrics.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.lyrics-artists.search` | Search artists on lyrics.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.merchandise-deals.list` | List public merchandise deals on merchbar.com. | Per successful call; quote exact input for the maximum price. |
| `music.merchandise-item.get` | Read public merchandise item on merchbar.com. | Per successful call; quote exact input for the maximum price. |
| `music.merchandise.latest` | List recent public merchandise on merchbar.com. | Per successful call; quote exact input for the maximum price. |
| `music.merchandise.search` | Search public merchandise on merchbar.com. | Per successful call; quote exact input for the maximum price. |
| `music.metal-archives-artist-details.get` | Read artist details on metal-archives.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.mix-tracklist.get` | Read public mix tracklist on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.mixes.latest` | List recent public mixes on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.mixes.search` | Search public mixes on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.muscle-shoals.search` | Search muscle shoals on musicbrainz.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.music.search` | Search music on allmusic.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.musicbrainz-artist-details.get` | Read artist details on musicbrainz.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.musixmatch-artist-profile.get` | Read artist profile on musixmatch.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.open-artist.get` | Read artist on open.spotify.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.performer-catalog.get` | Read performer catalog on repertoire.bmi.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.performer-concerts.get` | Read performer concerts on concertarchives.org. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.performers.search` | Search performers on the chosen site. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.playlist.get` | Read playlist on open.spotify.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-brands.list` | List public plugin brands on pluginboutique.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-bundle.get` | Read public plugin bundle on waves.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-bundles.list` | List public plugin bundles on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-categories.list` | List public plugin categories on waves.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-deals.list` | List public plugin deals on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-plans.list` | List public plugin plans on waves.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-requirements.get` | Read public plugin requirements on waves.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugin-reviews.get` | Read plugin reviews on waves.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.plugin.get` | Read public plugin. | Per successful call; quote exact input for the maximum price. |
| `music.plugins.browse` | Browse public plugins on pluginboutique.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugins.latest` | List recent public plugins on pluginboutique.com. | Per successful call; quote exact input for the maximum price. |
| `music.plugins.list` | List public plugins on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.plugins.search` | Search public plugins on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.popular-tabs.list` | List public popular tabs on songsterr.com. | Per successful call; quote exact input for the maximum price. |
| `music.presave-campaign.get` | Read public presave campaign. | Per successful call; quote exact input for the maximum price. |
| `music.publisher-catalog.get` | Read publisher catalog on repertoire.bmi.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.publishers.search` | Search publishers on repertoire.bmi.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.qobuz-artist.get` | Read artist on qobuz.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.ra-artist-detail.get` | Read artist detail on ra.co. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.radio-channel.get` | Read public radio channel on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.radio-channels.list` | List public radio channels on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.radio-episode.get` | Read public radio episode on nts.live. | Per successful call; quote exact input for the maximum price. |
| `music.radio-episodes.search` | Search public radio episodes on nts.live. | Per successful call; quote exact input for the maximum price. |
| `music.radio-history.list` | List public radio history on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.radio-now-playing.get` | Read current broadcast metadata: track title, album and cover artwork for a radio channel on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.radio-schedule.get` | Read public radio schedule on nts.live. | Per successful call; quote exact input for the maximum price. |
| `music.radio-song.get` | Read public radio song on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.radio-streams.list` | List public radio streams on radioparadise.com. | Per successful call; quote exact input for the maximum price. |
| `music.random-lyric.get` | Read public random lyric on lyrics.com. | Per successful call; quote exact input for the maximum price. |
| `music.record-bestsellers.list` | List public record bestsellers on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.record-deals.list` | List public record deals on winylownia.pl. | Per successful call; quote exact input for the maximum price. |
| `music.record-label.get` | Read public record label on metal-archives.com. | Per successful call; quote exact input for the maximum price. |
| `music.record-product.get` | Read public record product on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.record-products.browse` | Browse public record products on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.record-products.latest` | List recent public record products on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.record-products.search` | Search public record products on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.record-release.get` | Read public record release on musicbrainz.org. | Per successful call; quote exact input for the maximum price. |
| `music.record-suggestions.search` | Search public record suggestions on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.recording.get` | Read public recording on musicbrainz.org. | Per successful call; quote exact input for the maximum price. |
| `music.recordings.search` | Search public recordings on musicbrainz.org. | Per successful call; quote exact input for the maximum price. |
| `music.records.search` | Search records on bandcamp.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.release-charts.list` | List public release charts on qobuz.com. | Per successful call; quote exact input for the maximum price. |
| `music.release-group.get` | Read public release group on musicbrainz.org. | Per successful call; quote exact input for the maximum price. |
| `music.release-links.get` | Read public release links on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.releases.latest` | List recent public releases on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.remix-contests.list` | List public remix contests on fadr.com. | Per successful call; quote exact input for the maximum price. |
| `music.rhythm-game-filters.get` | Read public rhythm game filters on rhythmverse.co. | Per successful call; quote exact input for the maximum price. |
| `music.sample-bundles.list` | List public sample bundles on orchestraltools.com. | Per successful call; quote exact input for the maximum price. |
| `music.sample-filters.get` | Read public sample filters on orchestraltools.com. | Per successful call; quote exact input for the maximum price. |
| `music.sample-libraries.list` | List public sample libraries on spitfireaudio.com. | Per successful call; quote exact input for the maximum price. |
| `music.sample-libraries.search` | Search public sample libraries on orchestraltools.com. | Per successful call; quote exact input for the maximum price. |
| `music.sample-library.get` | Read public sample library. | Per successful call; quote exact input for the maximum price. |
| `music.sample-packs.list` | List public sample packs on fadr.com. | Per successful call; quote exact input for the maximum price. |
| `music.score-plans.list` | List public score plans on guitarpro.com. | Per successful call; quote exact input for the maximum price. |
| `music.section-theory.get` | Read public section theory on hooktheory.com. | Per successful call; quote exact input for the maximum price. |
| `music.single-charts.list` | List public single charts on traxsource.com. | Per successful call; quote exact input for the maximum price. |
| `music.song-comments.get` | Read song comments on radioparadise.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.song-lyrics.get` | Read public song lyrics. | Per successful call; quote exact input for the maximum price. |
| `music.song-meaning.get` | Read public song meaning on musixmatch.com. | Per successful call; quote exact input for the maximum price. |
| `music.song-revisions.get` | Read song revisions on songsterr.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.song-sections.list` | List public song sections on hooktheory.com. | Per successful call; quote exact input for the maximum price. |
| `music.song-translation.get` | Read public song translation on geetabitan.com. | Per successful call; quote exact input for the maximum price. |
| `music.song-transliteration.get` | Read public song transliteration on geetabitan.com. | Per successful call; quote exact input for the maximum price. |
| `music.songs.search` | Find catalogued recordings by title, with release metadata and public record links. | Per successful call; quote exact input for the maximum price. |
| `music.sound-button.get` | Read public sound button on myinstants.com. | Per successful call; quote exact input for the maximum price. |
| `music.sound-buttons.search` | Search public sound buttons on myinstants.com. | Per successful call; quote exact input for the maximum price. |
| `music.spoken-categories.list` | List public spoken categories on ximalaya.com. | Per successful call; quote exact input for the maximum price. |
| `music.spoken-tracks.list` | List public spoken tracks on ximalaya.com. | Per successful call; quote exact input for the maximum price. |
| `music.store-info.get` | Read store info on amoeba.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.studioverse-chains.list` | List studioverse chains on waves.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.tab-metadata.get` | Read public tab metadata. | Per successful call; quote exact input for the maximum price. |
| `music.tab-notation.get` | Read public tab notation on songsterr.com. | Per successful call; quote exact input for the maximum price. |
| `music.tabs.list` | List public tabs on guitarpro.com. | Per successful call; quote exact input for the maximum price. |
| `music.tabs.search` | Search public tabs on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.tonearms.search` | Search public tonearms on vinylengine.com. | Per successful call; quote exact input for the maximum price. |
| `music.top-charts.get` | Read top charts on airbit.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.track-analysis.get` | Read public track analysis on tunebat.com. | Per successful call; quote exact input for the maximum price. |
| `music.track-charts.list` | List public track charts on traxsource.com. | Per successful call; quote exact input for the maximum price. |
| `music.track.get` | Read public track on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.charts.list` | List charts on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.genre.sets` | List published music sets in a genre on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.mixes.list` | List mixes on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.set.find-by-media` | Find a music set by its public media URL on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.set.get` | Read the tracks and cue times in one music set on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.sets.get-batch` | Read tracks from several published music sets on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.sets.homepage` | List music sets featured on the homepage on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.sets.latest` | List the latest published music sets on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.sets.search` | Search sets on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.tracklists.track.get` | Read track on 1001tracklists.com. | Per successful call; quote exact input for the maximum price. |
| `music.turntables.search` | Search public turntables on vinylengine.com. | Per successful call; quote exact input for the maximum price. |
| `music.upcoming-releases.list` | List public upcoming releases on traxsource.com. | Per successful call; quote exact input for the maximum price. |
| `music.user-info.get` | Read user info on ximalaya.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.vinyl-records.list` | List public vinyl records on juno.co.uk. | Per successful call; quote exact input for the maximum price. |
| `music.writers.search` | Search writers on repertoire.bmi.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `music.ximalaya-albums.search` | Search albums on ximalaya.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `video.agent-tools.attach` | Attach your named tools to your named agent; no more than 50 tools may be attached. | Per successful call; quote exact input for the maximum price. |
| `video.agent-tools.detach` | Detach your named tool from your named agent without deleting the tool. | Per successful call; quote exact input for the maximum price. |
| `video.agent-tools.list` | List your standalone tools attached to your named agent; excludes inline and shared system tools. | Per successful call; quote exact input for the maximum price. |
| `video.agent.create` | Create a named conversational agent using a shared stock avatar. Instructions may contain personal information. Custom avatars, external services and conferencing require later support. | Per successful call; quote exact input for the maximum price. |
| `video.agent.delete` | Delete your named configuration. Confirmation is required; this does not erase conversation records. | Per successful call; quote exact input for the maximum price. |
| `video.agent.get` | Read your named conversational agent, including its instructions and linked configuration names. | Per successful call; quote exact input for the maximum price. |
| `video.agent.update` | Update your named agent. Instructions may contain personal information; force must be explicit to discard pending editor work. | Per successful call; quote exact input for the maximum price. |
| `video.agents.list` | List only your named configurations, with at most 50 rows per page. | Per successful call; quote exact input for the maximum price. |
| `video.animate` | Animate first, last or timed images into a clip, including images of people. Timed auto length rounds the last time up. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.create` | Create a named avatar from a description, photo or footage. Runs as a job; likeness and voice data may be processed. Photo and footage sources require supported file validation. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.delete` | Permanently delete an avatar you created, including its likeness; stock avatars cannot be deleted. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.get` | Get the name, consent status and readiness of an avatar. Returns likeness metadata. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.look.delete` | Permanently delete a caller appearance; deleting the last appearance also removes its avatar. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.look.get` | Get an avatar appearance and supported rendering tiers. Returns likeness metadata. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.look.update` | Rename an appearance belonging to the caller. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.looks.list` | List appearances for an avatar, including likeness metadata and neutral keys. | Per successful call; quote exact input for the maximum price. |
| `video.avatar.render` | Render a speaking avatar as a video job, returning a stored video and measured duration. Handles submitted speech and likeness. Text is capped at 5,000 characters. | Per successful call; quote exact input for the maximum price. |
| `video.avatars.list` | List caller avatars or stock studio characters. Returns names and likeness metadata; private account records outside this caller are omitted. | Per successful call; quote exact input for the maximum price. |
| `video.background.remove` | Remove the background from an uploaded video, which may contain people. Input up to 500 MB and 300 seconds; output retains transparency. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-channels.list` | List the broadcaster’s live television channel titles on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-collections.list` | List programme collections within a broadcaster category; returns the first page on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-highlights.list` | List the broadcaster’s featured programme groups and titles on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-schedule.list` | List a broadcaster’s programme times grouped by television channel on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-show.get` | Read a broadcaster show’s title and available episode titles on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.broadcast-shows.list` | List shows in the broadcaster’s alphabetical catalogue; returns the first page on zdf.de. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.episode.get` | Read a television episode’s summary and number from the selected publisher. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.episodes.list` | Browse published episode titles in the selected television catalogue on new61.5tv.lol. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.search` | Search film and television titles; broadcaster searches return the first page on the chosen site. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.tags.list` | List the categories and labels used by a television catalogue on new61.5tv.lol. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.title.get` | Read a title’s summary and episode count from the selected publisher on new61.5tv.lol. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.titles.list` | Browse television and film titles in the selected publisher’s catalogue on new61.5tv.lol. | Per successful call; quote exact input for the maximum price. |
| `video.catalogue.weekly-schedule.list` | Read television programme titles and times grouped by day on new61.5tv.lol. | Per successful call; quote exact input for the maximum price. |
| `video.channel-details.get` | Read channel details on app.channelcrawler.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `video.channel-videos.get` | Read channel videos on space.bilibili.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `video.channels.search` | Search channels on filmot.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `video.dialogue.transcribe` | Transcribe spoken personal content from a video into words with absolute millisecond timings and local labels, as a job. Source at most one hour; upload at most 8 MB. Needs file storage. | Per successful call; quote exact input for the maximum price. |
| `video.draft.generate` | Generate a 480p video preview from text and optional uploaded images. Returns a draft reference when the job finishes; enhancement needs a later operation. The preview file is kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.edit` | Edit a video, including personal video and voices. A source that cannot honor the clip length or size declines, and may normalize frame rate or resolution; source audio is retained where supported. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.editing-guidance.statements.list` | Read statements about editing features from a resource article on capcut.com. | Per successful call; quote exact input for the maximum price. |
| `video.effect-templates.list` | List named visual effects and the number of reference images each requires. Free, immediate catalogue; no saved template refs. | Per successful call; quote exact input for the maximum price. |
| `video.effects.generate` | Render a named visual effect using one or two supplied images. May process faces; runs as a job and keeps the video for 7 days. Current source spending estimate: $6.30; template-specific prices and a proven maximum remain unverified. | Per successful call; quote exact input for the maximum price. |
| `video.episode.playback.get` | Read a television episode’s title, duration and playback availability on 13tv.co.il. | Per successful call; quote exact input for the maximum price. |
| `video.eu-broadcasts.schedule.list` | List European institutional broadcasts with start times and languages on audiovisual.ec.europa.eu. | Per successful call; quote exact input for the maximum price. |
| `video.extend` | Generate continuation footage from one video, including personal video or voices; the result is the added clip. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.faces.detect` | Detect visible faces in a supplied video. Returns cropped previews and appearance times, without identifying people. Runs as a job; previews are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.frame.extract` | Extract the first, middle or last frame of an uploaded video, which may contain people. Input up to 500 MB and 300 seconds; returns up to three image files. | Per successful call; quote exact input for the maximum price. |
| `video.generate` | Generate a short video clip from a text prompt. Runs as a job; the result has links to the video files, kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.generate-bulk` | Generate videos for up to 8 prompt rows as a job; each row carries your own id. Prompts and generated videos may depict people. | Per successful call; quote exact input for the maximum price. |
| `video.generate-configured` | Generate a clip with explicit length, framing, resolution and audio controls. Sources decline unsupported options. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.guardrail-tags.list` | List tags on your owned guardrails; shared account tags and foreign guardrail names are excluded. | Per successful call; quote exact input for the maximum price. |
| `video.guardrail.create` | Create a named conversational guardrail. Its prompt and tags may contain personal information; callbacks are not registered. | Per successful call; quote exact input for the maximum price. |
| `video.guardrail.delete` | Delete your named configuration. Confirmation is required; this does not erase conversation records. | Per successful call; quote exact input for the maximum price. |
| `video.guardrail.get` | Read your named guardrail, including its behavioral prompt and tags. | Per successful call; quote exact input for the maximum price. |
| `video.guardrail.update` | Update your named conversational guardrail without changing its ownership or name. | Per successful call; quote exact input for the maximum price. |
| `video.guardrails.list` | List only your named configurations, with at most 50 rows per page. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.create` | Match one face in a supplied video to supplied speech audio. Processes faces and voices; runs as a job and keeps the result for 7 days. Current source maximum: $0.847, including face detection and up to 60 seconds of rendering. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.delete` | Permanently delete an owned terminal lip-sync media record. Pending work cannot be cancelled by deletion. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.download` | Copy the completed lip-sync video, including its face and voice content, to platform storage. Outputs above 25 MB are refused; needs file storage. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.get` | Read the status, duration and progress of an owned lip-sync video. Returns media metadata only. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.options` | List available lip-sync processing qualities without account details. | Per successful call; quote exact input for the maximum price. |
| `video.lipsync.update` | Change the output filename of an owned lip-sync video. | Per successful call; quote exact input for the maximum price. |
| `video.lipsyncs.list` | List only the caller's lip-sync media records, with handles for follow-up calls. Sparse pages may be empty and still have a next cursor. | Per successful call; quote exact input for the maximum price. |
| `video.live-streams.list` | List live streams on live.acfun.cn. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |
| `video.merge` | Join two to ten uploaded videos in the supplied order, which may contain people and voices. Inputs up to 500 MB in total and 300 seconds combined. | Per successful call; quote exact input for the maximum price. |
| `video.microdramas.search` | Find short drama series by title, theme or story topic on goodshort.com. | Per successful call; quote exact input for the maximum price. |
| `video.motion-options.list` | List video concept controls or camera motion phrases. This is free; supported controls depend on the generation source. | Per successful call; quote exact input for the maximum price. |
| `video.movie.formats.list` | List available playback formats and languages for a film on vidrock.to. | Per successful call; quote exact input for the maximum price. |
| `video.movie.subtitles.list` | List published subtitle tracks for a film on vidrock.to. | Per successful call; quote exact input for the maximum price. |
| `video.multi-shot.generate` | Generate a video from a story brief or three to five timed shots. Custom shot durations must sum to the video duration. Runs as a job; files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.objective-set.create` | Create a named objective set containing one objective. Prompts and collected variable definitions may contain personal information. | Per successful call; quote exact input for the maximum price. |
| `video.objective-set.delete` | Delete your named configuration. Confirmation is required; this does not erase conversation records. | Per successful call; quote exact input for the maximum price. |
| `video.objective-set.get` | Read your named objective set and its prompt; may contain personal information. | Per successful call; quote exact input for the maximum price. |
| `video.objective-set.update` | Update the objective in your named set, preserving its stable key. | Per successful call; quote exact input for the maximum price. |
| `video.objective-sets.list` | List only your named configurations, with at most 50 rows per page. | Per successful call; quote exact input for the maximum price. |
| `video.product-ad.generate` | Generate a product advertisement from uploaded product and style images. Runs as a job; files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.product-ugc.generate` | Generate a presenter product video from uploaded character and product images. Images may depict a person; the generated video is kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.quote-clips.search` | Search quote clips on getyarn.io. | Per successful call; quote exact input for the maximum price. |
| `video.reframe` | Reframe a video by filling new canvas around it. Runs as a job; input duration is checked before payment. Maximum current-tier cost 3.60 USD; other rates are provisional. | Per successful call; quote exact input for the maximum price. |
| `video.render.delete` | Delete your rendered video and its personal content; confirm must be true. | Per successful call; quote exact input for the maximum price. |
| `video.render.get` | Read your rendered video's metadata, which may contain personal text; optionally copy its finished video within 25 seconds, up to 25 MB. | Per successful call; quote exact input for the maximum price. |
| `video.render.update` | Change your video's name, personal description, sharing or button settings; scene content stays the same. | Per successful call; quote exact input for the maximum price. |
| `video.renders.list` | List your rendered videos and their names, descriptions and states; metadata may contain personal text. Empty pages can still have a next page. | Per successful call; quote exact input for the maximum price. |
| `video.search` | Search public videos; returns links, excerpts, duration and published creator names. | Per successful call; quote exact input for the maximum price. |
| `video.stock-footage.search` | Search stock footage by topic and category on artlist.io. | Per successful call; quote exact input for the maximum price. |
| `video.stock-trending.list` | List trending public stock-video records and dimensions. | Per successful call; quote exact input for the maximum price. |
| `video.subtitle-examples.search` | Find paired subtitle phrases in two languages on filmot.com. | Per successful call; quote exact input for the maximum price. |
| `video.talking-photo.generate` | Animate a portrait photo using supplied speech audio. Processes a face and voice; runs as a job and keeps the video for 7 days. Current source maximum: $16.80 for fast quality or $33.60 for best quality at 300 seconds. | Per successful call; quote exact input for the maximum price. |
| `video.template.create` | Create a private template from a caller avatar render. Starts with no variables. Copies likeness, media and script into a stored template. | Per successful call; quote exact input for the maximum price. |
| `video.template.delete` | Remove a caller template from use. Soft deletion leaves previously rendered videos intact. | Per successful call; quote exact input for the maximum price. |
| `video.template.get` | Get the caller template variables, bindable elements and scenes, including script text. | Per successful call; quote exact input for the maximum price. |
| `video.template.update` | Rename a template belonging to the caller. | Per successful call; quote exact input for the maximum price. |
| `video.template.variables.update` | Replace the complete set of template variables, including text, image, video, audio, avatar and voice bindings. | Per successful call; quote exact input for the maximum price. |
| `video.templates.list` | List templates created by this caller. Unowned workspace templates are omitted. | Per successful call; quote exact input for the maximum price. |
| `video.thumbnail.get` | Copy your video's thumbnail, which may show a person's face, within 25 seconds; JPEG or GIF up to 20 MB. | Per successful call; quote exact input for the maximum price. |
| `video.tool.create` | Register a named tool configuration for application message delivery. This does not execute the tool; callbacks, secrets and connected service tools are declined pending delivery support. | Per successful call; quote exact input for the maximum price. |
| `video.tool.delete` | Delete your named configuration. Confirmation is required; this does not erase conversation records. | Per successful call; quote exact input for the maximum price. |
| `video.tool.get` | Read your named tool configuration, including argument definitions; never returns credentials or delivery URLs. | Per successful call; quote exact input for the maximum price. |
| `video.tool.update` | Update your named tool configuration; external delivery and secrets are not supported yet. | Per successful call; quote exact input for the maximum price. |
| `video.tools.list` | List only your named configurations, with at most 50 rows per page. | Per successful call; quote exact input for the maximum price. |
| `video.translation.languages.list` | List the documented language and dialect choices for video translation. | Per successful call; quote exact input for the maximum price. |
| `video.translations.list` | Read the language states of translations of your personal video; this call does not start rendering or return translated files. | Per successful call; quote exact input for the maximum price. |
| `video.tv-episode.formats.list` | List available playback formats and languages for a television episode on vidrock.to. | Per successful call; quote exact input for the maximum price. |
| `video.tv-episode.subtitles.list` | List published subtitle tracks for a television episode on vidrock.to. | Per successful call; quote exact input for the maximum price. |
| `video.upscale` | Enlarge a video, including personal video and voices. A source that cannot honor the clip length or size declines. Source audio is retained where supported; large outputs may use a smaller scale. Jobs and files are kept for 7 days. | Per successful call; quote exact input for the maximum price. |
| `video.user-info.get` | Read user info on dailymotion.com. Returns personal data: personal details as published. | Per successful call; quote exact input for the maximum price. |

### SoundCloud

| Id | What it does | Price basis |
|---|---|---|
| `soundcloud.artist.detail` | Read a SoundCloud artist's public profile by its handle, with its follower and track counts. Returns personal data: the artist's public name, picture, description and location. | Per successful call; quote exact input for the maximum price. |
| `soundcloud.artist.tracks` | List the tracks a SoundCloud artist has published, with their genres, plays and likes. Returns personal data: the artist's public name and published track titles. | Per successful call; quote exact input for the maximum price. |
| `soundcloud.track.detail` | Read a public SoundCloud track title, genre and engagement counts. | Per successful call; quote exact input for the maximum price. |

### Spotify

| Id | What it does | Price basis |
|---|---|---|
| `spotify.album.detail` | Read a Spotify album title, release date, label and public page. | Per successful call; quote exact input for the maximum price. |
| `spotify.artist.detail` | Read a Spotify artist's public profile, with their name, biography, follower count and monthly listeners. Returns personal data: the artist's public name and biography. | Per successful call; quote exact input for the maximum price. |
| `spotify.podcast.detail` | Read a Spotify podcast title, description, publisher and public page. | Per successful call; quote exact input for the maximum price. |
| `spotify.podcast.episodes` | Read the first page of Spotify podcast episodes and their public catalogue links. | Per successful call; quote exact input for the maximum price. |
| `spotify.search` | Search public album and track titles. Results omit user and artist profiles. | Per successful call; quote exact input for the maximum price. |
| `spotify.track.detail` | Read a Spotify track title, duration, play count and public page. | Per successful call; quote exact input for the maximum price. |

## Missions

### General

| Id | What it does | Price basis |
|---|---|---|
| `audio.caption.sync` | Timed subtitles from a known script and its recording, written as SRT or VTT. | Sum of step prices; quote exact input and options for the maximum price. |
| `audio.dub` | A recording spoken again in another language: transcribed, translated, and spoken as generated audio files returned in order. | Sum of step prices; quote exact input and options for the maximum price. |
| `audio.translate` | A recording transcribed and translated into one other language, in order, with any gap or unread remainder reported. | Sum of step prices; quote exact input and options for the maximum price. |
| `audio.trend.check` | How a sound is being used: its use count, top videos on TikTok and Reels, the creators driving it and how the sample spreads over weeks. | Sum of step prices; quote exact input and options for the maximum price. |
| `avatar.presenter.video` | A video of an avatar built from a consented person, speaking the supplied script. | Sum of step prices; quote exact input and options for the maximum price. |
| `avatar.video.generate` | Submit an exact caller-written script with a public preset avatar and public voice, and return a generated video only when its matching job confirms completion. | Sum of step prices; quote exact input and options for the maximum price. |
| `clip.generate` | A short video clip and a separate narration file from one script, not a mixed clip: the script becomes one checked visual prompt for the video, and the script itself is spoken as the narration. | Sum of step prices; quote exact input and options for the maximum price. |
| `explainer.illustrated` | A short explainer with text and generated images in order, rendered to HTML. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.campaign.generate` | Four campaign images from a product picture and a brief, in the brand's own look, each read by an image check before it is returned. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.describe-labels` | Return structured image labels and optional detected text, with a checked caption from those labels. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.design.layers` | A flat design split into editable parts: positioned text blocks with a text-free base, picture layers, and, with reference logos, where each logo sits. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.find.match` | Web images for a description, each with the page it is on and its size, read against the description by its title and against the size asked for. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.generate-checked` | Images from rough prompts: expanded, rendered with explicit controls, and rejected when a check finds unsafe content, missing required text or low quality. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.moderate` | Report recognised image safety likelihood flags and an optional exact color comparison with the brand palette. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.object.remove` | Unwanted objects or text removed from a picture: each named object is found among the picture's detected objects, masked and erased, and the result is checked. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.photo.restore` | An old or damaged photo repaired, optionally de-blurred, colourised, enlarged and compressed, with the original kept beside every stage's image. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.product.shots` | A clean product photo from one uploaded image: background removed or replaced, shadow added, framing fixed, optionally relit and enlarged, then checked for quality. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.product.variants` | The same product in new colours and materials: a mask made from the name of the part, one edit per variant, each result checked. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.set.generate` | Images in a brand's own colours and style: the brand's visual identity is read from its site, a prompt per image is written and checked against it, and each prompt is generated into an image. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.source.find` | Check caller-supplied candidate page text for an exact image address, with an explicit status for every page. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.style.kit` | A saved house style built from reference pictures, then used to render a batch of new images in that style, each read by an image check. | Sum of step prices; quote exact input and options for the maximum price. |
| `image.usage.find` | Pages that show the builder's own logo or product image, with the ones that are not the builder's own flagged. Used for brand and product images only, never to find a person from a photo. | Sum of step prices; quote exact input and options for the maximum price. |
| `music.artist.snapshot` | Match explicit artist profiles, preserve platform figures and source-ranked songs, and inspect known sounds credited to the artist. | Sum of step prices; quote exact input and options for the maximum price. |
| `music.remix` | A track split into stems, then transformed, extended or part-replaced from a prompt. | Sum of step prices; quote exact input and options for the maximum price. |
| `music.trend.report` | Sound details, usage videos and separate current music charts, with themes from the sampled titles; no growth inferred. | Sum of step prices; quote exact input and options for the maximum price. |
| `podcast.episodes.digest` | A podcast's recent dated episodes with summaries from their listing descriptions. | Sum of step prices; quote exact input and options for the maximum price. |
| `podcast.shownotes` | Chapters, quotes and a summary from one episode: the recording is transcribed, and every chapter start and quote is anchored to the transcript passage it comes from, word for word. | Sum of step prices; quote exact input and options for the maximum price. |
| `song.make` | Write song lyrics or edit supplied lyrics from a brief. | Sum of step prices; quote exact input and options for the maximum price. |
| `speech.pronunciation.set` | A pronunciation dictionary built or changed and read back, so speech can say names and terms correctly. | Sum of step prices; quote exact input and options for the maximum price. |
| `talking-photo.make` | A portrait photo made to speak supplied text or audio, only when consent for that face is on record. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.agent.deploy` | A conversational video agent set up in one step: guardrail, objective, tools, then attached and read back. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.clips.ideas` | Short-form post ideas and hook lines from a long YouTube video's transcript, each with the quote and its rough position. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.dub` | A video spoken again in another language in the speakers' own voices, followed until done, with an optional lip match. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.enhance` | Enlarge a video while preserving its source detail. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.formats.make` | One video delivered in the shapes each channel needs, with a thumbnail for each and an optional enlarged copy. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.ideas.find` | Generate checked video topic ideas from niche searches, ranked videos, Shorts and sampled viewer comments. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.likeness.consent` | A verified consent record for a real person before any avatar, voice or lip-sync of them is made. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.motion.from-images` | Stills animated into clips, extended and joined into one sequence. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.product.ad` | A product advert and a presenter-style product video from product images, with the concept checked against the product information. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.research` | The top videos on a topic, in the search's own order, each with what its title, description and comments say it is about. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.short.make` | A short video from a brief: script written and checked, scenes generated and joined, with narration, a soundtrack and subtitles as separate files. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.subtitles.make` | Subtitle files in the original language and a chosen one, from a video link or upload, with the caption timing checked. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.summarize` | A video's transcript turned into a short summary, key points with exact quotes and rough chapters, for a link on a supported platform. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.template.batch` | One video template rendered many times with different variables, each render followed until done. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.transcript.digest` | A video's spoken words or subtitles with its details and top comments, and a checked digest, from YouTube, TikTok or Bilibili. | Sum of step prices; quote exact input and options for the maximum price. |
| `video.watch` | What a public video says and shows: transcript, key frames described, and a summary where each point cites a time. | Sum of step prices; quote exact input and options for the maximum price. |
| `walkthrough.record` | Record a bounded sequence of page opens and clicks, close the recorded session with approval and export each requested page as a stored MP4. | Sum of step prices; quote exact input and options for the maximum price. |
