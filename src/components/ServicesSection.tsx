import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Palette, Zap, Wrench } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom websites built with modern frameworks like Next.js and React. Fast, responsive, and optimized for conversions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Clean, conversion-focused design that users love. Every pixel serves a purpose.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast load times, perfect Lighthouse scores, and smooth interactions that keep users engaged.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing updates, bug fixes, and technical support to keep your site running flawlessly.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver end-to-end web solutions that help businesses grow and succeed online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer hover:border-primary/50 transition-colors duration-200"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
