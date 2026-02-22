import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

import WhyByteCrew from "@/components/WhyByteCrew";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesOverview from "@/components/ServicesOverview";
import OurApproach from "@/components/OurApproach";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { updateMetaTags, getCanonicalUrl } from "@/utils/seo";

const Index = () => {
  useEffect(() => {
    updateMetaTags({
      title: "ByteCrew | Smart Web & Tech Solutions in Lahore, Pakistan",
      description: "Lahore-based web development, custom PC builds, and repairs. Zero upfront payment. Pay only when satisfied. Founder-led, cost-efficient, performance-focused.",
      canonical: getCanonicalUrl("/"),
      ogTitle: "ByteCrew | Smart Web & Tech Solutions in Lahore, Pakistan",
      ogDescription: "Lahore-based web development, custom PC builds, and repairs. Zero upfront payment. Pay only when satisfied. Founder-led, cost-efficient, performance-focused.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhyByteCrew />
      <ProjectsSection />
      <ServicesOverview />
      <OurApproach />
      <TestimonialsSection />
      <CTASection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
