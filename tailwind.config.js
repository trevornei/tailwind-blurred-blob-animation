/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        blob: "blob 6s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(-10px, 13px) scale(1.3)"
          },
          "45%": {
            transform: "translate(-5px, -10px) scale(1.25)"
          },
          "66%": {
            transform: "translate(5px, -9px) scale(.95)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
      },
    },
  },
  plugins: [],
}

