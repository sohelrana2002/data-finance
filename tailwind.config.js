/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nlg': '1240px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

