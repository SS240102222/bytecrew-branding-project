import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { applyRouteSeo } from "@/utils/seo";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const webProjects = [
  {
    title: "Monal Restaurant",
    description: "A high-end rooftop dining destination showcasing panoramic city views alongside a diverse buffet and à la carte menu.",
    outcome: "Built to establish online presence and drive dine-in traffic.",
    image: "/projects/Monal-Lahore.webp",
    url: "https://monallahore.vercel.app",
  },
  {
    title: "Edge Grooming Barbershop",
    description: "A premium men's barbershop website offering professional grooming services and an upscale, traditional salon experience.",
    outcome: "Designed to reduce phone inquiries with a booking-friendly layout.",
    image: "/projects/The-Edge.webp",
    url: "https://edge-grooming.vercel.app",
  },
  {
    title: "Andaaz Restaurant",
    description: "A luxury restaurant in Lahore that blends traditional heritage cuisine with iconic views of the Badshahi Mosque.",
    outcome: "Cultural identity reflected through design to attract local diners.",
    image: "/projects/Andaaz-Restaurant.webp",
    url: "https://andaazrestaurant.vercel.app",
  },
  {
    title: "RayTechPK Online Store",
    description: "A modern e-commerce site for high-performance gaming hardware and PC components, featuring product categories, featured deals, and testimonials.",
    outcome: "In progress — building a premium tech shopping experience.",
    image: "/projects/RayTechPK.webp",
    url: "https://raytech-pk.vercel.app",
  },
];

const pcBuilds = [
  {
    name: "Budget Gaming Build",
    specs: "Ryzen 5 + RX 6600 + 16GB RAM + 512GB SSD",
    purpose: "Built for 1080p gaming on a tight budget — maximum FPS per rupee.",
  },
  {
    name: "Student Workstation",
    specs: "Intel i5 + 16GB RAM + 1TB SSD + integrated graphics",
    purpose: "Clean, fast, reliable — built for productivity, programming, and everyday use.",
  },
  {
    name: "Content Creator Build",
    specs: "Ryzen 7 + RTX 3060 + 32GB RAM + 1TB NVMe",
    purpose: "Specced for video editing and rendering without overpaying for unnecessary horsepower.",
  },
];

const beforeAfterCases = [
  {
    label: "Website Speed Fix",
    before: "Load time: 8.2 seconds. Google PageSpeed score: 34.",
    after: "Load time: 1.9 seconds. Google PageSpeed score: 91.",
    note: "✓ Achieved through image optimization, caching, and code cleanup — no infrastructure change.",
  },
  {
    label: "Laptop Thermal Fix",
    before: "CPU thermal throttling at 94°C under load. Performance dropping mid-task.",
    after: "Stable at 71°C under full load. Consistent performance with no throttling.",
    note: "✓ Achieved through repaste, dust removal, and airflow correction.",
  },
];

const Portfolio = () => {
  useEffect(() => {
    applyRouteSeo("/projects");
  }, []);

  const heroRef = useRef(null);
  const webRef = useRef(null);
  const pcRef = useRef(null);
  const beforeAfterRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const webInView = useInView(webRef, { once: true, margin: "-100px" });
  const pcInView = useInView(pcRef, { once: true, margin: "-100px" });
  const beforeAfterInView = useInView(beforeAfterRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 md:py-28 relative overflow-hidden">
        <div className="section-container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
              Our Work.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Websites built for real businesses. PC builds specced for real budgets. Results that speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Projects Section — merged gallery with images */}
      <section ref={webRef} className="py-16 md:py-20 relative" style={{ contentVisibility: "auto" }}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={webInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={webInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                Web Projects
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Websites We've Built.
            </h2>
          </motion.div>

          {/* Projects Grid with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {webProjects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={webInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={project.image}
                    alt={`ByteCrew — ${project.title} website design`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={560}
                    height={315}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 font-serif group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.outcome && (
                    <p className="text-primary font-semibold flex-grow flex items-start gap-2">
                      <span className="flex-shrink-0">✓</span>
                      {project.outcome}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            className="text-center text-muted-foreground text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={webInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            More projects being added as we complete ongoing work.
          </motion.p>
        </div>
      </section>

      {/* PC Builds Section */}
      <section ref={pcRef} className="py-16 md:py-20 relative" style={{ contentVisibility: "auto" }}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={pcInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={pcInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                PC Builds
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Machines We've Built.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {pcBuilds.map((build, idx) => (
              <motion.div
                key={build.name}
                className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all p-6 md:p-8 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={pcInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-40 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Build Photo</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 font-serif">
                  {build.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Specs:</span> {build.specs}
                </p>
                <p className="text-primary font-semibold flex-grow">
                  ✓ {build.purpose}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-muted-foreground text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={pcInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Every build is documented and photographed. More builds added regularly.
          </motion.p>
        </div>
      </section>

      {/* Before & After Section */}
      <section ref={beforeAfterRef} className="py-16 md:py-20 relative" style={{ contentVisibility: "auto" }}>
        <div className="section-container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={beforeAfterInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={beforeAfterInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                Optimization Results
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              What Optimization Actually Looks Like.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterCases.map((caseItem, idx) => (
              <motion.div
                key={caseItem.label}
                className="bg-card rounded-xl border border-border p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={beforeAfterInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-8 font-serif">
                  {caseItem.label}
                </h3>
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Before</h4>
                  <p className="text-red-400/70 leading-relaxed">{caseItem.before}</p>
                </div>
                <div className="h-px bg-border mb-8" />
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">After</h4>
                  <p className="text-primary font-semibold leading-relaxed">{caseItem.after}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{caseItem.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-muted-foreground text-sm mt-10"
            initial={{ opacity: 0 }}
            animate={beforeAfterInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Results vary by project. These are real examples from completed work.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40" />
        <div className="section-container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={beforeAfterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Want Results Like These?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Tell us what you need built, fixed, or optimized. Free consultation, zero upfront payment.
            </p>
            <motion.a
              href="https://wa.me/923390052649"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={beforeAfterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
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

export default Portfolio;