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
          50: '#f5f8ff',
          100: '#eef3ff', 
          200: '#d9e4ff',
          300: '#a9c2ff',
          400: '#7a9fff',
          500: '#3366ff', // Primary brand color
          600: '#2952cc',
          700: '#1f3d99',
          800: '#142966',
          900: '#0a1433',
          
        },
        accent: {
          light: '#ffe5cc',
          DEFAULT: '#ff9e44',
          dark: '#cc6a1b',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

