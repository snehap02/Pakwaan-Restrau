/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1208': '1208px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

