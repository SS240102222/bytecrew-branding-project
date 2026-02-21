import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      stars: 5,
      quote: "Honestly I was very skeptical at first because I had bad experience with a freelancer before. But ByteCrew was different — they kept me updated throughout and didn't ask for a single rupee until I was fully satisfied. The website looks very professional. My customers actually compliment it.",
      name: "Ahmad Raza",
      role: "Restaurant Owner, Lahore",
      initials: "AR",
    },
    {
      stars: 5,
      quote: "Good work, responsive team. They made exactly what I discussed. Only small thing was it took a few extra days but they informed me beforehand. Overall very satisfied and would recommend to anyone needing a website for their business.",
      name: "Usman Khalid",
      role: "Salon Owner, Lahore",
      initials: "UK",
    },
    {
      stars: 4,
      quote: "website is nice and work properly. they help me with hosting also. i dont know much about technical things but they explain me in simple way. happy with result.",
      name: "Fatima S.",
      role: "Clothing Boutique Owner",
      initials: "FS",
    },
    {
      stars: 5,
      quote: "From a technical standpoint, their stack choices are solid — React, Next.js, proper SEO structure. What impressed me more was the communication. Most dev teams go silent mid-project. ByteCrew sent updates without being asked. That alone puts them above 90% of freelancers in this market.",
      name: "Bilal Mahmood",
      role: "IT Consultant, Islamabad",
      initials: "BM",
    },
  ];

  const getAvatarBgColor = (initials: string): string => {
    const colors = [
      "bg-primary/80",
      "bg-primary/70",
      "bg-primary/90",
      "bg-primary/75",
    ];
    return colors[initials.charCodeAt(0) % colors.length];
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative" ref={ref}>
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
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients <span className="text-primary">Say.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid - 2x2 on desktop, stacked on mobile */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              className="glass-card rounded-2xl p-8 flex flex-col hover-lift group hover:border-primary/50 transition-colors duration-200"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Client Info - Name, Role, Avatar */}
              <div className="flex items-center gap-4">
                {/* Avatar Circle with Initials */}
                <div
                  className={`${getAvatarBgColor(
                    testimonial.initials
                  )} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name and Role */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
