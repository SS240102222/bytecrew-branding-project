import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      className="py-16 md:py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle green-tinted dark background to make it stand out */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40" />

      <div className="section-container relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            If Your Tech Isn't Performing,{" "}
            <span className="text-primary">It's Costing You.</span>
          </h2>

          {/* Subline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Whether it's a slow website, a weak PC build, or a system that needs
            fixing — we'll sort it. No upfront payment required.
          </p>

          {/* Primary CTA Button */}
          <motion.a
            href="#contact"
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Small muted line below button */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Free consultation. No commitment. Pay only when satisfied.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
