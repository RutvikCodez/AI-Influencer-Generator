import { Badge } from "./ui/badge";

const   CardWrapper = <T,>({
  title,
  subtitle,
  description,
  bottomLine,
  data,
  Component,
  badge
}: CardWrapperProps<T>) => {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-5 items-center justify-center">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5">
            {badge}
          </Badge>

          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {title}
              <span className="block text-primary">{subtitle}</span>
            </h2>

            <p className="text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {data.map((item, index) => (
            <Component key={index} {...item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm leading-7 text-muted-foreground">
            {bottomLine}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardWrapper;
