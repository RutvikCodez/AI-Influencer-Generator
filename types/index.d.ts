type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean
};

type CardWrapperProps<T> = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  bottomLine: string;
  data: T[];
  Component: ComponentType<T>;
}

type Section =
  | CardWrapperProps<FeatureCardProps>
  | CardWrapperProps<PricingCardProps>;
