/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2fc',
          100: '#cce5fa',
          200: '#99cbf5',
          300: '#66b0ef',
          400: '#3396ea',
          500: '#00203f', // Your primary dark blue color
          600: '#001a33',
          700: '#001426',
          800: '#000f1a',
          900: '#000a0d',
        },
        secondary: {
          50: '#f7fdf9',
          100: '#effbf4',
          200: '#dffbefe',
          300: '#cfebea',
          400: '#bfeae5',
          500: '#adefd1', // Your secondary light green color
          600: '#8cd9b3',
          700: '#6bc394',
          800: '#4aaf75',
          900: '#2a9956',
        }
      },
      fontFamily: {
        sans: ['var(--font-sansita)', 'cursive', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        chewy: ['var(--font-sansita)', 'cursive'],
      },
    },
  },
  plugins: [],
}