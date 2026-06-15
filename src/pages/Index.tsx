import { useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyByteCrew from "@/components/WhyByteCrew";
import { applyRouteSeo } from "@/utils/seo";

// Lazy load below-the-fold sections
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
    applyRouteSeo("/");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <WhyByteCrew />
      <Suspense fallback={<div className="min-h-[200px]" />}>
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