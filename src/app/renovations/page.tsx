import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: `Renovations | ${SITE.name}`,
  description: 'Expert commercial and residential renovations in Brampton and the GTA. Office renovations, restaurant refreshes, kitchen & bath upgrades, basement finishes, and more.',
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/80" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Renovation Services
          </p>
        </ScrollReveal>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <TextReveal text="Renovations" />
        </h1>
        <ScrollReveal delay={0.3} className="max-w-xl mt-6">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Transform your space with expert craftsmanship — commercial or
            residential, we bring new life to existing structures.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Commercial Renovations                                             */
/* ------------------------------------------------------------------ */
function CommercialRenovations() {
  const items = [
    'Office space reconfigurations and modernizations',
    'Restaurant and retail store refreshes',
    'Franchise brand-standard upgrades',
    'Washroom and common area overhauls',
    'Accessibility and code compliance upgrades',
    'Storefront and facade improvements',
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85"
                alt="Commercial restaurant renovation interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
              Commercial
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Commercial Renovations
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-8">
              Whether you&apos;re updating an office, refreshing a restaurant to
              meet new brand standards, or modernizing a retail location, our
              team handles every detail — from demolition through final finish —
              with minimal disruption to your business.
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Residential Renovations                                            */
/* ------------------------------------------------------------------ */
function ResidentialRenovations() {
  const items = [
    'Kitchen renovations and expansions',
    'Bathroom remodels and upgrades',
    'Basement finishing and walkout conversions',
    'Main floor open-concept conversions',
    'Bedroom and living space additions',
    'Exterior siding, decking, and landscaping',
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — reversed order on desktop */}
          <ScrollReveal direction="left" delay={0.15} className="lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
              Residential
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Residential Renovations
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-8">
              Your home should reflect how you live today — not how it was built
              decades ago. From full kitchen overhauls to basement finishes and
              open-concept conversions, we transform your existing space into
              something you&apos;ll love coming home to.
            </p>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" className="lg:order-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85"
                alt="Modern bathroom renovation with premium finishes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */
function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <ScrollReveal>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Transform Your Space?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto">
            Tell us about your renovation project and get a free, no-obligation
            estimate.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-10 py-4 mt-2 text-sm font-semibold uppercase tracking-widest bg-accent text-white rounded hover:bg-accent-hover transition-colors"
          >
            Request a Quote
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function RenovationsPage() {
  return (
    <>
      <HeroSection />
      <CommercialRenovations />
      <ResidentialRenovations />
      <CtaSection />
    </>
  );
}
