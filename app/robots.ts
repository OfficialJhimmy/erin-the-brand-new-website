import type { MetadataRoute } from 'next'

// Same placeholder noted in app/layout.tsx — update before deploying.
const SITE_URL = 'https://www.erinhq.com'

// Explicitly allows the major AI crawlers by name (in addition to the
// default allow-all), since some providers treat an explicit listing as a
// clearer opt-in signal than silence. This list reflects the
// well-known crawlers as of this writing — providers add new ones over
// time, so it's worth revisiting periodically rather than treated as
// permanently complete.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'meta-externalagent', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}