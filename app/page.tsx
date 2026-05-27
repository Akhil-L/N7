import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { BankingSection } from "@/components/sections/BankingSection";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <BankingSection />
      <DigitalBankingSection />
      <InsightsSection />
      <CaseStudiesSection />
      <CTASection />
      <Footer />
    </main>
  );
}