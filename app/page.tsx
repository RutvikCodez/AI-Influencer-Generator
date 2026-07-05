import CardWrapper from "@/components/CardWrapper";
import CopyrightBar from "@/components/CopyrightBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { sections } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faux | AI Influencer Generator - Build Virtual Influencers That Grow",
  description:
    "Faux is the AI platform for creating fully virtual influencers. Generate photorealistic images, videos, captions, and voices, then publish and scale across Instagram, TikTok, and more.",
  keywords:
    "Faux, AI influencer generator, virtual influencer, AI influencer, AI model generator, AI avatar, AI content creator, virtual model",
  openGraph: {
    title: "Faux - Build Virtual Influencers That Actually Grow",
    description:
      "Create stunning AI influencers, generate unlimited content, and scale your social presence from one intelligent dashboard.",
    type: "website",
    url: "https://faux-weld.vercel.app",
    locale: "en_US",
    images: [
      {
        url: "https://faux-weld.vercel.app/influencer.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {sections.map((section) => {
        const SectionComponent = CardWrapper as React.ComponentType<
          typeof section
        >;
        return <SectionComponent key={section.title} {...section} />;
      })}
      <CopyrightBar />
    </main>
  );
};

export default LandingPage;
