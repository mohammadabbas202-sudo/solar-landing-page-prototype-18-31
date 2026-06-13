# Frontend Implementation Plan — Solstice Solar Landing Page

This document tracks all frontend-only improvements identified during the site review. No backend work is required for any item below — forms can continue to use client-side success states until an API is wired up.

**How to use this doc:** Check off items as they ship. Work top-to-bottom within each phase when possible; later phases may depend on earlier ones.

---

## Progress Summary

| Phase | Focus | Status |
|-------|-------|--------|
| 1 | Conversion & trust (high impact) | ✅ Complete |
| 2 | UX, navigation & polish | ⬜ Not started |
| 3 | Visual design & layout | ⬜ Not started |
| 4 | Mobile experience | ⬜ Not started |
| 5 | Accessibility & performance | ⬜ Not started |
| 6 | Nice-to-have delight | ⬜ Not started |

---

## Phase 1 — Conversion & Trust (High Impact)

> **Goal:** Make the page feel like one coherent story — calculator, proof, and lead capture all connected.

### 1.1 Connect the ROI sandbox to lead capture

**Files:** `components/roi-sandbox.tsx`, `components/lead-dialog.tsx`, `lib/savings.ts`, optionally `app/page.tsx` or a shared context

- [x] Lift `bill` state (or expose via React context) so the lead dialog can read the current slider value
- [x] When opening the lead dialog, pass prefill data: current bill + computed 20-year savings + new monthly bill
- [x] Show a summary line inside the dialog (e.g. “Based on your $280/mo bill, est. 20-year savings: $45,000”)
- [x] Sync case study stats in `proof-guarantees.tsx` with the same bill value (or clearly label them as a fixed example)
- [x] Ensure inline CTAs and the sandbox share the same savings context where relevant

### 1.2 Add a primary CTA in the hero copy column

**Files:** `components/hero.tsx`, optionally `components/inline-cta.tsx`

- [x] Add a CTA below the hero subcopy (button and/or compact ZIP field)
- [x] Wire CTA to `useLead()` with optional ZIP prefill
- [x] On mobile, ensure the CTA appears above the ROI sandbox (reorder grid or duplicate a compact CTA)
- [x] Verify tap targets meet ~44px minimum height on small screens

### 1.3 Expand social proof

**Files:** `components/proof-guarantees.tsx`, new `components/social-proof-bar.tsx` (optional), `public/` assets

- [x] Add 2–3 additional testimonials (name, Austin neighborhood, short quote)
- [x] Add a stats bar (e.g. “500+ Austin installs”, “$12M+ saved”, “4.9★ avg rating”) — static copy is fine
- [x] Add a partner/certification logo strip (Enphase, NABCEP, etc.) — static SVGs or placeholders
- [x] Optionally add a star rating badge near the primary testimonial
- [x] Consider a homeowner photo or avatar initials for each quote (placeholder images OK)

### 1.4 Turn “How It Works” into a process timeline

**Files:** `components/features-grid.tsx` or new `components/how-it-works.tsx`, `app/page.tsx`

- [x] Replace or supplement the three feature cards with a 4-step timeline (Consult → Design → Permit & Install → Power On)
- [x] Keep feature cards as secondary content below the timeline, or merge key points into step descriptions
- [x] Ensure `#how-it-works` anchor still resolves correctly
- [x] Add step numbers or connecting line for visual clarity on desktop and mobile

### 1.5 Add an FAQ section

**Files:** new `components/faq.tsx`, `app/page.tsx`, `components/site-footer.tsx`

- [x] Create accordion FAQ with 6–8 items (HOA, timeline, $0 down, moving homes, storms/hail, tax credits, maintenance, financing)
- [x] Place section before footer (after guarantees) or after pricing — pick one and stay consistent
- [x] Add `#faq` anchor
- [x] Update footer “Frequently Asked Questions” link from `#` to `#faq`

---

## Phase 2 — UX, Navigation & Polish

> **Goal:** Fix structural UX gaps, dead links, and inconsistent patterns.

### 2.1 Route-based contact page

**Files:** `app/contact/page.tsx` (new), `components/contact-view.tsx`, `app/page.tsx`, `components/site-footer.tsx`

- [ ] Move contact UI to `/contact` route (reuse `ContactView` component)
- [ ] Remove client-side `view` state swap from `app/page.tsx`
- [ ] Update footer “Contact Representative” to link to `/contact`
- [ ] Preserve navbar + footer on contact page for consistent chrome
- [ ] Add metadata for contact page (`title`, `description`)
- [ ] Verify browser back button returns to landing as expected

### 2.2 Active section highlighting in navbar

**Files:** `components/navbar.tsx`

- [ ] Track scroll position against section IDs (`#how-it-works`, `#pricing`, `#guarantees`, `#faq`)
- [ ] Apply active style to current nav link (underline, color, or font weight)
- [ ] Use `IntersectionObserver` or scroll listener with sensible thresholds
- [ ] Respect `prefers-reduced-motion` for any transition on active state

### 2.3 Unify or tier CTA copy

**Files:** `components/inline-cta.tsx`, `components/navbar.tsx`, `components/conversion-dock.tsx`, `components/pricing-compare.tsx`, `components/lead-dialog.tsx`, `components/site-footer.tsx`

- [ ] Audit all CTA strings across the site
- [ ] Define two tiers: **Primary** (“Calculate my savings”) and **Secondary** (“Talk to an advisor”)
- [ ] Apply consistently to buttons, dock, dialog submit, and inline forms
- [ ] Document chosen copy in a comment or constants file (e.g. `lib/copy.ts`) to avoid drift

### 2.4 Fix placeholder footer links

**Files:** `components/site-footer.tsx`, new static pages or modals as needed

- [ ] **Option A:** Build lightweight static pages — `/privacy`, `/legal`, `/resources/tax-credits`, etc.
- [ ] **Option B:** Remove or hide links until content exists
- [ ] Update Resources links: Solar Tax Credits, Texas Utility Rates, Homeowner Guide, FAQ
- [ ] Update legal links: Privacy Policy, Legal Disclaimers
- [ ] Replace social `href="#"` with real URLs or remove until ready

### 2.5 Real social icons

**Files:** `components/site-footer.tsx`, optionally `lucide-react` or inline SVGs

- [ ] Replace letter-placeholder circles (T / L / I) with recognizable icons
- [ ] Keep `aria-label` on each link
- [ ] Match icon size and hover treatment to existing footer style

### 2.6 Disclaimers at decision points

**Files:** `components/roi-sandbox.tsx`, `components/hero.tsx`, `components/lead-dialog.tsx`

- [ ] Add inline disclaimer under the sandbox total (“Estimates based on Austin avg. rates; actual savings vary”)
- [ ] Optional: `(?)` tooltip with slightly more detail on assumptions (3.5% inflation, 88% offset, etc.)
- [ ] Repeat short disclaimer near hero $45,000 claim or link to legal section
- [ ] Ensure footer disclaimer remains and is not duplicated excessively

### 2.7 Form submit loading & success UX

**Files:** `components/lead-dialog.tsx`, `components/contact-view.tsx`

- [ ] Add 1–2 second loading state on submit (spinner + disabled button)
- [ ] Then show success state (existing checkmark flow)
- [ ] Add “What happens next” mini-timeline on success (Day 1: review → Day 2–3: custom report → etc.)
- [ ] Optional: basic client-side validation feedback (email format, ZIP pattern) before submit
- [ ] Optional: persist draft fields in `sessionStorage` so refresh doesn’t lose input

---

## Phase 3 — Visual Design & Layout

> **Goal:** Reduce visual repetition and strengthen premium feel with imagery and variety.

### 3.1 Break up section rhythm

**Files:** `app/page.tsx`, new section components, `app/globals.css`

- [ ] Add one full-bleed photo band (reuse `/estate-hero.png` or add new assets under `public/`)
- [ ] Introduce alternating section backgrounds (solid / tinted / image overlay)
- [ ] Optional: animated or static stats ticker between hero and features
- [ ] Review vertical spacing (`py-20` / `py-28`) for consistent rhythm after new sections

### 3.2 Remove hover glow on non-interactive headings

**Files:** `components/features-grid.tsx`, `components/pricing-compare.tsx`

- [ ] Remove `hover:text-primary` and `hover:[text-shadow:...]` from section h2 elements
- [ ] Keep hover/glow effects on interactive elements only (cards, buttons, logo, links)

### 3.3 Hero video resilience

**Files:** `components/hero.tsx`, `public/` (poster image)

- [ ] Add `poster` attribute to hero `<video>` with a static fallback image
- [ ] Show gradient/image background immediately; fade video in when loaded (partially done — verify no flash)
- [ ] Consider hosting video locally in `public/` to avoid Pexels CDN dependency
- [ ] Handle video load failure gracefully (stay on poster/gradient, no broken layout)

### 3.4 Add supporting imagery

**Files:** `public/`, relevant section components

- [ ] Add 2–3 photos: installation crew, panel close-up, homeowner/context shot
- [ ] Use `next/image` with proper `width`, `height`, and `alt` text
- [ ] Place in features, process timeline, or photo band — avoid cluttering hero

---

## Phase 4 — Mobile Experience

> **Goal:** Optimize thumb zones, sticky UI conflicts, and high-intent mobile actions.

### 4.1 Conversion dock vs. footer overlap

**Files:** `components/conversion-dock.tsx`, `components/site-footer.tsx`, `app/globals.css`

- [ ] Add bottom padding to `main` or `footer` when mobile dock is visible
- [ ] Verify scroll-to-top button and footer links are not obscured
- [ ] Optional: dismissible dock with close button and `sessionStorage` memory

### 4.2 Mobile hero layout

**Files:** `components/hero.tsx`

- [ ] Confirm CTA appears in first viewport on common mobile heights (see 1.2)
- [ ] Test sandbox slider usability on narrow screens
- [ ] Verify hero video doesn’t cause layout shift on load

### 4.3 Click-to-call prominence

**Files:** `components/conversion-dock.tsx`, `components/hero.tsx`, or `components/navbar.tsx`

- [ ] Add `tel:5125550199` link on mobile (dock, hero, or nav)
- [ ] Use clear label: “Questions? Call (512) 555-0199”
- [ ] Ensure link is visible but doesn’t compete with primary ZIP CTA

---

## Phase 5 — Accessibility & Performance

> **Goal:** Ship inclusive, shareable, lighter pages without backend changes.

### 5.1 Respect `prefers-reduced-motion`

**Files:** `components/reveal.tsx`, `components/hero.tsx`, `components/conversion-dock.tsx`, `components/roi-sandbox.tsx`, `app/globals.css`

- [ ] Detect `prefers-reduced-motion: reduce` via CSS and/or JS
- [ ] Disable or shorten Framer Motion animations (hero entrance, reveals, dock slide, savings counter)
- [ ] Pause or hide hero video when reduced motion is preferred
- [ ] Test with macOS “Reduce motion” and browser devtools emulation

### 5.2 Screen reader support for slider

**Files:** `components/roi-sandbox.tsx`

- [ ] Add `aria-live="polite"` region for animated savings total
- [ ] Announce updated bill and savings when slider changes
- [ ] Verify slider has accessible name and keyboard operability (shadcn Slider)

### 5.3 Reduce client-side weight

**Files:** `app/page.tsx`, section components

- [ ] Remove unnecessary `'use client'` from `app/page.tsx` — compose server page with client islands
- [ ] Keep interactivity only in components that need hooks (sandbox, dialog, navbar, dock)
- [ ] Lazy-load below-fold sections if bundle size warrants it
- [ ] Replace raw `<img>` in contact view with `next/image`

### 5.4 Open Graph & social preview

**Files:** `app/layout.tsx`, `public/og-image.png` (new asset)

- [ ] Create branded 1200×630 OG image (logo + headline + amber accent)
- [ ] Add `openGraph` and `twitter` metadata in `layout.tsx`
- [ ] Remove or replace `generator: 'v0.app'` in metadata for production
- [ ] Verify preview with Facebook/Twitter/LinkedIn debug tools

### 5.5 General accessibility pass

**Files:** sitewide

- [ ] Add skip-to-content link in `app/layout.tsx`
- [ ] Verify focus trap and return focus in lead dialog
- [ ] Check color contrast on muted text and primary amber on dark backgrounds
- [ ] Ensure all icons have text alternatives or `aria-hidden` where decorative

---

## Phase 6 — Nice-to-Have Delight

> **Goal:** Optional enhancements after Phases 1–5. Pick based on time and appetite.

### 6.1 Animated before/after bill chart in sandbox

**Files:** `components/roi-sandbox.tsx`

- [ ] Simple bar or line viz: current bill vs. post-solar bill
- [ ] Animate on slider change (respect reduced motion)
- [ ] Keep viz compact — don’t overshadow the savings total

### 6.2 Seasonal urgency banner

**Files:** new `components/urgency-banner.tsx`, `app/page.tsx`

- [ ] Dismissible top or inline banner about summer rate hikes
- [ ] Store dismissed state in `sessionStorage`
- [ ] Match copy already used in footer mid-band

### 6.3 Section progress indicator

**Files:** new `components/section-progress.tsx`

- [ ] Vertical dots or progress bar on desktop showing scroll position
- [ ] Click dot to scroll to section
- [ ] Hide on mobile if too cluttered

### 6.4 Tax credit callout block

**Files:** new `components/tax-credit-callout.tsx`, `app/page.tsx`

- [ ] Dedicated section or card explaining 2026 federal/state incentives
- [ ] Link to Resources page or FAQ item
- [ ] Static content only — no live IRS data needed

### 6.5 Lease vs. own comparison

**Files:** `components/pricing-compare.tsx` or new component

- [ ] Add third column or toggle: lease / PPA vs. ownership
- [ ] Highlight ownership program as recommended (existing pattern)
- [ ] Keep copy honest and high-level — no backend pricing engine

---

## Suggested Implementation Order

Work through phases in this order for maximum impact with minimal rework:

1. **Phase 1.1 + 1.6** — Calculator ↔ lead sync and disclaimers (foundation for everything else)
2. **Phase 1.2 + 4.2** — Hero CTA and mobile layout
3. **Phase 1.5** — FAQ section (+ footer link fix in 2.4)
4. **Phase 1.4 + 1.3** — Process timeline and expanded social proof
5. **Phase 2.1 + 2.4 + 2.5** — Contact route and honest footer links
6. **Phase 2.2 + 2.3 + 2.7** — Nav active states, CTA copy, form UX
7. **Phase 5.1 + 5.2 + 5.4** — Motion a11y, live regions, OG image
8. **Phase 3 + 4** — Visual variety and mobile dock fixes
9. **Phase 6** — Delight items as time allows

---

## File Change Reference

Quick map of which files each phase touches most often:

| File | Phases |
|------|--------|
| `app/page.tsx` | 1, 2, 3, 4, 6 |
| `app/layout.tsx` | 5 |
| `app/contact/page.tsx` | 2 (new) |
| `components/hero.tsx` | 1, 3, 4 |
| `components/roi-sandbox.tsx` | 1, 5, 6 |
| `components/lead-dialog.tsx` | 1, 2 |
| `components/proof-guarantees.tsx` | 1 |
| `components/features-grid.tsx` | 1, 3 |
| `components/pricing-compare.tsx` | 2, 6 |
| `components/faq.tsx` | 1 (new) |
| `components/navbar.tsx` | 2, 4 |
| `components/conversion-dock.tsx` | 2, 4 |
| `components/site-footer.tsx` | 1, 2 |
| `components/contact-view.tsx` | 2 |
| `components/inline-cta.tsx` | 1, 2 |
| `components/reveal.tsx` | 5 |
| `lib/savings.ts` | 1 |
| `lib/copy.ts` | 2 (new, optional) |
| `public/` | 3, 5 |

---

## Testing Checklist (run after each phase)

- [ ] Desktop Chrome — full scroll, all CTAs open lead dialog with correct prefill
- [ ] Mobile Safari — hero CTA visible, dock doesn’t cover footer
- [ ] Keyboard only — tab through nav, dialog, slider, FAQ accordion
- [ ] `prefers-reduced-motion: reduce` — no jarring animation
- [ ] Lighthouse — accessibility score ≥ 90, no major regressions
- [ ] Share preview — OG image renders correctly
- [ ] `/contact` — loads, submits, back navigation works

---

## Notes

- All form submissions remain **frontend-only** until a backend exists. Loading states and success flows should simulate a real request without persisting data.
- Placeholder phone, email, and address in the footer are fine for prototype; swap for production values in one constants file when ready.
- Revisit this doc after Phase 1 — priorities may shift once calculator and lead capture are connected.
