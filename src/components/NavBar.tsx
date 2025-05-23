import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isBlogPage = location.pathname === "/hyrotrader-discount-code";

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
          <Link to="/" className="text-xl font-bold hover:text-evtrades-gold transition-colors">
            Ev Trades
          </Link>
          <span className="hidden sm:inline-flex items-center bg-evtrades-blue text-sm text-white dark:bg-evtrades-gold dark:text-evtrades-blue px-2 py-1 rounded font-medium">
            Forex Trader
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Navigation Links - Now visible on all screen sizes */}
          <div className="flex items-center gap-4 mr-2">
            {isHomePage && (
              <Link 
                to="/hyrotrader-discount-code" 
                className="text-sm font-medium hover:text-evtrades-gold transition-colors flex items-center gap-1"
                aria-label="View Blog Post"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Blog Post</span>
              </Link>
            )}
            {isBlogPage && (
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-evtrades-gold transition-colors flex items-center gap-1"
                aria-label="Go to Home Page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-1 bg-black/5 dark:bg-white/10 rounded-md px-3 py-1.5">
            <span className="text-sm font-medium mr-1">Code:</span>
            <span className="discount-code">YKZAL6F</span>
          </div>
          <DarkModeToggle />
          <a 
            href={isHomePage ? "#get-started" : "https://www.hyrotrader.com/start-trading/?coupon=ykzal6f&src=ChallengeBuy"} 
            target={isHomePage ? "" : "_blank"} 
            rel={isHomePage ? "" : "noopener noreferrer"}
            className="btn-primary hidden md:inline-block"
            data-utm-source="navbar_cta"
          >
            Get Funded
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
