import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Deeroi Constructions`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-32 text-center">
        <div className="container-main">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Project Not Found
          </h1>
          <p className="text-muted mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── Hero Image ── */}
      <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 md:pb-16">
          <div className="container-main">
            <ScrollReveal>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-accent mb-3 block font-semibold">
                {project.category}
              </span>
            </ScrollReveal>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <TextReveal text={project.title} delay={0.2} />
            </h1>
          </div>
        </div>
      </section>

      {/* ── Project Details ── */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left — info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">
                      Category
                    </p>
                    <p className="text-foreground font-semibold">
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">
                      Type
                    </p>
                    <p className="text-foreground font-semibold capitalize">
                      {project.type}
                    </p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-xs uppercase tracking-widest text-muted mb-1">
                      About This Project
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — description */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <p className="text-lg md:text-xl leading-relaxed text-muted">
                  {project.description}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="pb-24 md:pb-32">
        <div className="container-main">
          <ScrollReveal>
            <h2
              className="text-2xl md:text-3xl font-bold mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Project Gallery
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <ScrollReveal
                key={`${project.slug}-img-${i}`}
                delay={0.1 * i}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <div
                  className={`relative rounded-lg overflow-hidden ${
                    i === 0 ? 'aspect-[21/9]' : 'aspect-[3/2]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes={
                      i === 0
                        ? '(max-width: 768px) 100vw, 100vw'
                        : '(max-width: 768px) 100vw, 50vw'
                    }
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/60 max-w-md">
              Get a free consultation and estimate. Let&apos;s build something
              exceptional together.
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
