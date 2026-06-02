import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Read what our clients say about working with Deeroi Constructions. 5-star reviews from commercial and residential project owners across the Greater Toronto Area.',
  openGraph: {
    title: 'Testimonials | Deeroi Constructions',
    description:
      'What our clients say — trusted by franchise owners, businesses, and homeowners across the GTA.',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Image
          src="/images/projects/7-spice-brampton-1.jpg"
          alt="Finished restaurant interior by Deeroi Constructions"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 48%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        <div className="container-main relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Testimonials
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <TextReveal text="What Our Clients Say" />
          </h1>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              We let our work and our clients speak for us. Here&apos;s what
              they have to say about working with Deeroi Constructions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {TESTIMONIALS.map((testimonial, i) => {
              const isWide = i === 0;
              return (
                <ScrollReveal
                  key={`${testimonial.name}-${i}`}
                  delay={0.1 * i}
                  className={isWide ? 'lg:col-span-2' : ''}
                >
                  <article
                    className={`relative border border-border rounded-lg p-8 md:p-12 bg-surface group hover:border-accent/30 transition-colors duration-300 ${
                      isWide ? 'lg:flex lg:items-start lg:gap-12' : ''
                    }`}
                  >
                    {/* Decorative quotation mark */}
                    <span
                      className="block text-accent/20 text-[120px] md:text-[160px] leading-none font-serif select-none -mt-4 -mb-10 lg:-mt-6 lg:-mb-12 shrink-0"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    <div className="flex-1">
                      {/* Quote */}
                      <blockquote
                        className="text-xl md:text-2xl leading-relaxed text-foreground mb-8"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {testimonial.quote}
                      </blockquote>

                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, starIdx) => (
                            <Star
                              key={starIdx}
                              className="w-5 h-5 fill-accent text-accent"
                            />
                          ),
                        )}
                      </div>

                      {/* Client info */}
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted">{testimonial.company}</p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/images/projects/mehfil-etobicoke-2.jpg"
          alt="Finished hospitality bar project by Deeroi Constructions"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="container-main relative z-10 text-center flex flex-col items-center gap-6">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Join Our Happy Clients?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/70 max-w-md">
              Get a free consultation and discover why our clients keep coming
              back.
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
