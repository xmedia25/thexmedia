import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "About The X Media | Leading Digital Marketing Agency in Mississauga, Toronto",
  description: "Learn about The X Media, a leading digital marketing agency in Mississauga, Toronto. Discover our mission, team, and proven strategies that help businesses grow and succeed.",
  keywords: "about The X Media, digital marketing agency Mississauga, Toronto marketing agency, company history, team, mission, digital marketing experts",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: "About The X Media | Leading Digital Marketing Agency in Mississauga, Toronto",
    description: "Learn about our mission, team, and proven strategies that help businesses grow and succeed in the digital world.",
    url: 'https://thexmedia.com/about-us',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'About The X Media - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About The X Media | Leading Digital Marketing Agency",
    description: "Learn about our mission, team, and proven strategies that help businesses grow and succeed.",
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
    <AboutUsMain/>
  );
};

export default AboutUsPage;
