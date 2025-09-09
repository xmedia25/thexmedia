import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'contact' | 'localbusiness' | 'breadcrumb' | 'faq' | 'article' | 'person' | 'review';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The X Media",
          "url": "https://thexmedia.com",
          "logo": "https://thexmedia.com/assets/img/logo/logo.png",
          "description": "Leading digital marketing agency specializing in SEO, AI content creation, and lead generation. Transform your business with proven strategies.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Matheson Blvd E",
            "addressLocality": "Mississauga",
            "addressRegion": "Ontario",
            "postalCode": "L4Z 1M8",
            "addressCountry": "CA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-437-263-5601",
            "contactType": "customer service",
            "email": "contact@thexmedia.com",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/thexmediaofficial/",
            "https://www.instagram.com/thexmedia_/",
            "https://www.linkedin.com/company/theexmedia"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO for Service Professionals",
                  "description": "Help realtors, mortgage agents, lawyers, CAs, and local service-based businesses dominate local search"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Consultancy & Strategy",
                  "description": "Partner with you to refine your business model, positioning, offer, and growth systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Performance Marketing",
                  "description": "Create, test, and optimize Meta and Google Ads campaigns that convert clicks into real business"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website & App Development",
                  "description": "Build sleek, fast, and functional websites and mobile apps designed to convert"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Content Creation",
                  "description": "From ideation to final edit, create viral content that showcases your expertise"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Leads/Automation",
                  "description": "Handle the buzz effortlessly with AI-powered lead management and automation systems"
                }
              }
            ]
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "The X Media",
          "url": "https://thexmedia.com",
          "description": "Leading digital marketing agency specializing in SEO, AI content creation, and lead generation",
          "publisher": {
            "@type": "Organization",
            "name": "The X Media"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://thexmedia.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "description": "Comprehensive digital marketing services including SEO, AI content creation, social media marketing, and lead generation",
          "provider": {
            "@type": "Organization",
            "name": "The X Media"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Canada"
          },
          "serviceType": "Digital Marketing",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "CAD",
            "description": "Free consultation available"
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact The X Media",
          "description": "Get in touch with our digital marketing experts for a free consultation",
          "mainEntity": {
            "@type": "Organization",
            "name": "The X Media",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-437-263-5601",
              "contactType": "customer service",
              "email": "contact@thexmedia.com",
              "availableLanguage": "English"
            }
          }
        };

      case 'localbusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://thexmedia.com/#localbusiness",
          "name": "The X Media",
          "image": "https://thexmedia.com/assets/img/logo/logo.png",
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
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127"
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
                "ratingValue": "5"
              },
              "reviewBody": "The X Media transformed our real estate business with their SEO expertise. We're now ranking #1 for key local searches!"
            }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 43.6532,
              "longitude": -79.3832
            },
            "geoRadius": "50000"
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title || "Digital Marketing Insights",
          "description": data?.description || "Expert insights on digital marketing",
          "image": data?.image || "https://thexmedia.com/assets/img/logo/logo.png",
          "author": {
            "@type": "Organization",
            "name": "The X Media"
          },
          "publisher": {
            "@type": "Organization",
            "name": "The X Media",
            "logo": {
              "@type": "ImageObject",
              "url": "https://thexmedia.com/assets/img/logo/logo.png"
            }
          },
          "datePublished": data?.datePublished || new Date().toISOString(),
          "dateModified": data?.dateModified || new Date().toISOString()
        };

      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": data?.name || "The X Media Team",
          "jobTitle": data?.jobTitle || "Digital Marketing Expert",
          "worksFor": {
            "@type": "Organization",
            "name": "The X Media"
          },
          "url": "https://thexmedia.com/team",
          "sameAs": data?.socialLinks || []
        };

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "The X Media"
          },
          "author": {
            "@type": "Person",
            "name": data?.authorName || "Client"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data?.rating || "5",
            "bestRating": "5"
          },
          "reviewBody": data?.reviewText || "Excellent digital marketing services!"
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
