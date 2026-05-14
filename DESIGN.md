# Design System — Deeroi Constructions

## Product Context
- **What this is:** Full-service construction & renovation company website
- **Who it's for:** Franchise owners (Walmart, Tim Hortons, Five Guys), business owners, homeowners
- **Space/industry:** Commercial & residential construction in Ontario, Canada
- **Project type:** Marketing site — image-driven portfolio with lead generation
- **Since:** 2018
- **Memorable thing:** "They build for the brands you know."

## Aesthetic Direction
- **Direction:** Clean professional construction with premium motion
- **Decoration level:** Intentional — subtle textures, strong imagery, purposeful animation
- **Mood:** Trustworthy, capable, premium. A company that national brands rely on.
- **Reference approach:** Industry-appropriate design elevated by advanced scroll animations and micro-interactions

## Typography
- **Display/Hero:** Plus Jakarta Sans (700, 800) — modern, clean, authoritative
- **Body:** DM Sans (400, 500, 600) — highly readable, professional
- **UI/Labels:** DM Sans (500, 600)
- **Loading:** next/font/google (self-hosted, zero layout shift)
- **Scale:**
  - Hero: clamp(3rem, 7vw, 6rem) / line-height 1.0 / letter-spacing -0.03em
  - Section heading: clamp(2rem, 5vw, 3.5rem) / line-height 1.1 / letter-spacing -0.02em
  - Subheading: clamp(1.25rem, 2vw, 1.5rem) / line-height 1.3
  - Body: clamp(1rem, 1.1vw, 1.125rem) / line-height 1.7
  - Caption: 0.875rem / line-height 1.5

## Color
- **Approach:** Balanced — professional with warm accent for premium feel

```css
:root {
  /* Core */
  --color-background: #ffffff;
  --color-surface: #f7f7f5;
  --color-foreground: #1a1a1a;
  --color-muted: #666666;
  --color-border: #e5e5e5;

  /* Brand */
  --color-accent: #c8964e;        /* Construction gold — CTAs, highlights */
  --color-accent-hover: #b8863e;
  --color-navy: #1a3a5c;          /* Corporate trust — headers, dark sections */
  --color-navy-light: #2a4a6c;

  /* Semantic */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}

/* Dark sections (used for contrast breaks) */
.section-dark {
  --color-background: #1a1a1a;
  --color-surface: #222222;
  --color-foreground: #f5f5f0;
  --color-muted: #999999;
  --color-border: #333333;
}
```

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous whitespace communicates premium
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96) 5xl(120)
- **Section padding:** 96px-120px vertical between major sections

## Layout
- **Approach:** Grid-disciplined with full-bleed image breaks
- **Container:** max-width 1280px, 24px mobile padding, 48px desktop padding
- **Grid:** 12-column on desktop, 4-column on mobile
- **Section rhythm:** contained → full-bleed image → contained → dark section → contained
- **Border radius:** sm:4px, md:8px, lg:12px (minimal — construction = solid, angular)
- **Image aspect ratios:** hero 16:9, portfolio 4:3, service cards 3:2

## Motion & Animation (Advanced)
- **Approach:** Intentional-to-expressive — animations serve both aesthetics and storytelling
- **Libraries:** GSAP + ScrollTrigger (scroll-driven), Framer Motion (component-level)

### Page Load Choreography
1. Navigation fades in (0ms)
2. Hero image scales from 1.1 to 1.0 with overlay fade (200ms)
3. Hero headline words reveal bottom-up with 0.08s stagger (400ms delay)
4. Hero subtext slides up (600ms delay)
5. CTA buttons scale-in with spring (800ms delay)

### Scroll Animations
- **Section reveals:** Each section fades up + translateY(40px) on viewport entry
- **Image reveals:** Portfolio images use clip-path: inset() animation from edges
- **Counter animation:** Stats (years, projects, brands) count up when entering viewport
- **Parallax:** Hero and full-bleed images at 0.3x scroll speed
- **Brand logo strip:** Infinite horizontal scroll marquee
- **Before/after slider:** Drag-to-compare with smooth clip-path transition
- **Text reveals:** Section headlines animate word-by-word with stagger

### Micro-Interactions
- **Buttons:** Scale(1.02) + shadow elevation on hover, background-color slide transition
- **Cards:** Subtle translateY(-4px) + shadow increase on hover
- **Navigation links:** Underline slides in from left on hover
- **Images:** Scale(1.05) on hover with overflow:hidden container
- **Quote form inputs:** Floating label animation, focus glow with accent color
- **Portfolio filter:** Layout animation when switching between commercial/residential

### Easing
- **Entrances:** cubic-bezier(0.16, 1, 0.3, 1) — snappy
- **Exits:** cubic-bezier(0.33, 1, 0.68, 1) — smooth
- **Interactive:** Spring physics (stiffness: 100, damping: 15)
- **Scroll-driven:** GSAP scrub: true for linked animations

## Component Standards

### Hero
- Full-viewport background image (stock: commercial construction site)
- Dark gradient overlay for text readability
- Large headline + subtext + dual CTA buttons
- Scroll indicator at bottom (animated chevron)

### Brand Logo Strip
- Infinite horizontal marquee
- Grayscale logos, full color on hover
- Walmart, Tim Hortons, Five Guys, Meridian Bank + others

### Service Cards
- Stock image (3:2 ratio) with dark overlay on hover
- Service title + brief description reveal on hover
- Link to service detail page
- Grid: 3 columns desktop, 1 column mobile

### Portfolio Gallery
- Masonry or bento grid layout
- Filter tabs: All / Commercial / Residential
- Before/after slider on project detail pages
- Project name + type overlay on hover

### Testimonial Section
- Large quote text with quotation mark decorative element
- Client name + company + project type
- Star rating if available
- Carousel with smooth transitions

### Quote Form
- Sticky CTA bar on mobile
- Fields: Name, Email, Phone, Project Type (dropdown), Budget Range, Message
- Floating animated labels
- Inline validation with smooth error transitions
- Success state with checkmark animation

### Footer
- Dark background (#1a1a1a)
- Company info + navigation + contact details
- Social links (Instagram, Facebook)
- "Codepaper Technologies" credit

## Stock Photography Direction
- **Commercial:** Restaurant interiors mid-construction, office buildouts, retail store renovations
- **Residential:** Modern kitchen renovations, basement builds, garden suites
- **Team:** Workers on site, project management, walkthroughs
- **Sources:** Unsplash, Pexels — high-quality, natural lighting, Canadian-style construction
- **Treatment:** Full-color, high contrast, no filters. Let quality of work show.

## SEO Checklist
- [ ] Unique title + description per page (Metadata API)
- [ ] OG images (1200x630) per page
- [ ] Twitter Card tags
- [ ] JSON-LD: LocalBusiness + Organization + Service
- [ ] sitemap.ts with all static + portfolio routes
- [ ] robots.ts
- [ ] Canonical URLs
- [ ] Google Business Profile integration
- [ ] Local SEO: "construction company Brampton" targeting

## Performance Targets
- Lighthouse Performance: 90+
- LCP: < 2.5s
- CLS: < 0.1
- All images: next/image with WebP/AVIF
- GSAP: dynamic import with ssr: false
- Framer Motion: LazyMotion for code splitting

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-08 | Clean professional + advanced animations | Client wants industry-appropriate design elevated by premium motion |
| 2026-05-08 | Plus Jakarta Sans + DM Sans | Modern, professional, pairs well, not overused in construction |
| 2026-05-08 | Gold accent (#c8964e) + Navy (#1a3a5c) | Gold = premium/construction, Navy = corporate trust |
| 2026-05-08 | Image-driven with stock photos | Portfolio-first approach, stock until real project photos provided |
| 2026-05-08 | GSAP + Framer Motion | GSAP for scroll-driven, Framer for component animations |
