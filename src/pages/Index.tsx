
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BenefitCards from "@/components/BenefitCards";
import GetStartedSteps from "@/components/GetStartedSteps";
import ServerAccessSection from "@/components/ServerAccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "Ev Trades | Get Funded with HyroTrader";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustSection />
        <BenefitCards />
        <GetStartedSteps />
        <ServerAccessSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
