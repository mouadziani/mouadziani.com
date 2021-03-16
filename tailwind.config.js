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
        dark: '#0a192f',
        'dark-light': '#0c2242',
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
