import { cache } from 'react';

const UPLIFT_API_BASE = 'https://api.upliftai.co/api/public/v1';

export type UpliftBlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type UpliftFreshness = {
  lastUpdatedAt?: string;
  ageDays?: number;
  needsRefresh?: boolean;
  freshnessThresholdDays?: number;
};

export type UpliftBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories: string[];
  tags: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: UpliftFreshness;
  meta?: UpliftBlogMeta;
  customFields?: Record<string, unknown>;
};

type BlogListResponse = {
  success: boolean;
  data?: {
    blogs?: unknown[];
    pagination?: {
      page?: number;
      limit?: number;
      total?: number;
      totalPages?: number;
    };
  };
  error?: string;
};

type BlogDetailResponse = {
  success: boolean;
  data?: {
    blog?: unknown;
  };
  error?: string;
};

type GetBlogsOptions = {
  page?: number;
  limit?: number;
  status?: 'PUBLISH' | 'DRAFT' | 'ALL';
};

const defaultPagination = {
  page: 1,
  limit: 12,
  total: 0,
  totalPages: 0,
};

function getToken() {
  return process.env.UPLIFT_API_TOKEN?.trim();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function getString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function getStringArray(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}

function normalizeMeta(value: unknown): UpliftBlogMeta | undefined {
  if (!isRecord(value)) return undefined;

  return {
    seoTitle: getString(value.seoTitle) || undefined,
    seoDescription: getString(value.seoDescription) || undefined,
    focusKeyword: getString(value.focusKeyword) || undefined,
    keywords: getStringArray(value.keywords),
    ogTitle: getString(value.ogTitle) || undefined,
    ogDescription: getString(value.ogDescription) || undefined,
    ogType: getString(value.ogType) || undefined,
    ogUrl: getString(value.ogUrl) || undefined,
    ogSiteName: getString(value.ogSiteName) || undefined,
    ogLocale: getString(value.ogLocale) || undefined,
    articleAuthor: getString(value.articleAuthor) || undefined,
    articleSection: getString(value.articleSection) || undefined,
    articleTags: getStringArray(value.articleTags),
  };
}

function normalizeFreshness(value: unknown): UpliftFreshness | undefined {
  if (!isRecord(value)) return undefined;

  return {
    lastUpdatedAt: getString(value.lastUpdatedAt) || undefined,
    ageDays: getNumber(value.ageDays),
    needsRefresh:
      typeof value.needsRefresh === 'boolean' ? value.needsRefresh : undefined,
    freshnessThresholdDays: getNumber(value.freshnessThresholdDays),
  };
}

function normalizeBlog(value: unknown): UpliftBlog | null {
  if (!isRecord(value)) return null;

  const id = getString(value.id);
  const title = getString(value.title);
  const slug = getString(value.slug);

  if (!id || !title || !slug) return null;

  return {
    id,
    title,
    slug,
    excerpt: getString(value.excerpt),
    content: getString(value.content),
    status: getString(value.status),
    publishDate: getString(value.publishDate) || undefined,
    publishTime: getString(value.publishTime) || undefined,
    featuredImage: getString(value.featuredImage) || undefined,
    categories: getStringArray(value.categories),
    tags: getStringArray(value.tags),
    seoScore: getNumber(value.seoScore),
    createdAt: getString(value.createdAt) || undefined,
    updatedAt: getString(value.updatedAt) || undefined,
    authorName: getString(value.authorName) || undefined,
    authorUrl: getString(value.authorUrl) || undefined,
    freshness: normalizeFreshness(value.freshness),
    meta: normalizeMeta(value.meta),
    customFields: isRecord(value.customFields) ? value.customFields : undefined,
  };
}

async function fetchFromUplift<T>(path: string) {
  const token = getToken();

  if (!token) {
    return { ok: false as const, data: null, error: 'missing-token' };
  }

  const response = await fetch(`${UPLIFT_API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return {
      ok: false as const,
      data: null,
      error: `uplift-${response.status}`,
    };
  }

  const data = (await response.json()) as T;

  return { ok: true as const, data, error: null };
}

export const getUpliftBlogs = cache(async (options: GetBlogsOptions = {}) => {
  const page = options.page ?? 1;
  const limit = Math.min(options.limit ?? 12, 100);
  const status = options.status ?? 'PUBLISH';
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    status,
  });

  const result = await fetchFromUplift<BlogListResponse>(`/blogs?${params}`);

  if (!result.ok || !result.data?.success) {
    return {
      blogs: [] as UpliftBlog[],
      pagination: defaultPagination,
      error: result.error || result.data?.error || 'uplift-error',
    };
  }

  return {
    blogs: (result.data.data?.blogs ?? [])
      .map(normalizeBlog)
      .filter((blog): blog is UpliftBlog => blog !== null),
    pagination: {
      ...defaultPagination,
      ...result.data.data?.pagination,
    },
    error: null,
  };
});

export const getUpliftBlog = cache(async (slug: string) => {
  if (!slug) return null;

  const result = await fetchFromUplift<BlogDetailResponse>(
    `/blog/${encodeURIComponent(slug)}`,
  );

  if (!result.ok || !result.data?.success) return null;

  const blog = normalizeBlog(result.data.data?.blog);
  return blog;
});

export function getBlogDate(blog: UpliftBlog) {
  return blog.publishDate || blog.updatedAt || blog.createdAt;
}

export function formatBlogDate(value?: string) {
  if (!value) return 'Recently updated';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function getBlogExcerpt(blog: UpliftBlog, fallbackLength = 180) {
  const excerpt = stripHtml(blog.excerpt);
  if (excerpt) return excerpt;

  const content = stripHtml(blog.content);
  if (content.length <= fallbackLength) return content;

  return `${content.slice(0, fallbackLength).trim()}...`;
}

export function getReadingTime(blog: UpliftBlog) {
  const customReadingTime = blog.customFields?.readingTime;

  if (typeof customReadingTime === 'string' && customReadingTime.trim()) {
    return customReadingTime.trim();
  }

  const words = stripHtml(blog.content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

export function getSafeImageUrl(value?: string) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

export function sanitizeBlogHtml(value: string) {
  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/\son\w+=(["'])[\s\S]*?\1/gi, '')
    .replace(/\son\w+=\S+/gi, '')
    .replace(/\s(href|src)=(["'])\s*javascript:[\s\S]*?\2/gi, '');
}

export function contentLooksLikeHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}
