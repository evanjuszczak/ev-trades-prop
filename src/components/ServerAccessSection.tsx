
import { toast } from "sonner";
import { useRef, useEffect } from "react";
import { X, Discord } from "lucide-react";

const ServerAccessSection = () => {
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
              Connect with me once you've purchased using my code. Send me a DM on X or join my Discord server.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://twitter.com/ev_trades" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 text-white py-3 px-6 rounded-md transition-all duration-300"
                onClick={() => toast.success("Opening X profile")}
              >
                <X className="h-5 w-5" /> Message on X
              </a>
              
              <a 
                href="https://discord.gg/evtrades" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 rounded-md transition-all duration-300"
                onClick={() => toast.success("Opening Discord server")}
              >
                <Discord className="h-5 w-5" /> Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerAccessSection;
