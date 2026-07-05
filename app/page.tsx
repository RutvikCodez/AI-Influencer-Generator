import CardWrapper from "@/components/CardWrapper";
import CopyrightBar from "@/components/CopyrightBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { sections } from "@/constants";

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {sections.map((section) => {
        const SectionComponent = CardWrapper as React.ComponentType<
          typeof section
        >;
        return <SectionComponent key={section.title} {...section} />;
      })}
      <CopyrightBar />
    </main>
  );
};

export default LandingPage;
