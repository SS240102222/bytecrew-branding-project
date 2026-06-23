import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      {isScrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-background/85 backdrop-blur-xl"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          }}
        />
      )}
      <div className="section-container relative z-10 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
          <img
            src="/bytecrew-icon.png"
            alt="ByteCrew Logo"
            className="h-8 w-8 object-contain"
            width={32}
            height={32}
            decoding="async"
            fetchPriority="high"
          />
          ByteCrew
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium uppercase tracking-wider">
              {link.label}
            </a>
          ))}
        </div>

        <a href="/contact" className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
          Let's Talk
        </a>

        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="section-container py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-primary/10 rounded-lg transition-colors text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="block px-4 py-2 text-sm font-medium uppercase tracking-wider bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;