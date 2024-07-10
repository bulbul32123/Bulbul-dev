/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '780px',
      'xmd': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1580px',
    },
    extend: {
      colors: {
        'light': '#F5F5F5',
        'dark': '#151B22',
        'dark2': 'black',
        'green': '#31CF7E',
        'gray-light': '#ced3d9',
        'lightgray': '#464646',
        'nave-blue': '#07122B'
      },
    },
  },
  plugins: [],
}
