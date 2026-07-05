import { features } from "@/constants";
import { Badge } from "./ui/badge";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-y border-border py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-5 rounded-full px-4 py-1.5"
          >
            Everything You Need
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Powerful Features
            <span className="block text-primary">
              Built for Modern Creators
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Create, manage, automate, and scale your AI influencers from a
            single intelligent platform designed for speed, consistency, and
            growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-7 text-muted-foreground">
            Designed to help creators, agencies, and brands launch AI-powered
            influencer businesses with less manual work and more automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;