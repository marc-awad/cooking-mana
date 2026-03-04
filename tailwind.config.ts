import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#fdf7f4",
          100: "#fbeee8",
          200: "#f5d7ca",
          300: "#edb6a0",
          400: "#e08b6b",
          500: "#c96a45",
          600: "#aa4f30",
          700: "#8a3d27",
          800: "#6f3323",
          900: "#5c2c21",
        },
        accent: {
          50: "#fff9e8",
          100: "#fff1c2",
          200: "#ffe38a",
          300: "#ffd24d",
          400: "#f2bb1d",
          500: "#d59e10",
          600: "#ad7c0d",
          700: "#8a610f",
          800: "#725013",
          900: "#624514",
        },
        neutral: {
          50: "#f8f8f7",
          100: "#efefed",
          200: "#ddddda",
          300: "#c4c4be",
          400: "#9d9d95",
          500: "#7f7f77",
          600: "#66665f",
          700: "#53534e",
          800: "#3b3b37",
          900: "#262624",
        },
        success: "#2e7d32",
        warning: "#b26a00",
        danger: "#b42318",
        info: "#1768ac",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)",
        elevated: "0 8px 30px rgba(0,0,0,0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
