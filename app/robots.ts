import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://kush7casino.vercel.app/sitemap.xml', host: 'https://kush7casino.vercel.app' }
}
