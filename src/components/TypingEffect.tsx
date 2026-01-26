import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingEffect = ({ text, speed = 100, delay = 500, className = "" }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, text, speed, isTyping]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typing-cursor" />
    </span>
  );
};

export default TypingEffect;
