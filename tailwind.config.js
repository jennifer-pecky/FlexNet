/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '640px',

        'laptop': '1453px',

        'desktop': '1280px'
      },
    },
  },
  plugins: [],
}
