import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://investcalc.com';
  
  const calculators = [
    'stock-profit-loss',
    'stock-average',
    'sip',
    'swp',
    'emi',
    'cagr',
    'stock-split',
    'bonus-share',
    'lumpsum',
    'rule-of-72',
    'percentage',
    'dividend-details',
    'bonus-buyback',
    'face-value',
    'trading-holidays',
  ];

  const pages = [
    '',
    'about',
    'faq',
    'contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add calculator pages
  calculators.forEach((calc) => {
    sitemapEntries.push({
      url: `${baseUrl}/${calc}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add static pages
  pages.forEach((page) => {
    const url = page ? `${baseUrl}/${page}` : baseUrl;
    sitemapEntries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page === '' ? 1 : 0.9,
    });
  });

  return sitemapEntries;
}
