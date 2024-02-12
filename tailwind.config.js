/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        MATTERS : ["Matter SQ Regular", "sans-serif"],
        CREATO : ["Creato Display", "sans-serif"],
      }
    },
  },
  plugins: [],
}

