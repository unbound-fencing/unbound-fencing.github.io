import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const benefits = [
  "Comprehensive training in adaptive sports instruction",
  "Flexible scheduling - volunteer on your own time",
  "Make a lasting impact on youth development",
  "Join a supportive community of like-minded volunteers",
  "All equipment and training materials provided",
  "Opportunities for leadership and growth"
];

const SignUp = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join our team of dedicated volunteers and help empower the next generation of young fencers. No prior fencing experience required—just a passion for working with youth.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white text-foreground">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Why Volunteer With Us?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-lg mb-3">Time Commitment</h4>
              <p className="text-muted-foreground mb-2">
                We ask for a minimum commitment of 4 hours per month, with flexible scheduling options including evenings and weekends.
              </p>
              <p className="text-muted-foreground">
                Training sessions are provided monthly, and you'll always have the support of experienced coaches.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="text-lg bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 shadow-lg"
                onClick={() => window.open('https://forms.google.com', '_blank')}
              >
                Complete Volunteer Application
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Application takes about 5 minutes to complete
              </p>
            </div>
          </Card>

          <div className="text-center mt-8 text-white/80">
            <p className="mb-2">Questions? We'd love to hear from you!</p>
            <a 
              href="mailto:volunteer@engardeforall.org" 
              className="font-semibold hover:text-white transition-colors underline"
            >
              volunteer@engardeforall.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
