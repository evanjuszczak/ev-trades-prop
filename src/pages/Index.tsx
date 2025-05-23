import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BenefitCards from "@/components/BenefitCards";
import GetStartedSteps from "@/components/GetStartedSteps";
import ServerAccessSection from "@/components/ServerAccessSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Update page title for SEO
  useEffect(() => {
    document.title = "HyroTrader Discount Code (2025) – Use Code YKZAL6F for 5% Off | EvTrades";
    
    // Add canonical URL for SEO
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://prop.evtrades.com/';
    document.head.appendChild(canonical);

    // Clean up
    return () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.remove();
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustSection id="trusted-trader" />
        <BenefitCards id="benefits" />
        <GetStartedSteps />
        <FAQSection />
        <ServerAccessSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
