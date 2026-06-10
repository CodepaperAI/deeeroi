import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { BRAND_LOGOS, SITE, SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'Commercial Construction Contractor in the GTA',
  description:
    'Commercial construction contractor in the GTA and Ontario for restaurant build-outs, retail renovations, office renovations, institutional projects, bank interiors, and franchise spaces.',
  alternates: {
    canonical: '/commercial',
  },
  openGraph: {
    title: `Commercial Construction Contractor in the GTA | ${SITE.name}`,
    description:
      'Restaurant build-outs, retail renovations, office renovations, bank interiors, and institutional construction across the GTA and Ontario.',
    images: [{ url: '/images/projects/mehfil-etobicoke-1.jpg', width: 1200, height: 630 }],
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
            Commercial Services
          </p>
        </ScrollReveal>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <TextReveal text="Commercial Construction in the GTA" />
        </h1>
        <ScrollReveal delay={0.3} className="max-w-xl mt-6">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Restaurant build-outs, retail renovations, office renovations, bank
            interiors, and institutional projects built with clean coordination.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Brand Trust Strip                                                  */
/* ------------------------------------------------------------------ */
function BrandTrustStrip() {
  const brands = BRAND_LOGOS.map((brand) => brand.name);

  return (
    <section className="border-y border-border py-10 bg-surface">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
        <span className="text-xs uppercase tracking-[0.2em] text-muted font-semibold shrink-0">
          Portfolio includes
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg md:text-xl font-semibold uppercase tracking-[0.15em] text-muted/60 select-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services Grid                                                      */
/* ------------------------------------------------------------------ */
function ServicesGrid() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            What We Build
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Commercial Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.commercial.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.1 * i}>
              <div className="group relative aspect-[3/2] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Default overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Process                                                            */
/* ------------------------------------------------------------------ */
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'We start with a thorough walkthrough of your space and requirements. Understanding your brand standards, budget, and timeline is our first priority.',
    },
    {
      number: '02',
      title: 'Planning & Design',
      description:
        'Our team develops detailed plans, sources materials, coordinates permits, and creates a project timeline you can count on.',
    },
    {
      number: '03',
      title: 'Construction',
      description:
        'Expert crews execute the build with precision. Regular updates and site access keep you informed at every stage of construction.',
    },
    {
      number: '04',
      title: 'Handover',
      description:
        'Final inspections, punch list completion, and a clean handover. Your space is ready for business — on time and to spec.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            How We Work
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Process
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 * i}>
              <div className="flex flex-col gap-4">
                <span
                  className="text-5xl md:text-6xl font-bold text-accent/20"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
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
            Need a Commercial Construction Contractor in the GTA?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto">
            Get a free consultation and detailed estimate for your next
            commercial project.
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
export default function CommercialPage() {
  return (
    <>
      <HeroSection />
      <BrandTrustStrip />
      <ServicesGrid />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
