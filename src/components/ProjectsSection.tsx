import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Monal Restaurant",
    description: "A high-end rooftop dining destination showcasing panoramic city views alongside a diverse buffet and à la carte menu.",
    image: "/projects/Monal-Lahore.png",
    url: "https://monallahore.vercel.app",
  },
  {
    title: "Edge Grooming Barbershop",
    description: "A premium men’s barbershop website offering professional grooming services and an upscale, traditional salon experience.",
    image: "/projects/The-Edge.png",
    url: "https://edge-grooming.vercel.app",
  },
  {
    title: "Andaaz Restaurant",
    description: "A luxury restaurant in Lahore that blends traditional heritage cuisine with iconic views of the Badshahi Mosque.",
    image: "/projects/Andaaz-Restaurant.png",
    url: "https://andaazrestaurant.vercel.app",
  },
  {
    title: "RayTechPK Online Store",
    description: "~IN PROGRESS~<br />RayTechPK is a modern e-commerce site for high-performance gaming hardware and PC components, featuring product categories, featured deals, and testimonials to provide a premium tech shopping experience.",
    image: "/projects/RayTechPK.png",
    url: "https://raytech-pk.vercel.app",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    // Find width of one project card (first child)
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 350; // 24 = gap-6
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects <span className="text-primary">Gallery</span>
          </h2>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-card/80 transition-colors -ml-2 md:-ml-5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-card/80 transition-colors -mr-2 md:-mr-5"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                data-project-card
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[300px] md:w-[350px] glass-card rounded-2xl overflow-hidden hover-lift group hover:border-primary/50 transition-colors duration-200 block"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              >
                {/* 16:9 Preview Image */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
