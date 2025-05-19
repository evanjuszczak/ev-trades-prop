
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-background/95 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Ev Trades</span>
          <span className="hidden sm:inline-flex items-center bg-evtrades-blue text-sm text-white dark:bg-evtrades-gold dark:text-evtrades-blue px-2 py-1 rounded font-medium">
            Forex Trader
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 bg-black/5 dark:bg-white/10 rounded-md px-3 py-1.5">
            <span className="text-sm font-medium mr-1">Code:</span>
            <span className="discount-code">YKZAL6F</span>
          </div>
          <DarkModeToggle />
          <a href="#get-started" className="btn-primary hidden md:inline-block">
            Get Funded
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
