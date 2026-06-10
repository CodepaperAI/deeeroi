import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Clock, Award, Banknote } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import QuoteForm from './QuoteForm';

export const metadata: Metadata = {
  title: 'Construction Quote in the GTA',
  description:
    'Request a construction quote from Deeroi Constructions for commercial construction, restaurant build-outs, residential renovations, kitchens, bathrooms, and custom home projects across the GTA and Ontario.',
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Construction Quote in the GTA | Deeroi Constructions',
    description:
      'Tell us about your commercial or residential construction project and get clear next steps from Deeroi Constructions.',
    images: [
      {
        url: '/images/projects/bombay-club-oakville-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium bar build-out by Deeroi Constructions',
      },
    ],
  },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Fully Licensed & Insured',
    description: 'Complete liability coverage and all required Ontario trade licences.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We hit deadlines. Transparent timelines with weekly progress updates.',
  },
  {
    icon: Award,
    title: 'Commercial Portfolio Experience',
    description:
      'Portfolio work includes retail, bank, restaurant, institutional, and residential projects across Ontario.',
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    description: 'Detailed line-item estimates. No hidden fees, no surprises.',
  },
];

export default function QuotePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Image
          src="/images/projects/bombay-club-oakville-1.jpg"
          alt="Completed restaurant bar renovation by Deeroi Constructions"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 52%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        <div className="container-main relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Free Estimate
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <TextReveal text="Request a Quote" />
          </h1>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Tell us about your commercial or residential project and we&apos;ll
              follow up with clear next steps.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Form + Trust Panel ── */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Left — Quote Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-surface border border-border rounded-lg p-8 md:p-12">
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Tell Us About Your Project
                  </h2>
                  <p className="text-muted mb-10">
                    Fill out the form below and our team will review your
                    project details and follow up.
                  </p>
                  <QuoteForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Trust Points */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={0.15}>
                <h3
                  className="text-xl md:text-2xl font-bold mb-8"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Why Choose Deeroi?
                </h3>
              </ScrollReveal>

              <div className="space-y-8">
                {trustPoints.map((point, i) => (
                  <ScrollReveal key={point.title} delay={0.2 + 0.1 * i}>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                        <point.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">
                          {point.title}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
