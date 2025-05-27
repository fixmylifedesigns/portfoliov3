/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'primary': {
          DEFAULT: '#06b6d4', // cyan-500
          '50': '#ecfeff',
          '100': '#cffafe',
          '200': '#a5f3fc',
          '300': '#67e8f9',
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
          '700': '#0e7490',
          '800': '#155e75',
          '900': '#164e63',
        },
        'accent': {
          DEFAULT: '#E76F51',
          '50': '#fdf2f0',
          '100': '#fbe4de',
          '200': '#f7c9bd',
          '300': '#f2a993',
          '400': '#ed8a6a',
          '500': '#E76F51',
          '600': '#d45236',
          '700': '#b1391e',
          '800': '#93301c',
          '900': '#7a2e1d',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};