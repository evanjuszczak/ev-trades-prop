
import { ArrowRight, Check } from "lucide-react";
import { useRef, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Click the button to go to HyroTrader",
    description: "Visit their website through my special affiliate link to ensure your discount is applied.",
  },
  {
    number: "02",
    title: "Use code YKZAL6F at checkout",
    description: "Enter my discount code during checkout to instantly save 5% off your purchase.",
  },
  {
    number: "03",
    title: "Purchase a challenge and start your journey",
    description: "Pick the account size that matches your goals and begin your funded trader journey today.",
  },
];

const GetStartedSteps = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === buttonRef.current) {
              entry.target.classList.add("animate-fade-in-up");
            } else {
              const index = stepsRef.current.findIndex(step => step === entry.target);
              setTimeout(() => {
                entry.target.classList.add("animate-fade-in-up");
              }, index * 200);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    stepsRef.current.forEach((step) => {
      if (step) {
        step.classList.add("opacity-0");
        observer.observe(step);
      }
    });
    
    if (buttonRef.current) {
      buttonRef.current.classList.add("opacity-0");
      observer.observe(buttonRef.current);
    }
    
    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);
  
  return (
    <section id="get-started" className="container-section" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How to Get Started
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Follow these simple steps to get funded and start trading with HyroTrader
        </p>
        
        <div className="space-y-12 md:space-y-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="flex flex-col md:flex-row gap-4 items-start"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-evtrades-blue text-white font-bold text-xl shrink-0">
                {step.number}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  {index === 1 && (
                    <span className="ml-2 bg-evtrades-gold text-evtrades-blue text-xs font-bold px-2 py-1 rounded-full">
                      SAVE 5%
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mt-1">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block h-6 w-px self-stretch bg-border mx-7"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            ref={buttonRef}
            href="#" 
            className="btn-primary text-lg inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              // Replace with actual affiliate link
              window.open('https://hyrotrader.com', '_blank');
            }}
          >
            Get Funded Now
            <ArrowRight className="h-5 w-5" />
          </a>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Remember to use code <span className="discount-code">YKZAL6F</span> at checkout
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;
