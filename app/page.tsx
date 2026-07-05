import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return <main className="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
  </main>;
};

export default LandingPage;
