/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purpel":"#F0F8FF",
        'light-white':'rgba(255,255,255,0.28)',
        "dark-blue":"#004F95",
        "dark-red":"#E12C33",
        "dark-cyan":"#3DA5D9",
        "dark-orange":"#EA7317",
        "dark-yellow":"#FEC601"
      }
    },
  },
  plugins: [],
}