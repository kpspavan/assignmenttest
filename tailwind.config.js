/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purpel":"#F0F8FF",
        'light-white':'rgba(255,255,255,0.28)'
      }
    },
  },
  plugins: [],
}