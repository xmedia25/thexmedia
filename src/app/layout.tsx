import type { Metadata } from "next";
import {
  Syne,
  Aladin,
  Big_Shoulders_Display,
  Marcellus,
} from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.scss";

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
  title: "The X Media - Digital Marketing Agency & Portfolio Next js Template",
  description: "The X Media is a leading digital marketing agency specializing in creative solutions, web design, SEO, social media marketing, and brand development. Transform your business with our innovative digital strategies.",
  keywords: "digital marketing, web design, SEO, social media marketing, brand development, creative agency, marketing solutions, The X Media",
  authors: [{ name: "The X Media Team" }],
  creator: "The X Media",
  publisher: "The X Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://thexmedia.com'),
  alternates: {
    canonical: '/',
  },
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable} ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable} ${syne.variable} ${big_shoulders.variable} ${marcellus.variable}`}
      >
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
