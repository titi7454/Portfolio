/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#64485C",
        "purple-light": "#cfa3c3",
        "red-light": "#501B1D",
        "red-dark": "#2E1114",
        "gray-dark": "#ADADAD",
        "pink-light": "#f5dcdf",
        "pink-dark": "#cfb8bb",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
