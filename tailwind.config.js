module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["var(--font-vazirmatn)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
