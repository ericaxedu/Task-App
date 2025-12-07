/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        'pastel-pink': '#ffd6e7',
        'pastel-purple': '#e8d9ff',
        'accent-strong': '#c084fc',
        'muted-gray': '#7a6b86',
      },
      borderRadius: {
        'extra': '1.25rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(120,80,140,0.08)',
      }
    },
  },
  plugins: [],
};
