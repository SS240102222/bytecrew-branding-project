import { motion } from "framer-motion";
import { User, MessageCircle, MapPin, Shield } from "lucide-react";

const WhyByteCrew = () => {
  const comparisonRows = [
    {
      feature: "Payment Terms",
      others: "Advance required",
      bytecrw: "0% upfront",
    },
    {
      feature: "Build Quality",
      others: "Basic delivery",
      bytecrw: "Optimized builds",
    },
    {
      feature: "After Delivery",
      others: "Gone after handoff",
      bytecrw: "30-day support",
    },
    {
      feature: "Overhead",
      others: "Expensive agencies",
      bytecrw: "Cost-efficient startup",
    },
  ];

  const cards = [
    {
      icon: User,
      title: "Founder-Led Projects",
      body: "Every project is handled directly by the founders — not outsourced, not delegated to juniors.",
    },
    {
      icon: MessageCircle,
      title: "Plain Language, Always",
      body: "We explain every decision in simple terms. No tech jargon, no confusion.",
    },
    {
      icon: MapPin,
      title: "Lahore-Based, Always Available",
      body: "We're local. Quick responses, real availability, no timezone headaches.",
    },
    {
      icon: Shield,
      title: "You Pay Only When Happy",
      body: "No contracts. No pressure. We earn your payment by earning your satisfaction.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-28 relative bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-primary">ByteCrew?</span>
          </h2>
        </motion.div>

        {/* Part 1: Comparison Table */}
        <motion.div
          className="mb-16 overflow-x-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">
                  Others
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                  ByteCrew
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  variants={itemVariants}
                  className="border-b border-border/30 hover:bg-card/30 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {row.others}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-primary bg-primary/5 rounded">
                    {row.bytecrw}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Part 2: Four Cards in 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border/50 bg-card/20 hover:border-primary/40 hover:bg-card/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyByteCrew;
