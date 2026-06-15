import { useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { applyRouteSeo } from "@/utils/seo";

interface PolicyPageProps {
  title: string;
  /** Route path used to apply the correct SEO meta from seo.config */
  seoPath?: string;
  children: React.ReactNode;
}

const PolicyPage = ({ title, seoPath, children }: PolicyPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (seoPath) applyRouteSeo(seoPath);
  }, [seoPath]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-32 pb-20 section-container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{title}</h1>
        <div className="policy-content space-y-6 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
