/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-purple': {
          DEFAULT: '#6000E5',
          100: '#F8F5FF'
        },
        'secondary-orange': '#f79761',
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.03)',
          100: 'rgba(59,60,152,0.02)'
        },
        grey: '#7A7488'
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.webp')"
      }
    }
  },
  plugins: []
};
