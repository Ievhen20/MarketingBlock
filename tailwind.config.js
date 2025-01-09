import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import plugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        sans1: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'primary-color': '#6245E7',
        'scroll-thumb': '#6B7280',
        'scroll-thumb-hover': '#4B5563',
        'custom-outline': '#E7D8FD',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'opacity': 'opacity',
        'transform': 'transform',
        'custom-green': '#38b2ac',
      },
      transitionDuration: {
        '200': '200ms',
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        'slide-out': 'slide-out 1s ease-out',
      },
      spacing: {
        '144': '36rem', // Custom height (used for the image container)
      },
      opacity: {
        '60': '0.6',
      },
      scale: {
        '105': '1.05',
        '120': '1.2',
      },
      outline: {
        '2': '2px solid',
      },
    },
  },

  plugins: [
    forms
  ],
};
