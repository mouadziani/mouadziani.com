const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#0d2a42',
        'dark-light': '#14314b',
      },
      spacing: {
        0.5: '4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
