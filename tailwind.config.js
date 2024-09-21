/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["forest", "dark", "sunset", "cupcake","synthwave","forest","night","lofi","pastel"],
    // darkTheme: "dark",
  },
  
}