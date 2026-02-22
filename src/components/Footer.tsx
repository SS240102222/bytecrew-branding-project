import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-border">
          {/* Left: ByteCrew Logo/Name */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo-removebg-preview.png"
              alt="ByteCrew Logo"
              width={32}
              height={32}
              className="object-contain"
              decoding="async"
            />
            <span className="text-lg font-bold text-foreground">ByteCrew</span>
          </motion.div>

          {/* Center: Navigation Links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">Packages</Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </motion.div>

          {/* Right: WhatsApp Link */}
          <motion.a
            href="https://wa.me/923390053646?text=Hi%20ByteCrew%2C%20I%27d%20like%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            WhatsApp
          </motion.a>
        </div>

        {/* Bottom: Copyright and Location */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>© 2026 ByteCrew. All rights reserved.</p>
          <p>Lahore, Pakistan — Serving clients locally and worldwide.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
