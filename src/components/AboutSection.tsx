import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Sparkles, Globe, Server, Database, Layout } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Zap, label: "Efficiency" },
    { icon: Code, label: "Clean Code" },
    { icon: Sparkles, label: "Results-Focused" },
    { icon: Globe, label: "Continuous Learning" },
  ];

  const skills = [
    { icon: Code, label: "React / Next.js" },
    { icon: Layout, label: "Tailwind CSS" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Server, label: "Node.js" },
    { icon: Database, label: "PostgreSQL" },
    { icon: Zap, label: "Performance" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building <span className="text-primary">Practical</span> Solutions
            </h2>
          </div>

          {/* About Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            ByteCrew is a web development studio focused on building practical solutions for real businesses. 
            We specialize in modern web technologies like React and Next.js, creating fast, accessible, and 
            conversion-optimized websites. Based in Lahore, working with clients globally.
          </motion.p>

          {/* Values */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
              What We Value
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
              Our Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <skill.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-xs font-medium text-muted-foreground">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Note */}
          <motion.p
            className="text-center text-muted-foreground mt-12 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Our team brings expertise across frontend development, design, and performance optimization.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
