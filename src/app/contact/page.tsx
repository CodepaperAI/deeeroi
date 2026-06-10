import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { SITE } from '@/lib/constants';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact GTA Construction Company',
  description:
    'Contact Deeroi Constructions for GTA commercial construction, restaurant build-outs, residential renovations, kitchen renovations, bathroom renovations, and custom home projects.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact GTA Construction Company | Deeroi Constructions',
    description:
      'Reach out to discuss your next commercial or residential construction project in the GTA or Ontario.',
    images: [
      {
        url: '/images/projects/meridian-bank-port-elgin-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Completed commercial renovation by Deeroi Constructions',
      },
    ],
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s|\(|\)|-/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: SITE.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon \u2013 Fri: 8 AM \u2013 6 PM\nSat: 9 AM \u2013 3 PM',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <Image
          src="/images/projects/meridian-bank-port-elgin-1.jpg"
          alt="Completed commercial reception renovation by Deeroi Constructions"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 48%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

        <div className="container-main relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-semibold">
            Get in Touch
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <TextReveal text="Contact Us" />
          </h1>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              Let&apos;s discuss your next construction or renovation project in
              the GTA or Ontario.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="py-24 md:py-32">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left — Contact Details */}
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-8"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Reach Us Directly
                </h2>
              </ScrollReveal>

              {contactDetails.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.1 * i}>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-semibold hover:text-accent transition-colors"
                          target={item.label === 'Address' ? '_blank' : undefined}
                          rel={
                            item.label === 'Address'
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Social Links */}
              <ScrollReveal delay={0.5}>
                <div className="pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-muted mb-4">
                    Follow Us
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                    <span className="text-border">|</span>
                    <a
                      href={SITE.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-surface border border-border rounded-lg p-8 md:p-12">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-8"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="pb-24 md:pb-32">
        <div className="container-main">
          <ScrollReveal>
            <div className="rounded-lg overflow-hidden border border-border aspect-[21/9]">
              <iframe
                title="Deeroi Constructions Location"
                src="https://www.google.com/maps?q=16%20Regan%20Road%2C%20Brampton%2C%20ON%2C%20L7A%201C1&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
