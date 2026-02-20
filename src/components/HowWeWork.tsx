import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      title: "We Listen First",
      description: "Tell us about your business, goals, and budget. No forms, no pressure — just a real conversation.",
    },
    {
      number: "2",
      title: "We Plan Together",
      description: "We send you a simple project brief in plain language. You approve everything before we start.",
    },
    {
      number: "3",
      title: "We Build & Update You",
      description: "Regular progress updates throughout. No going silent, no surprises at the end.",
    },
    {
      number: "4",
      title: "You Approve, Then Pay",
      description: "We only ask for payment once you've reviewed the final result and you're fully satisfied.",
    },
  ];

  return (
    <section id="how-we-work" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle dark card tone background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-primary">Work.</span>
          </h2>
        </motion.div>

        {/* Stepper Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Horizontal Stepper */}
          <div className="hidden md:flex items-center justify-between relative mb-16">
            {/* Connection Lines */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" style={{ zIndex: -1 }} />

            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6 relative z-10">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Vertical Stepper */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </div>

                {/* Vertical Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-12 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20" />
                )}

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
