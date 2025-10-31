import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import levHeadshot from '@/assets/lev_headshot.jpg';
import willHeadshot from '@/assets/will_headshot.jpg';

const teamMembers = [
  {
    name: "William Holz",
    role: "Founder",
    bio: "Division I Fencer at Duke University.",
    initials: "WH",
    image: willHeadshot
  },
  {
    name: "Lev Ermakov",
    role: "Founder",
    bio: "Division I Fencer at Duke University.",
    initials: "LE",
    image: levHeadshot
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Our dedicated leadership brings together expertise in fencing, adaptive sports, and youth development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
