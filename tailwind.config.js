module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'md': '3rem',
          'lg': '4rem',
          'xl': '5rem',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}