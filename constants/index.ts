import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import { Home } from "lucide-react";

export const heroContent = [
  "Free 14-day trial",
  "No credit card",
  "Cancel anytime",
];

const features: FeatureCardProps[] = [
  {
    title: "AI Image Generation",
    description:
      "Generate stunning, photorealistic influencer images in seconds with advanced AI models.",
    icon: Home,
  },
  {
    title: "AI Video Generation",
    description:
      "Create engaging short-form videos with AI avatars speaking your script.",
    icon: Home,
  },
  {
    title: "AI Caption Generator",
    description:
      "Automatically generate engaging captions and hashtags optimized for engagement.",
    icon: Home,
  },
  {
    title: "AI Voice Generator",
    description:
      "Synthesize natural-sounding voiceovers in 100+ languages and accents.",
    icon: Home,
  },
  {
    title: "Personality Engine",
    description:
      "Define unique AI influencer personas with distinct speaking styles and values.",
    icon: Home,
  },
  {
    title: "AI Fashion Styling",
    description:
      "Intelligent outfit recommendations that match your brand and aesthetic.",
    icon: Home,
  },
];

const pricingTiers: PricingCardProps[] = [
  {
    name: 'Starter',
    price: '$99',
    period: 'per month',
    description: 'Perfect for creators just getting started',
    features: [
      'Up to 2 AI influencers',
      '100 images per month',
      'Basic analytics',
      '1 social platform integration',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Pro',
    price: '$499',
    period: 'per month',
    description: 'For growing businesses and agencies',
    features: [
      'Unlimited AI influencers',
      'Unlimited content generation',
      'Advanced analytics',
      'All platform integrations',
      'Priority support',
      'Team collaboration (5 seats)',
      'Brand deal management',
      'API access',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale operations',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'Unlimited team seats',
      'SLA guarantee',
      'Advanced security',
      'White-label options',
    ],
    cta: 'Contact Sales',
  },
]

export const sections: Section[] = [
  {
    badge: "Everything You Need",
    title: "Powerful Features",
    subtitle: "Built for Modern Creators",
    description:
      "Create, manage, automate, and scale your AI influencers from a single intelligent platform designed for speed, consistency, and growth.",
    bottomLine:
      "Designed to help creators, agencies, and brands launch AI-powered influencer businesses with less manual work and more automation.",
    data: features,
    Component: FeatureCard,
  },
  {
    badge: "Pricing",
    title: "Simple Pricing",
    subtitle: "Built to Scale With You",
    description:
      "Start for free and upgrade only when you're ready. No hidden charges, no complicated pricing, and cancel anytime.",
    bottomLine:
      "Every plan includes secure cloud infrastructure, continuous feature updates, and access to our customer support team.",
    data: pricingTiers,
    Component: PricingCard,
  },
]
