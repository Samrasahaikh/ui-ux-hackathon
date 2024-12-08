import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
      fontFamily: {
        integral: ['Integral CF', 'sans-serif'], // Add your custom font
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
