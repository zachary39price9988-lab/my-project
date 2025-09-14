import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to Vairi! 🎉",
        description: `${email} has been added to our early access waitlist.`,
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to build{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                trust
              </span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of identity verification. 
              Get early access to Vairi and be part of the trust revolution.
            </p>
          </div>

          {/* Enhanced Waitlist Form */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 shadow-2xl shadow-primary/10 max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Join Early Access</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg border-primary/20 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Adding you to the list..."
                ) : (
                  <>
                    Get Early Access
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p>✓ Early access to all features</p>
              <p>✓ Priority customer support</p>
              <p>✓ No spam, unsubscribe anytime</p>
            </div>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>
              Trusted by early adopters from{" "}
              <span className="font-semibold text-primary">150+ companies</span> worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;