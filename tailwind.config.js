module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        TrainOne: ["Train One", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        extra: ".50em",
      },
      animation: {
        translateright: "translateright 1.5s ease-in-out infinite",
      },
      keyframes: {
        translateright: {
          "0%,100%": {
            "margin-left": "0px",
          },
          "50%": {
            "margin-left": "20px",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [],
  darkMode: "class",
};
