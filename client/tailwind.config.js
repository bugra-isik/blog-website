/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#091820",
        c2: "#0b1d26",
        c3: "#fbd784",
      },
      fontFamily: {
        libre: '"Libre Baskerville", serif',
      },
    },
  },
  plugins: [],
}
