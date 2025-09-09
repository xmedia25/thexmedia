import React from "react";
import { Metadata } from "next";
import AboutMain from "@/pages/about/about-us";
import StructuredData from "@/components/structured-data";
import AdvancedSEO from "@/components/seo/advanced-seo";

export const metadata: Metadata = {
  title: "About The X Media | Leading Digital Marketing Agency for Service Professionals",
  description: "Learn about The X Media's mission to help service professionals grow their businesses through expert digital marketing, SEO, AI content creation, and lead generation strategies.",
  keywords: "about The X Media, digital marketing agency, service professionals marketing, company story, team, mission, vision, values, expertise, experience, digital marketing experts, SEO specialists, content creators",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: "About The X Media | Leading Digital Marketing Agency for Service Professionals",
    description: "Learn about our mission to help service professionals grow their businesses through expert digital marketing, SEO, and lead generation strategies.",
    url: 'https://thexmedia.com/about-us',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'About The X Media - Digital Marketing Agency Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About The X Media | Digital Marketing Agency",
    description: "Learn about our mission to help service professionals grow through expert digital marketing strategies.",
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

const AboutUsPage = () => {
  return (
    <>
      <AdvancedSEO page="about" />
      <StructuredData type="organization" data={{
        name: "The X Media",
        description: "Leading digital marketing agency specializing in helping service professionals grow their businesses through expert SEO, AI content creation, and lead generation.",
        url: "https://thexmedia.com",
        logo: "https://thexmedia.com/assets/img/logo/logo.png",
        foundingDate: "2020",
        address: "Mississauga, Ontario, Canada"
      }} />
      <AboutMain />
    </>
  );
};

export default AboutUsPage;
