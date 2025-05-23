import { DollarSign, Clock, CheckCircle, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect } from "react";

const benefits = [
  {
    title: "Fast Payouts",
    description: "Get your profits quickly with HyroTrader's efficient payout system. No long waiting periods.",
    icon: Clock,
  },
  {
    title: "Easy-to-follow Rules",
    description: "Simple, fair trading rules that make sense and help you succeed as a funded trader.",
    icon: CheckCircle,
  },
  {
    title: "Exclusive 5% Discount",
    description: "Save 5% instantly when you use my discount code YKZAL6F at checkout on any HyroTrader challenge.",
    icon: DollarSign,
  },
  {
    title: "Verified Results",
    description: "I've personally earned over $50,000 in payouts using the same HyroTrader accounts available to you.",
    icon: Award,
  }
];

interface BenefitCardsProps {
  id?: string;
}

const BenefitCards = ({ id = "benefits" }: BenefitCardsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    cardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add("opacity-0");
        observer.observe(card);
      }
    });
    
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  return (
    <section id={id} className="container-section bg-accent/50">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Benefits of Using HyroTrader Discount Code
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Get the most out of your trading journey with code <span className="font-bold text-evtrades-gold">YKZAL6F</span> for 5% off any HyroTrader challenge
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="border-2 transition-all duration-300 hover:shadow-md hover:border-evtrades-gold/30"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-evtrades-gold" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://app.hyrotrader.com/register/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary inline-flex items-center gap-2 px-10"
            data-utm-source="benefits_cta"
          >
            Use Code YKZAL6F <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;
