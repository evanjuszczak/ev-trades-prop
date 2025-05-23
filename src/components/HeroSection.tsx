import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-white/5"></div>
      </div>
      
      <div className="container-section relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 opacity-0 animate-fade-in-up">
            HyroTrader Discount Code – <span className="text-evtrades-gold">YKZAL6F (5% Off)</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up animate-delay-300">
            I'm <a href="https://x.com/ev_trades" target="_blank" rel="noopener noreferrer" className="animated-underline">Ev Trades</a> — <span className="highlight">$50K+</span> in payouts, <span className="highlight">14K</span> followers on X, and <span className="highlight">5+</span> years trading experience.
          </p>
          
          <div className="mt-6 opacity-0 animate-fade-in-up animate-delay-300">
            <p className="text-lg mb-4">
              Use my exclusive HyroTrader promo code <span className="discount-code">YKZAL6F</span> to save 5% on any trading challenge. This verified discount code works in 2025 for all HyroTrader accounts.
            </p>
          </div>
          
          <div className="mt-10 opacity-0 animate-fade-in-up animate-delay-600">
            <a 
              href="https://app.hyrotrader.com/register/"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
              data-utm-source="hero_button"
            >
              Claim 5% Discount with Code YKZAL6F
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <div className="mt-6 text-sm text-white/80">
              Enter code <span className="discount-code">YKZAL6F</span> at checkout
            </div>
          </div>
          
          <div className="mt-8 text-sm opacity-0 animate-fade-in-up animate-delay-900">
            <a href="#benefits" className="text-white/80 hover:text-white mx-2">Benefits</a>
            <a href="#trusted-trader" className="text-white/80 hover:text-white mx-2">Proof of Payouts</a>
            <a href="#faq" className="text-white/80 hover:text-white mx-2">HyroTrader FAQ</a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" aria-hidden="true">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-background"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,96C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
