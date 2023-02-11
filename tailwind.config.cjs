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
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
      animation: {
        swipe: " swipe linear 200ms infinite backwards",
      },
    },
  },
  plugins: [],
};
