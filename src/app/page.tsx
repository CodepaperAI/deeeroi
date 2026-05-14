import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import CountUp from '@/components/animations/CountUp';
import { SITE, SERVICES, PORTFOLIO_PROJECTS, BRAND_LOGOS } from '@/lib/constants';

/* ------------------------------------------------------------------ */
/*  1. Hero Section                                                    */
/* ------------------------------------------------------------------ */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
        alt="Premium modern home exterior at twilight"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="container-main relative z-10 flex flex-col items-start gap-6 max-w-3xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <TextReveal text="Building Your Dreams Into Reality" />
        </h1>

        <ScrollReveal delay={0.5} className="max-w-xl">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Full-service construction &amp; renovation — trusted by national
            brands since {SITE.since}.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7} className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest bg-accent text-white rounded hover:bg-accent-hover transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-widest border-2 border-white text-white rounded hover:bg-white hover:text-foreground transition-colors"
          >
            View Our Work
          </Link>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/50 animate-bounce-subtle" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Brand Logo Strip                                                */
/* ------------------------------------------------------------------ */
function BrandStrip() {
  const brands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="border-y border-border py-10 overflow-hidden bg-surface">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-8">
        Trusted by Leading Brands
      </p>
      <div className="relative">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap w-max">
          {brands.map((brand, i) => (
            <span
              key={`${brand.name}-${i}`}
              className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-muted/60 select-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Services Overview                                               */
/* ------------------------------------------------------------------ */
function ServicesSection() {
  const featured = [
    SERVICES.commercial[0], // Restaurant Build-Outs
    SERVICES.commercial[2], // Retail Stores
    SERVICES.residential[0], // Custom Home Builds
    SERVICES.residential[1], // Basement Construction
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — intro */}
          <ScrollReveal direction="left">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
              Our Expertise
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What We Build
            </h2>
            <p className="text-muted leading-relaxed max-w-md text-lg">
              From franchise restaurant build-outs for national brands to custom
              dream homes across the GTA, Deeroi Constructions delivers
              end-to-end general contracting with uncompromising quality and
              transparent timelines.
            </p>
          </ScrollReveal>

          {/* Right — 2x2 grid of service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.1 * i}>
                <div className="group relative aspect-[3/2] rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Default overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Title */}
                  <span
                    className="absolute bottom-4 left-4 right-4 text-sm md:text-base font-semibold text-white z-10"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. Stats Strip                                                     */
/* ------------------------------------------------------------------ */
function StatsSection() {
  const stats = [
    { end: 8, suffix: '+', label: 'Years in Business' },
    { end: 200, suffix: '+', label: 'Projects Completed' },
    { end: 50, suffix: '+', label: 'Commercial Builds' },
    { end: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="section-dark py-20 md:py-24">
      <div className="container-main">
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
/*  5. Featured Projects                                               */
/* ------------------------------------------------------------------ */
function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-main">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Recent Work
          </h2>
        </ScrollReveal>

        {/* Bento grid: first large, other two stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large project — spans 2 rows on md+ */}
          <ScrollReveal className="md:row-span-2">
            <Link
              href={`/portfolio/${projects[0].slug}`}
              className="group relative block h-full min-h-[320px] md:min-h-[520px] rounded-lg overflow-hidden"
            >
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-xs uppercase tracking-widest text-accent mb-2 block">
                  {projects[0].category}
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {projects[0].title}
                </h3>
              </div>
            </Link>
          </ScrollReveal>

          {/* Two stacked projects */}
          {projects.slice(1).map((project, i) => (
            <ScrollReveal key={project.slug} delay={0.15 * (i + 1)}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block h-full min-h-[250px] rounded-lg overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <span className="text-xs uppercase tracking-widest text-accent mb-1 block">
                    {project.category}
                  </span>
                  <h3
                    className="text-lg md:text-xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
          >
            View All Projects
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. CTA Section                                                     */
/* ------------------------------------------------------------------ */
function CtaSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=85"
        alt="Construction site at golden hour with cranes"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="container-main relative z-10 text-center flex flex-col items-center gap-6">
        <ScrollReveal>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Start Your Project?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-white/70 max-w-lg mx-auto">
            Get a free consultation and estimate. Let&apos;s build something
            exceptional together.
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
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <ServicesSection />
      <StatsSection />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
