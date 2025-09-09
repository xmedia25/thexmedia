import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Contact The X Media | Get Your Free Digital Marketing Consultation",
  description: "Ready to grow your business? Contact The X Media for a free consultation. Expert digital marketing services for realtors, lawyers, mortgage agents, and service professionals.",
  keywords: "contact The X Media, free consultation, digital marketing consultation, get in touch, contact form, phone consultation, email marketing, business growth consultation, realtor marketing consultation, lawyer marketing help",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact The X Media | Get Your Free Digital Marketing Consultation",
    description: "Ready to grow your business? Contact The X Media for a free consultation. Expert digital marketing services for service professionals.",
    url: 'https://thexmedia.com/contact',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact The X Media - Free Digital Marketing Consultation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact The X Media | Free Digital Marketing Consultation",
    description: "Ready to grow your business? Contact us for a free consultation on digital marketing services.",
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
    <>
      <StructuredData type="contact" data={{
        name: "The X Media Contact",
        description: "Contact The X Media for expert digital marketing services and free consultation.",
        telephone: "+1-647-951-3509",
        email: "info@thexmedia.com",
        address: "Mississauga, Ontario, Canada"
      }} />
      <ContactMain/>
    </>
  );
};

export default ContactPage;
