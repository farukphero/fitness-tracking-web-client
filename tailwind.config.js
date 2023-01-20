/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: "#CB40F5",

          secondary: "#41e0ab",

          accent: "#5C53FE",

          neutral: "#2D1F38",

          "base-100": "#FFFFFF",

          info: "#3894B3",

          success: "#1A0939",

          warning: "#6353FC",

           baset: "#9C0EFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
