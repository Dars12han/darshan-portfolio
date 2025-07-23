import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
               Thank you for visiting!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="sm"
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-strong bg-accent hover:bg-accent-hover"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;