import { Badge } from "@/components/ui/badge";
import { authFeatures } from "@/constants";
import { ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-muted blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-muted blur-3xl opacity-50" />
      </div>

      <section className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        {/* Left Side */}
        <aside className="hidden lg:flex">
          <div className="flex w-full flex-col justify-between p-12">
            <div className="flex flex-col gap-10">
              {/* Logo */}
              <Link href="/" className="group flex items-center gap-3">
                <Image alt="Faux" src={"/icon.png"} width={40} height={40} />

                <div className="hidden sm:flex sm:flex-col">
                  <span className="font-semibold tracking-tight">Faux</span>

                  <span className="text-xs text-muted-foreground">
                    AI Influencer Generator
                  </span>
                </div>
              </Link>

              {/* Heading */}
              <div className="flex flex-col gap-5">
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 font-medium flex gap-2"
                >
                  <Zap className="size-4" />
                  Introducing Faux
                </Badge>

                <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight">
                  Build virtual influencers that actually grow.
                </h1>

                <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
                  Generate AI images, videos, captions, and voices for your
                  virtual influencers, then publish and scale across every
                  platform from one dashboard.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-4">
                {authFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <ShieldCheck className="size-5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
