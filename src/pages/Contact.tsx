import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applyRouteSeo } from "@/utils/seo";
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
import {
  fullContactSchema,
  type FullContactValues,
  submitToWeb3Forms,
} from "@/lib/contact";

const WHATSAPP_NUMBER = "923390053646";

const serviceLabels: Record<string, string> = {
  "web-development": "Web Development",
  "custom-pc": "Custom PC Build",
  "repair": "Repair or Optimization",
  "not-sure": "Not Sure Yet",
};

const Contact = () => {
  useEffect(() => {
    applyRouteSeo("/contact");
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FullContactValues>({
    resolver: zodResolver(fullContactSchema),
    defaultValues: { name: "", contact: "", service: "", message: "", botcheck: "" },
  });

  const onSubmit = async (values: FullContactValues) => {
    setServerError("");
    if (values.botcheck) {
      setStatus("success");
      reset();
      return;
    }
    const looksLikeEmail = /\S+@\S+\.\S+/.test(values.contact);
    try {
      await submitToWeb3Forms({
        subject: "New ByteCrew enquiry (contact page)",
        from_name: "ByteCrew Website",
        name: values.name,
        contact: values.contact,
        ...(looksLikeEmail ? { replyto: values.contact } : {}),
        service: serviceLabels[values.service || ""] || "Not specified",
        message: values.message,
      });
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const openLink = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp (Fastest)",
      value: "+92 339 0053646",
      action: "Chat on WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20ByteCrew%2C%20I%27d%20like%20to%20discuss%20a%20project`,
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
                            <button
                              type="button"
                              onClick={() => method.href && openLink(method.href)}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-all border-0 cursor-pointer"
                            >
                              {method.action}
                              <span>→</span>
                            </button>
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot (hidden from users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register("botcheck")}
                />

                {/* Name Field */}
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    {...register("name")}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
                </div>

                {/* Contact Field */}
                <div>
                  <Input
                    type="text"
                    placeholder="WhatsApp or Email"
                    {...register("contact")}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.contact && <p className="mt-1 text-sm text-destructive">{errors.contact.message}</p>}
                </div>

                {/* Service Dropdown */}
                <div>
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
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
                    )}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Textarea
                    placeholder="Describe what you need — don't worry about being too technical or too vague. We'll figure it out together."
                    {...register("message")}
                    rows={5}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {status === "success" && (
                  <p className="flex items-center justify-center gap-2 text-sm text-primary">
                    <CheckCircle className="w-4 h-4" />
                    Message sent. We'll reach out within a few hours during business hours PKT.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    {serverError || "Something went wrong."} You can also reach us on WhatsApp.
                  </p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  Your message goes straight to the founders. We don't spam.
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
