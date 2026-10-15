# Badge expansion

Plan for taking `badge.html` from a client-side badge maker to real, verifiable Pramaan membership badges.

Status: **proposal**. Nothing here is built yet. Owners, dates and the open questions at the end need a decision before work starts.

## Where we are today

- `badge.html` + `<lanyard-badge>`: four tiers (Founding Member, Contributor, Provider Partner, Early Tester), live editor, PNG download, share link with the details in the URL.
- The badge ID (`PRM-XXXX-XXXX`) is a **checksum** of tier, name, number and year. Anyone can recompute it. It is not stored, signed or revocable, so anyone can make a badge with any name today.
- No backend. The site is static HTML on any host.

## The seven items

| # | Item | Needs backend | Size | Depends on |
|---|---|---|---|---|
| 1 | Signed badges + public check page | Yes | L | Foundation |
| 2 | Public members wall | Yes | M | 1 |
| 3 | Add to LinkedIn | No (link only) | S | 1 (for the check URL) |
| 4 | README badge for GitHub | No for static, yes for live | S | 1 for the live version |
| 5 | Badges that grow | Yes | M | 1 + usage data |
| 6 | Wallet pass (Apple / Google) | Yes | L | 1 |
| 7 | Lanyard print file | No | S | none |

Recommended order: **7 → 4 (static) → Foundation → 1 → 3 → 2 → 5 → 6**. Items 7 and the static version of 4 can ship now, with no backend.

---

## Foundation (shared by 1, 2, 3, 5, 6)

One small service that issues, stores, signs and revokes badges. It can live alongside the Pramaan API (`api.pramaan.dev`) or as its own tiny service.

### Data model

```
badge
  id              PRM-XXXX-XXXX (random, not derived from details)
  tier            founding | contributor | provider | tester
  number          integer, unique per tier (founding = join order)
  holder_name     display name
  holder_role     short line
  holder_handle   optional: GitHub / LinkedIn / email (private)
  issued_at       date
  issued_by       admin user id
  ornament        seal | mandala
  public          bool (holder opted in to the members wall)
  revoked_at      null | date
  revoke_reason   null | text
  signature       Ed25519 over the canonical badge JSON
```

### Endpoints

- `POST /v1/badges` (admin): issue a badge. Assigns the ID and number, signs it.
- `GET /v1/badges/{id}`: public badge JSON + signature + status (valid / revoked).
- `POST /v1/badges/{id}/revoke` (admin).
- `GET /.well-known/pramaan-badge-key.json`: the public signing key, so anyone can verify offline.

### Admin flow

V1 is an admin-only form (reuse the `badge.html` editor) that calls `POST /v1/badges`. Holders do not self-issue.

### Acceptance

- An issued badge's ID resolves to the same details on any device.
- Changing any field breaks signature verification.
- A revoked badge shows as revoked everywhere it is checked.

---

## 1. Signed badges + public check page

**What:** every issued badge links to `pramaan.dev/badge/PRM-XXXX-XXXX`, a page that shows the badge (the same `<lanyard-badge>`), its status and "Signed by Pramaan · verified".

**Build:**
- Check page reads `GET /v1/badges/{id}`, verifies the Ed25519 signature in the browser against the published key, and shows Valid / Revoked / Not found.
- `badge.html` splits into: a public **check** view (by ID) and an admin **issue** view.
- Print a short check URL (or QR) on the back of the card, replacing the checksum ID.
- Export the badge as an **Open Badges 3.0** credential (W3C Verifiable Credential format), so it can live in other badge wallets.

**Acceptance:** a badge downloaded today and checked a year later still verifies, unless revoked.

**Risk:** key management. Keep the signing key server-side only, rotate yearly, and keep old public keys published so old badges still verify.

## 2. Public members wall

**What:** `pramaan.dev/members`, a grid of badge holders who opted in, grouped by tier, in number order. Founding Members #1–100 can be a limited, closed series.

**Build:**
- `GET /v1/badges?public=true&tier=founding` (paged).
- A page with the four tiers as tabs and a small card per member: name, number, role, link to their check page.
- Opt-in only (`public` flag), with a way for holders to opt out later.

**Decision needed:** is Founding Member capped at 100? Are numbers assigned by join date or by issue date?

**Privacy:** show name and role only. Never show email or handles unless the holder adds them.

## 3. Add to LinkedIn

**What:** a "Add to LinkedIn" button on the check page that opens LinkedIn's "Add licence or certification" form, prefilled.

**Build:** a link, no API key needed:

```
https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME
  &name=Pramaan%20Founding%20Member
  &organizationId=<Pramaan LinkedIn company id>
  &issueYear=2026&issueMonth=10
  &certUrl=https://pramaan.dev/badge/PRM-XXXX-XXXX
  &certId=PRM-XXXX-XXXX
```

**Needs:** a Pramaan company page on LinkedIn (for the logo and `organizationId`), and item 1, so `certUrl` points at a real check page.

**Acceptance:** the badge appears under the holder's Licences & certifications with the Pramaan logo, and "Show credential" opens the check page.

## 4. README badge for GitHub

**What:** a small badge image contributors can paste into a README or profile, for example `[pramaan · contributor #12]`.

**Build, in two steps:**
- **Now (static):** add "Copy README badge" to `badge.html`. It generates a small SVG in the design system (parchment pill, mono text, ring-and-dot mark) plus the Markdown snippet. The SVG downloads; no backend.
- **Later (live):** `GET /v1/badges/{id}.svg` serves the same SVG from the API, so a revoked badge's image updates everywhere. The snippet links to the check page.

**Acceptance:** renders correctly on GitHub in light and dark mode, and the link opens the check page.

## 5. Badges that grow

**What:** the back of the card shows real activity, for example "14 capabilities added · 2,310 jobs run", and gains marks at milestones (first contribution, 10, 50, 100).

**Build:**
- `GET /v1/badges/{id}/stats` returns counts tied to the holder's account: contributions merged (from GitHub), jobs run (from Pramaan's usage ledger), capabilities or providers added.
- `<lanyard-badge>` gets an optional `stats` attribute and draws the counts on the back.
- Milestones become extra marks on the strap or front.

**Decisions needed:** which numbers are meaningful per tier, and whether holders can hide their stats.

**Risk:** only show numbers we can stand behind. Every stat should link to where it comes from, which fits "keep the proof".

## 6. Wallet pass (Apple / Google)

**What:** "Add to Apple Wallet" and "Save to Google Wallet" on the check page, for events and meetups. The pass shows tier, name, number, and a QR code to the check page.

**Build:**
- **Apple:** generate a signed `.pkpass` server-side. Needs an Apple Developer account and a Pass Type ID certificate.
- **Google:** Google Wallet API, Generic pass class + object. Needs a Google Wallet issuer account.
- Passes update or void automatically when a badge is revoked (push updates).

**Acceptance:** the pass installs on both platforms, and scanning the QR opens the check page showing Valid.

**Cost:** Apple Developer Program fee; both platforms need issuer approval, which takes time. Start the accounts early.

## 7. Lanyard print file

**What:** the same strap design as the on-screen lanyard, exported as a print-ready file for real lanyards at events.

**Build:**
- Add an "Export strap" button to `badge.html` that renders the strap pattern from `<lanyard-badge>` (seal or mandala, tier ink colour) as a long SVG/PDF at print size, for example 20 mm × 900 mm with bleed.
- Fonts converted to outlines (or embedded) so the printer doesn't need them.
- A matching card print file (front + back at 86 × 54 mm or 4 × 6 in, 300 dpi, with crop marks).

**Needs:** the print vendor's spec (width, colour mode, bleed). Off-black and the pastel inks should be checked on a physical proof, since screen colours shift in print.

**Acceptance:** a vendor accepts the file without changes, and a physical proof matches the design.

---

## Open questions

1. Who can issue badges: founders only, or a small admin group?
2. Are Founding Members capped (e.g. #1–100), and how are numbers assigned?
3. What earns each tier exactly? The tier text on `badge.html` is a draft.
4. Where does the badge service live: inside the Pramaan API or as its own service?
5. Do we want Open Badges 3.0 compatibility from day one, or later?
6. Which wallet first, Apple or Google?
7. Is there an event coming up that sets a deadline for item 7?
