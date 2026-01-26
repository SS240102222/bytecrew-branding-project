import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold text-foreground mb-2">ByteCrew</p>
            <p className="text-sm text-muted-foreground">
              © 2025 ByteCrew. Built with Next.js & Tailwind.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <a
              href="mailto:ahmed.aasim.mail@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              ahmed.aasim.mail@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Lahore, Pakistan
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
