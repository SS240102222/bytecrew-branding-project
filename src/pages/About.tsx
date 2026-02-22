import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { updateMetaTags, getCanonicalUrl } from "@/utils/seo";

const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: "About ByteCrew | Founder-Led Tech Startup, Lahore",
      description: "ByteCrew is a lean, founder-led tech startup from Lahore. We handle every project directly — no outsourcing, no juniors, no advance payment until you're satisfied.",
      canonical: getCanonicalUrl("/about"),
      ogTitle: "About ByteCrew | Founder-Led Tech Startup, Lahore",
      ogDescription: "ByteCrew is a lean, founder-led tech startup from Lahore. We handle every project directly — no outsourcing, no juniors, no advance payment until you're satisfied.",
    });
  }, []);

  const coreValues = [
    {
      title: "Direct Interaction",
      description: "No middlemen, no project managers. You work directly with the founders on every project.",
    },
    {
      title: "Zero Upfront Risk",
      description: "We don't take payment until you're genuinely satisfied. Our confidence is backed by results.",
    },
    {
      title: "Performance-First",
      description: "Every website loads fast. Every PC is built for purpose. Every optimization is measurable.",
    },
    {
      title: "Cost Efficiency",
      description: "We spec and build for maximum value, not maximum billable hours. You pay for exactly what you need.",
    },
    {
      title: "Lean Operations",
      description: "No overhead. No bloated team. Just focused experts who care about the work they ship.",
    },
    {
      title: "Long-Term Vision",
      description: "We're building ByteCrew as a sustainable, profitable business — not a venture-backed growth machine.",
    },
  ];

  const whyDifferent = [
    {
      heading: "No Outsourcing",
      text: "Every project is handled by the founders. No junior developers, no farms. You get senior-level work on day one.",
    },
    {
      heading: "No Advance Payment",
      text: "Most agencies ask for 50% upfront. We ask for 0%. You decide if the work is worth paying for.",
    },
    {
      heading: "No Time-and-Materials Contracts",
      text: "We scope, quote, and deliver. You know exactly what you're paying before we start. No surprises.",
    },
    {
      heading: "No Generic Solutions",
      text: "We don't use templates or off-the-shelf builds. Every project is custom and built for your specific goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-16 px-4 md:pt-40">
        <div className="section-container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-serif">
              About ByteCrew.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We're a lean, founder-led tech startup from Lahore. We build websites that convert, PCs that perform, and services that matter. No shortcuts. No outsourcing. Direct work from people who care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 px-4 bg-secondary/20">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Our Story.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                ByteCrew started with a simple observation: most digital projects fail because of poor communication, unrealistic timelines, and misaligned incentives. Agencies charge upfront, cut corners, and hand off work to juniors. That's not how we work.
              </p>
              <p>
                We built ByteCrew to prove that you can deliver quality work without the usual agency overhead. Every project is handled directly by experienced founders. Every decision is made with your success in mind. And we don't take payment until you're actually satisfied.
              </p>
              <p>
                We're not trying to be the biggest agency. We're trying to be the most trustworthy. That means sometimes we say no to work that doesn't fit. It means we underpromise and overdeliver. It means your interests come before our growth metrics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="section-container">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              How We Work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 font-serif text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="section-container max-w-3xl">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Why We're Different.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {whyDifferent.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 md:gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground font-serif">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Ready to Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Tell us about your project. We'll give you honest advice, a clear scope, and a fair price. Zero upfront payment. Zero pressure.
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

export default About;
