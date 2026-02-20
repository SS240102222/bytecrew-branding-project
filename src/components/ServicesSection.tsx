import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Globe, Briefcase, ShoppingCart, RefreshCw, CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MessageSquare,
      title: "Tech Consultation",
      description:
        "Expert technical guidance including requirements analysis, tech stack recommendations, project scope & timeline, cost breakdown, and implementation roadmap.",
    },
    {
      icon: Globe,
      title: "Simple Website",
      tag: "Landing Pages",
      description:
        "Single-page website with contact form, responsive design, and fast loading. Mobile-optimized, SEO-friendly.",
      delivery: "3–5 days",
      extra: "Includes free revisions",
    },
    {
      icon: Briefcase,
      title: "Business Website",
      description:
        "Multi-page site (Home, About, Services, Portfolio, Contact) with custom design, CMS, and Google Maps integration.",
      delivery: "1–2 weeks",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Website",
      description:
        "Full online store with product catalog, shopping cart, payment gateway, inventory management, and order tracking.",
      delivery: "2–4 weeks",
    },
    {
      icon: RefreshCw,
      title: "Website Redesign",
      description:
        "Modernize an existing website with a UI/UX overhaul, speed optimization, and mobile-first redesign.",
      delivery: "Varies by scope",
    },
  ];

  

  return (
    <section id="services" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
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
        </motion.div>

        {/* Guarantees Banner */}
        <motion.div
          className="glass-card rounded-2xl p-5 mb-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <p className="text-center text-sm font-semibold text-primary mb-3">✅ All Packages Include</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {guarantees.map((g) => (
              <div key={g.text} className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
                <g.icon className="w-4 h-4 text-primary shrink-0" />
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer hover:border-primary/50 transition-colors duration-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  {service.tag && (
                    <span className="text-xs text-muted-foreground">{service.tag}</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>
              {(service.delivery || service.extra) && (
                <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-3 text-xs">
                  {service.delivery && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {service.delivery}
                    </span>
                  )}
                  {service.extra && (
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      {service.extra}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
