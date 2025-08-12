import React from "react";
import { Metadata } from "next";
import FaqMain from "@/pages/faq/faq-main";

export const metadata: Metadata = {
  title: "FAQ - Digital Marketing Questions | The X Media",
  description: "Find answers to common questions about digital marketing, SEO, AI content creation, and The X Media's services. Get expert insights on growing your business online.",
  keywords: "digital marketing FAQ, SEO questions, AI content FAQ, marketing agency questions, business growth FAQ, The X Media FAQ",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "FAQ - Digital Marketing Questions | The X Media",
    description: "Find answers to common questions about digital marketing, SEO, AI content creation, and growing your business online.",
    url: 'https://thexmedia.com/faq',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media FAQ - Digital Marketing Questions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ - Digital Marketing Questions | The X Media",
    description: "Find answers to common questions about digital marketing, SEO, AI content creation, and growing your business online.",
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

const FaqPage = () => {
  return (
    <FaqMain/>
  );
};

export default FaqPage;
