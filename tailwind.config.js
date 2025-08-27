/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-dark-red': '#B20710',
        'netflix-black': '#000000',
        'netflix-dark-gray': '#141414',
        'netflix-medium-gray': '#2F2F2F',
        'netflix-light-gray': '#B3B3B3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}