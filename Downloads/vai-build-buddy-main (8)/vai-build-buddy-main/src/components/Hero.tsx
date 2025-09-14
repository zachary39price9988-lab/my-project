import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, CheckCircle, Users, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Features from "./Features";
import TrustDemo from "./TrustDemo";
import CTA from "./CTA";
import Footer from "./Footer";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to Vairi! 🎉",
        description: `${email} has been added to our early access waitlist.`,
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vairi
            </span>
          </div>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
            Sign In
          </Button>
        </nav>
      </header>

      {/* Main Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Trust
              </span>{" "}
              <span className="text-foreground">through</span><br />
              <span className="text-foreground">verified</span>{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                identity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Build authentic connections with identity verification that prioritizes 
              <span className="text-accent font-semibold"> clarity</span>, 
              <span className="text-primary font-semibold"> trust</span>, and 
              <span className="text-accent font-semibold"> user presence</span>.
            </p>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-16">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 border-primary/20 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                className="h-12 px-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Added!" : "Join Waitlist"}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              Be the first to experience secure, transparent identity verification
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Clarity</h3>
              <p className="text-muted-foreground">
                Plain-language verification status with no confusing jargon
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Presence</h3>
              <p className="text-muted-foreground">
                Real-time verification badges showing authentic user activity
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <Lock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trust Dashboard</h3>
              <p className="text-muted-foreground">
                Visual trust scores based on verification completeness
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections */}
      <Features />
      <TrustDemo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Hero;