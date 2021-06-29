const colorTokens = require('./src/design/tokens/colors')

module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },

      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },

    fontFamily: {
      heading: '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      body: '"Nunito", Frutiger, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },

    extend: {
      colors: {
        ...colorTokens,
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
