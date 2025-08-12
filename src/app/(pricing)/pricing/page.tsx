import React from "react";
import { Metadata } from "next";
import PricingMain from "@/pages/pricing/pricing-main";

export const metadata: Metadata = {
  title: "Digital Marketing Pricing & Packages | The X Media - Transparent Pricing",
  description: "View The X Media's transparent digital marketing pricing and packages. Get expert SEO, AI content creation, and marketing services at competitive rates. Request a custom quote today.",
  keywords: "digital marketing pricing, SEO packages, marketing agency pricing, AI content pricing, transparent pricing, custom quotes, The X Media pricing",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: "Digital Marketing Pricing & Packages | The X Media - Transparent Pricing",
    description: "View our transparent digital marketing pricing and packages. Get expert SEO, AI content creation, and marketing services at competitive rates.",
    url: 'https://thexmedia.com/pricing',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Digital Marketing Pricing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Marketing Pricing & Packages | The X Media",
    description: "View our transparent digital marketing pricing and packages. Get expert services at competitive rates.",
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

const PricingPage = () => {
  return (
    <PricingMain/>
  );
};

export default PricingPage;
