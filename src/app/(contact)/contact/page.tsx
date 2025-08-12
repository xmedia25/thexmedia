import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "Contact The X Media | Digital Marketing Agency in Mississauga, Toronto",
  description: "Ready to grow your business? Contact The X Media today. Get a free consultation for your digital marketing needs. Call +1 437 263 5601 or email contact@thexmedia.com",
  keywords: "contact The X Media, digital marketing consultation, Mississauga marketing agency, Toronto marketing services, free consultation, get quote",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact The X Media | Digital Marketing Agency in Mississauga, Toronto",
    description: "Ready to grow your business? Get a free consultation for your digital marketing needs. Call +1 437 263 5601 or email contact@thexmedia.com",
    url: 'https://thexmedia.com/contact',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact The X Media - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact The X Media | Digital Marketing Agency",
    description: "Ready to grow your business? Get a free consultation for your digital marketing needs.",
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

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
