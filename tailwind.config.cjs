const { default: daisyui } = require("daisyui")

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        forest: "#154734",
        miner: "#007A33",
        lima: "#72BF44",
        kiwi: "#BFD730",
      },
    },
  },

  plugins: [require("daisyui")],
}

module.exports = config
