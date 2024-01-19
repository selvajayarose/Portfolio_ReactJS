/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ccd6f6",
        secondary: "#939ab1",
        green: "#64ffda",
        lightGrey: "#0EA5E90D",
      },
      screens: {
        'md': '1024px',
      },
    },
  },
  plugins: [],
};
