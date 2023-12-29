import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const routes = ['', 'about', 'how-it-works', 'faqs', 'contact-us', 'feedback'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
