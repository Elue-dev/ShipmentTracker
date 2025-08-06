/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F50C1",
          200: "#4169E1",
          300: "#D9E6FD",
          400: "#6E91EC",
        },
        gray: {
          100: "#757281",
        },
        danger: {
          bg: "#FEE3D4",
          text: "#D12030",
        },
        success: {
          bg: "#E3FAD6",
          solid: "#25D366",
          text: "#208D28",
        },
        cancelled: {
          bg: "#F4F2F8",
          text: "#58536E",
        },
        warning: {
          bg: "#FFF3D5",
          text: "#DB7E21",
        },
        disabled: {
          bg: "#EAE7F2",
          text: "#A8A2BC",
          text2: "#A7A3B3",
        },
      },
      fontFamily: {
        Regular: "Regular",
        Medium: "Medium",
        Bold: "Bold",
      },
    },
  },
  plugins: [],
};
