import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Wrench } from "lucide-react";

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Business websites, e-commerce, and speed-optimized builds. Fast-loading, mobile-first, built to convert.",
    },
    {
      icon: Cpu,
      title: "Custom PC Builds",
      description: "Budget, gaming, and workstation builds. Every component chosen for maximum price-to-performance.",
    },
    {
      icon: Wrench,
      title: "Repairs & Optimization",
      description: "Laptop slowdowns, thermal issues, hardware diagnostics. We fix the bottleneck, not just the symptom.",
    },
  ];

  return (
    <section id="services-overview" className="py-16 md:py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Performance. <span className="text-primary">Priced for Value.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover-lift group hover:border-primary/50 transition-colors duration-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description - 2 lines */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.p
          className="text-center text-sm text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Every service comes with 0% upfront payment and 30-day post-delivery support.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesOverview;
