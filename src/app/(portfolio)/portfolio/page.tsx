import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Portfolio & Client Success Stories | The X Media - Digital Marketing Results",
  description: "Discover how The X Media helps realtors, lawyers, mortgage agents, and service professionals achieve viral success and business growth. View our portfolio of proven digital marketing results.",
  keywords: "portfolio, client success stories, digital marketing results, realtor marketing, lawyer marketing, mortgage agent marketing, business growth, viral content, The X Media portfolio, case studies, proven results",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio & Client Success Stories | The X Media - Digital Marketing Results",
    description: "Discover how we help service professionals achieve viral success and business growth. View our portfolio of proven digital marketing results.",
    url: 'https://thexmedia.com/portfolio',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Portfolio - Client Success Stories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Portfolio & Client Success Stories | The X Media",
    description: "Discover how we help service professionals achieve viral success and business growth.",
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

const PortfolioPage = () => {
  return (
    <>
      <StructuredData type="article" data={{
        title: "Portfolio & Client Success Stories",
        description: "Discover how The X Media helps service professionals achieve viral success and business growth.",
        image: "/assets/img/logo/logo.png",
        datePublished: "2024-01-01T00:00:00Z",
        dateModified: new Date().toISOString()
      }} />
      <PortfolioStandardMain/>
    </>
  );
};

export default PortfolioPage;
