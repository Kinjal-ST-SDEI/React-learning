/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' is the default Tailwind font stack
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Or define a custom key
        brand: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}