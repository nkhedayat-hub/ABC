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
        brand: {
          primary: '#3B82F6', // A clean, friendly blue
          secondary: '#F4F1EA', // A light, warm off-white
        },
        wood: {
          light: '#D2B48C', // Tan
          medium: '#A0522D', // Sienna
          dark: '#5C4033',  // Dark brown for text
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
