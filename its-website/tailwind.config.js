/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#191919",
          200: "#181818",
          300: "#121212",
        },
      },
    },
  },
  plugins: [],
};
