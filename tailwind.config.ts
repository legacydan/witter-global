import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D3A",
          50: "#E6EAED",
          100: "#CCD4DB",
          200: "#99A9B7",
          300: "#667E93",
          400: "#33536F",
          500: "#0A1F44", // Deep rich navy
          600: "#081936",
          700: "#061329",
          800: "#040C1B",
          900: "#02060E",
          950: "#010307",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FDF9EE",
          100: "#FAF3DD",
          200: "#F5E8BB",
          300: "#EFDC99",
          400: "#EAD177",
          500: "#D4AF37", // Elegant metallic gold
          600: "#B8924A",
          700: "#80661A",
          800: "#554411",
          900: "#2B2209",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          50: "#FFFFFF",
          100: "#FAF8F5",
          200: "#F0EBE3",
          300: "#E5DDD1",
          400: "#D5CABF",
        },
        slate: {
          750: "#2D3A4A",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-sm": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["2.25rem", { lineHeight: "1.2" }],
        "heading": ["1.75rem", { lineHeight: "1.3" }],
        "heading-sm": ["1.375rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      maxWidth: {
        "content": "72rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.7s ease-out forwards",
        "fade-in-right": "fadeInRight 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
