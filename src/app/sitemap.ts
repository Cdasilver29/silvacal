import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', '/about', '/packages', '/portfolio', '/contact', '/privacy', '/terms'];
  const servicePaths = services.map((service) => `/services/${service.slug}`);

  return [...staticPaths, ...servicePaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
