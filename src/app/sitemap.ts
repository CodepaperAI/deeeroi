import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.deeroiconstructions.com';

const staticPages = [
  { path: '/', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/commercial', priority: 0.8 },
  { path: '/residential', priority: 0.8 },
  { path: '/renovations', priority: 0.8 },
  { path: '/portfolio', priority: 0.8 },
  { path: '/testimonials', priority: 0.8 },
  { path: '/contact', priority: 0.8 },
  { path: '/quote', priority: 0.8 },
];

const portfolioSlugs = [
  'the-echo-project',
  'the-brightline-project',
  'the-atlas-project',
  'washroom-upgrade',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page.priority,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioSlugs.map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...portfolioEntries];
}
