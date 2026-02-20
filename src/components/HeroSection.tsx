import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import NameHoverEffect from "./NameHoverEffect";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects - optimized for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-2xl gpu-accelerated" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float gpu-accelerated" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Smart, Cost-Effective Web & Tech Solutions.
          </h1>

          {/* Tagline - secondary */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Creative Vision. Technical Precision.
          </motion.p>

          {/* Bold subheadline */}
          <motion.p
            className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-10 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Zero Upfront Payment.    Pay Only If Satisfied.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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
  className="px-8 py-4 
             border border-primary 
             ring-2 ring-inset ring-primary/70 
             text-foreground rounded-xl font-bold text-lg
             transition-all duration-300
             hover:bg-secondary
             hover:ring-4 hover:ring-primary
             hover:shadow-[0_0_20px_theme(colors.primary/40)]"
>
  View Services
</a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
  className="absolute -bottom-16 inset-x-0 flex justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{
    opacity: { delay: 1.2, duration: 0.6 },
    y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
  }}
>
  <a href="#projects" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
    <span className="text-sm font-medium mb-2">Scroll</span>
    <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
