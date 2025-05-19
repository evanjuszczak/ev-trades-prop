
import EmailForm from "./EmailForm";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { useRef, useEffect } from "react";

const ResourceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  const handleSubmit = (email: string) => {
    // This would typically connect to your backend
    toast.success("Your payout tracker is on its way to your inbox!");
  };
  
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
    <section id="resources" className="container-section bg-accent/30" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1"
            ref={el => elementsRef.current[0] = el}
          >
            <h2 className="text-3xl font-bold mb-4">
              Get My Payout Tracker Template
            </h2>
            
            <p className="text-lg mb-6">
              Track your prop firm income like a pro. Free download when you drop your email.
            </p>
            
            <EmailForm 
              buttonText="Download Free Template" 
              onSubmit={handleSubmit}
            />
          </div>
          
          <div className="order-1 md:order-2 flex justify-center"
            ref={el => elementsRef.current[1] = el}
          >
            <Card className="w-full max-w-md p-4 shadow-lg border-2 border-evtrades-gold/20 animate-float">
              <div className="aspect-[4/3] bg-gradient-to-br from-evtrades-grey/50 to-evtrades-grey rounded-md flex flex-col items-center justify-center p-6">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-lg font-medium">Payout Tracker Template</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Track payouts, calculate profits, and analyze your performance
                </p>
              </div>
              
              <div className="mt-4 p-3 bg-evtrades-blue/5 dark:bg-evtrades-blue/20 rounded-md">
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-evtrades-gold" />
                    <span>Track multiple prop firms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-evtrades-gold" />
                    <span>Automatic profit calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-evtrades-gold" />
                    <span>Monthly performance graphs</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
