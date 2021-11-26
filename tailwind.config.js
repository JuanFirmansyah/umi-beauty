module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "dog-img": "url('/banner.jpg')",
        "bg-1": "url('/bg1.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
