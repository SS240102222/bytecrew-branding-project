import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Sparkles, Globe, Server, Database, Layout, Zap as BunIcon } from "lucide-react";

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
    { icon: BunIcon, label: "Bun Framework" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building <span className="text-primary">Practical</span> Solutions
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* About Paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-16">
            ByteCrew is a web development studio focused on building practical solutions for real businesses. 
            We specialize in modern web technologies like React and Next.js, creating fast, accessible, and 
            conversion-optimized websites. Based in Lahore, working with clients globally.
          </p>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
              What We Value
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.label}
                  className="bg-card/80 border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <value.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-sm font-medium">{value.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
              Our Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="bg-card/80 border border-border/50 rounded-xl p-4 text-center hover:border-primary/50 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 40}ms` }}
                >
                  <skill.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-xs font-medium text-muted-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Note */}
          <p className="text-center text-muted-foreground mt-12 text-sm animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            Our team brings expertise across frontend development, design, and performance optimization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
