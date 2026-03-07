import { CreditCard, Zap, Clock, Smile } from "lucide-react";

const trustItems = [
  { icon: CreditCard, label: "Zero Upfront Payment", description: "Start your project risk-free" },
  { icon: Zap, label: "Free Hosting Setup Assistance", description: "We help you get live" },
  { icon: Clock, label: "30-Day Post-Launch Support", description: "Peace of mind included" },
  { icon: Smile, label: "Pay Only If Satisfied", description: "You're in control" },
];

const TrustBar = () => {
  return (
    <section className="w-full relative">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/30 to-secondary/40" />

      <div className="relative z-10 py-12 md:py-16">
        <div className="section-container">
          {/* Desktop: 4-column layout */}
          <div className="hidden md:grid grid-cols-4 gap-6 items-center">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center group animate-fade-in-up"
              >
                <div className="mb-3">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center group bg-card/50 rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-colors animate-fade-in-up"
              >
                <div className="mb-2">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-xs font-semibold text-foreground mb-1">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
};

export default TrustBar;