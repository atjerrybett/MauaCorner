/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF0F3',
          100: '#FFE0E8',
          200: '#FFB6C1',
          300: '#FF91A8',
          400: '#FF69B4',
          500: '#FF1493',
          600: '#C71585',
          700: '#9B1060',
          800: '#6F0B43',
          900: '#430726',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CC6E',
          dark: '#A68B2A',
        },
        sage: {
          50: '#F2F7F2',
          100: '#E0EDE0',
          200: '#C1DBC1',
          300: '#97C497',
          400: '#6DAD6D',
          500: '#4A8F4A',
        },
        blush: '#FFF5F7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
