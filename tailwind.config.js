module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/images/beauty-package.jpg')",
        'bg-2': "url('/bg1.jpeg')",
      },
      fontFamily: {
        body: ['Josefin Sans', 'sans-serif'],
        body1: ['Marcellus', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
