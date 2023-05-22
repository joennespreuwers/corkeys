/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      'sourcecodepro': ['Source Code Pro', 'monospace']
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
    },
  },
  plugins: [],
}

