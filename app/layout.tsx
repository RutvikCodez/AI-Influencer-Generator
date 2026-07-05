import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { generateOrganizationSchema, generateSoftwareApplicationSchema } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Faux - AI Influencer Generator | Build Virtual Influencers That Grow",
  description:
    "Faux is the AI-powered platform for creating fully virtual influencers, models, and content creators. Generate photorealistic images, videos, captions, and voices, then publish and scale across Instagram, TikTok, and more.",
  keywords:
    "Faux, AI influencer generator, virtual influencer, AI influencer, AI model generator, AI avatar, AI content creator, virtual model, AI TikTok creator, AI Instagram influencer, synthetic influencer, AI personality generator",
  generator: "v0.app",
  applicationName: "Faux",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Faux - Build Virtual Influencers That Actually Grow",
    description:
      "Create stunning AI influencers, generate unlimited content, and scale your social presence from one intelligent dashboard. Join creators and agencies already building with Faux.",
    type: "website",
    url: "https://faux-weld.vercel.app",
    locale: "en_IN",
    siteName: "Faux",
    images: [
      {
        url: "https://faux-weld.vercel.app/influencer.jpg",
        width: 1200,
        height: 630,
        alt: "Faux - AI Influencer Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faux - AI Influencer Generator",
    description:
      "Build virtual influencers that actually grow. Generate AI images, videos, captions, and voices from one platform.",
    creator: "@faux",
    images: ["https://faux-weld.vercel.app/influencer.jpg"],
  },
  alternates: {
    canonical: "https://faux-weld.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <head>
        <SchemaMarkup schema={generateOrganizationSchema()} />
        <SchemaMarkup schema={generateSoftwareApplicationSchema()} />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="theme-color" content="#141414" />
      </head>
      <body className={`${fontSans.variable} antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
