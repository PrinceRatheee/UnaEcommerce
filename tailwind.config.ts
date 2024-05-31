import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald:['Oswald', 'sans-serif'],
        anton:['Anton','sans-serif'],
        outfit:['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'bt': '0px 0px 5px 1px rgba(0, 0,0,0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
