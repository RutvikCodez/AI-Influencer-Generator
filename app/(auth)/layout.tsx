import { authFeatures } from "@/constants";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";
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
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl border bg-card">
                  <Sparkles className="size-5" />
                </div>

                <div>
                  <h2 className="font-semibold text-lg">Faux</h2>
                  <p className="text-sm text-muted-foreground">
                    AI Recruitment Platform
                  </p>
                </div>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-5">
                <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm w-fit">
                  <Zap className="size-4" />
                  AI Powered Platform
                </span>

                <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight">
                  Create your next AI workflow with confidence.
                </h1>

                <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
                  Build AI-powered resumes, interview preparation, recruitment
                  workflows and career insights from one beautifully designed
                  platform.
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
