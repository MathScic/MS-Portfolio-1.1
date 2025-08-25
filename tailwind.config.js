// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F9F9F9",
        text: "#222222",
        primary: "#3A506B",
        accent: "#FF9966",
        border: "#E0E0E0",
        muted: "#F2F4F7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // ou Geist, etc.
      },
    },
  },
  plugins: [],
};
