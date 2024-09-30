import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["class"],
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
      fontFamily: {
        Asap: "Asap",
        Inconsolata: "Inconsolata",
        Maven: "Maven Pro",
      },
      colors: {
        red: "#E3646E",
        purple: "#BB72E9",
        blue: "#3996DB",
        green: "#82BC4F ",
        yellow: "#EABD5F",
        "gray-100": "#0D0E11",
        "gray-200": "#16181D",
        "gray-300": "#292C34",
        "gray-400": "#878EA1",
        "gray-500": "#C0C4CE",
        "gray-600": "#E2E4E9",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".text-shadow-lg": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        },
      });
    },
  ],
} satisfies Config;

export default config;
