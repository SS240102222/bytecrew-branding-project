import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Soft background depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Smart, Cost-Effective Web & Tech Solutions.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Zero upfront payment. Pay only if satisfied.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >

            {/* Primary */}
            <a
              href="#contact"
              className="group px-7 py-3.5 
                         bg-primary text-primary-foreground
                         rounded-full
                         text-sm font-medium
                         transition-colors duration-300
                         hover:bg-primary/90
                         flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary – Apple Minimal */}
            <a
              href="#services"
              className="px-7 py-3.5 
                         rounded-full
                         text-sm font-medium
                         border border-primary/60
                         text-foreground
                         transition-all duration-300
                         hover:bg-primary/5
                         hover:border-primary"
            >
              View Services
            </a>

          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-14 inset-x-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { delay: 1.3, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <a
            href="#projects"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium mb-2 tracking-wide">
              SCROLL
            </span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
