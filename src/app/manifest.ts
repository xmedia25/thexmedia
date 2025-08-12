import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The X Media - Digital Marketing Agency',
    short_name: 'The X Media',
    description: 'Leading digital marketing agency specializing in SEO, AI content creation, and lead generation. Transform your business with proven strategies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'marketing', 'advertising'],
    icons: [
      {
        src: '/assets/img/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/assets/img/logo/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/img/logo/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Our Services',
        short_name: 'Services',
        description: 'View our digital marketing services',
        url: '/service',
        icons: [
          {
            src: '/assets/img/logo/logo.png',
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our team',
        url: '/contact',
        icons: [
          {
            src: '/assets/img/logo/logo.png',
            sizes: '96x96',
          },
        ],
      },
    ],
  }
}