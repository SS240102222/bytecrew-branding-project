import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-border">
          {/* Left: ByteCrew Logo/Name */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo-removebg-preview.png"
              alt="ByteCrew Logo"
              width={32}
              height={32}
              className="object-contain"
              decoding="async"
            />
            <span className="text-lg font-bold text-foreground">ByteCrew</span>
          </Link>

          {/* Center: Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/return-refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="/shipping-service-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Policy</Link>
          </div>

          {/* Right: WhatsApp Link */}
          <a
            href="https://wa.me/923390053646?text=Hi%20ByteCrew%2C%20I%27d%20like%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Bottom: Copyright and Location */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 ByteCrew. All rights reserved.</p>
          <p>Lahore, Pakistan — Serving clients locally and worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
