import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { updateMetaTags, getCanonicalUrl } from "@/utils/seo";
import { Mail, MapPin, MessageCircle, MessageSquare, Phone, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Contact ByteCrew | Free Consultation, No Commitment",
      description: "Get in touch with ByteCrew via WhatsApp or email. Free consultation, zero pressure. Based in Lahore, serving clients in Pakistan and worldwide.",
      canonical: getCanonicalUrl("/contact"),
      ogTitle: "Contact ByteCrew | Free Consultation, No Commitment",
      ogDescription: "Get in touch with ByteCrew via WhatsApp or email. Free consultation, zero pressure. Based in Lahore, serving clients in Pakistan and worldwide.",
    });
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e6a57735-3e0b-48f6-846f-55db3515c04e",
          subject: "New ByteCrew Inquiry",
          from_name: "ByteCrew Website",
          name: formData.name,
          contact: formData.contact,
          service: formData.service || "Not specified",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", contact: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(result.message || "Something went wrong. Please WhatsApp us instead.");
      }
    } catch {
      setError("Network error. Please WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp (Fastest)",
      value: "+92 339 0053646",
      action: "Chat on WhatsApp",
      href: "https://wa.me/923390053646?text=Hi%20ByteCrew%2C%20I%27d%20like%20to%20discuss%20a%20project",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bytecrew.team@gmail.com",
      action: "Send Email",
      href: "mailto:bytecrew.team@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      subline: "Available for in-person meetings locally. Serving clients worldwide remotely.",
      href: null,
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: "We Read Your Message",
      body: "Every inquiry is read by the founders personally — not filtered by a team.",
    },
    {
      icon: Phone,
      title: "We Reach Out Within Hours",
      body: "We'll contact you on WhatsApp or email to understand your requirements better.",
    },
    {
      icon: CheckCircle,
      title: "Free Consultation, No Commitment",
      body: "We scope your project together. You decide if you want to proceed — zero pressure.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="pt-32 md:pt-40 pb-12 md:pb-16 relative mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif leading-tight">
              Let's Talk.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No forms that go nowhere. No waiting 3 business days for a reply. Just a real conversation with the actual founders.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Methods & Form Section */}
      <section className="py-16 md:py-20 relative" ref={sectionRef}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <motion.div
                  className="inline-flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                    Reach Us Directly
                  </span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif">
                  We're Available Now.
                </h2>
              </div>

              {/* Contact Methods Cards */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, idx) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <IconComponent className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-sm font-mono text-primary uppercase tracking-wider mb-1">
                            {method.label}
                          </p>
                          <p className="text-foreground font-semibold mb-1">
                            {method.value}
                          </p>
                          {method.subline && (
                            <p className="text-sm text-muted-foreground mb-3">
                              {method.subline}
                            </p>
                          )}
                          {method.href && (
  
                              href={method.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-all"
                            >
                              {method.action}
                              <span>→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.p
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We typically respond within a few hours during business hours PKT.
              </motion.p>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <motion.div
                  className="inline-flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                    Send a Message
                  </span>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif">
                  Tell Us What You Need.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — bots fill this, humans don't. Web3Forms auto-rejects. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Field */}
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Contact Field */}
                <div>
                  <Input
                    type="text"
                    name="contact"
                    placeholder="WhatsApp or Email"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-card border-border text-foreground">
                      <SelectValue placeholder="Service Interested In" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="custom-pc">Custom PC Build</SelectItem>
                      <SelectItem value="repair">Repair or Optimization</SelectItem>
                      <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Field */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe what you need — don't worry about being too technical or too vague. We'll figure it out together."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-sm text-destructive text-center">{error}</p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
                  disabled={loading || submitted}
                >
                  {submitted ? "Message Sent!" : loading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We don't spam. Your details are only used to respond to your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-primary/5 to-secondary/40" />

        <div className="section-container relative z-10">
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-primary font-mono text-sm md:text-base font-semibold uppercase tracking-wider">
                Our Response Process
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif">
              What Happens Next
            </h2>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <section className="py-6 md:py-8 border-t border-border">
        <div className="section-container">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span>ByteCrew — Lahore, Pakistan. Serving clients locally and worldwide.</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">+92 339 0053646</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
