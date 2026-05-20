/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['Orbitron', 'sans-serif'],
        digital: ['Share Tech Mono', 'monospace'],
        hologram: ['Rajdhani', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
