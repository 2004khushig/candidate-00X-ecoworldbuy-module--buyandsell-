module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        accent: "#2196F3",
        neutral: {
          100: "#f5f5f5",
          200: "#e0e0e0",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};
