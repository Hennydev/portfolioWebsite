/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
  },
  darkMode: "class",
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require("taos/plugin")],
};
