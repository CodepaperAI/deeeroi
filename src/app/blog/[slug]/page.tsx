import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Tag } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { SITE } from '@/lib/constants';
import {
  contentLooksLikeHtml,
  formatBlogDate,
  getBlogDate,
  getBlogExcerpt,
  getReadingTime,
  getSafeImageUrl,
  getUpliftBlog,
  sanitizeBlogHtml,
  type UpliftBlog,
} from '@/lib/uplift';

export const revalidate = 3600;
export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

function getBlogImage(blog: UpliftBlog) {
  return getSafeImageUrl(blog.featuredImage) || '/images/projects/bombay-club-oakville-1.jpg';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getUpliftBlog(slug);

  if (!blog) {
    return {
      title: 'Blog Article Not Found',
    };
  }

  const metaTitle =
    blog.meta?.seoTitle || blog.meta?.ogTitle || `${blog.title} | Construction Blog`;
  const metaDescription =
    blog.meta?.seoDescription || blog.meta?.ogDescription || getBlogExcerpt(blog, 155);
  const image = getBlogImage(blog);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    keywords: blog.meta?.keywords,
    openGraph: {
      title: blog.meta?.ogTitle || metaTitle,
      description: blog.meta?.ogDescription || metaDescription,
      url: `/blog/${blog.slug}`,
      type: 'article',
      publishedTime: blog.publishDate,
      modifiedTime: blog.freshness?.lastUpdatedAt || blog.updatedAt,
      authors: blog.authorName ? [blog.authorName] : [SITE.name],
      section: blog.meta?.articleSection || blog.categories[0],
      tags: blog.meta?.articleTags?.length ? blog.meta.articleTags : blog.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

function ArticleHeroImage({ blog }: { blog: UpliftBlog }) {
  const featuredImage = getSafeImageUrl(blog.featuredImage);

  if (featuredImage) {
    return (
      <div
        role="img"
        aria-label={`${blog.title} featured image`}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredImage})` }}
      />
    );
  }

  return (
    <Image
      src="/images/projects/bombay-club-oakville-1.jpg"
      alt="Premium restaurant bar build-out by Deeroi Constructions"
      fill
      priority
      className="object-cover"
      style={{ objectPosition: 'center 52%' }}
      sizes="100vw"
    />
  );
}

function BlogBody({ content }: { content: string }) {
  const sanitizedContent = sanitizeBlogHtml(content);

  if (contentLooksLikeHtml(sanitizedContent)) {
    return (
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    );
  }

  const paragraphs = sanitizedContent
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="blog-content">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const blog = await getUpliftBlog(slug);

  if (!blog) notFound();

  const categories = blog.categories.length ? blog.categories : ['Construction'];
  const articleDate = getBlogDate(blog);
  const image = getBlogImage(blog);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: getBlogExcerpt(blog, 180),
    image: image.startsWith('http') ? image : `${SITE.url}${image}`,
    datePublished: blog.publishDate || blog.createdAt,
    dateModified: blog.freshness?.lastUpdatedAt || blog.updatedAt || blog.publishDate,
    author: {
      '@type': blog.authorName ? 'Person' : 'Organization',
      name: blog.authorName || SITE.name,
      url: blog.authorUrl || SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/blog/${blog.slug}`,
    keywords: blog.meta?.keywords?.length ? blog.meta.keywords.join(', ') : blog.tags.join(', '),
    articleSection: blog.meta?.articleSection || categories[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <section className="relative min-h-[660px] overflow-hidden bg-foreground text-white">
        <ArticleHeroImage blog={blog} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.68)_48%,rgba(10,10,10,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-foreground to-transparent" />

        <div className="container-main relative z-10 flex min-h-[660px] flex-col justify-end pb-14 pt-36 md:pb-20">
          <ScrollReveal>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/68 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/72">
              <span className="rounded-md border border-white/18 bg-white/10 px-3 py-2 text-accent backdrop-blur-md">
                {categories[0]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {formatBlogDate(articleDate)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {getReadingTime(blog)}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <h1
              className="max-w-5xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl md:text-7xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {blog.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.26}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/78 md:text-xl">
              {getBlogExcerpt(blog, 230)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container-main grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-20">
          <aside>
            <ScrollReveal>
              <div className="sticky top-28 rounded-lg border border-border bg-surface p-6 md:p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Article details
                </p>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Published
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">
                      {formatBlogDate(articleDate)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Reading Time
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">
                      {getReadingTime(blog)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Topic
                    </dt>
                    <dd className="mt-1 font-semibold text-foreground">{categories[0]}</dd>
                  </div>
                </dl>

                {blog.tags.length ? (
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 8).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-muted"
                        >
                          <Tag className="h-3 w-3 text-accent" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </ScrollReveal>
          </aside>

          <ScrollReveal delay={0.12}>
            <article className="mx-auto w-full max-w-3xl">
              {blog.content ? (
                <BlogBody content={blog.content} />
              ) : (
                <p className="text-xl leading-relaxed text-muted">
                  This article is being prepared. Please check back soon for the
                  full guide.
                </p>
              )}
            </article>
          </ScrollReveal>
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
              Have a project that needs careful planning and premium finish work?
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
