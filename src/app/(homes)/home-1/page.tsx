import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-1";

export const metadata: Metadata = {
  title: "The X Media - Leading Digital Marketing Agency | SEO, Web Design & Brand Development",
  description: "Transform your business with The X Media's proven digital marketing strategies. Expert SEO, web design, social media marketing, and AI content creation. Get more leads, traffic, and sales.",
  keywords: "digital marketing agency, SEO services, web design, social media marketing, AI content creation, brand development, lead generation, The X Media, Mississauga, Toronto, Canada",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The X Media - Leading Digital Marketing Agency | SEO, Web Design & Brand Development",
    description: "Transform your business with The X Media's proven digital marketing strategies. Expert SEO, web design, social media marketing, and AI content creation.",
    url: 'https://thexmedia.com',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The X Media - Leading Digital Marketing Agency",
    description: "Transform your business with proven digital marketing strategies. Expert SEO, web design, and AI content creation.",
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

const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
