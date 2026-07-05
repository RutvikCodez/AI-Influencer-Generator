import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";

const LandingPage = () => {
  return <main className="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
  </main>;
};

export default LandingPage;
