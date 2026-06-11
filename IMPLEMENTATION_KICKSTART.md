# Implementation Kickstart — Premium Solar Landing Page

A conversion-optimized, single-CTA solar landing page prototype with a **Carolwood Estates–grade luxury aesthetic** (cinematic imagery, editorial serif display type, generous whitespace, restrained motion). The entire page funnels toward one action: enter details → calculate savings → buy solar.

---

## 1. Implementation Readiness: ✅ Actionable

The spec is detailed and buildable. Two ambiguities are resolved here so the build can proceed without blocking:

| Open Question | Decision |
| --- | --- |
| Footer "Contact Representative" page | **Same-page view toggle** via local React state (no new route). Renders a contact form, with "Back to Landing." |
| Background imagery | **Generate a custom cinematic architectural image** (modern dark estate at twilight, warm interior glow) and reference it locally. |

No new features, integrations, or technologies beyond the original spec.

---

## 2. Tech Stack (Locked)

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS utility classes
- **UI:** native shadcn/ui primitives — `Slider`, `Card`, `Input`, `Button`, `Dialog`
- **Icons:** `lucide-react`
- **Motion:** `framer-motion` (counter increments, fade-in-up, hover scale)
- **Fonts:** Geist (sans) + an editorial serif display face for headlines (Carolwood feel)
- **State:** client-side React hooks only — no backend, no persistence

---

## 3. Design System

### Carolwood-Inspired Premium Layer
- **Editorial display serif** for major headlines with `tracking-tight`; tight, confident line-height.
- **Cinematic full-bleed hero image** of a modern dark architectural estate at twilight with glowing warm interior lights and clean rooflines.
- **Dark vignette overlay:** `bg-gradient-to-b from-black/60 via-zinc-950/80 to-zinc-950` for a moody, integrated feel.
- **Generous whitespace**, slow reveal-on-scroll, understated transitions — luxury restraint over hype.

### Tokens (globals.css)
- **Base theme:** ultra-clean dark — Zinc/Black background, crisp white text, muted zinc subtext.
- **Accent (single):** Solar Amber **or** Vibrant Green — used **exclusively** for money-saved metrics and primary CTA buttons.
- **Glassmorphism:** all cards/navbar/modals → `backdrop-blur-md bg-zinc-900/40 border border-zinc-800/50`.
- Color budget: 3–5 colors total (base, neutral subtext, one accent). No purple. No gradients beyond the hero vignette.

---

## 4. Layout Structure (Value-First, Friction-Last)

1. **Navbar** — fixed glass header, responsive with functional Lucide burger menu (mobile).
2. **Hero** — cinematic background image + dark vignette.
   - Left: serif headline "Stop renting your power. Own it." + subheadline referencing Austin homeowners locking in fixed costs (up to **$45,000 / 20 years**).
   - Right: glass **Instant ROI Sandbox** card with shadcn `Slider` (monthly bill **$100–$500, default $280**). Slider dynamically scales the **"Estimated 20-Year Savings"** readout with framer-motion counter increments.
3. **Core CTA** — full-width address/zip `Input` + primary `Button` "See My Roof's Potential". Any primary CTA opens a shadcn `Dialog`.
4. **Program Features** — 3-column glass card grid with Lucide icons:
   - Tier-1 Hardware (high-efficiency mono panels, Texas-heat rated)
   - Smart Grid Integration (home battery, push-back credits)
   - White-Glove Installation (HOA, permits, structural assessments)
5. **Pricing** — side-by-side: "Status Quo" inflated utility bills vs. accent-bordered "Solar Ownership Program" ($0-down, payments below current bill, builds equity).
6. **Proof & Guarantees** —
   - "25-Year Production Guarantee" + "Zero-Leak Roof Warranty" in bold language.
   - Glass case-study card: **Marcus V., Austin TX** — saved $2,100 yr 1, 8.2 kW, bill $280 → $35/mo.
7. **Single-CTA Footer** — minimalist full-width glass: left = muted copyright + legal/privacy links; right = mini zip input → "Calculate Savings". Includes "Contact Representative" (view toggle) and smooth "Back to Top".
8. **Floating Conversion Dock** — desktop sticky glass header after hero; mobile persistent bottom dock. Each contains only the compressed Address Input + "Calculate Savings" CTA.

---

## 5. Persona Defaults (Hardcode for Prototype)

- **Marcus Vance**, 42, Austin TX — 4BR home, unshaded south-facing roof.
- Default slider value: **$280/mo**.
- Savings copy anchored to **$45,000 / 20 years**.

---

## 6. File Structure (modular, < 500 LOC each)

```
app/
  layout.tsx          # fonts (Geist + serif), metadata, <html className="bg-background">
  page.tsx            # composes sections + manages view toggle (landing | contact)
  globals.css         # dark theme tokens + accent
components/
  navbar.tsx
  hero.tsx
  roi-sandbox.tsx     # slider + animated savings counter
  cta-band.tsx
  features-grid.tsx
  pricing-compare.tsx
  proof-guarantees.tsx
  site-footer.tsx
  conversion-dock.tsx
  contact-view.tsx
  lead-dialog.tsx     # shared shadcn Dialog for all CTAs
lib/
  savings.ts          # bill -> 20-year savings calculation
public/
  estate-hero.png     # generated cinematic background
```

---

## 7. Build Order

1. Theme + fonts in `globals.css` / `layout.tsx`.
2. Generate cinematic hero image → `public/estate-hero.png`.
3. Install `framer-motion`; add shadcn `slider`, `card`, `input`, `dialog` (button preinstalled).
4. Build savings logic (`lib/savings.ts`) + ROI sandbox.
5. Hero → CTA band → features → pricing → proof → footer.
6. Lead dialog wired to every primary CTA.
7. Conversion dock (desktop sticky / mobile bottom).
8. Contact view toggle + back-to-top.
9. Fade-in-up + hover-scale motion pass.
10. Verify in browser (snapshot + screenshot + responsive).

---

## 8. Acceptance Criteria

- [ ] Single CTA destination — every action routes to the lead dialog / calculate flow.
- [ ] Slider live-updates animated 20-year savings readout.
- [ ] Accent color appears **only** on money metrics + primary CTAs.
- [ ] Cinematic hero + glassmorphism present across cards/navbar/modal.
- [ ] Fully responsive; mobile burger menu + bottom dock functional.
- [ ] Semantic HTML (`h1`, `h2`, `section`) for SEO; metadata set.
- [ ] Contact view toggle and back-to-top work via local state.
