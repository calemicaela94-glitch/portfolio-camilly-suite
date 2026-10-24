/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fundo e superfícies (dark mode elegante)
        ink: {
          950: "#07060d",
          900: "#0b0a12",
          850: "#0f0d18",
          800: "#14111f",
          700: "#1c1829",
          600: "#262135",
        },
        // Cores das "pétalas" — suaves, usadas como acentos
        petal: {
          rose: "#f7a8c4",
          lilac: "#b6a4f5",
          mint: "#8fe3c8",
          amber: "#f9c982",
          sky: "#8ec8f6",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgb(182 164 245 / 0.45)",
        card: "0 24px 60px -30px rgb(0 0 0 / 0.9)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
