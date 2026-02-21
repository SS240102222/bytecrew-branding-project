import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, HardDrive, Wrench, Zap, Gauge } from "lucide-react";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Cpu,
      title: "Custom New PC Build",
      description:
        "Bespoke PC assembly tailored to your specific needs. Expert hardware selection, assembly, and testing. Optimized for gaming, work, or content creation.",
    },
    {
      icon: HardDrive,
      title: "PC / Laptop Upgrade",
      description:
        "Boost performance with RAM upgrades, SSD installations, or processor replacements. Expert installation and optimization to breathe new life into your system.",
    },
    {
      icon: Wrench,
      title: "Software Troubleshooting",
      description:
        "Diagnose and fix driver issues, OS problems, malware removal, and software conflicts. Get your system running smoothly again.",
    },
    {
      icon: Zap,
      title: "Hardware Repair & Replacement",
      description:
        "Professional repair and replacement of faulty hardware components. Motherboard, power supply, cooling system, and more—expertly handled.",
    },
    {
      icon: Gauge,
      title: "PC / Laptop Performance Optimization",
      description:
        "Comprehensive system optimization including cleaning, defragmentation, startup optimization, and resource management for peak performance.",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-20 relative" ref={ref}>
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
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Computer <span className="text-primary">Solutions</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer hover:border-primary/50 transition-colors duration-200 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
