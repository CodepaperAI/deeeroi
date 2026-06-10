import type { MetadataRoute } from 'next';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { getUpliftBlogs } from '@/lib/uplift';

const BASE_URL = 'https://www.deeroiconstructions.com';

const staticPages = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/commercial', priority: 0.8 },
  { path: '/residential', priority: 0.8 },
  { path: '/renovations', priority: 0.8 },
  { path: '/portfolio', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/testimonials', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/quote', priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page.priority,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const { blogs } = await getUpliftBlogs({ limit: 100, status: 'PUBLISH' });
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: blog.freshness?.lastUpdatedAt || blog.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.55,
  }));

  return [...staticEntries, ...portfolioEntries, ...blogEntries];
}
