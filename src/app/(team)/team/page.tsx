import React from "react";
import { Metadata } from "next";
import TeamMain from "@/pages/team/team";

export const metadata: Metadata = {
  title: "Meet Our Team | The X Media - Digital Marketing Experts in Mississauga, Toronto",
  description: "Meet The X Media's expert digital marketing team. Our experienced professionals in Mississauga and Toronto specialize in SEO, AI content, social media, and lead generation.",
  keywords: "The X Media team, digital marketing experts, SEO specialists, AI content creators, marketing professionals, Mississauga team, Toronto marketing experts",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: "Meet Our Team | The X Media - Digital Marketing Experts in Mississauga, Toronto",
    description: "Meet our expert digital marketing team. Experienced professionals specializing in SEO, AI content, social media, and lead generation.",
    url: 'https://thexmedia.com/team',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media Team - Digital Marketing Experts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Meet Our Team | The X Media - Digital Marketing Experts",
    description: "Meet our expert digital marketing team. Experienced professionals specializing in SEO, AI content, and lead generation.",
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

const TeamPage = () => {
  return (
    <TeamMain/>
  );
};

export default TeamPage;
