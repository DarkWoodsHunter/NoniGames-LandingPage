/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lilita+One': ['Lilita+One', "sans-serif"],
        'Bahnschrift': ["Bahnschrift", "sans-sefif"],
      }
    },
  },
  plugins: [],
}