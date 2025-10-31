import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const SignUp = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-white/90 leading-relaxed font-bold">
              Join our program
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-lg bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 shadow-lg"
              onClick={() => window.open('https://forms.google.com', '_blank')}
            >
              Sign Up 
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="text-center mt-8 text-white/80">
            <p className="mb-2">Questions? We'd love to hear from you!</p>
            <a 
              href="mailto:unboundfencing@gmail.com" 
              className="font-semibold hover:text-white transition-colors underline"
            >
              unboundfencing@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;