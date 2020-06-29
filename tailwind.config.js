module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'gray-50': '#fafafa',
        'gray-950': '#121212',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'Verdana', 'Geneva', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
};
