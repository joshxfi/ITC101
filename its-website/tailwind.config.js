/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: '#313131',
          200: '#191919',
          300: '#181818',
          400: '#121212',
        },
      },
    },
  },
  plugins: [],
};
