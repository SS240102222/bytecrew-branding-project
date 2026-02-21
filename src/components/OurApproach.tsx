import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Tag, CheckCircle } from "lucide-react";

const OurApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const approaches = [
    {
      icon: Zap,
      title: "Speed-First Development",
      description: "Every build is optimized for fast load times from day one — not patched after launch.",
    },
    {
      icon: TrendingUp,
      title: "Bottleneck Analysis",
      description: "We identify what's slowing your system or site down before recommending any solution.",
    },
    {
      icon: Tag,
      title: "Price-to-Performance Thinking",
      description: "Every rupee should work harder. We spec, plan, and build with cost-efficiency as a constraint, not an afterthought.",
    },
    {
      icon: CheckCircle,
      title: "Clean, Efficient Systems",
      description: "No bloat. No unnecessary plugins, components, or parts. Just what works, built right.",
    },
  ];

  return (
    <section id="our-approach" className="py-16 md:py-20 relative" ref={ref}>
      {/* Subtle dark card tone background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/5" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Optimize Before We <span className="text-primary">Build.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Most teams build first and fix later. We think about performance, cost, and efficiency before writing a single line of code.
          </p>
        </motion.div>

        {/* Approach Grid - 2x2 on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              className="glass-card rounded-2xl p-8 hover-lift group hover:border-primary/50 transition-colors duration-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <approach.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {approach.title}
              </h3>

              {/* Description - Single line */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
