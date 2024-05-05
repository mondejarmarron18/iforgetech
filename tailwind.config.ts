import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hammering: {
          "0%": { transform: "rotate(0deg)" },
          "12.5%": { transform: "rotate(10deg)" },
          "25%": { transform: "rotate(20deg)" },
          "37.5%": { transform: "rotate(30deg)" },
          "50%": { transform: "rotate(0deg)" },
          "52.5%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(-20deg)" },
          "87.5%": { transform: "rotate(-30deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        hammering: "hammering 1s ease-in-out infinite",
      },
      rotate: {
        "x-180": "180deg",
        "y-180": "180deg",
      },
    },
  },
  plugins: [],
};
export default config;
