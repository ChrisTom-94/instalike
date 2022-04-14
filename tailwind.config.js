module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      fontFamily: {
        display: "Caveat",
      },
      colors: {
        acquamarine: "#20E8AC",
        "acquamarine-light": "#8EE8CD",
        "acquamarine-ultralight": "#B7F7E4",
        "paradise-pink": "#F52A67",
        "duke-blue": "#220694",
        jet: "#3E3E3E",
      },
      rotate: {
        30: "30deg",
      },
    },
  },
  safelist: ["bg-paradise-pink", "bg-acquamarine", "bg-duke-blue"],
  plugins: [],
};
