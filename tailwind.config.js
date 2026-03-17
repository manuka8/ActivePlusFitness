/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode triggered by 'dark' class
  theme: {
    extend: {
      colors: {
        primary: "#d5a310",
        
        // Light Mode Colors
        light: {
          bg: "#ffffff",
          text: "#111827",
          accent: "#292113",
        },
        
        // Dark Mode Colors
        dark: {
          bg: "#0f172a",
          card: "#1e293b",
          text: "#f8fafc",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
