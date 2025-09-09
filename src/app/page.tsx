import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "The X Media - Leading Digital Marketing Agency | SEO, Web Design & Brand Development",
  description: "Transform your business with The X Media's proven digital marketing strategies. Expert SEO, AI content creation, lead generation, and brand development services in Mississauga, Toronto.",
  keywords: "digital marketing agency, SEO services, AI content creation, lead generation, web design, brand development, Mississauga, Toronto, Ontario, Canada",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The X Media - Leading Digital Marketing Agency | SEO, Web Design & Brand Development",
    description: "Transform your business with proven digital marketing strategies. Expert SEO, AI content creation, lead generation, and brand development services.",
    url: 'https://thexmedia.com',
    siteName: 'The X Media',
    images: [
      {
        url: '/assets/img/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'The X Media - Leading Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The X Media - Leading Digital Marketing Agency",
    description: "Transform your business with proven digital marketing strategies. Expert SEO, AI content creation, and lead generation services.",
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

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
