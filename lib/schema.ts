export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Faux",
    url: "https://faux-weld.vercel.app",
    logo: "https://faux-weld.vercel.app/icon.png",
    description:
      "AI-powered platform for creating fully virtual influencers, models, and content creators, with generated images, videos, captions, and voices.",
    sameAs: [
      // add your real social profiles here, e.g.:
      // "https://www.linkedin.com/company/faux/",
      // "https://twitter.com/usefaux",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@faux-weld.vercel.app",
      availableLanguage: ["en"],
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Faux",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    image: "https://faux-weld.vercel.app/icon.svg",
    description:
      "Faux is an AI-powered platform for creating fully virtual influencers, models, and content creators. Generate photorealistic images, videos, captions, and voices, then publish and scale across Instagram, TikTok, and more.",
    url: "https://faux-weld.vercel.app",
    offers: {
      "@type": "Offer",
      price: "99",
      priceCurrency: "USD",
      description: "Starter plan pricing, billed monthly",
    },
  };
}