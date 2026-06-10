import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import CountUp from '@/components/animations/CountUp';
import { SITE, PORTFOLIO_PROJECTS, PROJECTS_COMPLETED, YEARS_IN_BUSINESS } from '@/lib/constants';

export const metadata = {
  title: 'About Our GTA Construction Company',
  description: `Learn about ${SITE.name}, a GTA construction company serving Ontario with commercial build-outs, restaurant renovations, residential construction, kitchens, and bathrooms since ${SITE.since}.`,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Our GTA Construction Company | ${SITE.name}`,
    description: `Learn about ${SITE.name}, a GTA construction company serving Ontario with commercial and residential construction since ${SITE.since}.`,
    images: [{ url: '/images/projects/cimt-scarborough-3.jpg', width: 1200, height: 630 }],
  },
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
            Who We Are
          </p>
        </ScrollReveal>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <TextReveal text="About Deeroi Constructions" />
        </h1>
        <ScrollReveal delay={0.3} className="max-w-xl mt-6">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Commercial and residential construction across the GTA and Ontario.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Our Story                                                          */
/* ------------------------------------------------------------------ */
function StorySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              GTA Construction Experience Across Commercial and Residential Work
            </h2>
            <div className="space-y-4 text-muted leading-relaxed text-lg">
              <p>
                Founded in {SITE.since} by {SITE.owner}, Deeroi Constructions
                started with residential construction in the Greater Toronto
                Area. What began with kitchen renovations and basement builds
                quickly grew into something bigger.
              </p>
              <p>
                Through careful planning and a reputation for clean finish work,
                we expanded into commercial construction, taking on restaurant
                build-outs, retail renovations, bank interiors, and institutional
                projects across the Greater Toronto Area.
              </p>
              <p>
                Today, our portfolio includes commercial spaces for retail,
                banking, education, and hospitality, along with custom homes,
                kitchen renovations, bathroom renovations, and residential
                upgrades. Every project carries the same commitment: build it
                right, finish cleanly, and communicate every step of the way.
              </p>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/projects/cimt-scarborough-3.jpg"
                alt="Completed institutional renovation by Deeroi Constructions"
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
/*  Values                                                             */
/* ------------------------------------------------------------------ */
function ValuesSection() {
  const values = [
    {
      title: 'Quality Craftsmanship',
      description:
        'Every joint, finish, and detail is held to the highest standard. We don\u2019t cut corners — our work speaks for itself long after the final walkthrough.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: 'On-Time Delivery',
      description:
        'Timelines are commitments, not estimates. We plan meticulously and execute efficiently so your project is handed over when promised — every time.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Transparent Communication',
      description:
        'No surprises, no hidden costs. You get regular updates, clear timelines, and honest conversations from start to finish.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            What Drives Us
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Core Values
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={0.1 * i}>
              <div className="flex flex-col items-start gap-4 p-8 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */
function StatsSection() {
  const commercialProjects = PORTFOLIO_PROJECTS.filter(
    (project) => project.type === 'commercial',
  ).length;
  const residentialProjects = PORTFOLIO_PROJECTS.filter(
    (project) => project.type === 'residential',
  ).length;

  const stats = [
    { end: YEARS_IN_BUSINESS, suffix: '+', label: 'Years in Business' },
    { end: PROJECTS_COMPLETED, suffix: '+', label: 'Projects Completed' },
    { end: commercialProjects, suffix: '', label: 'Commercial Case Studies' },
    { end: residentialProjects, suffix: '', label: 'Residential Case Studies' },
  ];

  return (
    <section className="section-dark py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} direction="up">
              <div className="flex flex-col items-center gap-2">
                <span
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                </span>
                <span className="text-sm uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
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
            Start Your GTA Construction Project
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto">
            Whether it&apos;s a commercial build-out, restaurant renovation,
            kitchen renovation, bathroom renovation, or custom home project,
            we&apos;re ready to bring your vision to life.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-10 py-4 mt-2 text-sm font-semibold uppercase tracking-widest bg-accent text-white rounded hover:bg-accent-hover transition-colors"
          >
            Get a Free Quote
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
