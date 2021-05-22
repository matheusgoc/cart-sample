module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'open-sans-regular': ['Open Sans Regular', 'sans-serif']
      },
      colors: {
        blue: {
          'marine': '#1F3162'
        },
        violet: '#81396F'
      },
      backgroundImage: {
        'home-headline': "url('./bg-images/group.png')",
        'check': "url('./bg-images/arrow.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
