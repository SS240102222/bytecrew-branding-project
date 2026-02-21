import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Packages = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What if I'm not happy with the result?",
      a: "We keep refining until you are. Our payment model only works if you're genuinely satisfied — so walking away unhappy isn't something we can afford.",
    },
    {
      q: "Do you take any advance at all?",
      a: "No. Zero. We start work based on trust and deliver based on merit. Payment comes after approval.",
    },
    {
      q: "What's included in 30-day post-launch support?",
      a: "Bug fixes, small content updates, and any issues that arise within 30 days of delivery — covered at no extra charge.",
    },
    {
      q: "Can I upgrade my package midway?",
      a: "Yes. If your requirements grow during the project, we discuss the scope change openly and agree on pricing before proceeding.",
    },
    {
      q: "Do you serve clients outside Lahore?",
      a: "Yes. We work with clients across Pakistan and internationally. All communication works smoothly over WhatsApp, email, or video call.",
    },
  ];

  const paymentSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We understand your requirements with zero commitment from your side.",
    },
    {
      step: 2,
      title: "Project Scoping",
      description: "We send you a full breakdown of what will be built and what it will cost. You approve before we start.",
    },
    {
      step: 3,
      title: "We Deliver",
      description: "You review the completed work. Request any revisions within the agreed scope.",
    },
    {
      step: 4,
      title: "You Pay",
      description: "Only after you're satisfied with the final result do we ask for payment. Not before.",
    },
  ];

  const packages = [
    {
      label: "Web Development",
      name: "Starter Web",
      bestFor: "Small businesses, restaurants, salons, local services",
      includes: [
        "Up to 5 pages",
        "Mobile-first responsive design",
        "Basic SEO setup",
        "Contact form + WhatsApp button",
        "Free hosting setup assistance",
        "30-day post-launch support",
        "0% upfront — pay on approval",
      ],
    },
    {
      label: "Web Development",
      name: "Growth Web",
      bestFor: "Businesses needing more features or e-commerce",
      includes: [
        "Up to 10 pages",
        "E-commerce or booking integration",
        "Speed optimization",
        "Advanced SEO structure",
        "Google Analytics setup",
        "Free hosting setup assistance",
        "30-day post-launch support",
        "0% upfront — pay on approval",
      ],
    },
    {
      label: "PC Builds & Repairs",
      name: "Tech Services",
      bestFor: "Custom builds, upgrades, repairs, optimization",
      includes: [
        "Free pre-build consultation",
        "Component selection for your budget",
        "Full assembly and cable management",
        "Thermal paste and cooling setup",
        "Post-build stress testing",
        "Hardware diagnostics for repairs",
        "0% upfront — pay on approval",
      ],
    },
  ];

  const guaranteeItems = [
    "0% Upfront Payment",
    "30-Day Post-Launch Support",
    "Free Hosting Setup Assistance",
    "Pay Only If Satisfied",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 px-4">
        <div className="section-container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Simple, Honest <span className="text-primary">Packages.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No hidden fees. No advance payment. No risk. You pay only when you're satisfied with the result.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="w-full relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/30 to-secondary/40" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="section-container">
            {/* Desktop: 4-column layout */}
            <div className="hidden md:grid grid-cols-4 gap-6 items-center">
              {guaranteeItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {item}
                  </p>
                  {index < guaranteeItems.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile: 2x2 grid */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {guaranteeItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center group bg-card/50 rounded-lg p-4 border border-border/30"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="font-semibold text-foreground text-xs">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="section-container">
          {/* Desktop: 3-column layout */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/30 rounded-xl p-8 hover:border-primary/30 transition-colors group"
              >
                {/* Label */}
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {pkg.label}
                </span>

                {/* Package Name */}
                <h3 className="text-2xl font-bold mt-4 mb-2 text-foreground">
                  {pkg.name}
                </h3>

                {/* Best For */}
                <p className="text-sm text-muted-foreground mb-8">
                  {pkg.bestFor}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Note */}
                <p className="text-sm text-primary font-medium py-6 border-t border-border/30 border-b">
                  Pricing discussed after free consultation — based on your specific requirements.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Stacked layout */}
          <div className="md:hidden space-y-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border/30 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {pkg.label}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2 text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {pkg.bestFor}
                </p>
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-primary font-medium pt-4 border-t border-border/30">
                  Pricing discussed after free consultation — based on your specific requirements.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Centered paragraph about custom pricing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don't believe in one-size-fits-all pricing. Every project is scoped individually so you only pay for exactly what you need — nothing more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Payment Works Section */}
      <section className="py-16 md:py-20 px-4 bg-secondary/20">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
          >
            How Payment Works
          </motion.h2>

          {/* Desktop: Horizontal stepper */}
          <div className="hidden md:flex items-center justify-between gap-4 mb-12">
            {paymentSteps.map((step, index) => (
              <div key={step.step} className="flex-1 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  {/* Step number circle */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                    {step.step}
                  </div>

                  {/* Step title and description */}
                  <h3 className="text-lg font-semibold text-foreground text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connector line */}
                {index < paymentSteps.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-border via-primary/30 to-border -z-10 transform translate-y-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical stepper */}
          <div className="md:hidden space-y-8">
            {paymentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-2 flex-shrink-0">
                    {step.step}
                  </div>
                  {index < paymentSteps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="section-container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
          >
            Common Questions
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-start justify-between gap-4 p-6 bg-card border border-border/30 rounded-lg hover:border-primary/30 transition-colors text-left group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    expandedFAQ === index
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-secondary/30 border border-t-0 border-border/30 rounded-b-lg text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40" />
        <div className="section-container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Start <span className="text-primary">With Zero Risk?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Tell us what you need. We'll scope it, plan it, and only ask for payment when you're happy.
            </p>
            <motion.a
              href="https://wa.me/923390053646"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
