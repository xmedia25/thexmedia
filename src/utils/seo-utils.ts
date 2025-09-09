import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'organization';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
}

const DEFAULT_CONFIG = {
  siteName: 'The X Media',
  siteUrl: 'https://thexmedia.com',
  defaultImage: '/assets/img/logo/logo.png',
  twitterHandle: '@thexmedia',
  locale: 'en_US',
  type: 'website' as const
};

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    image = DEFAULT_CONFIG.defaultImage,
    url,
    type = DEFAULT_CONFIG.type,
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    locale = DEFAULT_CONFIG.locale,
    alternateLocales = []
  } = config;

  const fullUrl = url ? `${DEFAULT_CONFIG.siteUrl}${url}` : DEFAULT_CONFIG.siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${DEFAULT_CONFIG.siteUrl}${image}`;

  const metadata: Metadata = {
    title: {
      default: title,
      template: `%s | ${DEFAULT_CONFIG.siteName}`
    },
    description,
    keywords,
    authors: author ? [{ name: author }] : [{ name: 'The X Media Team' }],
    creator: 'The X Media',
    publisher: 'The X Media',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(DEFAULT_CONFIG.siteUrl),
    alternates: {
      canonical: fullUrl,
      languages: alternateLocales.reduce((acc, locale) => {
        acc[locale] = `${fullUrl}?lang=${locale}`;
        return acc;
      }, {} as Record<string, string>)
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: DEFAULT_CONFIG.siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale,
      type: type === 'service' || type === 'organization' ? 'website' : type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags && { tags })
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: DEFAULT_CONFIG.twitterHandle,
      creator: DEFAULT_CONFIG.twitterHandle,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    category: 'Digital Marketing',
  };

  return metadata;
}

export function generateLocalBusinessSchema(customData?: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thexmedia.com/#localbusiness",
    "name": "The X Media",
    "image": "https://thexmedia.com/assets/img/logo/logo.png",
    "description": "Leading digital marketing agency in Mississauga, Toronto specializing in SEO for service professionals, AI content creation, and lead generation.",
    "url": "https://thexmedia.com",
    "telephone": "+1-437-263-5601",
    "email": "contact@thexmedia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Matheson Blvd E",
      "addressLocality": "Mississauga",
      "addressRegion": "Ontario",
      "postalCode": "L4Z 1M8",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/thexmediaofficial/",
      "https://www.instagram.com/thexmedia_/",
      "https://www.linkedin.com/company/theexmedia",
      "https://twitter.com/thexmedia"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "CAD, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Mississauga"
      },
      {
        "@type": "City",
        "name": "Toronto"
      },
      {
        "@type": "State",
        "name": "Ontario"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "serviceType": "Digital Marketing Agency",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO for Service Professionals",
            "description": "Specialized SEO services for realtors, mortgage agents, lawyers, CAs, and local service businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Content Creation",
            "description": "Advanced AI-powered content creation and voice cloning technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lead Generation",
            "description": "Performance marketing and lead generation campaigns"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Consultancy",
            "description": "Strategic business consulting and growth optimization"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The X Media transformed our online presence. Their SEO strategies helped us rank #1 for our target keywords in just 3 months!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding results! Their AI content creation and lead generation services doubled our monthly leads."
      }
    ],
    ...customData
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://thexmedia.com${item.url}`
    }))
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || DEFAULT_CONFIG.defaultImage,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": DEFAULT_CONFIG.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": DEFAULT_CONFIG.defaultImage
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${DEFAULT_CONFIG.siteUrl}${article.url}`
    }
  };
}

export const SEO_KEYWORDS = {
  primary: [
    'digital marketing agency',
    'SEO services',
    'AI content creation',
    'lead generation',
    'business consultancy'
  ],
  location: [
    'Mississauga',
    'Toronto',
    'Ontario',
    'Canada',
    'GTA'
  ],
  services: [
    'SEO for realtors',
    'SEO for mortgage agents',
    'SEO for lawyers',
    'SEO for CAs',
    'local SEO',
    'performance marketing',
    'social media marketing',
    'brand development',
    'web design'
  ],
  industry: [
    'service professionals',
    'local businesses',
    'small businesses',
    'professional services'
  ]
};

export function generateKeywords(categories: (keyof typeof SEO_KEYWORDS)[]): string {
  return categories
    .flatMap(category => SEO_KEYWORDS[category])
    .join(', ');
}