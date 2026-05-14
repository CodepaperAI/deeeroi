import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import PortfolioGrid from './PortfolioGrid';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse our portfolio of commercial and residential construction projects across the Greater Toronto Area. Restaurant build-outs, office renovations, custom homes, and more.',
  openGraph: {
    title: 'Portfolio | Deeroi Constructions',
    description:
      'Projects that speak for themselves. Commercial and residential construction across the GTA.',
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=85"
          alt="Construction portfolio overview"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        <div className="container-main relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Our Work
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <TextReveal text="Our Portfolio" />
          </h1>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Projects that speak for themselves — commercial build-outs,
              residential renovations, and everything in between.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-main">
          <PortfolioGrid projects={PORTFOLIO_PROJECTS as unknown as Project[]} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-main text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Have a Project in Mind?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/60 max-w-md">
              Let&apos;s discuss how we can bring your vision to life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-10 py-4 mt-2 text-sm font-semibold uppercase tracking-widest bg-accent text-white rounded hover:bg-accent-hover transition-colors"
            >
              Request a Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* Type re-export for the client component */
export type Project = {
  slug: string;
  title: string;
  type: 'commercial' | 'residential';
  category: string;
  description: string;
  image: string;
  images: readonly string[];
};
