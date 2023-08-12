/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#1B3764",
        btnBg: "#3949AB",
        contentBg: "#F5F6F8",
        btnYellow: "#FFCA42",
        textBlue: "#374151",
      },

      fontFamily: {
        rowdies: ["Rowdies", "Ubuntu", "cursive"],
      },
    },
  },
  plugins: [],
};
