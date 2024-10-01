import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradient1: {
          start: '#FF6384',
          end: '#36D1DC',
        },
        gradient2: {
          start: '#FFD700',
          end: '#009688',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
