/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Arial'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'Arial'],
      },
      colors: {
        'brand-yellow': '#d4af37',      // softer gold-yellow
        'brand-yellow-dark': '#b38b2e', // darker variant for accents
      },
    },
  },
  plugins: [],
}
