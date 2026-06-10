import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, ChevronDown, Phone } from 'lucide-react';
import HeroPhotoCarousel from '@/components/animations/HeroPhotoCarousel';
import ScrollReveal from '@/components/animations/ScrollReveal';
import CountUp from '@/components/animations/CountUp';
import { SITE, SERVICES, PORTFOLIO_PROJECTS, BRAND_LOGOS } from '@/lib/constants';

const photoCount = PORTFOLIO_PROJECTS.reduce(
  (total, project) => total + project.images.length,
  0,
);

export const metadata: Metadata = {
  title: 'Construction Company in the GTA and Ontario',
  description:
    'Deeroi Constructions provides commercial build-outs, restaurant renovations, custom homes, kitchen renovations, and bathroom renovations across the GTA and Ontario.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Construction Company in the GTA and Ontario | Deeroi Constructions',
    description:
      'Commercial and residential construction across the GTA and Ontario with portfolio photography from restaurants, banks, retail spaces, kitchens, and bathrooms.',
    url: '/',
    images: [
      {
        url: '/images/projects/7-spice-brampton-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurant build-out by Deeroi Constructions',
      },
    ],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/projects/7-spice-brampton-1.jpg`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Regan Road',
    addressLocality: 'Brampton',
    addressRegion: 'ON',
    postalCode: 'L7A 1C1',
    addressCountry: 'CA',
  },
  areaServed: ['Greater Toronto Area', 'Ontario', 'Brampton'],
  foundingDate: SITE.since.toString(),
  sameAs: [SITE.social.instagram, SITE.social.facebook],
  knowsAbout: [
    'Commercial construction',
    'Restaurant build-outs',
    'Residential construction',
    'Kitchen renovations',
    'Bathroom renovations',
    'Retail renovations',
  ],
};

const HERO_PHOTOS = [
  {
    src: '/images/projects/7-spice-brampton-1.jpg',
    alt: 'Completed restaurant dining room with feature wall and lighting',
    label: '7 Spice Brampton',
    eyebrow: 'Restaurant Build-Out',
    objectPosition: 'center 48%',
  },
  {
    src: '/images/projects/mehfil-etobicoke-2.jpg',
    alt: 'Finished marble bar with custom signage at Mehfil Etobicoke',
    label: 'Mehfil Etobicoke',
    eyebrow: 'Hospitality Interior',
    objectPosition: 'center 50%',
  },
  {
    src: '/images/projects/bombay-club-oakville-1.jpg',
    alt: 'Premium restaurant bar counter with stone finish and back bar',
    label: 'Bombay Club Oakville',
    eyebrow: 'Bar Build-Out',
    objectPosition: 'center 52%',
  },
  {
    src: '/images/projects/barzilla-2.jpg',
    alt: 'Illuminated onyx back bar and marble bar counter at Barzilla',
    label: 'Barzilla',
    eyebrow: 'Bar Build-Out',
    objectPosition: 'center 60%',
  },
  {
    src: '/images/projects/meridian-bank-port-elgin-1.jpg',
    alt: 'Completed bank reception renovation by Deeroi Constructions',
    label: 'Meridian Bank Port Elgin',
    eyebrow: 'Commercial Renovation',
    objectPosition: 'center 50%',
  },
  {
    src: '/images/projects/18972-mississauga-rd-caledon-1.jpg',
    alt: 'Completed custom home exterior by Deeroi Constructions',
    label: 'Caledon Custom Residence',
    eyebrow: 'Residential Project',
    objectPosition: 'center 42%',
  },
] as const;

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-foreground text-white">
      <HeroPhotoCarousel photos={HERO_PHOTOS} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.9)_0%,rgba(8,8,8,0.66)_40%,rgba(8,8,8,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(200,150,78,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />

      <div className="container-main relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur-md">
            Commercial and residential contractor
          </p>

          <h1
            className="max-w-4xl text-3xl font-bold leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            GTA Construction Company
          </h1>

          <p className="mt-6 max-w-[21rem] text-base leading-relaxed text-white/78 sm:max-w-2xl md:text-xl">
            Commercial build-outs, restaurant renovations, custom homes,
            kitchens, and bathrooms across the GTA and Ontario.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-hover"
            >
              Get Construction Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/35 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-foreground"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/50 md:flex">
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce-subtle" aria-hidden="true" />
      </div>
    </section>
  );
}

function BrandStrip() {
  const brands = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="overflow-hidden border-y border-border bg-background py-8">
      <div className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        Built for recognizable commercial and residential spaces
      </div>
      <div className="relative">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap">
          {brands.map((brand, index) => (
            <span
              key={`${brand.name}-${index}`}
              className="text-lg font-bold uppercase tracking-[0.12em] text-foreground/42 md:text-xl"
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

function ProofSection() {
  const proof = [
    PORTFOLIO_PROJECTS[1],
    PORTFOLIO_PROJECTS[2],
    PORTFOLIO_PROJECTS[12],
  ];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-main grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Project archive
          </p>
          <h2
            className="max-w-xl text-3xl font-bold leading-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Finished projects show the detail.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Explore completed Deeroi projects, from restaurant interiors and bank
            renovations to custom residential upgrades. Clear portfolio proof
            helps visitors trust the finish before they ever fill out a form.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {proof.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.12}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-lg bg-background shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {project.location}
                  </p>
                  <h3
                    className="mt-2 text-lg font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featured = [
    ...SERVICES.commercial.slice(0, 2),
    ...SERVICES.residential.slice(2, 4),
  ];

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              What we build
            </p>
            <h2
              className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Spaces that need tight coordination and a clean finish.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="/commercial"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
            >
              Explore Services
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-lg border border-border bg-background">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                  <h3
                    className="absolute bottom-5 left-5 right-5 text-xl font-bold leading-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p className="min-h-28 p-5 leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { end: 8, suffix: '+', label: 'Years in business' },
    { end: PORTFOLIO_PROJECTS.filter((project) => project.type === 'commercial').length, suffix: '', label: 'Commercial case studies' },
    { end: PORTFOLIO_PROJECTS.filter((project) => project.type === 'residential').length, suffix: '', label: 'Residential case studies' },
    { end: photoCount, suffix: '', label: 'Portfolio photos' },
  ];

  return (
    <section className="section-dark py-20 md:py-24">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="bg-foreground p-6 text-center md:p-8">
                <span
                  className="text-4xl font-bold text-accent md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2.3} />
                </span>
                <span className="mt-3 block text-xs uppercase tracking-[0.14em] text-white/56">
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

function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Featured work
            </p>
            <h2
              className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A portfolio of completed spaces.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="/portfolio"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-lg bg-background"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {project.category}
                    </p>
                    <h3
                      className="mt-2 text-2xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/68">{project.location}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <Image
        src="/images/projects/18972-mississauga-rd-caledon-1.jpg"
        alt="Completed custom home exterior by Deeroi Constructions"
        fill
        className="object-cover"
        style={{ objectPosition: 'center 42%' }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/68" />

      <div className="container-main relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <ScrollReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Start the walkthrough
          </p>
          <h2
            className="max-w-3xl text-3xl font-bold leading-tight md:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bring us the address, the scope, and the deadline.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/72">
            We will help price the work, plan the trades, and move the project
            from idea to finished space with a clear construction path.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-lg border border-white/16 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="leading-relaxed text-white/78">
                Share your location, project type, and timeline. Deeroi will
                follow up with the next steps for a quote.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-hover"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white hover:text-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <HeroSection />
      <BrandStrip />
      <ProofSection />
      <ServicesSection />
      <StatsSection />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
