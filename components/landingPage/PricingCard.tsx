import { Check } from "lucide-react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const PricingCard = ({
  cta,
  description,
  features,
  price,
  period,
  name,
  popular,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        popular && "border-primary shadow-lg md:-translate-y-3",
      )}
    >
      {/* Popular Badge */}
      {popular && (
        <Badge className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full px-4 py-1">
          Most Popular
        </Badge>
      )}

      <CardHeader className={cn("flex flex-col gap-3", popular && "pt-14")}>
        <CardTitle className="text-2xl tracking-tight">{name}</CardTitle>
        <CardDescription className="leading-6">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-8">
        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold tracking-tight">{price}</span>
          <span className="pb-1 text-sm text-muted-foreground">{period}</span>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full"
          variant={popular ? "default" : "outline"}
        >
          {cta}
        </Button>

        <div className="h-px bg-border" />

        {/* Features */}
        <ul className="flex flex-1 flex-col gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border bg-muted">
                <Check className="size-3 text-primary" />
              </div>

              <span className="text-sm leading-6 text-muted-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
