/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        primary: "#F1F5F9",
        navbar: "#E0F2FE",
        secondary: "#003249",
        tertiary: "#9AD1D4",
        babyblue: "#3ea1fd",

        // Blues
        "blue-110": "#80CED7",
        "blue-300": "#007EA7",

        // Dark Mode Colors
        primarydark: "#050816",
        carddark: "#1a2038",
        secondarydark: "#aaa6c3",
        tertiarydark: "#151030",
        black100: "#100d25",
        black200: "#090325",
        white100: "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "flowerstar-pattern": "url('/src/assets/flowerstar.png')",
      //   "flowerstardark-pattern": "url('/src/assets/flowerstardark.png')",
      // },
    },
  },
  plugins: [],
};
