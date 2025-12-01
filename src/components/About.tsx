import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Award } from "lucide-react";
import volunteerImage from "@/assets/photo1.jpg";

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Every child, regardless of ability, deserves access to enriching sports programs."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting connections between volunteers, families, and youth participants."
  },
  {
    icon: Target,
    title: "Empowerment",
    description: "Through fencing, we help youth discover their inner strength and confidence."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to providing high-quality instruction in a safe, supportive environment."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our mission is to make the sport of fencing accessible, welcoming, and meaningful for neurodivergent youth. We strive to support athlete’s unique strengths and use fencing as a tool for confidence building and community. We believe every child deserves a place to train and grow alongside others, and here at Unbound Fencing we are committed to providing that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src={volunteerImage} 
              alt="Volunteer teaching fencing to youth" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              What We Do
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our volunteer instructors work one-on-one and in small groups with disabled youth ages 8-18, teaching the fundamentals of fencing in a welcoming, adaptive environment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
