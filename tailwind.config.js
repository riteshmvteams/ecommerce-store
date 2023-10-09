/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: {
          300: "#181920",
          200: "#272935",
          100: "#414558",
        },
        accent: {
          300: "#FF57B6",
          200: "#FF7AC6",
        },
      },
    },
  },
  plugins: [],
};
