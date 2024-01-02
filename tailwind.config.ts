const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/*/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    colors: {
      'main': '#903D10',
      'second': '#114683'
    },
    screens: {
      '3xl': { 'max': '1750px' },
      '2xl': { 'max': '1600px' },
      'xl': { 'max': '1380px' },
      'lg': { 'max': '1170px' },
      'md': { 'max': '1050px' },
      'smd': { 'max': '800px' },
      'sm': { 'max': '456px' }
    },
    extend: {},
  },
  plugins: [],
});