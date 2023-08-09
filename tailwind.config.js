/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index-html', './src/**/*.{vue,ts,tsx,js,jsx}', './formkit.config.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

