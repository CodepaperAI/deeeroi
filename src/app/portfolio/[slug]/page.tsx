import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
  const project = PORTFOLIO_PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} ${project.category} in ${project.location}`,
    description: `${project.category} portfolio project in ${project.location}: ${project.description}`,
    openGraph: {
      title: `${project.title} ${project.category} | Deeroi Constructions`,
      description: `${project.category} portfolio project in ${project.location}: ${project.description}`,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="py-32 text-center">
        <div className="container-main">
          <h1
            className="mb-4 text-4xl font-bold"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Project Not Found
          </h1>
          <p className="mb-8 text-muted">
            The project you are looking for does not exist.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative min-h-[640px] overflow-hidden bg-foreground text-white">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.64)_44%,rgba(10,10,10,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-foreground to-transparent" />

        <div className="container-main relative z-10 flex min-h-[640px] flex-col justify-end pb-14 pt-36 md:pb-20">
          <ScrollReveal>
            <Link
              href="/portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/68 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Portfolio
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {project.category} / {project.location}
            </span>
          </ScrollReveal>

          <h1
            className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl md:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <TextReveal text={project.title} delay={0.2} />
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-main grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal>
            <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Project details
              </p>
              <dl className="space-y-6">
                {[
                  ['Category', project.category],
                  ['Location', project.location],
                  ['Type', project.type],
                  ['Photos', `${project.images.length} project photos`],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 font-semibold capitalize text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-xl leading-relaxed text-muted md:text-2xl">
              {project.description}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-sm font-medium leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="container-main">
          <ScrollReveal className="mb-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Project gallery
            </p>
            <h2
              className="text-3xl font-bold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Finished photo set
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((image, index) => (
              <ScrollReveal key={`${project.slug}-img-${index}`} delay={0.08 * index}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-background">
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="container-main grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Plan your project
            </p>
            <h2
              className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Want this level of finish on your project?
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
