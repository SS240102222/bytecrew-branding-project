// Single source of truth for showcased web projects.
// Imported by both the homepage carousel (ProjectsSection) and the Portfolio
// page so the two can never drift out of sync.

export interface Project {
  title: string;
  description: string;
  /** Optional one-line result/impact statement. */
  outcome?: string;
  image: string;
  url: string;
}

export const webProjects: Project[] = [
  {
    title: "Monal Restaurant",
    description:
      "A high-end rooftop dining destination showcasing panoramic city views alongside a diverse buffet and à la carte menu.",
    outcome: "Built to establish online presence and drive dine-in traffic.",
    image: "/projects/Monal-Lahore.webp",
    url: "https://monallahore.vercel.app",
  },
  {
    title: "Edge Grooming Barbershop",
    description:
      "A premium men's barbershop website offering professional grooming services and an upscale, traditional salon experience.",
    outcome: "Designed to reduce phone inquiries with a booking-friendly layout.",
    image: "/projects/The-Edge.webp",
    url: "https://edge-grooming.vercel.app",
  },
  {
    title: "Andaaz Restaurant",
    description:
      "A luxury restaurant in Lahore that blends traditional heritage cuisine with iconic views of the Badshahi Mosque.",
    outcome: "Cultural identity reflected through design to attract local diners.",
    image: "/projects/Andaaz-Restaurant.webp",
    url: "https://andaazrestaurant.vercel.app",
  },
  {
    title: "RayTechPK Online Store",
    description:
      "A modern e-commerce site for high-performance gaming hardware and PC components, featuring product categories, featured deals, and testimonials.",
    outcome: "In progress — building a premium tech shopping experience.",
    image: "/projects/RayTechPK.webp",
    url: "https://raytech-pk.vercel.app",
  },
];
