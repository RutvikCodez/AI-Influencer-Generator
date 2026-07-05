import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import {
  ImageIcon,
  Video,
  MessageSquareText,
  Mic,
  UserCircle2,
  Shirt,
  Mail,
  Lock,
} from "lucide-react";
import z from "zod";

export const heroContent = [
  "Free 14-day trial",
  "No credit card",
  "Cancel anytime",
];

const features: FeatureCardProps[] = [
  {
    title: "AI Image Generation",
    description:
      "Generate stunning, photorealistic influencer images in seconds with Faux's advanced AI models.",
    icon: ImageIcon,
  },
  {
    title: "AI Video Generation",
    description:
      "Create engaging short-form videos with AI avatars speaking your script.",
    icon: Video,
  },
  {
    title: "AI Caption Generator",
    description:
      "Automatically generate engaging captions and hashtags optimized for engagement.",
    icon: MessageSquareText,
  },
  {
    title: "AI Voice Generator",
    description:
      "Synthesize natural-sounding voiceovers in 100+ languages and accents.",
    icon: Mic,
  },
  {
    title: "Personality Engine",
    description:
      "Define unique AI influencer personas with distinct speaking styles and values.",
    icon: UserCircle2,
  },
  {
    title: "AI Fashion Styling",
    description:
      "Intelligent outfit recommendations that match your brand and aesthetic.",
    icon: Shirt,
  },
];

const pricingTiers: PricingCardProps[] = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    description: "Perfect for creators just getting started with Faux",
    features: [
      "Up to 2 AI influencers",
      "100 images per month",
      "Basic analytics",
      "1 social platform integration",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "$499",
    period: "per month",
    description: "For growing businesses and agencies scaling with Faux",
    features: [
      "Unlimited AI influencers",
      "Unlimited content generation",
      "Advanced analytics",
      "All platform integrations",
      "Priority support",
      "Team collaboration (5 seats)",
      "Brand deal management",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large-scale AI influencer operations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited team seats",
      "SLA guarantee",
      "Advanced security",
      "White-label options",
    ],
    cta: "Contact Sales",
  },
];

export const sections: Section[] = [
  {
    badge: "Everything You Need",
    title: "Powerful Features",
    subtitle: "Built for Modern Creators",
    description:
      "Create, manage, automate, and scale your AI influencers from a single intelligent platform designed for speed, consistency, and growth.",
    bottomLine:
      "Faux is designed to help creators, agencies, and brands launch AI-powered influencer businesses with less manual work and more automation.",
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
      "Every Faux plan includes secure cloud infrastructure, continuous feature updates, and access to our customer support team.",
    data: pricingTiers,
    Component: PricingCard,
  },
];

export const signInFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(128, "Password must be at most 128 characters.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/\d/, "Password must contain at least one number.")
    .regex(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      "Password must contain at least one special character.",
    ),
});

export const signInFields = [
 {
    name: "email" as const,
    label: "Email Address",
    placeholder: "you@example.com",
    icon: Mail,
    type: "email",
  },
  {
    name: "password" as const,
    label: "Password",
    placeholder: "Enter your password",
    icon: Lock,
    type: "password",
  },
];

export const authFeatures = [
  "AI-powered content generation",
  "Professional influencer toolkit",
  "Secure cloud workspace",
];