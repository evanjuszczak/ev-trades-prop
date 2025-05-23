import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface TrustSectionProps {
  id?: string;
}

const TrustSection = ({ id = "about" }: TrustSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) {
        el.classList.add("opacity-0");
        observer.observe(el);
      }
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id={id} className="container-section" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          ref={el => elementsRef.current[0] = el}
        >
          Why Trust Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p 
              className="text-lg mb-6"
              ref={el => elementsRef.current[1] = el}
            >
              I've been trading Forex for over <span className="highlight">5 years</span>, earned over <span className="highlight">$50,000</span> in payouts from prop firms, and share daily trading value with over <span className="highlight">14,000</span> followers on X.
            </p>
            
            <Card
              ref={el => elementsRef.current[2] = el}
              className="border-2 border-evtrades-gold/20 overflow-hidden"
            >
              <CardContent className="p-6">
                <blockquote className="text-xl italic">
                  "I've done it. Now I help others do it too."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-evtrades-blue text-white flex items-center justify-center font-bold">ET</div>
                  <div className="ml-3">
                    <p className="font-semibold">Ev Trades</p>
                    <p className="text-sm text-muted-foreground">@ev_trades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div 
            className="flex flex-col gap-4"
            ref={el => elementsRef.current[3] = el}
          >
            <div className="bg-evtrades-grey dark:bg-evtrades-darkgrey rounded-lg overflow-hidden shadow-lg h-auto flex items-center justify-center">
              <img 
                src="/lovable-uploads/40b3356d-1de9-41ab-9fe9-2afc009fe2f5.png" 
                alt="HyroTrader Payout Certificate for Evan Juszczak showing $949 total profit" 
                className="w-full h-full object-cover"
              />
            </div>
            <a 
              href="https://www.instagram.com/ev_trades" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center justify-center gap-2 text-center w-full md:w-auto md:ml-auto py-2"
              data-utm-source="instagram"
            >
              More Payouts <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
