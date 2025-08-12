import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "Our Clients & Success Stories | The X Media - Digital Marketing Results",
  description: "See how The X Media helps realtors, lawyers, mortgage agents, and service professionals go viral and scale their businesses. View our client success stories and case studies.",
  keywords: "client success stories, digital marketing case studies, realtor marketing, lawyer marketing, mortgage agent marketing, business growth, viral content, The X Media clients",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/our-clients',
  },
  openGraph: {
    title: "Our Clients & Success Stories | The X Media - Digital Marketing Results",
    description: "See how The X Media helps realtors, lawyers, mortgage agents, and service professionals go viral and scale their businesses.",
    url: 'https://thexmedia.com/our-clients',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Client Success Stories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Clients & Success Stories | The X Media",
    description: "See how we help service professionals go viral and scale their businesses with proven digital marketing strategies.",
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

const OurClientsPage = () => {
  return (
    <PortfolioStandardMain/>
  );
};

export default OurClientsPage;
