/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'artisan-bg': '#FFFDF9', 
        'artisan-text': '#2C2724', 
        'artisan-primary': '#D97706', 
        'artisan-green': '#4D7C0F', 
        'artisan-surface': '#F4EFE6', 
      },
      fontFamily: {
        'serif': ['"DM Serif Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
