/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981',
      },
    },
  },
  plugins: [],
}