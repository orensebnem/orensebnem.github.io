const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/dunes.jpg')",
        garett: "url('/garett.png')",
      }),
      fontFamily: {
        handle: ['handlee', ...defaultTheme.fontFamily.sans],
        gochiHand: ['Gochi Hand', ...defaultTheme.fontFamily.sans],
        grotesque: ['"Darker Grotesque"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xs': '320px',
      's': '475px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
