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
        primary: "#5e548e",
        secondary: "#9f86c0",
        accent: "#e0b1cb",
        dark: "#231942",
        light: "#be95c4",
      },
    },
  },
  plugins: [],
};
