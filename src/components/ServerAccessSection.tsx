
import EmailForm from "./EmailForm";
import { toast } from "sonner";
import { useRef, useEffect } from "react";

const ServerAccessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
  const handleSubmit = (email: string) => {
    // This would typically connect to your backend
    toast.success("Thanks! We'll send your server invitation shortly.");
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
    <section id="premium-server" className="gradient-bg text-white" ref={sectionRef}>
      <div className="container-section max-w-4xl mx-auto">
        <div className="text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            ref={el => elementsRef.current[0] = el}
          >
            Want Help Passing Your Challenge?
          </h2>
          
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto"
            ref={el => elementsRef.current[1] = el}
          >
            When you use my code to purchase any challenge, I'll invite you to my private premium server where I give personal help, strategy breakdowns, and challenge-passing support.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20"
            ref={el => elementsRef.current[2] = el}
          >
            <h3 className="text-xl font-semibold mb-3">
              Join the Premium Community
            </h3>
            
            <p className="mb-6 text-white/80">
              Just DM me or submit your email below once you've purchased using my code.
            </p>
            
            <EmailForm 
              buttonText="Get Invited" 
              placeholder="Purchased? Enter your email to get invited"
              onSubmit={handleSubmit}
              variant="premium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerAccessSection;
