import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity"
          >
            <span>Unbound Fencing Initiative</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Our Team
            </button>
            <Button 
              onClick={() => scrollToSection('signup')}
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80"
            >
              Sign Up Now
            </Button>
          </div>

          <Button 
            onClick={() => scrollToSection('signup')}
            className="md:hidden bg-gradient-to-r from-accent to-accent/90"
            size="sm"
          >
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
