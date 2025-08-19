import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Digital Marketing Services | The X Media - SEO, Business Consultancy & Performance Marketing",
  description: "Transform your service business with The X Media's comprehensive digital marketing services. Expert SEO for service professionals, business consultancy, performance marketing, website development, content creation, and lead automation.",
  keywords: "SEO for service professionals, business consultancy, performance marketing, website development, content creation, lead automation, digital marketing for realtors, mortgage agents, lawyers, CAs, local service businesses",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: "Digital Marketing Services | The X Media - SEO, Business Consultancy & Performance Marketing",
    description: "Transform your service business with our comprehensive digital marketing services. Expert SEO for service professionals, business consultancy, performance marketing, and lead automation.",
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
    description: "Transform your service business with our comprehensive digital marketing services. Expert SEO for service professionals, business consultancy, and performance marketing.",
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
    <ServiceMain/>
  );
};

export default ServicePage;
