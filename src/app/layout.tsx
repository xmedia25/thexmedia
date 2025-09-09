import React from "react";
import { Metadata } from "next";
import {
  Syne,
  Syne as Syne_body,
  Syne as Syne_heading,
} from "next/font/google";
import { Aladin, Big_Shoulders_Display, Marcellus } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.scss";
import "./skeleton-loading.css";
import StructuredData from "@/components/structured-data";
import BackToTop from "@/components/back-to-top";
import SEOMonitor from "@/components/seo/seo-monitor";

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
const big_shoulders = Big_Shoulders_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-shoulders",
});
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  title: {
    default: "The X Media - Leading Digital Marketing Agency | SEO, Web Design & Brand Development",
    template: "%s | The X Media - Digital Marketing Agency"
  },
  description: "Transform your business with The X Media's proven digital marketing strategies. Expert SEO for service professionals, AI content creation, lead generation, and brand development services in Mississauga, Toronto, Ontario.",
  keywords: "digital marketing agency, SEO services, AI content creation, lead generation, web design, brand development, social media marketing, business consultancy, performance marketing, Mississauga, Toronto, Ontario, Canada, realtors, mortgage agents, lawyers, CAs, local service businesses, viral content, automation, CRM integration",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  category: "Digital Marketing",
  classification: "Business Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://thexmedia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-CA': '/en-CA',
    },
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "The X Media - Digital Marketing Agency & Creative Solutions",
    description: "Transform your business with our innovative digital marketing strategies. Expert web design, SEO, social media marketing, and brand development services.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://thexmedia.com',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'The X Media',
    images: [
      {
        url: '/og-image.jpg',
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
    title: "The X Media - Digital Marketing Agency",
    description: "Transform your business with our innovative digital marketing strategies and creative solutions.",
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'The X Media',
    'application-name': 'The X Media',
    'mobile-web-app-capable': 'yes',
    'msapplication-starturl': '/',
    'msapplication-tap-highlight': 'no',
    'format-detection': 'telephone=no',
    'HandheldFriendly': 'true',
    'MobileOptimized': '320',
    'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
    'referrer': 'origin-when-cross-origin',
    'color-scheme': 'dark light',
    'supported-color-schemes': 'dark light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="dark light" />
        <meta name="supported-color-schemes" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" href="/assets/img/logo/logo.png" as="image" type="image/png" />
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <StructuredData type="localbusiness" />
      </head>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="dark">{children} <BackToTop />{/* <SEOMonitor /> */}</ThemeProvider>
        
      </body>
    </html>
  );
}
