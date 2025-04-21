import Nav from "@/components/shared/Nav";
import HeroSection from "./Home/HeroSection";
import PricingPlan from "./Plans/Plans";
import Skills from "./Skills/Skills";
import FAQSection from "./ FAQ/ FAQ";

export default function Home() {
  return (
    <main className="mx-auto">
      <Nav />
      <HeroSection />
      <PricingPlan />
      <Skills />
      <FAQSection id="#FQA" />
    </main>
  );
}
