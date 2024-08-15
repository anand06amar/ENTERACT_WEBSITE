/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jonti: ['Jonti One', 'sans-serif'],
      },
      colors:{
        blue:"#028393",
        'light-aqua-blue': '#C5E2E6',
        'navy-blue': '#001f3f'
      }
    },
  },
  plugins: [],
}

