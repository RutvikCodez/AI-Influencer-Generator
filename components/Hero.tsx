import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { heroContent } from "@/constants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-112 w-md -translate-x-1/2 rounded-full bg-muted blur-3xl opacity-60" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1.5 font-medium flex gap-2"
            >
              <Sparkles className="size-4" />
              AI Influencer Platform
            </Badge>

            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Build Virtual
                <br />
                Influencers That
                <br />
                Actually Grow
              </h1>

              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                Create stunning AI influencers, generate content, schedule
                posts, and scale your social presence from one intelligent
                dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/" className="flex gap-2">
                  Start Free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              {heroContent.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Background Card */}
            <Card className="overflow-hidden rounded-3xl border shadow-2xl">
              <div className="relative aspect-4/5">
                <Image
                  src="/logo.jpg"
                  alt="AI Influencer"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </Card>

            {/* Floating Card */}
            <Card className="absolute -left-10 top-10 hidden w-52 p-4 lg:flex shadow-xl  flex-col gap-2">
              <div className=" flex flex-col gap-1">
                <p className="text-xs text-muted-foreground">Monthly Growth</p>

                <h3 className="text-2xl font-bold">+247%</h3>
              </div>

              <p className="text-xs text-muted-foreground">
                Followers increased automatically using AI content generation.
              </p>
            </Card>

            {/* Floating Bottom */}
            <Card className="absolute -bottom-8 -right-8 hidden w-64 p-5 lg:block shadow-xl">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">Today&apos;s Generation</p>

                <div className=" flex flex-col gap-1 text-sm text-muted-foreground">
                  <p>✓ 18 Images</p>
                  <p>✓ 7 Captions</p>
                  <p>✓ 5 Reels</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
