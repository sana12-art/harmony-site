/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ← syntaxe complète
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        secondary: {
          DEFAULT: '#4B5563',
          light: '#6B7280',
        },
      },
    },
  },
  plugins: [],
};
