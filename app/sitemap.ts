import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.geoaicon.com';
  
  const routes = [
    { url: '', priority: 1.0, changefreq: 'monthly' },
    { url: '/workshop/intersession-2026', priority: 0.8, changefreq: 'monthly' },
    { url: '/workshop/geoinnovate-thon-2026', priority: 0.8, changefreq: 'monthly' },
    { url: '/community/members', priority: 0.7, changefreq: 'monthly' },
    { url: '/community/membership-application', priority: 0.6, changefreq: 'monthly' },
    { url: '/calendar/past-events', priority: 0.7, changefreq: 'monthly' },
    { url: '/calendar/future-events', priority: 0.8, changefreq: 'weekly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq as any,
    priority: route.priority,
  }));
}
