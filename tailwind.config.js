/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'italiana': ['Italiana', 'sans-serif'],
      'cormorant': ['Cormorant', 'sans-serif'],
      'qwitcher-grypen': ['Qwitcher Grypen', 'cursive'],
      'great-vibes': ['Great Vibes', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
