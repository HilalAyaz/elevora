/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode toggle with "dark" class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008F73",
        secondary: "#26B1A3",
        background: "#ffffff",
        foreground: "#171717",
      },
    },
  },
  plugins: [],
};
