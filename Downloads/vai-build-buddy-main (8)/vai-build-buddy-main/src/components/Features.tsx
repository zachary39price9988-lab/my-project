import { Shield, Eye, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Multi-Layer Verification",
      description: "Photo ID matching, biometric checks, and document authentication",
      details: ["Real-time photo verification", "Government ID validation", "Biometric facial recognition", "Document authenticity check"]
    },
    {
      icon: Eye,
      title: "Transparent Trust Scoring",
      description: "Clear, visual trust indicators that users can understand",
      details: ["Plain-language status updates", "Visual trust score dashboard", "Progress tracking", "No confusing technical jargon"]
    },
    {
      icon: Clock,
      title: "Real-Time Presence",
      description: "Live verification status and user activity indicators",
      details: ["Active verification badges", "Recent activity tracking", "Live status updates", "Presence indicators"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How Vairi Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our three-pillar approach ensures trust through clarity, verification, and presence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-card/70 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <ChevronRight className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;