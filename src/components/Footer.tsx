
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="container-section pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-4 text-lg">
              Use code <span className="discount-code">YKZAL6F</span> for the best discount sitewide at HyroTrader.
            </p>
            
            <a
              href="#" 
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                // Replace with actual affiliate link
                window.open('https://hyrotrader.com', '_blank');
              }}
            >
              Get Funded Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ev Trades. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://twitter.com/ev_trades" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-evtrades-gold transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm hover:text-evtrades-gold transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm hover:text-evtrades-gold transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
