import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: {
          DEFAULT: "#2563EB",
          50: "#eff5ff",
          100: "#dbe7fe",
          200: "#bfd5fe",
          300: "#93b9fd",
          400: "#6092fa",
          500: "#2563EB",
          600: "#1f57d6",
          700: "#1c45b0",
          800: "#1d3c90",
          900: "#1d3674",
          950: "#162247",
        },
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        sky: {
          brand: "#38BDF8",
        },
        ink: "#1E293B",
        mist: "#E2E8F0",
        cloud: "#F8FAFC",
        accent: "#CBD5E1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(37, 99, 235, 0.45)",
        "glow-sky": "0 0 60px -15px rgba(56, 189, 248, 0.5)",
        soft: "0 10px 40px -15px rgba(15, 23, 42, 0.15)",
        card: "0 20px 60px -25px rgba(15, 23, 42, 0.25)",
        "card-hover": "0 30px 80px -25px rgba(37, 99, 235, 0.35)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "radial-blue":
          "radial-gradient(closest-side, rgba(37,99,235,0.25), transparent)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
