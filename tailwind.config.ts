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
        darkSlateGrey: "var(--darkSlateGrey)",
        charcoalGrey: "var(--charcoalGrey)",
        grey: "var(--grey)",
        white:"var(--white)",
        tomato: "var(--tomato)",

      },
    },
  },
  plugins: [],
};
export default config;
