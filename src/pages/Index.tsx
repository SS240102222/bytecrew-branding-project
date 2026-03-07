import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyByteCrew from "@/components/WhyByteCrew";
import { updateMetaTags, getCanonicalUrl } from "@/utils/seo";

// Lazy load below-the-fold sections
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ServicesOverview = lazy(() => import("@/components/ServicesOverview"));
const OurApproach = lazy(() => import("@/components/OurApproach"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

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
      <TrustBar />
      <WhyByteCrew />
      <Suspense fallback={<div className="min-h-[200px]" />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
