/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFF0F5',
          DEFAULT: '#F8C8DC',
          dark: '#E8A0B8',
          deep: '#ED5B82',
        },
        yellow: {
          light: '#FFF9E6',
          DEFAULT: '#FFD966',
          dark: '#F5B041',
        },
        'blue-soft': '#A8D8EA',
        cream: '#FFFDF9',
        peach: '#FFE5D9',
        'text-dark': '#3D3D3D',
        'text-muted': '#7A7A7A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
        handwritten: ['"Patrick Hand"', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
