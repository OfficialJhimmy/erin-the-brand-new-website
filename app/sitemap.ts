import type { MetadataRoute } from 'next'

// Same placeholder noted in app/layout.tsx — update before deploying.
const SITE_URL = 'https://www.erinhq.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/architecture', '/projects', '/insights', '/contact']

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}