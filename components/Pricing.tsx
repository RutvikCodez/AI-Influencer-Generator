import { CheckCircle2 } from "lucide-react";

import { pricingTiers } from "@/constants";
import { Badge } from "./ui/badge";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y border-border py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-5 justify-center items-center">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5">
            Pricing
          </Badge>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Simple Pricing
              <span className="block text-primary">
                Built to Scale With You
              </span>
            </h2>

            <p className="text-lg leading-8 text-muted-foreground">
              Start for free and upgrade only when you&apos;re ready. No hidden
              charges, no complicated pricing, and cancel anytime.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {[
              "14-day free trial",
              "No credit card required",
              "Cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Every plan includes secure cloud infrastructure, continuous feature
            updates, and access to our customer support team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
