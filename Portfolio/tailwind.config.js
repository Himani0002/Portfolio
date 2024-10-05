/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
      },
      boxShadow: {
        black: "4px 4px 0 #000", // Use spaces instead of underscores
        white: "4px 4px 0 #fff", // Use spaces instead of underscores
      },
    },
  },
};
