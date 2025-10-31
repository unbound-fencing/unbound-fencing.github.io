import { Shield, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-foreground">Unbound Fencing Initiative</span>
            </div>
            <p className="text-muted-foreground">
              Empowering neurodivergent youth through the transformative sport of fencing.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Volunteer
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:unboundfencing@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>unboundfencing@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by volunteers for volunteers
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Unbound Fencing Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
