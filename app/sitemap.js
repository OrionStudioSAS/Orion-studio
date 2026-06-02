import { articles } from '@/data/blog'
import { projects } from '@/data/projects'

const BASE = 'https://orion-studio.io'

export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { url: '',                  priority: 1.0, changeFrequency: 'weekly' },
    { url: '/le-studio',        priority: 0.9, changeFrequency: 'monthly' },
    { url: '/realisations',     priority: 0.9, changeFrequency: 'weekly' },
    { url: '/site-internet',    priority: 0.9, changeFrequency: 'monthly' },
    { url: '/site-e-commerce',  priority: 0.9, changeFrequency: 'monthly' },
    { url: '/saas',             priority: 0.8, changeFrequency: 'monthly' },
    { url: '/orion-admin',      priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog',             priority: 0.7, changeFrequency: 'weekly' },
  ].map(r => ({
    url: `${BASE}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const blogRoutes = articles.map(a => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const projectRoutes = projects.map(p => ({
    url: `${BASE}/realisations/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
