/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkest: '',
      darker: '',
      dark: '',
      lightest: '',
      lighter: '',
      light: '',
      offLight: '',
      primary: '',
      primaryLight: '',
      primaryDark: '',
      secondary: '',
      secondaryLight: '',
      secondaryDark: '',
      accent: '',
      error: '',
      warning: '',
      success: '',
      transparent: 'transparent'
    },
    extend: {
      animation: {},
      keyframes: {}
    }
  },
  plugins: [],
};
