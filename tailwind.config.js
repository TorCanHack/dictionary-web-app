/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customGray: '#1f1f1f',
        customGray2: '#757575'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        inconsolata: ['Inconsolata', 'monospace'],
      }, 
      fontSize: {
        32: '2rem'

      },
      height: {
        75: '4.688rem'
      },
      inset: {
        21: '5.4rem',
        42: '10.5rem'
      },
      padding: {
        82: '22rem'
      },
      width: {
        75: '4.688rem',
        768: '48rem',
        '4.5/6': '85%'
      }
    },
  },
  plugins: [],
}

