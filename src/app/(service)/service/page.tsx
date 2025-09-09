import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";
import StructuredData from "@/components/structured-data";
import AdvancedSEO from "@/components/seo/advanced-seo";

export const metadata: Metadata = {
  title: "Digital Marketing Services | The X Media - SEO, AI Content & Lead Generation",
  description: "Comprehensive digital marketing services for service professionals. Specializing in SEO, AI content creation, lead generation, and viral marketing strategies for realtors, lawyers, and more.",
  keywords: "digital marketing services, SEO services, AI content creation, lead generation, viral marketing, realtor marketing, lawyer marketing, mortgage agent marketing, social media marketing, content marketing, PPC advertising, email marketing, conversion optimization",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: "Digital Marketing Services | The X Media - SEO, AI Content & Lead Generation",
    description: "Comprehensive digital marketing services for service professionals. Specializing in SEO, AI content creation, lead generation, and viral marketing strategies.",
    url: 'https://thexmedia.com/service',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Marketing Services | The X Media",
    description: "Comprehensive digital marketing services for service professionals. SEO, AI content, lead generation & more.",
    images: ['/assets/img/logo/logo.png'],
    creator: '@thexmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const ServicePage = () => {
  return (
    <>
      <AdvancedSEO page="services" />
      <StructuredData type="service" data={{
        name: "Digital Marketing Services",
        description: "Comprehensive digital marketing services including SEO, AI content creation, lead generation, and viral marketing strategies for service professionals.",
        provider: "The X Media",
        areaServed: "North America",
        serviceType: "Digital Marketing"
      }} />
      <ServiceMain/>
    </>
  );
};

export default ServicePage;
