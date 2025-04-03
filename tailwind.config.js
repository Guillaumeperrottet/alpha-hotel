/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vous pouvez définir ici votre palette de couleurs personnalisée
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Exemple de police personnalisée
      },
    },
  },
  plugins: [],
};
