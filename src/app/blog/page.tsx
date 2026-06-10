import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, CalendarDays, Search } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { SITE } from '@/lib/constants';
import {
  formatBlogDate,
  getBlogDate,
  getBlogExcerpt,
  getReadingTime,
  getSafeImageUrl,
  getUpliftBlogs,
  type UpliftBlog,
} from '@/lib/uplift';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Construction Blog and Renovation Guides',
  description:
    'Read Deeroi Constructions blog articles on GTA construction, commercial build-outs, restaurant renovations, home renovations, kitchens, bathrooms, and project planning.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Construction Blog and Renovation Guides | Deeroi Constructions',
    description:
      'Practical construction and renovation insights from a GTA contractor working across commercial and residential projects.',
    url: '/blog',
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

function BlogImage({ blog, priority = false }: { blog: UpliftBlog; priority?: boolean }) {
  const featuredImage = getSafeImageUrl(blog.featuredImage);
  const label = blog.featuredImage
    ? `${blog.title} featured image`
    : 'Restaurant build-out by Deeroi Constructions';

  if (featuredImage) {
    return (
      <div
        role="img"
        aria-label={label}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${featuredImage})` }}
      />
    );
  }

  return (
    <Image
      src="/images/projects/bombay-club-oakville-1.jpg"
      alt={label}
      fill
      priority={priority}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

function BlogCard({
  blog,
  featured = false,
  index = 0,
}: {
  blog: UpliftBlog;
  featured?: boolean;
  index?: number;
}) {
  const categories = blog.categories.length ? blog.categories : ['Construction'];

  return (
    <ScrollReveal delay={index * 0.06}>
      <Link
        href={`/blog/${blog.slug}`}
        className={`group block h-full overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-300 hover:shadow-[0_22px_70px_rgba(0,0,0,0.12)] ${
          featured ? 'lg:grid lg:grid-cols-[1.05fr_0.95fr]' : ''
        }`}
      >
        <div className={`relative overflow-hidden bg-foreground ${featured ? 'min-h-[420px]' : 'aspect-[4/3]'}`}>
          <BlogImage blog={blog} priority={featured} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 rounded-md border border-white/18 bg-black/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/78 backdrop-blur-md">
            {categories[0]}
          </div>
        </div>

        <div className={featured ? 'flex flex-col justify-center p-6 md:p-10' : 'p-5 md:p-6'}>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {formatBlogDate(getBlogDate(blog))}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {getReadingTime(blog)}
            </span>
          </div>

          <h2
            className={`font-bold leading-tight transition-colors group-hover:text-accent ${
              featured ? 'text-3xl md:text-5xl' : 'text-2xl'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {blog.title}
          </h2>

          <p className="mt-4 leading-relaxed text-muted">
            {getBlogExcerpt(blog, featured ? 260 : 160)}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Read Article
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

function EmptyBlogState({ error }: { error: string | null }) {
  const isMissingToken = error === 'missing-token';

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-main">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-background p-8 text-center md:p-12">
          <Search className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
          <h2
            className="mt-6 text-3xl font-bold md:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Construction insights are being connected.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {isMissingToken
              ? 'Add the Uplift API token in the server environment to publish blog articles on this page.'
              : 'No published blog articles are available right now. Please check back soon for project planning and renovation guidance.'}
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-hover"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function BlogPage() {
  const { blogs, error } = await getUpliftBlogs({ limit: 12, status: 'PUBLISH' });
  const [featuredBlog, ...moreBlogs] = blogs;
  const categoryCount = new Set(blogs.flatMap((blog) => blog.categories)).size;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE.name} Blog`,
    url: `${SITE.url}/blog`,
    description:
      'Construction and renovation articles for commercial build-outs, residential renovations, kitchens, bathrooms, and GTA project planning.',
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-foreground pb-24 pt-40 text-white md:pb-32 md:pt-48">
        <Image
          src="/images/projects/bombay-club-oakville-1.jpg"
          alt="Premium restaurant bar build-out by Deeroi Constructions"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 52%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.68)_45%,rgba(10,10,10,0.26)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-foreground to-transparent" />

        <div className="container-main relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Construction insights
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            GTA Construction Blog
          </h1>
          <p className="mt-6 max-w-[21rem] text-base leading-relaxed text-white/78 sm:max-w-2xl md:text-xl">
            Practical guides for commercial build-outs, residential renovations,
            kitchens, bathrooms, and project planning across the GTA and Ontario.
          </p>

          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/16 bg-white/12 backdrop-blur-md">
            {[
              { value: blogs.length || '-', label: 'Articles' },
              { value: categoryCount || '-', label: 'Topics' },
              { value: 'GTA', label: 'Service Area' },
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

      {featuredBlog ? (
        <section className="bg-surface py-20 md:py-28">
          <div className="container-main">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <ScrollReveal>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Latest article
                </p>
                <h2
                  className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Helpful construction guidance before you build.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <Link
                  href="/quote"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent"
                >
                  Discuss a Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </ScrollReveal>
            </div>

            <BlogCard blog={featuredBlog} featured />

            {moreBlogs.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {moreBlogs.map((blog, index) => (
                  <BlogCard key={blog.id} blog={blog} index={index + 1} />
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : (
        <EmptyBlogState error={error} />
      )}

      <section className="section-dark py-20 md:py-28">
        <div className="container-main grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <ScrollReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Need project advice?
            </p>
            <h2
              className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bring your scope, timeline, and address. We will help plan the next step.
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
