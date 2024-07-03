import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sachinchaudhary.tech',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://sachinchaudhary.tech/about',
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: 'https://sachinchaudhary.tech/stack',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}