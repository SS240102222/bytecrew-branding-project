import { motion } from "framer-motion";
import { CreditCard, Zap, Clock, Smile } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: CreditCard,
      label: "Zero Upfront Payment",
      description: "Start your project risk-free"
    },
    {
      icon: Zap,
      label: "Free Hosting Setup Assistance",
      description: "We help you get live"
    },
    {
      icon: Clock,
      label: "30-Day Post-Launch Support",
      description: "Peace of mind included"
    },
    {
      icon: Smile,
      label: "Pay Only If Satisfied",
      description: "You're in control"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative">
      {/* Dark card tone with subtle green tint background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/30 to-secondary/40" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative z-10 py-12 md:py-16"
      >
        <div className="section-container">
          {/* Desktop: 4-column layout */}
          <div className="hidden md:grid grid-cols-4 gap-6 items-center">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon */}
                <div className="mb-3">
                  <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-200" />
                </div>

                {/* Label and Description */}
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>

                {/* Vertical dividers */}
                {index < trustItems.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="flex flex-col items-center text-center group bg-card/50 rounded-lg p-4 border border-border/30 hover:border-primary/30 transition-colors"
              >
                {/* Icon */}
                <div className="mb-2">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                </div>

                {/* Label */}
                <h3 className="text-xs font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Subtle border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </section>
  );
};

export default TrustBar;
