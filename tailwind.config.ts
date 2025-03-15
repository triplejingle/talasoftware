import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('tailwindcss-line-length')({
    widths: {
      'xs': '18em', // 300px at 1rem
      'sm': '30em',
      'md': '35em',
      'lg': '40em',
      'xl': '50em', // 800px at 1rem
    },variants:[]
  })],
};
export default config;
