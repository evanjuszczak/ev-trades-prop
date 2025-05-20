
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const referralLink = "https://www.hyrotrader.com/start-trading/?coupon=ykzal6f&src=ChallengeBuy";
  
  return (
    <footer>
      <div className="container-section pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="mb-4 text-lg">
              Use code <span className="discount-code">YKZAL6F</span> for the best discount sitewide at HyroTrader.
            </p>
            
            <a
              href={referralLink}
              className="btn-primary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
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
              
              <Dialog>
                <DialogTrigger className="text-sm hover:text-evtrades-gold transition-colors">
                  Privacy
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p>This Privacy Policy explains how Ev Trades ("we", "us", or "our") collects, uses, and discloses your information when you visit our website or use our services.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Information We Collect</h3>
                    <p>We collect information that you provide directly to us, such as when you fill out forms or communicate with us. This may include your name, email address, and any other information you choose to provide.</p>
                    
                    <h3 className="font-bold text-lg mt-4">How We Use Your Information</h3>
                    <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to send you marketing materials when permitted.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Data Security</h3>
                    <p>We implement appropriate security measures to protect your personal information.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Changes to This Privacy Policy</h3>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
                    
                    <p className="text-sm text-muted-foreground mt-4">Last updated: May 20, 2025</p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger className="text-sm hover:text-evtrades-gold transition-colors">
                  Terms
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-4">Terms of Service</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p>By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Use License</h3>
                    <p>Permission is granted to temporarily view the materials on Ev Trades's website for personal, non-commercial use only.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Disclaimer</h3>
                    <p>The materials on Ev Trades's website are provided on an 'as is' basis. Ev Trades makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Limitations</h3>
                    <p>In no event shall Ev Trades or its suppliers be liable for any damages arising out of the use or inability to use the materials on Ev Trades's website.</p>
                    
                    <h3 className="font-bold text-lg mt-4">Affiliate Disclosure</h3>
                    <p>This website contains affiliate links. If you purchase products through these links, I may earn a commission at no additional cost to you.</p>
                    
                    <p className="text-sm text-muted-foreground mt-4">Last updated: May 20, 2025</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
