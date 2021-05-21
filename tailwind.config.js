module.exports = {
  purge: ["./app/**/*.html.erb", "./app/javascript/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
        'timer': ['Montserrat', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
