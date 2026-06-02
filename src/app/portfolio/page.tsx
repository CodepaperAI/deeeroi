import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import PortfolioGrid from './PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse real Deeroi Constructions project photos from commercial restaurant build-outs, retail renovations, institutional work, banks, kitchens, bathrooms, and residential upgrades across Ontario.',
  openGraph: {
    title: 'Portfolio | Deeroi Constructions',
    description:
      'Real client photos from commercial and residential construction projects across Ontario.',
    images: [{ url: '/images/projects/mehfil-etobicoke-1.jpg', width: 1200, height: 630 }],
  },
};

export default function PortfolioPage() {
  const commercialCount = PORTFOLIO_PROJECTS.filter(
    (project) => project.type === 'commercial',
  ).length;
  const residentialCount = PORTFOLIO_PROJECTS.filter(
    (project) => project.type === 'residential',
  ).length;

  return (
    <>
      <section className="relative overflow-hidden bg-foreground pb-24 pt-40 text-white md:pb-32 md:pt-48">
        <Image
          src="/images/projects/18972-mississauga-rd-caledon-3.jpg"
          alt="Completed residential exterior by Deeroi Constructions"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 46%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.86)_0%,rgba(10,10,10,0.62)_46%,rgba(10,10,10,0.28)_100%)]" />

        <div className="container-main relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Real project archive
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Project Portfolio
          </h1>
          <p className="mt-6 max-w-[20rem] text-base leading-relaxed text-white/78 sm:max-w-2xl md:text-xl">
            A stronger portfolio built from finished client spaces, including
            restaurants, banks, retail spaces, institutional projects, kitchens,
            bathrooms, and residential upgrades.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/16 bg-white/12 backdrop-blur-md">
            {[
              { value: PORTFOLIO_PROJECTS.length, label: 'Projects' },
              { value: commercialCount, label: 'Commercial' },
              { value: residentialCount, label: 'Homes' },
            ].map((item) => (
              <div key={item.label} className="bg-black/28 p-4 md:p-5">
                <p
                  className="text-2xl font-bold md:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.value}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.1em] text-white/58 md:text-xs md:tracking-[0.14em]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-main">
          <PortfolioGrid projects={PORTFOLIO_PROJECTS} />
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container-main grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Ready to build
            </p>
            <h2
              className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let your project be the next finished space in the portfolio.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-hover"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
