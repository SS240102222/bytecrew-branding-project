import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];
  
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "py-6"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
          <img src="/IMG_4189.JPG_32px.ico" alt="ByteCrew Logo" className="h-8 w-8 object-contain" />
          ByteCrew
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
