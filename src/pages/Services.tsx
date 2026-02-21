import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServiceCard = ({ title, body, isInView, index }: { title: string; body: string; isInView: boolean; index: number }) => (
  <motion.div
    className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all hover:bg-card/80 h-full"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground font-serif">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {body}
    </p>
  </motion.div>
);

const ServiceSection = ({ label, title, cards, isInView }: { label: string; title: string; cards: Array<{ title: string; body: string }>; isInView: boolean }) => (
  <motion.div
    className="mb-20 md:mb-28"
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6 }}
  >
    {/* Section Label */}
    <motion.div
      className="inline-flex items-center gap-2 mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="w-2 h-2 bg-primary rounded-full" />
      <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
        {label}
      </span>
    </motion.div>

    {/* Section Title */}
    <motion.h2
      className="text-3xl md:text-4xl font-bold mb-12 text-foreground font-serif"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {title}
    </motion.h2>

    {/* Cards Grid */}
    <div className={`grid gap-6 md:gap-8 ${cards.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
      {cards.map((card, idx) => (
        <ServiceCard
          key={idx}
          title={card.title}
          body={card.body}
          isInView={isInView}
          index={idx}
        />
      ))}
    </div>
  </motion.div>
);

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const webDevelopmentCards = [
    {
      title: "Business Websites",
      body: "Clean, professional websites built for local and international businesses. Mobile-first, fast-loading, built to make your business look credible online.",
    },
    {
      title: "E-Commerce Stores",
      body: "Sell online without the bloat. We build lean, fast e-commerce setups focused on conversions, not unnecessary features.",
    },
    {
      title: "Speed Optimization",
      body: "Already have a website that loads slowly? We diagnose and fix performance bottlenecks — images, code, hosting, all of it.",
    },
    {
      title: "Performance Tuning",
      body: "Full audit of your existing web presence. We identify what's hurting your rankings, speed, and user experience and fix it systematically.",
    },
  ];

  const pcBuildsCards = [
    {
      title: "Budget Builds",
      body: "Tight budget, maximum output. We spec every component for price-to-performance so not a single rupee is wasted.",
    },
    {
      title: "Gaming Builds",
      body: "High FPS, low temperatures, clean cable management. Built for the games you actually play at the resolution you actually use.",
    },
    {
      title: "Workstation Builds",
      body: "Video editing, 3D rendering, data work. We build for your specific software and workload — not generic specs from a YouTube video.",
    },
    {
      title: "Upgrade Consulting",
      body: "Not sure what to upgrade first? We analyze your current setup and give you an honest priority list — no upselling, no unnecessary parts.",
    },
  ];

  const repairsCards = [
    {
      title: "Laptop Optimization",
      body: "Slow laptop driving you crazy? We clean, optimize, and tune your system for noticeably faster performance without unnecessary hardware replacements.",
    },
    {
      title: "Thermal Fixes",
      body: "Overheating kills performance and lifespan. We repaste, clean, and fix airflow issues properly — not just blow air through the vents.",
    },
    {
      title: "Hardware Troubleshooting",
      body: "Random shutdowns, boot failures, display issues. We systematically diagnose the actual cause instead of guessing and replacing parts.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="pt-32 md:pt-40 pb-12 md:pb-16 relative mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
              Our Services.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every service is cost-optimized, performance-focused, and comes with zero upfront payment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative" ref={sectionRef}>
        <div className="section-container">
          {/* Web Development Section */}
          <ServiceSection
            label="Web Development"
            title="Websites That Load Fast and Convert."
            cards={webDevelopmentCards}
            isInView={isInView}
          />

          {/* PC Builds Section */}
          <ServiceSection
            label="Custom PC Builds"
            title="Maximum Performance. Minimum Wasted Budget."
            cards={pcBuildsCards}
            isInView={isInView}
          />

          {/* Repairs Section */}
          <ServiceSection
            label="Repairs & Diagnostics"
            title="We Fix the Bottleneck, Not Just the Symptom."
            cards={repairsCards}
            isInView={isInView}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Subtle green-tinted dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40" />

        <div className="section-container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Not Sure Which Service You Need?
            </h2>

            {/* Subline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Tell us what's wrong or what you want to build. We'll give you an honest recommendation — free, no commitment.
            </p>

            {/* Primary CTA Button */}
            <motion.a
              href="https://wa.me/923390053646"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
