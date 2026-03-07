import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-2xl" style={{ contain: "layout style paint" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ contain: "layout style paint" }} />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Main headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Smart, Cost-Effective Web & Tech Solutions.
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Creative Vision. Technical Precision.
          </p>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            We deliver results that matter. Fast, reliable, and backed by our satisfaction guarantee.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="relative px-8 py-4 rounded-xl font-bold text-lg text-foreground border border-primary ring-2 ring-inset ring-primary/70 transition-all duration-300 hover:bg-secondary hover:ring-4 hover:scale-[1.02] before:absolute before:inset-0 before:rounded-xl before:bg-primary before:opacity-0 before:blur-xl before:transition-opacity before:duration-300 before:-z-10 hover:before:opacity-20"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-16 inset-x-0 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#services-overview"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-bounce-slow"
          >
            <span className="text-sm font-medium mb-2">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;