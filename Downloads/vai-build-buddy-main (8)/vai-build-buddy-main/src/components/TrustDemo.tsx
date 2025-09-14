import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TrustDemo = () => {
  const verificationSteps = [
    { step: "Email Verification", status: "completed", score: 20 },
    { step: "Phone Verification", status: "completed", score: 20 },
    { step: "Photo ID Upload", status: "completed", score: 25 },
    { step: "Biometric Verification", status: "in-progress", score: 20 },
    { step: "Document Authentication", status: "pending", score: 15 }
  ];

  const totalScore = verificationSteps
    .filter(step => step.status === "completed")
    .reduce((sum, step) => sum + step.score, 0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-accent" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-primary" />;
      default:
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-accent/10 text-accent border-accent/20";
      case "in-progress":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trust Score</span> In Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how your verification progress translates to a clear, understandable trust score
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 shadow-2xl">
            {/* Trust Score Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {totalScore}%
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">Trust Score</div>
                  <div className="text-sm text-muted-foreground">Verified Identity</div>
                </div>
              </div>
              <Progress value={totalScore} className="w-full max-w-md mx-auto h-3" />
            </div>

            {/* Verification Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-center">Verification Progress</h3>
              {verificationSteps.map((step, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(step.status)}
                    <span className="font-medium">{step.step}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">+{step.score}%</span>
                    <Badge className={getStatusColor(step.status)}>
                      {step.status === "completed" ? "Complete" : 
                       step.status === "in-progress" ? "In Progress" : "Pending"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Status Message */}
            <div className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl text-center">
              <p className="text-accent font-medium">
                🎉 Great progress! Complete biometric verification to reach 85% trust score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustDemo;