import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "Digital Marketing Services | The X Media - SEO, AI Content & Lead Generation",
  description: "Transform your business with The X Media's comprehensive digital marketing services. Expert SEO, AI content creation, social media marketing, and lead generation strategies.",
  keywords: "digital marketing services, SEO services, AI content creation, social media marketing, lead generation, web design, brand development, The X Media services",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title: "Digital Marketing Services | The X Media - SEO, AI Content & Lead Generation",
    description: "Transform your business with our comprehensive digital marketing services. Expert SEO, AI content creation, and lead generation strategies.",
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
    description: "Transform your business with our comprehensive digital marketing services. Expert SEO, AI content creation, and lead generation.",
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
