/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artisan-krem': '#F5F5DC', 
        'artisan-green': '#27AE60', 
        'artisan-brown': '#5D4037', 
        'artisan-slate': '#2C3E50',
      },
      fontFamily: {
        'serif': ['"DM Serif Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
