# Overnight Build Log — 2026-03-19

## Session: Portfolio Deploy + Cold Outreach System
**Started:** 2026-03-19 ~1:00 AM
**Tasks:** 7 (Portfolio audit/fix/content/deploy + Outreach templates/tracker/Loom/Upwork)

---

## Task 1: Portfolio Audit + Fix
**Status:** COMPLETE

### Build
- `npm run build` — PASSES (0 errors, 18 pages generated)
- TypeScript — clean
- Next.js 16.1.1 + Turbopack

### Issues Found & Fixed
1. GitHub URL pointed to `maccummings` — fixed to `bestmackied`
2. "Coastal Grill" and "Momentum" were fictional projects — replaced with SupportBase and Trading Bot
3. All project `href` values were `#` — now link to GitHub repos and live sites
4. All project `image` values still empty (gray placeholders) — Mac needs screenshots
5. Missing skills (Supabase, AI/Claude, Playwright) — added
6. No analytics installed — noted for Mac to add Vercel Analytics

### What Still Needs Mac
- [ ] Take screenshots of each project for project cards
- [ ] Verify LinkedIn and X URLs are correct (currently maccummings)
- [ ] Add Vercel Analytics (`npm i @vercel/analytics` + import in layout)
- [ ] Verify email `mac@maccummings.dev` has DNS set up

---

## Task 2: Portfolio Content
**Status:** COMPLETE

### Changes Made
- **Projects section:** Now shows real projects:
  1. SupportBase — AI Chatbot Builder (links to live site)
  2. PartHawk — Aerospace Parts Search (links to GitHub)
  3. Trading Bot — Algorithmic Trading (links to GitHub)
  4. Jarvis — AI Command Center (links to GitHub)
- **Skills section:** Added Supabase, Claude AI, Playwright (removed Framer Motion, Figma)
- **Work section:** Already accurate (Freelance + PartHawk co-founder)
- **Services section:** Already solid (6 tiers from $500-$3K+)
- **Blog:** 3 SEO articles targeting Stuart FL local businesses + 7 tech articles
- **SEO:** sitemap.xml, robots.txt, OG images, meta tags all configured

### Content Assessment
- Bio/summary is good — positions Mac as speed-focused, business-oriented
- Services pricing is reasonable for the market
- Blog has strong local SEO content (Stuart, fishing charters, small business FL)
- Missing: testimonials section (no clients yet, expected)

---

## Task 3: Portfolio Deploy
**Status:** PARTIAL — Needs Mac

### Completed
- Code committed: `f53d523` feat: update portfolio with real projects and correct links
- Pushed to GitHub: `bestmackied/mac-portfolio` main branch
- Build passes clean on local

### Blocked — Needs Mac
- **Vercel CLI not authenticated** — needs browser login
- Mac should:
  1. Go to https://vercel.com/new
  2. Import `bestmackied/mac-portfolio` from GitHub
  3. Framework preset: Next.js (auto-detected)
  4. Deploy — should work first try (build passes)
  5. Set custom domain: maccummings.dev (if DNS is configured)
- No vercel.json needed — next.config.mjs has all needed settings (security headers, content-collections)

---

## Task 4: Cold Email Templates
**Status:** COMPLETE

### Created: `~/workspace/outreach/cold-email-templates.md`
5 templates with A/B subject line variants:
1. **Local businesses** — "Your customers have questions at 2am"
2. **E-commerce** — "Your support team is drowning in 'where's my order?'"
3. **SaaS companies** — "Cut your support tickets by 60%"
4. **Agency pitch** — "White-label AI chatbot for your clients"
5. **Follow-up** — "Quick follow-up + something useful"

All templates: under 150 words, human tone, personalization tokens, low-friction CTA (reply, not "book a call").

---

## Task 5: Outreach Tracker
**Status:** COMPLETE

### Created:
- `~/workspace/outreach/tracker.csv` — 23 leads pre-populated (7 local FL, 9 ecommerce, 7 SaaS)
- `~/workspace/outreach/daily-targets.md` — 3/day target, weekly tracking table, revenue projections, sending rules

### Revenue Math
- 3 emails/day = 60/month
- 5% reply rate = 3 replies/month
- 33% close = 1 customer/month minimum
- Target: 5 customers by end of April = $495-1,495/mo MRR

---

## Task 6: Loom Demo Script
**Status:** COMPLETE

### Created: `~/workspace/outreach/loom-demo-script.md`
- Pre-recording checklist (browser tabs, demo data, appearance)
- Full 3-minute script with timestamps
- Click choreography for every screen transition
- Post-recording guide (hosting, email embedding, thumbnails)
- Tone: casual, confident, like showing a friend — not a corporate pitch

---

## Task 7: Upwork Profile Optimization
**Status:** COMPLETE

### Created: `~/workspace/outreach/upwork-profile.md`
- **Profile:** Title (67 chars), Overview (~340 words), Skills list (15), Portfolio items (4)
- **Rate strategy:** $35/hr start → $50 after 5 jobs → $65 after 10+
- **3 proposal templates:** Next.js/React, AI/Chatbot, Full-Stack App
- **First 5 jobs strategy:** Tier 1 (bug fixes $75-200), Tier 2 (landing pages $400-800), Tier 3 (AI chatbots $1-2K)
- **Red flags to avoid:** Unverified payment, $0 spent clients, "free test" scams
- **Timeline:** 3-4 weeks to 5 reviews with 4-5 proposals/day

---

## Summary

| Task | Status | Notes |
|------|--------|-------|
| 1. Portfolio Audit + Fix | COMPLETE | Build passes, content updated |
| 2. Portfolio Content | COMPLETE | Real projects, correct links, added skills |
| 3. Portfolio Deploy | PARTIAL | Pushed to GitHub; Vercel needs Mac's browser login |
| 4. Cold Email Templates | COMPLETE | 5 templates, A/B variants, human tone |
| 5. Outreach Tracker | COMPLETE | 23 leads in CSV + daily targets doc |
| 6. Loom Demo Script | COMPLETE | 3-min script with full choreography |
| 7. Upwork Profile | COMPLETE | Profile, rate strategy, 3 proposals, first-5 plan |

### Mac's To-Do When He Wakes Up
1. **Deploy portfolio:** Vercel dashboard → Import `bestmackied/mac-portfolio` → Deploy
2. **Set custom domain:** maccummings.dev → Vercel
3. **Add project screenshots:** Take screenshots for each project card
4. **Add Vercel Analytics:** `npm i @vercel/analytics` + import in layout.tsx
5. **Fill out Upwork profile:** Copy from `~/workspace/outreach/upwork-profile.md`
6. **Record Loom demo:** Follow script at `~/workspace/outreach/loom-demo-script.md`
7. **Buy cold email domains:** 2-3 secondary domains, set up SPF/DKIM/DMARC, warm up
8. **Start sending:** 3 emails/day from `~/workspace/outreach/tracker.csv`

### Files Created/Modified
- `~/projects/mac-portfolio/src/data/resume.tsx` — updated content
- `~/projects/mac-portfolio/OVERNIGHT-LOG.md` — this file
- `~/workspace/outreach/cold-email-templates.md` — 5 templates
- `~/workspace/outreach/tracker.csv` — 23 leads
- `~/workspace/outreach/daily-targets.md` — targets + process
- `~/workspace/outreach/loom-demo-script.md` — 3-min video script
- `~/workspace/outreach/upwork-profile.md` — profile + proposals
