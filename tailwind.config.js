/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-poppies)',
    },

    colors: {
      background: '#0a192f',
      text: '#a8b2d1',
      title: '#ccd6f6',
      primary: '#64ffda',
      white: '#e6f1ff',
      shape: '#112240',
      dark: '#020c1b',
      light: '#233554',
      orange: '#ffd364',
      red: '#ff6464',
    },

    extend: {
      fontFamily: {
        fira: 'var(--font-fira-code)',
      },

      boxShadow: {
        focus: '0px 0px 0px 2px rgba(#64ffda, 0.2)',
        shadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [],
}
