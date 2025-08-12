import React from "react";
import { Metadata } from "next";
import AiContentMain from "@/pages/ai-content/ai-content-main";

export const metadata: Metadata = {
  title: "AI Content Creation Services | The X Media - Viral Content & Voice Cloning",
  description: "Scale your content with The X Media's AI content creation services. Generate viral content at scale using AI-powered avatars and voice cloning. Shoot once, scale forever.",
  keywords: "AI content creation, viral content, AI avatars, voice cloning, content scaling, social media content, AI marketing, The X Media AI services",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/ai-content',
  },
  openGraph: {
    title: "AI Content Creation Services | The X Media - Viral Content & Voice Cloning",
    description: "Scale your content with AI-powered avatars and voice cloning. Generate viral content at scale - shoot once, scale forever.",
    url: 'https://thexmedia.com/ai-content',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media AI Content Creation Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Content Creation Services | The X Media",
    description: "Scale your content with AI-powered avatars and voice cloning. Generate viral content at scale.",
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

const AiContentPage = () => {
  return (
    <AiContentMain/>
  );
};

export default AiContentPage;
