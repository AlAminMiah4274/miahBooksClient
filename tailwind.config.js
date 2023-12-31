/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "valentine"]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

