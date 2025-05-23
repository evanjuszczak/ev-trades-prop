import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="container-section bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          HyroTrader Discount Code FAQ
        </h2>
        
        <p className="text-center mb-10 text-lg">
          Common questions about using the <span className="highlight">YKZAL6F</span> discount code with HyroTrader
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent rounded-t-lg">
              <h3 className="text-left text-lg font-medium">What is the HyroTrader discount code?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              <p>The official HyroTrader discount code is <strong className="text-evtrades-gold">YKZAL6F</strong>. Using this code will give you 5% off any trading challenge at HyroTrader. This code has been verified and is active in 2025.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent rounded-t-lg">
              <h3 className="text-left text-lg font-medium">How do I use HyroTrader code YKZAL6F?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              <p>To use the HyroTrader discount code YKZAL6F:</p>
              <ol className="list-decimal ml-6 mt-2 space-y-1">
                <li>Visit the <a href="https://app.hyrotrader.com/register/" target="_blank" rel="noopener noreferrer" className="text-evtrades-blue underline">HyroTrader registration page</a></li>
                <li>Select your preferred trading challenge</li>
                <li>Enter code <strong className="text-evtrades-gold">YKZAL6F</strong> in the coupon field at checkout</li>
                <li>The 5% discount will be applied automatically to your order</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent rounded-t-lg">
              <h3 className="text-left text-lg font-medium">Who is Ev Trades?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              <p>Ev Trades is a successful Forex trader with over $50,000 in payouts from prop firms, more than 14,000 followers on X (Twitter), and 5+ years of trading experience. I provide this exclusive HyroTrader discount code to help other traders get funded.</p>
              <p className="mt-2">Follow me on <a href="https://x.com/ev_trades" target="_blank" rel="noopener noreferrer" className="text-evtrades-blue underline">X (Twitter)</a> or <a href="https://www.instagram.com/ev_trades" target="_blank" rel="noopener noreferrer" className="text-evtrades-blue underline">Instagram</a> for trading insights and proof of my HyroTrader payouts.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent rounded-t-lg">
              <h3 className="text-left text-lg font-medium">Is the code YKZAL6F still working in 2025?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              <p>Yes, the HyroTrader discount code YKZAL6F is valid and working throughout 2025. This is an evergreen code provided by HyroTrader for my followers. If you experience any issues with the code, please contact me directly via <a href="https://x.com/ev_trades" target="_blank" rel="noopener noreferrer" className="text-evtrades-blue underline">X (Twitter)</a>.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-border">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent rounded-t-lg">
              <h3 className="text-left text-lg font-medium">Why should I choose HyroTrader?</h3>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-muted-foreground">
              <p>HyroTrader is a leading prop trading firm that offers excellent trading conditions, fair evaluation processes, and reliable payouts. Key benefits include:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Competitive account sizes and reasonable profit targets</li>
                <li>Fast and reliable withdrawal process</li>
                <li>Professional trading platform and support</li>
                <li>5% discount with my code YKZAL6F</li>
              </ul>
              <p className="mt-2">I personally use HyroTrader and have received over $50,000 in payouts from their prop firm challenges.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-12 text-center">
          <a 
            href="https://app.hyrotrader.com/register/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
            data-utm-source="faq_cta"
          >
            Get 5% Off with Code YKZAL6F
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 