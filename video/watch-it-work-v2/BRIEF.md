---
workflow: general-video
flow: automation
storyboard: no
message: "Say what you need. Keep the proof."
audience: non-technical small-business people and founders
destination: website-embed
aspect: 1280x720
language: en
length: 45s
---

## Intent

A ~45-second silent, seamless-loop explainer for the Pramaan website (successor to the 12s
"Watch it work" clip). Five plain-words asks show the one rule a non-technical viewer must take
away: lookups just happen ("NO OK NEEDED · JUST A LOOKUP"); anything that contacts people or
moves money stops at an approval card (Not now / Yes) first. Results appear on screen and are
"Saved to your history". Storyboard approved in chat (below); no further plan pause.

## Customizations

- Story 1 — Ask "Research Acme before my meeting" → brief card "Acme Corp": What they do ·
  Packaging for food brands / Recent news · Opened a plant in Pune / Key people · Jane Doe,
  VP Marketing; tag NO OK NEEDED · JUST A LOOKUP; "Saved to your history" with drawn check.
- Story 2 — Ask "Is jane@acme.com a real email?" → result pill "Valid · safe to send" with
  drawn check, "in e.g. 2 seconds", NO OK NEEDED tag.
- Story 3 — Ask "Send a proctored test to my 3 shortlisted candidates" → approval card "Send the
  Sales Skills test to 3 people?" (Arjun, Mei, Sara · Camera on · 45 min), Not now / Yes; tap
  Yes → "Invites sent". "Later…" beat: results Arjun 82 · Mei 74 · Sara 91, "1 moment flagged
  for review" (small coral dot).
- Story 4 — Ask "Send Priya a payment link for $200" → approval card "Send Priya a $200 payment
  link?" with link preview row; Yes → "Link sent".
- Story 5 — Ask "Email everyone who signed up this week" → approval card "Email 24 people?"
  with first 3 names + "+21 more" and message preview "Welcome aboard — here's how to get
  started"; Yes → "Sent to 24".
- End (~5s) — five jobs stack into a "Your history" list (job · status · e.g. cost), serif line
  "Say what you need. Keep the proof." + small pramaan wordmark, fade back to empty ask box.
- Deliverables: pramaan/media/watch-it-work-v2.mp4 (H.264 yuv420p faststart, no audio,
  < 3 MB), .webm (VP9), .jpg poster (frame 0). 1280x720, 30fps, silent.

## Notes

- Reuse the approved design of ../watch-it-work exactly (do not modify that project): parchment
  #f6f3f1, pastel blurred washes (coral #ff9473, sky #a0b5eb, mint #a7fccd, gold #ecda98),
  Newsreader 400 serif titles (-0.02em, never bold), JetBrains Mono UI (uppercase labels),
  text #242424 / #4e4d4d, hairline #cecac8, pills 9999px, cards 40px / receipt 24px, no drop
  shadows, periwinkle #cfdaf5 approval card with "NEEDS YOUR OK" label, drawn SVG checks (no ✓
  glyph). Lake Blue #2b59d1 ONLY on "Yes" buttons.
- No code, no API terms, no provider names. Never imply delivery to email or any other channel
  for results — results show on screen and are saved to history. Every cost/time is prefixed
  "e.g.". Silent — no audio track.
- Studio preview skipped (no human present in this automation run; storyboard pre-approved).
- Built length 51.5s (storyboard said ~45s; paced up for readability of 5 stories + end).
  Structure: index.html (background, ask pill/header, typing driver) + compositions/story-1..5.html
  and compositions/ending.html, split to satisfy the 300-line lint limit.
