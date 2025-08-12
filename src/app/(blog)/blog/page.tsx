import React from "react";
import { Metadata } from "next";
import BlogModern from "@/pages/blog/blog-modern";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | The X Media - SEO Tips, Marketing Insights & Industry News",
  description: "Stay ahead with The X Media's digital marketing blog. Expert insights on SEO, social media marketing, AI content creation, lead generation, and industry trends.",
  keywords: "digital marketing blog, SEO tips, marketing insights, social media marketing, AI content, lead generation, industry trends, The X Media blog",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Digital Marketing Blog | The X Media - SEO Tips, Marketing Insights & Industry News",
    description: "Stay ahead with expert insights on SEO, social media marketing, AI content creation, and industry trends.",
    url: 'https://thexmedia.com/blog',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Digital Marketing Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Marketing Blog | The X Media",
    description: "Stay ahead with expert insights on SEO, social media marketing, AI content creation, and industry trends.",
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

const BlogPage = () => {
  return (
    <BlogModern/>
  );
};

export default BlogPage;
