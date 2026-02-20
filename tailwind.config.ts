import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#00001F",
        foreground: "#F2F2F2",

        card: "#0A0A2E",        // slightly lighter than background
        border: "#141446",
        input: "#141446",
        ring: "#10B77F",

        primary: {
          DEFAULT: "#10B77F",
          foreground: "#00001F",
        },

        secondary: {
          DEFAULT: "#0A0A2E",
          foreground: "#F2F2F2",
        },

        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#F2F2F2",
        },

        muted: {
          DEFAULT: "#0A0A2E",
          foreground: "#BFC4CC",
        },

        accent: {
          DEFAULT: "#10B77F",
          foreground: "#00001F",
        },

        popover: {
          DEFAULT: "#0A0A2E",
          foreground: "#F2F2F2",
        },

        sidebar: {
          DEFAULT: "#00001F",
          foreground: "#F2F2F2",
          primary: "#10B77F",
          "primary-foreground": "#00001F",
          accent: "#0A0A2E",
          "accent-foreground": "#F2F2F2",
          border: "#141446",
          ring: "#10B77F",
        },
      },

      fontFamily: {
        heading: ["Tektur", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        body: ["Lexend", "sans-serif"],
      },

      borderRadius: {
        lg: "0.75rem",
        md: "0.6rem",
        sm: "0.45rem",
      },

      boxShadow: {
        glow: "0 0 20px rgba(16,183,127,0.4), 0 0 40px rgba(16,183,127,0.2)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
