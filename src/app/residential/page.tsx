import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { SITE, SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'Residential Construction Contractor in the GTA',
  description:
    'Residential construction contractor in the GTA and Ontario for custom homes, basement finishing, garden suites, kitchen renovations, bathroom renovations, and home upgrades.',
  openGraph: {
    title: `Residential Construction Contractor in the GTA | ${SITE.name}`,
    description:
      'Custom homes, basement finishing, garden suites, kitchen renovations, and bathroom renovations across the GTA and Ontario.',
    images: [{ url: '/images/projects/18972-mississauga-rd-caledon-3.jpg', width: 1200, height: 630 }],
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
            Residential Services
          </p>
        </ScrollReveal>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <TextReveal text="Residential Construction in the GTA" />
        </h1>
        <ScrollReveal delay={0.3} className="max-w-xl mt-6">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Custom homes, basement finishing, garden suites, kitchen
            renovations, and bathroom renovations built for the way you live.
          </p>
        </ScrollReveal>
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
            Residential Services
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.residential.map((service, i) => (
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
        'We visit your home to understand your vision, needs, and budget. Whether it\u2019s a new build or a renovation, we listen first.',
    },
    {
      number: '02',
      title: 'Planning & Design',
      description:
        'Detailed drawings, material selection, permit applications, and a clear project timeline — all before a single nail is driven.',
    },
    {
      number: '03',
      title: 'Construction',
      description:
        'Our skilled crew brings the plan to life with quality materials and clean workmanship. You\u2019ll receive regular progress updates throughout.',
    },
    {
      number: '04',
      title: 'Handover',
      description:
        'Final walkthrough, quality inspection, and a clean handover. We don\u2019t leave until you\u2019re completely satisfied with the result.',
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
            Planning a Residential Renovation or Custom Home?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-lg md:text-xl text-muted max-w-lg mx-auto">
            From custom homes to basement finishes, get a free consultation and
            estimate for your residential project.
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
export default function ResidentialPage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
