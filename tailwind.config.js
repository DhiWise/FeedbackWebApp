module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_700: "#424c5d",
        gray_301: "#dce0e2",
        black_900: "#0e1012",
        teal_900: "#003059",
        light_blue_500: "#00a3ff",
        deep_purple_A200: "#7b68ee",
        white_A700: "#ffffff",
        gray_300: "#e4e6e7",
        gray_100: "#f2f5f6",
      },
      borderRadius: { radius4: "4px", radius95: "9.5px" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
