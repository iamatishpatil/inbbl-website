/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        black: '#0A0A0C',
        inbbl: {
          purple: '#7C3AED',
          deep: '#6D28D9',
          light: '#EDE9FE',
          cyan: '#06B6D4',
          rose: '#F43F5E',
          amber: '#F59E0B',
          emerald: '#10B981',
        }
      }
    },
  },
  plugins: [],
}

