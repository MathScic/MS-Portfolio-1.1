// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // couvre les deux structures (avec/sans src) + MDX
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Empêche la purge de supprimer tes utilitaires "arbitrary"
  safelist: [
    { pattern: /\[grid-template-columns:.*\]/ },
    { pattern: /\[aspect-ratio:.*\]/ },
    { pattern: /\[display:-webkit-box\]/ },
    { pattern: /\[-webkit-line-clamp:.*\]/ },
    { pattern: /\[-webkit-box-orient:.*\]/ },
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

  // Optionnel mais pratique si tu utilises `line-clamp-2` etc.
  // npm i -D @tailwindcss/line-clamp
  plugins: [require("@tailwindcss/line-clamp")],
};
