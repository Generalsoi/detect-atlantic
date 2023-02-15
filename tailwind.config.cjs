/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexMono: ["IBM Plex Mono", "monospace"],
      },
      keyframes: {
        swipe: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        swipe: " swipe  10s linear infinite backwards",
      },
    },
  },
  plugins: [],
};
