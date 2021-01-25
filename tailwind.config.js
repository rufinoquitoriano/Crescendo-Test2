const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      teal: colors.teal,
      cyan: colors.cyan,
      indigo: colors.indigo,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      white: colors.white,
      trueGray: colors.trueGray,
    },
    extend: {
      colors: {
        blue: {
          550: "#001254",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
