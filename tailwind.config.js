/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F50C1",
      },
    },
  },
  plugins: [],
};
