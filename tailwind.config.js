/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#655445",
        "blackV": "#3B3B3B",
        "black-border": "#2B2B2B"
      },
      fontFamily: {
        NewYork: ['newyork', 'sans-serif'],
        DIN: ['din', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
