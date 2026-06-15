import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import {
  homeContactSchema,
  type HomeContactValues,
  submitToWeb3Forms,
} from "@/lib/contact";

const WHATSAPP_NUMBER = "923390053646";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HomeContactValues>({
    resolver: zodResolver(homeContactSchema),
    defaultValues: { name: "", email: "", message: "", botcheck: "" },
  });

  const onSubmit = async (values: HomeContactValues) => {
    setServerError("");
    // Honeypot tripped: silently pretend success, send nothing.
    if (values.botcheck) {
      setStatus("success");
      reset();
      return;
    }
    try {
      await submitToWeb3Forms({
        subject: "New ByteCrew enquiry (homepage form)",
        from_name: "ByteCrew Website",
        name: values.name,
        email: values.email,
        replyto: values.email,
        message: values.message,
      });
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
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

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 339-0053646",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: "bytecrew.team@gmail.com",
      href: "mailto:bytecrew.team@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-secondary/20" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="text-primary">Something Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <button
                        type="button"
                        onClick={() => info.href && openLink(info.href)}
                        className="font-medium hover:text-primary transition-colors text-left bg-transparent border-0 p-0 cursor-pointer"
                      >
                        {info.value}
                      </button>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              We typically respond within 24 hours.
            </motion.p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-2xl p-8 space-y-6" noValidate>
              {/* Honeypot (hidden from users) */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                {...register("botcheck")}
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="w-4 h-4" />
                  Thanks! Your message has been sent. We'll reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  {serverError || "Something went wrong."} You can also reach us on WhatsApp.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
