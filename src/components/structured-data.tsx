import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'contact';
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
            "https://www.facebook.com/thexmedia",
            "https://www.instagram.com/thexmedia",
            "https://www.linkedin.com/company/thexmedia",
            "https://twitter.com/thexmedia"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Services",
                  "description": "Search engine optimization to improve your website's visibility"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Content Creation",
                  "description": "AI-powered content creation and voice cloning services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Marketing",
                  "description": "Comprehensive social media marketing strategies"
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
