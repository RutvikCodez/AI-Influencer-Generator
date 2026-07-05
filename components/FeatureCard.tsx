import { Card, CardContent } from "./ui/card";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) => {
  return (
    <Card className="group relative h-full overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Decorative background */}
      <div className="absolute inset-x-0 top-0 h-1 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

      <CardContent className="flex h-full flex-col gap-6 p-8">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-muted transition-all duration-300 group-hover:scale-105">
          <Icon
            className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-6"
            strokeWidth={1.8}
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>

          <p className="text-sm leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          <span>Learn more</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;