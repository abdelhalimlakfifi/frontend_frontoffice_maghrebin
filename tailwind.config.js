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
    screens : {
      'xsm' : '320px',
      'xs' : '375px',
      'sm' : '425px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1440px',
      '2xl' : '1700px'
    },
    extend: {
      textUnderlineOffset: {
        3: '3px',
      },
      backgroundImage: {
        "userProfile": "url(src/assets/MoroccanTexture-01.svg)",
        "footer" : "url(src/assets/MoroccanTexture-Footer-01.svg)"
      },

      colors: {
        "custom-purple": "#655445",
        "blackA": "#2A2A2A",
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
