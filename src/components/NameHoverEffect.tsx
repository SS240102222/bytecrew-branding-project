import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NameHoverEffectProps {
  name: string;
  className?: string;
}

const NameHoverEffect = ({ name, className = "" }: NameHoverEffectProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setHoveredIndex(null);
  }, []);

  const handleLetterHover = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  return (
    <motion.span
      className={`inline-flex ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          onMouseEnter={() => handleLetterHover(index)}
          animate={{
            y: hoveredIndex === index ? -8 : 0,
            scale: hoveredIndex === index ? 1.15 : 1,
            color: hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--foreground))",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          style={{
            textShadow: hoveredIndex === index 
              ? "0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)" 
              : "none",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      <AnimatePresence>
        {isHovering && (
          <motion.span
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.span>
  );
};

export default NameHoverEffect;
