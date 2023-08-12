/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#1B3764",
        btnBg: "#3949AB",
      },

      fontFamily: {
        rowdies: ["Rowdies", "Ubuntu", "cursive"],
      },
    },
  },
  plugins: [],
};
