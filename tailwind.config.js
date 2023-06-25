/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Josefin Sans"],
        secondary: ["Urbanist"],
      },
      colors: {
        primary: "#BB4430",
        secondary: "#F3DFA2",
        accent: "#7EBDC2",
        dark: "#231F20",
        light: "#EFE6DD",
      },
    },
  },
  plugins: [],
};
