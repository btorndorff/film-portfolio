import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wiggle: "wiggle 0.5s infinite",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(var(--initial-deg))" },
          "25%": { transform: "rotate(var(--initial-deg)-3deg)" },
          "50%": { transform: "rotate(var(--initial-deg)+3deg)" },
          "75%": { transform: "rotate(var(--initial-deg)-3deg)" },
          "100%": { transform: "rotate(var(--initial-deg))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
