import React from 'react';
import Head from 'next/head';

interface AdvancedSEOProps {
  page?: string;
  customSchema?: any;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({ page = 'home', customSchema }) => {
  const getPageSpecificSchema = () => {
    const baseSchema: any = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://thexmedia.com/#organization",
          "name": "The X Media",
          "url": "https://thexmedia.com",
          "sameAs": [
            "https://www.facebook.com/thexmediaofficial/",
            "https://www.instagram.com/thexmedia_/",
            "https://www.linkedin.com/company/theexmedia",
            "https://twitter.com/thexmedia"
          ],
          "logo": {
            "@type": "ImageObject",
            "@id": "https://thexmedia.com/#logo",
            "url": "https://thexmedia.com/assets/img/logo/logo.png",
            "width": 300,
            "height": 100,
            "caption": "The X Media Logo"
          },
          "image": {
            "@id": "https://thexmedia.com/#logo"
          },
          "description": "Leading digital marketing agency specializing in SEO for service professionals, AI content creation, lead generation, and brand development in Mississauga, Toronto.",
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
            "availableLanguage": "English",
            "areaServed": ["Mississauga", "Toronto", "Ontario", "Canada"]
          },
          "foundingDate": "2020",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 5,
            "maxValue": 15
          },
          "slogan": "Transform Your Business with Proven Digital Marketing Strategies",
          "knowsAbout": [
            "Digital Marketing",
            "Search Engine Optimization",
            "AI Content Creation",
            "Lead Generation",
            "Social Media Marketing",
            "Brand Development",
            "Performance Marketing",
            "Business Consultancy"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://thexmedia.com/#website",
          "url": "https://thexmedia.com",
          "name": "The X Media",
          "description": "Leading digital marketing agency specializing in SEO for service professionals, AI content creation, and lead generation.",
          "publisher": {
            "@id": "https://thexmedia.com/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://thexmedia.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        }
      ]
    };

    // Add page-specific schema
    switch (page) {
      case 'services':
        baseSchema["@graph"].push({
          "@type": "Service",
          "@id": "https://thexmedia.com/service#service",
          "name": "Digital Marketing Services",
          "description": "Comprehensive digital marketing services including SEO for service professionals, business consultancy, performance marketing, and AI content creation.",
          "provider": {
            "@id": "https://thexmedia.com/#organization"
          },
          "areaServed": ["Mississauga", "Toronto", "Ontario", "Canada"],
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
                  "description": "Strategic business consulting to refine business model, positioning, and growth systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Performance Marketing",
                  "description": "Data-driven advertising campaigns across Google Ads, Facebook, Instagram, and LinkedIn"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Content Creation",
                  "description": "AI-powered content creation including viral content and voice cloning technology"
                }
              }
            ]
          }
        });
        break;
      
      case 'about':
        baseSchema["@graph"].push({
          "@type": "AboutPage",
          "@id": "https://thexmedia.com/about-us#aboutpage",
          "url": "https://thexmedia.com/about-us",
          "name": "About The X Media",
          "description": "Learn about The X Media, a leading digital marketing agency in Mississauga, Toronto with proven strategies that help businesses grow and succeed.",
          "mainEntity": {
            "@id": "https://thexmedia.com/#organization"
          }
        });
        break;
      
      case 'contact':
        baseSchema["@graph"].push({
          "@type": "ContactPage",
          "@id": "https://thexmedia.com/contact#contactpage",
          "url": "https://thexmedia.com/contact",
          "name": "Contact The X Media",
          "description": "Get in touch with The X Media for digital marketing services in Mississauga, Toronto.",
          "mainEntity": {
            "@id": "https://thexmedia.com/#organization"
          }
        });
        break;
    }

    return customSchema || baseSchema;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getPageSpecificSchema(), null, 2)
      }}
    />
  );
};

export default AdvancedSEO;